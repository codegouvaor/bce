import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Les dernières décisions” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.dernieresDecisions.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const dernieresDecisionsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/decisions/communiques`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-decisions",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "communique", iconId: "fr-icon-newspaper-line" },
        { key: "calendrier", iconId: "fr-icon-calendar-event-line" },
        { key: "archives", iconId: "fr-icon-archive-line" },
        { key: "abonnement", iconId: "fr-icon-mail-line" },
      ],
    },
    {
      key: "lecture",
      id: "comment-lire-une-decision",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "date" },
        { key: "decision" },
        { key: "taux" },
        { key: "justification" },
      ],
    },
    {
      key: "derniereDecision",
      id: "la-derniere-decision",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "date" },
        { key: "decision" },
        { key: "taux" },
        { key: "communication" },
      ],
      notice: true,
      cta: { href: `${politiqueMonetairePath}/decisions` },
    },
    {
      key: "decisionsRecentes",
      id: "les-decisions-recentes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
    },
    {
      key: "tauxConseil",
      id: "les-taux-et-le-conseil",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "taux", iconId: "fr-icon-line-chart-line" },
        { key: "conseil", iconId: "fr-icon-government-line" },
        { key: "quorum", iconId: "fr-icon-user-line" },
        { key: "vote", iconId: "fr-icon-scales-3-line" },
      ],
    },
    {
      key: "communication",
      id: "les-canaux-de-communication",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "comptesRendus",
      id: "les-comptes-rendus",
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${politiqueMonetairePath}/decisions/communiques` },
    },
    {
      key: "orientation",
      id: "l-orientation-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "orientation", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "calendrier", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
        { key: "prochaine", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;