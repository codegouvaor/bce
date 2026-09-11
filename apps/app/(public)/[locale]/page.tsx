import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { homeContent } from "@/lib/home-content";
import {
  ArticleCard,
  CtaButtonsGroup,
  LinkTile,
} from "@/components/public/content/ads-fragments";
import { sectionPaths } from "@/lib/site-structure";

const HOME_PATH = "/";
const DECISIONS_PATH = `${sectionPaths.politiqueMonetaire}/decisions`;
const PUBLICATIONS_PATH = `${sectionPaths.politiqueMonetaire}/publications`;
const RATES_PATH = `${sectionPaths.politiqueMonetaire}/taux-directeurs`;

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);

  const tHome = await getTranslations({ locale, namespace: "home" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });

  return {
    title: { absolute: tHome("metaTitle") },
    description: tMeta("description"),
    ...localizedAlternates(locale, HOME_PATH),
  };
}

/* Layout helpers below use the ADS design tokens through `var(--ads-*)` (the
 * single source of tokens — main.css) so light/dark switching and theming stay
 * owned by the Design System. Only the BCA-specific arrangement of these
 * blocks is expressed here, inline, without any local stylesheet. */

const heroContainerStyle: CSSProperties = {
  maxWidth: "52rem",
  marginInline: "auto",
  textAlign: "center",
};

const teaserCardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  height: "100%",
  padding: "1.25rem",
  background: "var(--ads-color-background)",
  border: "1px solid var(--ads-color-border)",
  borderTop: "3px solid var(--ads-color-primary)",
  textDecoration: "none",
  color: "var(--ads-color-text)",
};

const teaserTagStyle: CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ads-color-primary)",
};

const teaserArrowStyle: CSSProperties = {
  marginTop: "auto",
  alignSelf: "flex-end",
  fontSize: "1rem",
  color: "var(--ads-color-primary)",
};

const figureValueStyle: CSSProperties = {
  display: "block",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  lineHeight: 1.2,
  fontWeight: 700,
};

const figureLabelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.9375rem",
  fontWeight: 600,
};

const decisionValueStyle: CSSProperties = {
  margin: "0 0 0.375rem",
  fontSize: "clamp(2rem, 4vw, 2.75rem)",
  lineHeight: 1.15,
  fontWeight: 700,
};

const decisionMetaStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem 1.5rem",
  margin: "0 0 1.5rem",
  listStyle: "none",
  padding: "0",
};

const decisionMetaItemStyle: CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--ads-color-text-muted)",
};

/**
 * Homepage of the Banque centrale d'Astoria — the institutional front door of
 * the central bank of the Republic.
 *
 * The header allows exploring the bank's missions (seven entries); this page
 * establishes the institution and surfaces what matters most — the monetary
 * stance and the state of the financial system — section after section:
 *
 *   01 Hero                 — who we are, in one sober institutional statement
 *   02 Décision de politique monétaire — the latest monetary decision and the key rate
 *   03 Indicateurs          — the state of money and finance at a glance
 *   04 Missions             — the BCA's responsibilities, each to its section
 *   05 Services de la BCA   — the operational platform, distinct from the editorial site
 *   06 Actualités & publications — institutional publications, kept secondary
 *   07 La Banque centrale   — the institution itself, closing the page
 *
 * Every section is driven by the `homeContent` configuration
 * (lib/home-content.ts) and the message catalogs, so the content can evolve
 * without rewriting the interface. The indicators, the decision and the
 * publications are structural placeholders (fictive figures): they define the
 * interface and mark the seam where the future BCA API plugs in. The six
 * editorial subjects deliberately do not appear here as a second navigation —
 * they belong to the header.
 */
