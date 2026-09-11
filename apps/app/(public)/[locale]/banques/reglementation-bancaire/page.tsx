import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { reglementationBancaireContent } from "@/lib/content/banques/reglementation-bancaire-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/banques/reglementation-bancaire";
const PAGE_NAMESPACE = "pages.banques.reglementationBancaire";

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
 * “Réglementation bancaire” — the framework within which banks exercise their
 * activities: prudential requirements, risk management, client protection,
 * security and resilience, reporting and applicable rules. Content is fully
 * driven by the message catalogs (`pages.banques.reglementationBancaire.*`)
 * through `lib/theme-localize.ts`.
 */
export default async function ReglementationBancairePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.banques.related" });

  return (
    <ThemeArticle content={localizeArticle(reglementationBancaireContent, t, tRelated)} currentHref={PAGE_PATH} />
  );
}