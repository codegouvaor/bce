import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Le refinancement” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.refinancement.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const refinancementContent = {
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
      id: "le-principe-du-refinancement",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "mecanisme",
      id: "le-mecanisme",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "demande" },
        { key: "garanties" },
        { key: "attribution" },
        { key: "remboursement" },
      ],
    },
    {
      key: "conditions",
      id: "les-conditions",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "taux" },
        { key: "montant" },
        { key: "echeance" },
        { key: "frequence" },
      ],
    },
    {
      key: "garanties",
      id: "les-garanties",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "types", iconId: "fr-icon-lock-line" },
        { key: "evaluation", iconId: "fr-icon-scales-3-line" },
        { key: "marge", iconId: "fr-icon-shield-line" },
        { key: "cadre", iconId: "fr-icon-book-2-line" },
      ],
      bulletCount: 2,
    },
    {
      key: "echeances",
      id: "les-echeances",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4], note: true },
    },
    {
      key: "role",
      id: "le-role-dans-la-liquidite",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "bca" },
        { key: "refinancement" },
        { key: "banques" },
        { key: "credit" },
      ],
      cta: { href: `${politiqueMonetairePath}/taux-directeurs` },
    },
    {
      key: "etablissements",
      id: "les-etablissements-concernes",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "eligibles", iconId: "fr-icon-user-line" },
        { key: "comptes", iconId: "fr-icon-bank-card-line" },
        { key: "accords", iconId: "fr-icon-file-text-line" },
        { key: "surveillance", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "documentation",
      id: "la-documentation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "operations", href: `${politiqueMonetairePath}/instruments-monetaires/operations-de-marche` },
        { key: "reserve", href: `${politiqueMonetairePath}/instruments-monetaires/reserve-obligatoire` },
        { key: "cadre", href: `${politiqueMonetairePath}/instruments-monetaires` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;