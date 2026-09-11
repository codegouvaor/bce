import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Instruments monétaires” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.politiqueMonetaire.instrumentsMonetaires.*` and
 * `pages.politiqueMonetaire.related.*`) by `lib/theme-localize.ts`.
 *
 * The page is organised in eight sections explaining how the BCA implements its
 * monetary policy operationally. No specific measure or programme is invented:
 * the sections present the institutional and operational framework only.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;
const banquesPath = sectionPaths.banques;
const systemeFinancierPath = sectionPaths.systemeFinancier;
const marchesFinanciersPath = sectionPaths.marchesFinanciers;

export const instrumentsMonetairesContent = {
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
      key: "vueEnsemble",
      id: "les-instruments-de-la-bca",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "openMarket", iconId: "fr-icon-pulse-line" },
        { key: "refinancement", iconId: "fr-icon-bank-line" },
        { key: "reserves", iconId: "fr-icon-money-euro-circle-line" },
        { key: "exceptionnelles", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "openMarket",
      id: "operations-d-open-market",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "objectif" },
        { key: "acteurs" },
        { key: "mecanisme" },
        { key: "impact" },
      ],
      cta: { href: `${politiqueMonetairePath}/instruments-monetaires/operations-de-marche` },
    },
    {
      key: "refinancement",
      id: "refinancement-des-etablissements",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "conditions", iconId: "fr-icon-equalizer-line" },
        { key: "garanties", iconId: "fr-icon-lock-line" },
        { key: "echeances", iconId: "fr-icon-calendar-line" },
        { key: "liquidite", iconId: "fr-icon-refresh-line" },
      ],
      cta: { href: `${politiqueMonetairePath}/instruments-monetaires/refinancement` },
    },
    {
      key: "reservesLiquidite",
      id: "reserves-et-liquidite",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "bca" },
        { key: "comptes" },
        { key: "banques" },
        { key: "marcheInterbancaire" },
        { key: "liquidite" },
      ],
      cta: { href: `${systemeFinancierPath}/reserves` },
    },
    {
      key: "operationsExceptionnelles",
      id: "operations-exceptionnelles",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      notice: true,
      cta: { href: `${politiqueMonetairePath}/publications` },
    },
    {
      key: "interventionsMarches",
      id: "interventions-sur-les-marches",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "politiqueMonetaire", iconId: "fr-icon-scales-3-line" },
        { key: "reserves", iconId: "fr-icon-money-euro-circle-line" },
        { key: "stabiliteFinanciere", iconId: "fr-icon-shield-line" },
        { key: "operationsDeMarche", iconId: "fr-icon-line-chart-line" },
      ],
      cta: { href: `${marchesFinanciersPath}` },
    },
    {
      key: "conditionsMonetaires",
      id: "gestion-des-conditions-monetaires",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "liquidite", href: `${systemeFinancierPath}/liquidite` },
        { key: "credit", href: `${banquesPath}` },
      ],
      links: [
        { key: "decisions", href: `${politiqueMonetairePath}/decisions` },
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "donnees", href: `${monnaiePath}/donnees-monetaires` },
      ],
    },
    {
      key: "cadreOperationnel",
      id: "cadre-operationnel",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "acteurs" },
        { key: "procedures" },
        { key: "conditions" },
        { key: "garanties" },
        { key: "documentation" },
      ],
      links: [
        { key: "operations", href: `${politiqueMonetairePath}/instruments-monetaires/operations-de-marche` },
        { key: "refinancement", href: `${politiqueMonetairePath}/instruments-monetaires/refinancement` },
        { key: "reserve", href: `${politiqueMonetairePath}/instruments-monetaires/reserve-obligatoire` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;