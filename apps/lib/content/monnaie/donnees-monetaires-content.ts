import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Données monétaires” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.donneesMonetaires.*` and `pages.monnaie.related.*`).
 *
 * This is the statistics page of the theme. Figures and series are structural
 * demonstration data marked as such; the architecture (indicator bands,
 * aggregate tables, reference grid, reserves, rates) is ready to receive the
 * future official BCA data source and API. No fake charts are drawn.
 */
const monnaiePath = sectionPaths.monnaie;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const donneesMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire`,
    noticeKey: "hero.notice",
    statKey: "hero.stat",
  },
  sections: [
    {
      key: "situation",
      id: "situation-monetaire",
      lead: true,
      statGrid: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "inflation", href: `${politiqueMonetairePath}/publications` },
        { key: "m3", href: `${monnaiePath}/donnees-monetaires` },
        { key: "reserves", href: `${systemeFinancierPath}/reserves` },
      ],
      notice: true,
    },
    {
      key: "agregats",
      id: "agregats-monetaires",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "encours",
      id: "encours-monetaires",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3, 3], note: true },
    },
    {
      key: "baseMonetaire",
      id: "base-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "monnaieCentrale" },
        { key: "billets" },
        { key: "reservesBancaires" },
        { key: "comptes" },
      ],
    },
    {
      key: "billetsPieces",
      id: "billets-et-pieces-en-circulation",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "billets" },
        { key: "pieces" },
        { key: "part" },
        { key: "billetsParHabitant" },
      ],
      table: { headerCount: 3, rowCells: [3, 3, 3, 3, 3], note: true },
    },
    {
      key: "reservesLiquidite",
      id: "reserves-et-liquidite",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "series",
      id: "series-historiques",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5, 5], note: true },
      notice: true,
    },
    {
      key: "publications",
      id: "publications-et-donnees-ouvertes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "statistiques", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
        { key: "publications", href: `${politiqueMonetairePath}/publications` },
        { key: "donneesOuvertes", href: `${sectionPaths.marchesFinanciers}/donnees-et-statistiques/donnees-ouvertes` },
      ],
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;