export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tNavPanel = await getTranslations({ locale, namespace: "nav.panel" });

  return (
    <>
      {/* 01 — Hero: institutional statement. Sober by design: the BCA is a
          sovereign institution, not a commercial bank. The monetary stance is
          the first thing a visitor should grasp. */}
      <section className="gov-section" aria-labelledby="home-hero-title">
        <div className="gov-section__container" style={heroContainerStyle}>
          <p className="gov-kicker">{t("hero.kicker")}</p>
          <h1 id="home-hero-title">{t("hero.title")}</h1>
          <p className="gov-lead">{t("hero.lead")}</p>
          <CtaButtonsGroup
            alignment="center"
            buttons={[
              {
                children: t("hero.cta"),
                href: sectionPaths.banqueCentrale,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
        </div>
      </section>

      {/* 02 — Décision de politique monétaire: the most important signal the
          bank emits. It comes right after the hero, before any news. The
          values are placeholders until the BCA API feeds this block. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="decision-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("decision.kicker")}</p>
              <h2 id="decision-title" className="gov-section__title">
                {t("decision.title")}
              </h2>
              <p className="gov-lead">{t("decision.lead")}</p>
            </div>
          </div>
          <div
            style={{
              maxWidth: "72rem",
              padding: "1.75rem",
              background: "var(--ads-color-background)",
              border: "1px solid var(--ads-color-border)",
              borderTop: "3px solid var(--ads-color-primary)",
            }}
          >
            <p style={{ ...teaserTagStyle, margin: "0 0 0.75rem" }}>{t("decision.status")}</p>
            <p style={decisionValueStyle}>{homeContent.decision.rateValue}</p>
            <ul style={decisionMetaStyle} role="list">
              {homeContent.decision.keys.map((key) => (
                <li key={key} style={decisionMetaItemStyle}>
                  <strong style={{ color: "var(--ads-color-text)" }}>
                    {t(`decision.items.${key}.label`)}
                  </strong>{" "}
                  {t(`decision.items.${key}.value`)}
                </li>
              ))}
            </ul>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("decision.cta"),
                  href: DECISIONS_PATH,
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 03 — Indicateurs monétaires et financiers: a synthetic view of the
          monetary and financial system, driven by the indicators config (the
          seam where a future data source plugs in). Values are placeholders. */}
      <section className="gov-section" aria-labelledby="indicators-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("indicators.kicker")}</p>
              <h2 id="indicators-title" className="gov-section__title">
                {t("indicators.title")}
              </h2>
              <p className="gov-lead">{t("indicators.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("indicators.exploreLink"),
                  href: RATES_PATH,
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <ul className="fr-grid-row fr-grid-row--gutters" role="list">
            {homeContent.indicators.map((indicator) => (
              <li key={indicator.key} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <a href={indicator.href} style={teaserCardStyle}>
                  <span style={figureValueStyle}>{indicator.value}</span>
                  <span style={figureLabelStyle}>
                    {t(`indicators.items.${indicator.key}.label`)}
                  </span>
                  <span
                    className="fr-icon-arrow-right-line"
                    aria-hidden="true"
                    style={teaserArrowStyle}
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="fr-text--sm" style={{ color: "var(--ads-color-text-muted)" }}>
            {t("indicators.note")}
          </p>
        </div>
      </section>

      {/* 04 — Missions de la Banque centrale: the BCA's responsibilities, each
          opening its section. Labels reuse the header panel vocabulary so the
          homepage speaks the same language as the navigation. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="missions-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("missions.kicker")}</p>
              <h2 id="missions-title" className="gov-section__title">
                {t("missions.title")}
              </h2>
              <p className="gov-lead">{t("missions.lead")}</p>
            </div>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            {homeContent.missions.map((mission) => (
              <div key={mission.key} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <LinkTile
                  title={tNavPanel(`${mission.section}.title`)}
                  desc={tNavPanel(`${mission.section}.text`)}
                  href={mission.href}
                  iconId="fr-icon-arrow-right-line"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Services de la BCA: the operational platform of the bank (State
          banking, financial institutions, payment systems, data & APIs).
          Distinct from the six editorial subjects: this is an operational
          interface, not a second navigation. */}
      <section className="gov-section" aria-labelledby="services-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("services.kicker")}</p>
              <h2 id="services-title" className="gov-section__title">
                {t("services.title")}
              </h2>
              <p className="gov-lead">{t("services.lead")}</p>
            </div>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            {homeContent.services.map((service) => (
              <div key={service.key} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <LinkTile
                  title={t(`services.items.${service.key}.title`)}
                  desc={t(`services.items.${service.key}.desc`)}
                  href={service.href}
                  iconId={service.iconId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Actualités & publications: one featured, several secondary
          institutional publications. Secondary by design: decisions and
          indicators come first. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="publications-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("publications.kicker")}</p>
              <h2 id="publications-title" className="gov-section__title">
                {t("publications.title")}
              </h2>
              <p className="gov-lead">{t("publications.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("publications.allLink"),
                  href: PUBLICATIONS_PATH,
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-7">
              <ArticleCard
                title={t(homeContent.publications.featured.titleKey)}
                desc={t(homeContent.publications.featured.textKey)}
                tag={t(homeContent.publications.featured.tagKey)}
                date={t(homeContent.publications.featured.dateKey)}
                href={homeContent.publications.featured.href}
                size="large"
              />
            </div>
            <div className="fr-col-12 fr-col-lg-5">
              <ul
                role="list"
                style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gap: "1.5rem" }}
              >
                {homeContent.publications.secondary.map((article) => (
                  <li key={article.href}>
                    <ArticleCard
                      title={t(article.titleKey)}
                      tag={t(article.tagKey)}
                      date={t(article.dateKey)}
                      href={article.href}
                      size="small"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — La Banque centrale: discreet institutional closing, coherent with
          the “La Banque centrale” entry of the header. */}
      <section className="gov-section" aria-labelledby="institution-title">
        <div className="gov-section__container" style={heroContainerStyle}>
          <p className="gov-kicker">{t("institution.kicker")}</p>
          <h2 id="institution-title" className="gov-section__title">
            {t("institution.title")}
          </h2>
          <p
            style={{
              margin: "0 auto 1.5rem",
              maxWidth: "42rem",
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--ads-color-text-muted)",
            }}
          >
            {t("institution.lead")}
          </p>
          <ul
            role="list"
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "1.5rem",
              gap: "0.625rem 1.75rem",
            }}
          >
            {homeContent.institution.map((link) => (
              <li key={link.key}>
                <a href={link.href} style={{ fontWeight: 600, textUnderlineOffset: "0.2em" }}>
                  {t(`institution.links.${link.key}`)}
                  <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}