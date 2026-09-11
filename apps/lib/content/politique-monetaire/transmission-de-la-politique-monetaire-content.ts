import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “La transmission de la politique
 * monétaire” — structure only. Strings resolve from
 * `pages.politiqueMonetaire.sub.transmissionDeLaPolitiqueMonetaire.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const transmissionDeLaPolitiqueMonetaireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/taux-directeurs/repercussion-sur-le-credit`,
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
      key: "chaine",
      id: "la-chaine-de-transmission",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "bca" },
        { key: "banques" },
        { key: "financement" },
        { key: "agents" },
        { key: "activite" },
        { key: "inflation" },
      ],
      notice: true,
    },
    {
      key: "canaux",
      id: "les-canaux",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "taux", iconId: "fr-icon-line-chart-line" },
        { key: "credit", iconId: "fr-icon-bank-card-line" },
        { key: "anticipations", iconId: "fr-icon-compass-3-line" },
        { key: "actifs", iconId: "fr-icon-money-euro-circle-line" },
      ],
    },
    {
      key: "delais",
      id: "les-delais",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "anticipations",
      id: "le-role-des-anticipations",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "credibilite", iconId: "fr-icon-shield-line" },
        { key: "previsibilite", iconId: "fr-icon-calendar-line" },
        { key: "communication", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "incertitude",
      id: "l-incertitude",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
    },
    {
      key: "economie",
      id: "les-effets-sur-l-economie",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "credit", href: `${sectionPaths.monnaie}/donnees-monetaires` },
        { key: "inflation", href: `${politiqueMonetairePath}/publications` },
      ],
      notice: true,
    },
    {
      key: "lecture",
      id: "pour-aller-plus-loin",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "repercussion", href: `${politiqueMonetairePath}/taux-directeurs/repercussion-sur-le-credit` },
        { key: "instruments", href: `${politiqueMonetairePath}/instruments-monetaires` },
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
      ],
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;