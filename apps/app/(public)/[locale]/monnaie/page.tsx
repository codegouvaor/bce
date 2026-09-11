import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { monnaieSectionContent } from "@/lib/content/monnaie/monnaie-section-content";
import { localizeArticle } from "@/lib/monnaie-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/monnaie";
const PAGE_NAMESPACE = "pages.monnaie.section";

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
 * “Monnaie” — the section landing page of the Monnaie theme of the Banque
 * centrale d'Astoria. Destination of the “Monnaie” entry of the header
 * navigation, it opens the four theme pages and establishes the role of the
 * BCA in the monetary domain. Content is fully driven by the message
 * catalogs (`pages.monnaie.section.*`) through `lib/monnaie-localize.ts`.
 */
export default async function MonnaiePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.monnaie.related" });

  return <ThemeArticle content={localizeArticle(monnaieSectionContent, t, tRelated)} currentHref={PAGE_PATH} />;
}