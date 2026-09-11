import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { uniteMonetaireContent } from "@/lib/content/monnaie/unite-monetaire-content";
import { localizeArticle } from "@/lib/monnaie-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/monnaie/la-monnaie-astorienne/unite-monetaire";
const PAGE_NAMESPACE = "pages.monnaie.sub.uniteMonetaire";

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

export default async function UniteMonetairePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.monnaie.related" });

  return <ThemeArticle content={localizeArticle(uniteMonetaireContent, t, tRelated)} currentHref={PAGE_PATH} />;
}