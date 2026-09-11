import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the section landing page “Politique monétaire”
 * (`/politique-monetaire`). Structure only: every display string is resolved
 * from the message catalogs (`pages.politiqueMonetaire.section.*` and
 * `pages.politiqueMonetaire.related.*`). Hrefs, icons and figure values are
 * structural data; figures are placeholders until the official BCA data ships.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;
const banquesPath = sectionPaths.banques;
const marchesFinanciersPath = sectionPaths.marchesFinanciers;
const systemeFinancierPath = sectionPaths.systemeFinancier;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const politiqueMonetaireSectionContent = {
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
      key: "pillars",
      id: "politique-monetaire-piliers",
      lead: true,
      tiles: [
        { key: "decisions", href: `${politiqueMonetairePath}/decisions`, iconId: "fr-icon-calendar-event-line" },
        { key: "tauxDirecteurs", href: `${politiqueMonetairePath}/taux-directeurs`, iconId: "fr-icon-line-chart-line" },
        { key: "instrumentsMonetaires", href: `${politiqueMonetairePath}/instruments-monetaires`, iconId: "fr-icon-equalizer-line" },
        { key: "publications", href: `${politiqueMonetairePath}/publications`, iconId: "fr-icon-book-2-line" },
      ],
    },
    {
      key: "institution",
      id: "politique-monetaire-bca",
      subtle: true,
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "independance", iconId: "fr-icon-shield-line" },
        { key: "transparence", iconId: "fr-icon-file-text-line" },
        { key: "responsabilite", iconId: "fr-icon-scales-3-line" },
      ],
      cta: { href: banqueCentralePath },
    },
    {
      key: "figures",
      id: "politique-monetaire-en-chiffres",
      lead: true,
      statGrid: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "prochaineReunion", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
        { key: "inflation", href: `${politiqueMonetairePath}/publications` },
        { key: "dernieresDecisions", href: `${politiqueMonetairePath}/decisions` },
      ],
      notice: true,
    },
    {
      key: "mandat",
      id: "politique-monetaire-mandat",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "stabilitePrix", iconId: "fr-icon-scales-3-line" },
        { key: "stabiliteMonetaire", iconId: "fr-icon-money-euro-circle-line" },
        { key: "stabiliteFinanciere", iconId: "fr-icon-shield-line" },
        { key: "soutienEconomie", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "transmission",
      id: "politique-monetaire-transmission",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "decision" },
        { key: "taux" },
        { key: "liquidite" },
        { key: "banques" },
        { key: "economie" },
        { key: "prix" },
      ],
      cta: { href: `${politiqueMonetairePath}/instruments-monetaires` },
    },
    {
      key: "cadre",
      id: "politique-monetaire-cadre",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "republique", iconId: "fr-icon-government-line" },
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "banques", iconId: "fr-icon-building-line" },
        { key: "marches", iconId: "fr-icon-line-chart-line" },
      ],
    },
    {
      key: "essentiels",
      id: "politique-monetaire-essentiels",
      subtle: true,
      lead: true,
      links: [
        { key: "derniereDecision", href: `${politiqueMonetairePath}/decisions` },
        { key: "tauxDirecteur", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "calendrier", href: `${politiqueMonetairePath}/decisions/calendrier-des-decisions` },
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
      ],
    },
    {
      key: "navigation",
      id: "politique-monetaire-navigation",
      lead: true,
      links: [
        { key: "monnaie", href: monnaiePath },
        { key: "banques", href: banquesPath },
        { key: "marchesFinanciers", href: marchesFinanciersPath },
        { key: "systemeFinancier", href: systemeFinancierPath },
      ],
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;