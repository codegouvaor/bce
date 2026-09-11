import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { tauxDirecteursContent } from "@/lib/content/politique-monetaire/taux-directeurs-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/politique-monetaire/taux-directeurs";
const PAGE_NAMESPACE = "pages.politiqueMonetaire.tauxDirecteurs";

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
 * “Taux directeurs” — the rates used by the BCA and their transmission to the
 * banking system. Content is fully driven by the message catalogs
 * (`pages.politiqueMonetaire.tauxDirecteurs.*`) through
 * `lib/theme-localize.ts`.
 */
export default async function TauxDirecteursPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.politiqueMonetaire.related" });

  return (
    <ThemeArticle
      content={localizeArticle(tauxDirecteursContent, t, tRelated)}
      currentHref={PAGE_PATH}
    />
  );
}