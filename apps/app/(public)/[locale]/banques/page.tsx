import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { banquesSectionContent } from "@/lib/content/banques/banques-section-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/banques";
const PAGE_NAMESPACE = "pages.banques.section";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    ...localizedAlternates(locale, PAGE_PATH),
  };
}

/**
 * “Banques” — the section landing page of the Banques theme of the
 * Banque centrale d'Astoria. Destination of the “Banques” entry of the header
 * navigation, it presents the “encadrer” mission of the portal, opens the four
 * theme pages and establishes the perimeter of the Astorian banking system.
 * Content is fully driven by the message catalogs (`pages.banques.section.*`)
 * through `lib/theme-localize.ts`.
 */
export default async function BanquesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.banques.related" });

  return (
    <ThemeArticle content={localizeArticle(banquesSectionContent, t, tRelated)} currentHref={PAGE_PATH} />
  );
}