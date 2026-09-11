import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { politiqueMonetaireSectionContent } from "@/lib/content/politique-monetaire/politique-monetaire-section-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/politique-monetaire";
const PAGE_NAMESPACE = "pages.politiqueMonetaire.section";

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
 * “Politique monétaire” — the section landing page of the Politique monétaire
 * theme of the Banque centrale d'Astoria. Destination of the “Politique
 * monétaire” entry of the header navigation, it opens the four theme pages and
 * establishes how the BCA steers the monetary conditions of the Republic.
 * Content is fully driven by the message catalogs
 * (`pages.politiqueMonetaire.section.*`) through `lib/theme-localize.ts`.
 */
export default async function PolitiqueMonetairePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.politiqueMonetaire.related" });

  return (
    <ThemeArticle
      content={localizeArticle(politiqueMonetaireSectionContent, t, tRelated)}
      currentHref={PAGE_PATH}
    />
  );
}