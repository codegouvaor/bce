import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { donneesMonetairesContent } from "@/lib/content/monnaie/donnees-monetaires-content";
import { localizeArticle } from "@/lib/monnaie-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/monnaie/donnees-monetaires";
const PAGE_NAMESPACE = "pages.monnaie.donneesMonetaires";

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
 * “Données monétaires” — the statistics and data page of the Monnaie theme.
 * Content is fully driven by the message catalogs
 * (`pages.monnaie.donneesMonetaires.*`) through `lib/monnaie-localize.ts`.
 */
export default async function DonneesMonetairesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.monnaie.related" });

  return <ThemeArticle content={localizeArticle(donneesMonetairesContent, t, tRelated)} currentHref={PAGE_PATH} />;
}
