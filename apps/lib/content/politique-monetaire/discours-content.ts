import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Discours” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.discours.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const discoursContent = {
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
      id: "le-principe",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "types",
      id: "les-types-de-discours",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "gouverneur", iconId: "fr-icon-user-line" },
        { key: "conseil", iconId: "fr-icon-government-line" },
        { key: "conferences", iconId: "fr-icon-calendar-event-line" },
        { key: "entretiens", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "derniersDiscours",
      id: "les-derniers-discours",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "discours1", href: `${politiqueMonetairePath}/publications/discours` },
        { key: "discours2", href: `${politiqueMonetairePath}/publications/discours` },
        { key: "discours3", href: `${politiqueMonetairePath}/publications/discours` },
      ],
      notice: true,
    },
    {
      key: "contenu",
      id: "le-contenu",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
    },
    {
      key: "communication",
      id: "le-role-dans-la-communication",
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "archives",
      id: "les-archives",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5], note: true },
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
    {
      key: "transcription",
      id: "les-transcriptions",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "texte" },
        { key: "video" },
        { key: "resume" },
        { key: "langue" },
      ],
      notice: true,
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
        { key: "projections", href: `${politiqueMonetairePath}/publications/projections` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;