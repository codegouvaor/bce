import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Communiqués” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.communiques.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const communiquesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/decisions`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "role",
      id: "le-role-des-communiques",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "contenu",
      id: "le-contenu-d-un-communique",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "decision", iconId: "fr-icon-scales-3-line" },
        { key: "taux", iconId: "fr-icon-line-chart-line" },
        { key: "justification", iconId: "fr-icon-file-text-line" },
        { key: "prochaines", iconId: "fr-icon-calendar-event-line" },
      ],
    },
    {
      key: "derniersCommuniques",
      id: "les-derniers-communiques",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "communique1", href: `${politiqueMonetairePath}/decisions` },
        { key: "communique2", href: `${politiqueMonetairePath}/decisions` },
        { key: "communique3", href: `${politiqueMonetairePath}/decisions` },
      ],
      notice: true,
    },
    {
      key: "calendrier",
      id: "le-calendrier-des-publications",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
    },
    {
      key: "comptesRendus",
      id: "les-comptes-rendus-des-reunions",
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "langage",
      id: "le-langage-des-communiques",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "archives",
      id: "les-archives-des-communiques",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5], note: true },
      links: [
        { key: "historique", href: `${politiqueMonetairePath}/decisions` },
        { key: "calendrier", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
      ],
    },
    {
      key: "abonnement",
      id: "s-abonner-aux-communiques",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;