import type { CSSProperties } from "react";
import type { Metadata } from "next";
import type { FrIconClassName } from "@codegouvaor/react-ads/fr";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { Link } from "@/i18n/navigation";
import { homeContent } from "@/lib/home-content";
import { CtaButtonsGroup, LinkTile } from "@/components/public/content/ads-fragments";
import {
  DataTable,
  ThemeSection,
  cardGridStyle,
  figureLabelStyle,
  figureValueStyle,
  heroContainerStyle,
  iconBlockStyle,
  linkListStyle,
  teaserCardStyle,
  teaserTagStyle,
} from "@/components/public/content/theme-page";

const HOME_PATH = "/";

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

const panelStyle: CSSProperties = {
  maxWidth: "72rem",
  background: "var(--ads-color-border)",
  border: "1px solid var(--ads-color-border)",
  borderTop: "3px solid var(--ads-color-primary)",
  overflow: "hidden",
};

const figureBandStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
  gap: "1px",
};

const figureCellStyle: CSSProperties = {
  display: "block",
  padding: "1.5rem 1.25rem",
  background: "var(--ads-color-background)",
  textDecoration: "none",
  color: "var(--ads-color-text)",
};

const decisionValueStyle: CSSProperties = {
  margin: "0 0 0.375rem",
  fontSize: "clamp(2.25rem, 5vw, 3rem)",
  lineHeight: 1.1,
  fontWeight: 700,
};

const decisionActionStyle: CSSProperties = {
  margin: "0 0 0.5rem",
  fontSize: "1.125rem",
  lineHeight: 1.4,
  fontWeight: 600,
};

const decisionMetaStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem 2rem",
  margin: "0 0 1.5rem",
  listStyle: "none",
  padding: "0",
};

const decisionMetaItemStyle: CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--ads-color-text-muted)",
};

const linksTitleStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  fontSize: "1.0625rem",
  lineHeight: 1.35,
  fontWeight: 700,
};

const linkRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1rem 1.25rem",
  fontWeight: 600,
  textDecoration: "none",
  color: "var(--ads-color-text)",
  border: "1px solid var(--ads-color-border)",
  borderTop: "none",
  background: "var(--ads-color-background)",
};

const publicationRowStyle: CSSProperties = {
  ...linkRowStyle,
  alignItems: "flex-start",
};

const calendarDateStyle: CSSProperties = {
  display: "block",
  fontSize: "0.8125rem",
  fontWeight: 700,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--ads-color-primary)",
};

const essentialsItemStyle: CSSProperties = {
  display: "flex",
  gap: "0.875rem",
  alignItems: "flex-start",
  height: "100%",
  padding: "1rem 1.125rem",
  background: "var(--ads-color-background)",
  border: "1px solid var(--ads-color-border)",
};

const statusBannerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.875rem 1.25rem",
  marginBottom: "1.5rem",
  background: "var(--ads-color-background)",
  border: "1px solid var(--ads-color-border)",
  borderLeft: "3px solid var(--ads-color-primary)",
};

const statusLabelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ads-color-text-muted)",
};

const statusValueStyle: CSSProperties = {
  display: "block",
  fontSize: "1.0625rem",
  fontWeight: 700,
};

const closingLeadStyle: CSSProperties = {
  margin: "0 auto 1.5rem",
  maxWidth: "42rem",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  color: "var(--ads-color-text-muted)",
};

const closingLinksStyle: CSSProperties = {
  listStyle: "none",
  margin: "1.5rem 0 0",
  padding: "0",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "0.625rem 1.75rem",
};

const inlineLinkStyle: CSSProperties = {
  fontWeight: 600,
  textUnderlineOffset: "0.2em",
};

/**
 * Homepage of the Banque centrale d'Astoria — the digital front door of the
 * central bank of the Republic.
 *
 * The page is organised around ten sections with a deliberate editorial
 * hierarchy, so a visitor understands in a few seconds what the BCA is, the
 * current monetary situation, the latest decision, and where to go next:
 *
 *   01 Introduction institutionnelle  — who we are, and the two priority access
 *   02 Situation monétaire            — the state of money and finance, at a glance
 *   03 Politique monétaire            — the latest decision and the key rate
 *   04 La monnaie astorienne          — the currency and its principles
 *   05 Système bancaire               — the BCA as the bank of banks
 *   06 Paiements                      — the payment and settlement infrastructures
 *   07 Données et statistiques        — the official series and their access
 *   08 Publications et calendrier     — official publications and next dates
 *   09 Services de la Banque centrale — working with the BCA
 *   10 La Banque centrale             — the institution itself, closing the page
 *
 * Every section is driven by the `homeContent` configuration
 * (lib/home-content.ts) and the message catalogs, so the content can evolve
 * without rewriting the interface. The figures, dates and statuses are
 * structural placeholders (demonstration data, marked as such): they define
 * the interface and mark the seam where the future BCA data API plugs in.
 */
