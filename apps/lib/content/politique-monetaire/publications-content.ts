import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Publications” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.politiqueMonetaire.publications.*` and
 * `pages.politiqueMonetaire.related.*`) by `lib/theme-localize.ts`.
 *
 * The page is organised in eight sections forming the documentary entry point
 * of the Politique monétaire theme. Document lists and tables are empty
 * structures ready to receive real publications — nothing is fabricated.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;
const banqueCentralePath = sectionPaths.banqueCentrale;
const marchesFinanciersPath = sectionPaths.marchesFinanciers;

export const publicationsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/publications/rapports`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "familles",
      id: "les-publications-de-la-bca",
      lead: true,
      paragraphCount: 1,
      tiles: [
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports`, iconId: "fr-icon-book-2-line" },
        { key: "decisions", href: `${politiqueMonetairePath}/decisions/communiques`, iconId: "fr-icon-newspaper-line" },
        { key: "analyses", href: `${politiqueMonetairePath}/publications/analyses-economiques`, iconId: "fr-icon-file-text-line" },
        { key: "statistiques", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires`, iconId: "fr-icon-bar-chart-line" },
      ],
    },
    {
      key: "rapports",
      id: "rapports-de-politique-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "situationEconomique", iconId: "fr-icon-bar-chart-line" },
        { key: "inflation", iconId: "fr-icon-line-chart-line" },
        { key: "politiqueMonetaire", iconId: "fr-icon-scales-3-line" },
        { key: "risques", iconId: "fr-icon-shield-line" },
      ],
      cta: { href: `${politiqueMonetairePath}/publications/rapports` },
    },
    {
      key: "decisionsCommuniques",
      id: "decisions-et-communiques",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "decisions", href: `${politiqueMonetairePath}/decisions` },
        { key: "communiques", href: `${politiqueMonetairePath}/decisions/communiques` },
        { key: "comptesRendus", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
      ],
      notice: true,
    },
    {
      key: "analysesEconomiques",
      id: "analyses-economiques",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "etudes", iconId: "fr-icon-booklet-line" },
        { key: "analyses", iconId: "fr-icon-file-text-line" },
        { key: "notes", iconId: "fr-icon-pen-nib-line" },
        { key: "recherches", iconId: "fr-icon-search-line" },
      ],
      cta: { href: `${politiqueMonetairePath}/publications/analyses-economiques` },
    },
    {
      key: "statistiquesMonetaires",
      id: "statistiques-monetaires",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "donnees", iconId: "fr-icon-database-line" },
        { key: "taux", iconId: "fr-icon-line-chart-line" },
        { key: "liquidite", iconId: "fr-icon-refresh-line" },
        { key: "credit", iconId: "fr-icon-bank-card-line" },
      ],
      links: [
        { key: "donneesMonetaires", href: `${monnaiePath}/donnees-monetaires` },
        { key: "statistiques", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
      ],
    },
    {
      key: "previsions",
      id: "previsions-et-projections",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "projections", iconId: "fr-icon-line-chart-line" },
        { key: "perspectives", iconId: "fr-icon-compass-3-line" },
        { key: "scenarios", iconId: "fr-icon-donut-chart-line" },
        { key: "hypotheses", iconId: "fr-icon-settings-5-line" },
      ],
      notice: true,
      cta: { href: `${politiqueMonetairePath}/publications/projections` },
    },
    {
      key: "archives",
      id: "archives",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5], note: true },
      cta: { href: `${politiqueMonetairePath}/publications/rapports` },
    },
    {
      key: "donneesRessources",
      id: "donnees-et-ressources",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "telechargements", href: `${monnaiePath}/donnees-monetaires` },
        { key: "methodologies", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
        { key: "marches", href: `${marchesFinanciersPath}/donnees-et-statistiques` },
        { key: "banqueCentrale", href: `${banqueCentralePath}` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;