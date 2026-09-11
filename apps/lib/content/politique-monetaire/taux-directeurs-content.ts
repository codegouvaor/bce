import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Taux directeurs” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.politiqueMonetaire.tauxDirecteurs.*` and
 * `pages.politiqueMonetaire.related.*`) by `lib/theme-localize.ts`.
 *
 * The page is organised in eight sections explaining the key rates of the BCA,
 * their role and their transmission to the banking system. Figures and tables
 * are placeholders pending official publication — no rate is fabricated.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;
const banquesPath = sectionPaths.banques;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const tauxDirecteursContent = {
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
      key: "vueEnsemble",
      id: "les-taux-directeurs",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "refinancement", iconId: "fr-icon-bank-line" },
        { key: "faciliteDepot", iconId: "fr-icon-money-euro-circle-line" },
        { key: "facilitePret", iconId: "fr-icon-bank-card-line" },
        { key: "reserve", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "tauxPrincipal",
      id: "taux-principal-de-refinancement",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "role" },
        { key: "fonctionnement" },
        { key: "etablissements" },
      ],
      cta: { href: `${politiqueMonetairePath}/decisions` },
    },
    {
      key: "faciliteDepot",
      id: "les-facilites-de-depot",
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "facilitePret",
      id: "les-facilites-de-pret",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "evolution",
      id: "evolution-des-taux",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "refinancement", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "depot", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "pret", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
      ],
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      notice: true,
      cta: { href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
    },
    {
      key: "transmission",
      id: "transmission-aux-banques",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "refinancement" },
        { key: "interbancaire" },
        { key: "credits" },
        { key: "depots" },
        { key: "conditionsFinancieres" },
      ],
      cta: { href: `${politiqueMonetairePath}/taux-directeurs/repercussion-sur-le-credit` },
    },
    {
      key: "effetsEconomie",
      id: "effets-sur-l-economie",
      lead: true,
      paragraphCount: 2,
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
      key: "historiqueDonnees",
      id: "historique-et-donnees",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4, 4], note: true },
      links: [
        { key: "evolution", href: `${politiqueMonetairePath}/taux-directeurs/evolution-des-taux` },
        { key: "statistiques", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
        { key: "credit", href: `${politiqueMonetairePath}/taux-directeurs/repercussion-sur-le-credit` },
        { key: "systemeBancaire", href: `${banquesPath}` },
        { key: "liquidite", href: `${systemeFinancierPath}/liquidite` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;