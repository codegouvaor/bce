import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “L'évolution des taux” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.evolutionDesTaux.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const evolutionDesTauxContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/taux-directeurs`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "principe",
      id: "suivre-l-evolution-des-taux",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "serie",
      id: "la-serie-des-taux",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "dernieresModifications",
      id: "les-dernieres-modifications",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "date" },
        { key: "taux" },
        { key: "variation" },
        { key: "decision" },
      ],
    },
    {
      key: "tendances",
      id: "les-tendances",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "hausse", iconId: "fr-icon-arrow-up-line" },
        { key: "baisse", iconId: "fr-icon-arrow-down-line" },
        { key: "stabilite", iconId: "fr-icon-scales-3-line" },
        { key: "cycle", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "comparaison",
      id: "la-comparaison-des-taux",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "refinancement", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "depot", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "pret", href: `${politiqueMonetairePath}/taux-directeurs` },
      ],
      notice: true,
    },
    {
      key: "interpretation",
      id: "comment-lire-les-evolutions",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "contexte",
      id: "le-contexte-historique",
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${politiqueMonetairePath}/decisions` },
    },
    {
      key: "donnees",
      id: "acceder-aux-donnees",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "historique", href: `${politiqueMonetairePath}/decisions` },
        { key: "statistiques", href: `${sectionPaths.monnaie}/donnees-monetaires/statistiques-monetaires` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;