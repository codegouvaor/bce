import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Décisions de politique monétaire” —
 * structure only. Every display string is resolved from the message catalogs
 * (`pages.politiqueMonetaire.decisions.*` and `pages.politiqueMonetaire.related.*`)
 * by `lib/theme-localize.ts`.
 *
 * The page is organised in eight sections, each using the block best suited to
 * its subject (prose, reference facts, figures, feature cards, steps, tables,
 * links) so the page never repeats the same component. Data placeholders
 * (facts, tables, figures) are marked as pending publication and are meant to
 * be fed by real decision data later — no economic figure is fabricated.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const decisionsPolitiqueMonetaireContent = {
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
      key: "comprendre",
      id: "comprendre-politique-monetaire",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "stabilitePrix", iconId: "fr-icon-scales-3-line" },
        { key: "pouvoirAchat", iconId: "fr-icon-money-euro-circle-line" },
        { key: "confiance", iconId: "fr-icon-shield-line" },
        { key: "economie", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "derniereDecision",
      id: "derniere-decision",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "date" },
        { key: "decision" },
        { key: "taux" },
        { key: "communication" },
      ],
      notice: true,
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
    {
      key: "tauxDirecteur",
      id: "taux-directeur-et-evolution",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "niveau", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "variation", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "derniereModification", href: `${politiqueMonetairePath}/taux-directeurs` },
      ],
      notice: true,
      cta: { href: `${politiqueMonetairePath}/taux-directeurs` },
    },
    {
      key: "objectifs",
      id: "objectifs-politique-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "stabilitePrix", iconId: "fr-icon-scales-3-line" },
        { key: "stabiliteMonetaire", iconId: "fr-icon-money-euro-circle-line" },
        { key: "stabiliteFinanciere", iconId: "fr-icon-shield-line" },
        { key: "conditionsMonetaires", iconId: "fr-icon-equalizer-line" },
      ],
    },
    {
      key: "facteurs",
      id: "facteurs-pris-en-compte",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "inflation", iconId: "fr-icon-line-chart-line" },
        { key: "activite", iconId: "fr-icon-bar-chart-line" },
        { key: "emploi", iconId: "fr-icon-user-line" },
        { key: "credit", iconId: "fr-icon-bank-card-line" },
      ],
      bulletCount: 5,
    },
    {
      key: "processus",
      id: "processus-de-decision",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "preparation" },
        { key: "reunion" },
        { key: "deliberation" },
        { key: "decision" },
        { key: "communication" },
        { key: "miseEnOeuvre" },
      ],
    },
    {
      key: "calendrier",
      id: "calendrier-des-decisions",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      cta: { href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
    },
    {
      key: "historique",
      id: "historique-des-decisions",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4, 4], note: true },
      links: [
        { key: "communiques", href: `${politiqueMonetairePath}/decisions/communiques` },
        { key: "calendrier", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
        { key: "monnaie", href: `${monnaiePath}/donnees-monetaires` },
        { key: "banqueCentrale", href: `${banqueCentralePath}/gouvernance` },
      ],
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;