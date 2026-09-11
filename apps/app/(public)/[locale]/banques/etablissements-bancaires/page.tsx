import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { etablissementsBancairesContent } from "@/lib/content/banques/etablissements-bancaires-content";
import { localizeArticle } from "@/lib/theme-localize";
import { ThemeArticle } from "@/components/public/content/theme-page";

const PAGE_PATH = "/banques/etablissements-bancaires";
const PAGE_NAMESPACE = "pages.banques.etablissementsBancaires";

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
 * “Établissements bancaires” — who composes the Astorian banking system:
 * types of establishments, services, relations with the BCA, obligations and
 * access to the future register. Content is fully driven by the message
 * catalogs (`pages.banques.etablissementsBancaires.*`) through
 * `lib/theme-localize.ts`.
 */
export default async function EtablissementsBancairesPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: PAGE_NAMESPACE });
  const tRelated = await getTranslations({ locale, namespace: "pages.banques.related" });

  return (
    <ThemeArticle content={localizeArticle(etablissementsBancairesContent, t, tRelated)} currentHref={PAGE_PATH} />
  );
}