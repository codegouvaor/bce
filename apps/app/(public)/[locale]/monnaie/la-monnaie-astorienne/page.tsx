import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { monnaieAstorienneContent } from "@/lib/content/monnaie/monnaie-astorienne-content";
import { localizeArticle } from "@/lib/monnaie-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/monnaie/la-monnaie-astorienne";
const PAGE_NAMESPACE = "pages.monnaie.laMonnaieAstorienne";

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
 * “La monnaie astorienne” — the institutional and pedagogical entry of the
 * Monnaie theme. Content is fully driven by the message catalogs
 * (`pages.monnaie.laMonnaieAstorienne.*`) through `lib/monnaie-localize.ts`.
 */
export default async function MonnaieAstoriennePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.monnaie.related" });

  return <ThemeArticle content={localizeArticle(monnaieAstorienneContent, t, tRelated)} currentHref={PAGE_PATH} />;
}