import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Projections” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.projections.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const projectionsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/publications`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "principe",
      id: "le-principe-des-projections",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "contenu",
      id: "le-contenu",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "inflation", iconId: "fr-icon-line-chart-line" },
        { key: "activite", iconId: "fr-icon-bar-chart-line" },
        { key: "emploi", iconId: "fr-icon-user-line" },
        { key: "credit", iconId: "fr-icon-bank-card-line" },
      ],
    },
    {
      key: "calendrier",
      id: "le-calendrier",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "methodes",
      id: "les-methodes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "donnees" },
        { key: "modeles" },
        { key: "hypotheses" },
        { key: "scenarios" },
        { key: "publication" },
      ],
    },
    {
      key: "hypotheses",
      id: "les-hypotheses",
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "scenarios",
      id: "les-scenarios",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "central", iconId: "fr-icon-donut-chart-line" },
        { key: "favorable", iconId: "fr-icon-arrow-up-line" },
        { key: "defavorable", iconId: "fr-icon-arrow-down-line" },
        { key: "alternatifs", iconId: "fr-icon-compass-3-line" },
      ],
    },
    {
      key: "lecture",
      id: "comment-lire-les-projections",
      lead: true,
      paragraphCount: 2,
      bulletCount: 2,
    },
    {
      key: "ressources",
      id: "les-ressources",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
        { key: "analyses", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
        { key: "discours", href: `${politiqueMonetairePath}/publications/discours` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;