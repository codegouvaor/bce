import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Le taux directeur” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.tauxDirecteur.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const tauxDirecteurContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "definition",
      id: "la-definition",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "role" },
        { key: "fonctionnement" },
        { key: "etablissements" },
      ],
    },
    {
      key: "role",
      id: "le-role-du-taux-directeur",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "refinancement", iconId: "fr-icon-bank-line" },
        { key: "transmission", iconId: "fr-icon-arrow-right-line" },
        { key: "orientation", iconId: "fr-icon-compass-3-line" },
        { key: "conditions", iconId: "fr-icon-equalizer-line" },
      ],
    },
    {
      key: "fonctionnement",
      id: "le-fonctionnement",
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "decision" },
        { key: "operations" },
        { key: "liquidite" },
        { key: "conditions" },
      ],
    },
    {
      key: "niveau",
      id: "le-niveau-actuel",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "niveau", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "variation", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "date", href: `${politiqueMonetairePath}/decisions` },
      ],
      notice: true,
    },
    {
      key: "decisions",
      id: "les-decisions-relative-au-taux",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      cta: { href: `${politiqueMonetairePath}/decisions` },
    },
    {
      key: "etablissements",
      id: "la-relation-avec-les-banques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "contreparties", iconId: "fr-icon-user-line" },
        { key: "comptes", iconId: "fr-icon-bank-card-line" },
        { key: "garanties", iconId: "fr-icon-lock-line" },
        { key: "operations", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "transmission",
      id: "la-transmission",
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "taux" },
        { key: "banques" },
        { key: "credit" },
        { key: "economie" },
      ],
      cta: { href: `${politiqueMonetairePath}/taux-directeurs/repercussion-sur-le-credit` },
    },
    {
      key: "questions",
      id: "les-questions-frequentes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;