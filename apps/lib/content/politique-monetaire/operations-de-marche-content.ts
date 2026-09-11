import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Les opérations de marché” — structure
 * only. Strings resolve from `pages.politiqueMonetaire.sub.operationsDeMarche.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const operationsDeMarcheContent = {
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
      key: "types",
      id: "les-types-d-operations",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "injection", iconId: "fr-icon-arrow-down-line" },
        { key: "absorption", iconId: "fr-icon-arrow-up-line" },
        { key: "regulieres", iconId: "fr-icon-refresh-line" },
        { key: "ponctuelles", iconId: "fr-icon-pulse-line" },
      ],
    },
    {
      key: "objectifs",
      id: "les-objectifs",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "liquidite" },
        { key: "taux" },
        { key: "conditions" },
        { key: "signal" },
      ],
    },
    {
      key: "fonctionnement",
      id: "le-fonctionnement",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "annonce" },
        { key: "demande" },
        { key: "attribution" },
        { key: "reglement" },
        { key: "echange" },
      ],
    },
    {
      key: "acteurs",
      id: "les-acteurs-concernes",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "banques", iconId: "fr-icon-building-line" },
        { key: "contreparties", iconId: "fr-icon-user-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
      ],
    },
    {
      key: "liquidite",
      id: "l-impact-sur-la-liquidite",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "bca" },
        { key: "operations" },
        { key: "banques" },
        { key: "liquidite" },
      ],
      notice: true,
    },
    {
      key: "calendrier",
      id: "le-calendrier-des-operations",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
    },
    {
      key: "documentation",
      id: "la-documentation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "cadre", href: `${politiqueMonetairePath}/instruments-monetaires` },
        { key: "refinancement", href: `${politiqueMonetairePath}/instruments-monetaires/refinancement` },
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;