export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      {/* 01 — Introduction institutionnelle: a sober opening that establishes
          the BCA and gives immediate access to the two things it produces —
          its decisions and its data. Not a marketing hero: the navigation
          stays immediately available. */}
      <section className="gov-section" aria-labelledby="home-hero-title">
        <div className="gov-section__container" style={heroContainerStyle}>
          <p className="gov-kicker">{t("hero.kicker")}</p>
          <h1 id="home-hero-title">{t("hero.title")}</h1>
          <p className="gov-lead">{t("hero.lead")}</p>
          <CtaButtonsGroup
            alignment="center"
            buttons={[
              {
                children: t("hero.ctaDecisions"),
                href: homeContent.hero.ctaDecisions.href,
                priority: "primary",
                iconId: "fr-icon-arrow-right-line",
              },
              {
                children: t("hero.ctaData"),
                href: homeContent.hero.ctaData.href,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
        </div>
      </section>

      {/* 02 — Situation monétaire: the most important data of the page. A
          single band of key figures with the reference date — a situation
          board, not a stack of cards. Values are placeholders until the BCA
          data API feeds this block. */}
      <ThemeSection
        id="situation-title"
        kicker={t("situation.kicker")}
        title={t("situation.title")}
        lead={t("situation.lead")}
        subtle
        action={
          <p className="fr-text--sm" style={{ margin: 0, color: "var(--ads-color-text-muted)" }}>
            {t("situation.updatedLabel")} {t("situation.updated")}
          </p>
        }
      >
        <div style={panelStyle}>
          <div style={figureBandStyle}>
            {homeContent.situation.primary.map((item) => (
              <Link key={item.key} href={item.href} style={figureCellStyle}>
                <span style={figureValueStyle}>{item.value}</span>
                <span style={figureLabelStyle}>{t(`situation.items.${item.key}.label`)}</span>
              </Link>
            ))}
          </div>
          <div style={{ ...figureBandStyle, marginTop: "1px" }}>
            {homeContent.situation.secondary.map((item) => (
              <Link key={item.key} href={item.href} style={figureCellStyle}>
                <span style={figureValueStyle}>{item.value}</span>
                <span style={figureLabelStyle}>{t(`situation.items.${item.key}.label`)}</span>
              </Link>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <p className="fr-text--sm" style={{ margin: 0, color: "var(--ads-color-text-muted)" }}>
            {t("situation.note")}
          </p>
          <CtaButtonsGroup
            buttons={[
              {
                children: t("situation.exploreLink"),
                href: homeContent.situation.cta.href,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
        </div>
      </ThemeSection>

      {/* 03 — Politique monétaire: the most important signal the bank emits.
          The latest decision, its rate and its schedule, with the press
          release and the related documents. */}
      <ThemeSection
        id="decision-title"
        kicker={t("decision.kicker")}
        title={t("decision.title")}
        lead={t("decision.lead")}
      >
        <div style={{ ...panelStyle, padding: "1.75rem" }}>
          <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle">
            <div className="fr-col-12 fr-col-md-4">
              <p style={{ ...teaserTagStyle, margin: "0 0 0.75rem" }}>{t("decision.status")}</p>
              <p style={decisionValueStyle}>{homeContent.decision.rateValue}</p>
              <p style={decisionActionStyle}>{t("decision.action")}</p>
            </div>
            <div className="fr-col-12 fr-col-md-8">
              <ul style={decisionMetaStyle} role="list">
                {homeContent.decision.items.map((key) => (
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
                    children: t("decision.ctaCommunique"),
                    href: homeContent.decision.ctaCommunique.href,
                    priority: "secondary",
                    iconId: "fr-icon-arrow-right-line",
                  },
                  {
                    children: t("decision.ctaDocuments"),
                    href: homeContent.decision.ctaDocuments.href,
                    priority: "tertiary no outline",
                    iconId: "fr-icon-arrow-right-line",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </ThemeSection>

      {/* 04 — La monnaie astorienne: editorial transition between the
          indicators and the understanding of the monetary system. Fully
          horizontal composition: editorial band, essentials as horizontal
          cards, the four pillars of the Monnaie theme as a row of tiles, then
          a horizontal bridge to the monetary-policy theme. */}
      <ThemeSection
        id="monnaie-title"
        kicker={t("monnaie.kicker")}
        title={t("monnaie.title")}
        lead={t("monnaie.lead")}
        subtle
      >
        <div className="gov-prose" style={{ maxWidth: "72rem" }}>
          <p>{t("monnaie.paragraph")}</p>
          <p>{t("monnaie.paragraph2")}</p>
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          <Link href={homeContent.monnaie.cta.href} style={inlineLinkStyle}>
            {t("monnaie.cta")}
            <span className="fr-icon-arrow-right-line" aria-hidden="true" />
          </Link>
        </p>

        <h3 style={{ ...linksTitleStyle, marginTop: "2.5rem" }}>{t("monnaie.essentialsTitle")}</h3>
        <ul className="fr-grid-row fr-grid-row--gutters" role="list" style={cardGridStyle}>
          {homeContent.monnaie.essentials.map((item) => (
            <li key={item.key} className="fr-col-12 fr-col-sm-6 fr-col-lg-4" style={essentialsItemStyle}>
              <span className={item.iconId} aria-hidden="true" style={iconBlockStyle} />
              <span>
                <span style={{ display: "block", fontWeight: 700 }}>
                  {t(`monnaie.essentials.${item.key}.title`)}
                </span>
                <span
                  className="fr-text--sm"
                  style={{ display: "block", color: "var(--ads-color-text-muted)" }}
                >
                  {t(`monnaie.essentials.${item.key}.text`)}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <h3 style={{ ...linksTitleStyle, marginTop: "2.5rem" }}>{t("monnaie.pillarsTitle")}</h3>
        <div className="fr-grid-row fr-grid-row--gutters">
          {homeContent.monnaie.pillars.map((pillar) => (
            <div key={pillar.key} className="fr-col-12 fr-col-md-6 fr-col-lg-3">
              <LinkTile
                title={t(`monnaie.pillars.${pillar.key}.title`)}
                desc={t(`monnaie.pillars.${pillar.key}.desc`)}
                href={pillar.href}
                iconId={pillar.iconId as FrIconClassName}
              />
            </div>
          ))}
        </div>

        <p style={{ marginTop: "2.5rem" }}>
          <Link
            href={homeContent.monnaie.politique.href}
            style={{ ...linkRowStyle, borderTop: "1px solid var(--ads-color-border)" }}
          >
            {t("monnaie.politique")}
            <span className="fr-icon-arrow-right-line" aria-hidden="true" />
          </Link>
        </p>
      </ThemeSection>

      {/* 05 — Système bancaire: the BCA as the bank of banks. Figures of the
          banking system on one side, the supervision, regulation and
          stability destinations on the other. */}
      <ThemeSection
        id="banques-title"
        kicker={t("banques.kicker")}
        title={t("banques.title")}
        lead={t("banques.lead")}
      >
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-lg-7">
            <ul
              className="fr-grid-row fr-grid-row--gutters"
              role="list"
              style={{ listStyle: "none", margin: 0, padding: 0 }}
            >
              {homeContent.banques.figures.map((figure) => (
                <li key={figure.key} className="fr-col-12 fr-col-sm-6">
                  <Link href={figure.href} style={teaserCardStyle}>
                    <span style={figureValueStyle}>{figure.value}</span>
                    <span style={figureLabelStyle}>{t(`banques.items.${figure.key}.label`)}</span>
                    <span
                      className="fr-icon-arrow-right-line"
                      aria-hidden="true"
                      style={{
                        marginTop: "auto",
                        alignSelf: "flex-end",
                        fontSize: "1rem",
                        color: "var(--ads-color-primary)",
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="fr-col-12 fr-col-lg-5">
            <h3 style={linksTitleStyle}>{t("banques.linksTitle")}</h3>
            <ul role="list" style={linkListStyle}>
              {homeContent.banques.links.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} style={linkRowStyle}>
                    {t(`banques.links.${link.key}.label`)}
                    <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ThemeSection>

      {/* 06 — Paiements: the BCA as operator and guarantor of the payment and
          settlement infrastructures. An operational status, then the
          infrastructures themselves. */}
      <ThemeSection
        id="paiements-title"
        kicker={t("paiements.kicker")}
        title={t("paiements.title")}
        lead={t("paiements.lead")}
        subtle
      >
        <div style={{ maxWidth: "72rem" }}>
          <div style={statusBannerStyle}>
            <span
              className="fr-icon-check-line"
              aria-hidden="true"
              style={{ fontSize: "1.25rem", color: "var(--ads-color-primary)" }}
            />
            <span>
              <span style={statusLabelStyle}>{t("paiements.statusLabel")}</span>
              <span style={statusValueStyle}>{t("paiements.statusValue")}</span>
            </span>
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            {homeContent.paiements.items.map((item) => (
              <div key={item.key} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <LinkTile
                  title={t(`paiements.items.${item.key}.title`)}
                  desc={t(`paiements.items.${item.key}.desc`)}
                  href={item.href}
                  iconId={item.iconId as FrIconClassName}
                />
              </div>
            ))}
          </div>
        </div>
      </ThemeSection>

      {/* 07 — Données et statistiques: the official series, in a legible table,
          and the destinations to download them or connect to the future API.
          The structure is ready for a real data source. */}
      <ThemeSection
        id="donnees-title"
        kicker={t("donnees.kicker")}
        title={t("donnees.title")}
        lead={t("donnees.lead")}
        action={
          <CtaButtonsGroup
            buttons={[
              {
                children: t("donnees.exploreLink"),
                href: homeContent.donnees.links[0].href,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
        }
      >
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-lg-7">
            <DataTable
              caption={t("donnees.tableCaption")}
              headers={[t("donnees.headers.0"), t("donnees.headers.1"), t("donnees.headers.2")]}
              rows={homeContent.donnees.series.map((row) => [
                t(`donnees.rows.${row.key}.label`),
                row.value,
                row.variation,
              ])}
              note={t("donnees.tableNote")}
            />
          </div>
          <div className="fr-col-12 fr-col-lg-5">
            <h3 style={linksTitleStyle}>{t("donnees.linksTitle")}</h3>
            <ul role="list" style={linkListStyle}>
              {homeContent.donnees.links.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} style={linkRowStyle}>
                    {t(`donnees.links.${link.key}.label`)}
                    <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ThemeSection>

      {/* 08 — Publications et calendrier: official publications and the
          institutional calendar — not a news feed. */}
      <ThemeSection
        id="publications-title"
        kicker={t("publications.kicker")}
        title={t("publications.title")}
        lead={t("publications.lead")}
        subtle
        action={
          <CtaButtonsGroup
            buttons={[
              {
                children: t("publications.allLink"),
                href: homeContent.publications.allLink.href,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
        }
      >
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-lg-7">
            <h3 style={linksTitleStyle}>{t("publications.publicationsTitle")}</h3>
            <ul role="list" style={linkListStyle}>
              {homeContent.publications.items.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} style={publicationRowStyle}>
                    <span>
                      <span style={{ display: "block", fontWeight: 700 }}>
                        {t(`publications.items.${item.key}.title`)}
                      </span>
                      <span
                        className="fr-text--sm"
                        style={{ display: "block", color: "var(--ads-color-text-muted)" }}
                      >
                        {t(`publications.items.${item.key}.date`)}
                      </span>
                    </span>
                    <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="fr-col-12 fr-col-lg-5">
            <h3 style={linksTitleStyle}>{t("publications.calendarTitle")}</h3>
            <ul role="list" style={linkListStyle}>
              {homeContent.publications.calendar.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} style={publicationRowStyle}>
                    <span>
                      <span style={calendarDateStyle}>
                        {t(`publications.calendar.${item.key}.date`)}
                      </span>
                      <span style={{ display: "block", fontWeight: 600 }}>
                        {t(`publications.calendar.${item.key}.label`)}
                      </span>
                    </span>
                    <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ThemeSection>

      {/* 09 — Services de la Banque centrale: the operational platform, for
          financial institutions, the State, payment operators and data
          users. Distinct from the seven editorial entries of the header. */}
      <ThemeSection
        id="services-title"
        kicker={t("services.kicker")}
        title={t("services.title")}
        lead={t("services.lead")}
      >
        <div className="fr-grid-row fr-grid-row--gutters">
          {homeContent.services.map((service) => (
            <div key={service.key} className="fr-col-12 fr-col-md-6">
              <LinkTile
                title={t(`services.items.${service.key}.title`)}
                desc={t(`services.items.${service.key}.desc`)}
                href={service.href}
                iconId={service.iconId as FrIconClassName}
              />
            </div>
          ))}
        </div>
      </ThemeSection>

      {/* 10 — La Banque centrale: discreet institutional closing, coherent
          with the “La Banque centrale” entry of the header. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="institution-title">
        <div className="gov-section__container" style={heroContainerStyle}>
          <p className="gov-kicker">{t("institution.kicker")}</p>
          <h2 id="institution-title" className="gov-section__title">
            {t("institution.title")}
          </h2>
          <p style={closingLeadStyle}>{t("institution.lead")}</p>
          <CtaButtonsGroup
            alignment="center"
            buttons={[
              {
                children: t("institution.cta"),
                href: homeContent.institution.cta.href,
                priority: "secondary",
                iconId: "fr-icon-arrow-right-line",
              },
            ]}
          />
          <ul role="list" style={closingLinksStyle}>
            {homeContent.institution.links.map((link) => (
              <li key={link.key}>
                <Link href={link.href} style={inlineLinkStyle}>
                  {t(`institution.links.${link.key}`)}
                  <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
