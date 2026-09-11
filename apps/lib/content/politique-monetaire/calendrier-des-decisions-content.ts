import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Le calendrier des décisions” — structure
 * only. Strings resolve from `pages.politiqueMonetaire.sub.calendrierDesDecisions.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const calendrierDesDecisionsContent = {
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
      key: "principe",
      id: "le-principe-du-calendrier",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "reunions",
      id: "les-reunions",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "conseil", iconId: "fr-icon-government-line" },
        { key: "gouverneur", iconId: "fr-icon-user-line" },
        { key: "services", iconId: "fr-icon-bank-line" },
        { key: "publications", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "prochainesDates",
      id: "les-prochaines-dates",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "publicationsAssociees",
      id: "les-publications-associees",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "communique", iconId: "fr-icon-newspaper-line" },
        { key: "compteRendu", iconId: "fr-icon-file-text-line" },
        { key: "rapport", iconId: "fr-icon-book-2-line" },
        { key: "donnees", iconId: "fr-icon-bar-chart-line" },
      ],
      bulletCount: 2,
    },
    {
      key: "annonces",
      id: "les-dates-d-annonce",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "decision" },
        { key: "communique" },
        { key: "conference" },
        { key: "compteRendu" },
      ],
    },
    {
      key: "revision",
      id: "la-revision-du-calendrier",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "archives",
      id: "les-archives-du-calendrier",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      links: [
        { key: "communiques", href: `${politiqueMonetairePath}/decisions/communiques` },
        { key: "historique", href: `${politiqueMonetairePath}/decisions` },
      ],
    },
    {
      key: "notifications",
      id: "suivre-le-calendrier",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;