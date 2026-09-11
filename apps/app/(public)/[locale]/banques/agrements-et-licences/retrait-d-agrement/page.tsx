import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { retraitDAgrementContent } from "@/lib/content/banques/retrait-d-agrement-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/banques/agrements-et-licences/retrait-d-agrement";
const PAGE_NAMESPACE = "pages.banques.sub.retraitDAgrement";

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

export default async function RetraitDAgrementPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.banques.related" });

  return <ThemeArticle content={localizeArticle(retraitDAgrementContent, t, tRelated)} currentHref={PAGE_PATH} />;
}