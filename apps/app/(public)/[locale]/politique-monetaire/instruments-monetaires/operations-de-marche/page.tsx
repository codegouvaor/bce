import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { operationsDeMarcheContent } from "@/lib/content/politique-monetaire/operations-de-marche-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/politique-monetaire/instruments-monetaires/operations-de-marche";
const PAGE_NAMESPACE = "pages.politiqueMonetaire.sub.operationsDeMarche";

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

export default async function OperationsDeMarchePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.politiqueMonetaire.related" });

  return (
    <ThemeArticle
      content={localizeArticle(operationsDeMarcheContent, t, tRelated)}
      currentHref={PAGE_PATH}
    />
  );
}