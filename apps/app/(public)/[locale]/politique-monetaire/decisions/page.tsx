import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { decisionsPolitiqueMonetaireContent } from "@/lib/content/politique-monetaire/decisions-politique-monetaire-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/politique-monetaire/decisions";
const PAGE_NAMESPACE = "pages.politiqueMonetaire.decisions";

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
 * “Décisions de politique monétaire” — how the BCA decides its monetary
 * policy, its recent decisions and how they unfold over time. Content is fully
 * driven by the message catalogs (`pages.politiqueMonetaire.decisions.*`)
 * through `lib/theme-localize.ts`.
 */
export default async function DecisionsPolitiqueMonetairePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.politiqueMonetaire.related" });

  return (
    <ThemeArticle
      content={localizeArticle(decisionsPolitiqueMonetaireContent, t, tRelated)}
      currentHref={PAGE_PATH}
    />
  );
}