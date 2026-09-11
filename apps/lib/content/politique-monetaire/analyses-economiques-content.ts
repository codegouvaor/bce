import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Analyses économiques” — structure only.
 * Strings resolve from `pages.politiqueMonetaire.sub.analysesEconomiques.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const analysesEconomiquesContent = {
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
      id: "les-types-de-travaux",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "etudes", iconId: "fr-icon-booklet-line" },
        { key: "analyses", iconId: "fr-icon-file-text-line" },
        { key: "notes", iconId: "fr-icon-pen-nib-line" },
        { key: "recherches", iconId: "fr-icon-search-line" },
      ],
    },
    {
      key: "etudes",
      id: "les-etudes",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "etude1", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
        { key: "etude2", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
        { key: "etude3", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
      ],
      notice: true,
    },
    {
      key: "notes",
      id: "les-notes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "note1", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
        { key: "note2", href: `${politiqueMonetairePath}/publications/analyses-economiques` },
      ],
    },
    {
      key: "recherches",
      id: "les-recherches",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "economistes", iconId: "fr-icon-user-line" },
        { key: "modeles", iconId: "fr-icon-settings-5-line" },
        { key: "donnees", iconId: "fr-icon-database-line" },
        { key: "publications", iconId: "fr-icon-book-2-line" },
      ],
    },
    {
      key: "utilisation",
      id: "l-utilisation-des-analyses",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
    },
    {
      key: "equipe",
      id: "qui-produit-les-analyses",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "directions", iconId: "fr-icon-bank-line" },
        { key: "economistes", iconId: "fr-icon-user-line" },
        { key: "reseau", iconId: "fr-icon-global-line" },
      ],
      cta: { href: `${sectionPaths.banqueCentrale}/organisation/directions` },
    },
    {
      key: "ressources",
      id: "les-ressources",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
        { key: "projections", href: `${politiqueMonetairePath}/publications/projections` },
        { key: "donnees", href: `${sectionPaths.monnaie}/donnees-monetaires` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;