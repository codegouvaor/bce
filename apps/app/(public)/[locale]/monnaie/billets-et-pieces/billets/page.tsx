import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { billetsContent } from "@/lib/content/monnaie/billets-content";
import { localizeArticle } from "@/lib/monnaie-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/monnaie/billets-et-pieces/billets";
const PAGE_NAMESPACE = "pages.monnaie.sub.billets";

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

export default async function BilletsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.monnaie.related" });

  return <ThemeArticle content={localizeArticle(billetsContent, t, tRelated)} currentHref={PAGE_PATH} />;
}
