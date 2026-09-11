import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Rapports” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.rapports.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const rapportsContent = {
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
      id: "le-principe-des-rapports",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "contenu",
      id: "le-contenu",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "situation", iconId: "fr-icon-bar-chart-line" },
        { key: "inflation", iconId: "fr-icon-line-chart-line" },
        { key: "politique", iconId: "fr-icon-scales-3-line" },
        { key: "risques", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "calendrier",
      id: "le-calendrier-des-publications",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      notice: true,
    },
    {
      key: "derniersRapports",
      id: "les-derniers-rapports",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "rapport1", href: `${politiqueMonetairePath}/publications` },
        { key: "rapport2", href: `${politiqueMonetairePath}/publications` },
        { key: "rapport3", href: `${politiqueMonetairePath}/publications` },
      ],
    },
    {
      key: "methodes",
      id: "les-methodes",
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "audience",
      id: "l-audience-des-rapports",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "citoyens", iconId: "fr-icon-user-line" },
        { key: "marches", iconId: "fr-icon-line-chart-line" },
        { key: "institutions", iconId: "fr-icon-government-line" },
        { key: "analystes", iconId: "fr-icon-search-line" },
      ],
    },
    {
      key: "archives",
      id: "les-archives",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5], note: true },
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
    {
      key: "ressources",
      id: "les-ressources",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "analyses", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
        { key: "projections", href: `${politiqueMonetairePath}/publications/projections` },
        { key: "statistiques", href: `${sectionPaths.monnaie}/donnees-monetaires/statistiques-monetaires` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;