import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Déposer une demande” — structure only.
 * Strings resolve from `pages.banques.sub.demandeDAgrement.*`.
 */
const banquesPath = sectionPaths.banques;

export const demandeDAgrementContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/agrements-et-licences/conditions-d-agrement`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-le-processus",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-draft-line" },
        { key: "parcours", iconId: "fr-icon-arrow-right-line" },
        { key: "delai", iconId: "fr-icon-time-line" },
        { key: "decision", iconId: "fr-icon-scales-3-line" },
      ],
    },
    {
      key: "parcours",
      id: "le-parcours-de-la-demande",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "projet" },
        { key: "dossier" },
        { key: "instruction" },
        { key: "evaluation" },
        { key: "decision" },
        { key: "agrement" },
        { key: "registre" },
      ],
    },
    {
      key: "projet",
      id: "le-projet-bancaire",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "dossier",
      id: "le-dossier-de-demande",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2, 2], note: true },
    },
    {
      key: "instruction",
      id: "l-instruction",
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "reception" },
        { key: "completude" },
        { key: "analyse" },
        { key: "echange" },
      ],
    },
    {
      key: "decision",
      id: "la-decision",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "autorite" },
        { key: "criteres" },
        { key: "delai" },
        { key: "notification" },
      ],
    },
    {
      key: "apres",
      id: "apres-la-decision",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "agrement", iconId: "fr-icon-check-line" },
        { key: "conditions", iconId: "fr-icon-file-text-line" },
        { key: "registre", iconId: "fr-icon-global-line" },
        { key: "obligations", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "refus",
      id: "en-cas-de-refus",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      notice: true,
    },
  ],
  related: banquesRelatedDestinations(),
} as const;