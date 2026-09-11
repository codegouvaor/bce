import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Les facilités” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.facilites.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const facilitesContent = {
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
      id: "le-principe-des-facilites",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "corridor",
      id: "le-corridor-des-taux",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "pret" },
        { key: "refinancement" },
        { key: "depot" },
      ],
      notice: true,
    },
    {
      key: "faciliteDepot",
      id: "la-facilite-de-depot",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "principe" },
        { key: "acces" },
        { key: "remuneration" },
        { key: "fonction" },
      ],
    },
    {
      key: "facilitePret",
      id: "la-facilite-de-pret",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "principe" },
        { key: "acces" },
        { key: "conditions" },
        { key: "fonction" },
      ],
    },
    {
      key: "acces",
      id: "l-acces-aux-facilites",
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "remuneration",
      id: "la-remuneration",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "gestionLiquidite",
      id: "le-role-dans-la-gestion-de-la-liquidite",
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "complement",
      id: "la-complementarite-des-facilites",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "depot", iconId: "fr-icon-money-euro-circle-line" },
        { key: "pret", iconId: "fr-icon-bank-card-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
        { key: "reserve", iconId: "fr-icon-shield-line" },
      ],
      cta: { href: `${politiqueMonetairePath}/taux-directeurs` },
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;