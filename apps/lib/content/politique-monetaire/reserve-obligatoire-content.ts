import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “La réserve obligatoire” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.reserveObligatoire.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const reserveObligatoireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/instruments-monetaires`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "principe",
      id: "le-principe",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "objectif",
      id: "l-objectif",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "stabilite", iconId: "fr-icon-shield-line" },
        { key: "liquidite", iconId: "fr-icon-refresh-line" },
        { key: "demande", iconId: "fr-icon-money-euro-circle-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
      ],
    },
    {
      key: "calcul",
      id: "le-calcul",
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "assiette" },
        { key: "taux" },
        { key: "montant" },
        { key: "constitution" },
      ],
      facts: [
        { key: "assiette" },
        { key: "taux" },
        { key: "periodicite" },
      ],
    },
    {
      key: "remuneration",
      id: "la-remuneration",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 4, rowCells: [4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "comptes",
      id: "les-comptes",
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "gestion",
      id: "la-gestion-des-reserves",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "incidence",
      id: "l-incidence-sur-la-liquidite",
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "reserves" },
        { key: "comptes" },
        { key: "banques" },
        { key: "marche" },
      ],
      cta: { href: `${sectionPaths.systemeFinancier}/reserves` },
    },
    {
      key: "documentation",
      id: "la-documentation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "instruments", href: `${politiqueMonetairePath}/instruments-monetaires` },
        { key: "refinancement", href: `${politiqueMonetairePath}/instruments-monetaires/refinancement` },
        { key: "liquidite", href: `${sectionPaths.systemeFinancier}/liquidite` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;