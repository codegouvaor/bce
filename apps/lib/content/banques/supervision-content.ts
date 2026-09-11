import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Supervision” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.banques.supervision.*` and `pages.banques.related.*`).
 *
 * The page explains how the stability and the compliance of the banking system
 * are monitored. It respects the institutional separation between the BCA and
 * the AMSF: the BCA acts within its own perimeter, the AMSF within its
 * independent mandate. It follows the editorial rhythm
 * “comprendre → responsabilités → surveillance → risques → crise → données”.
 */
const banquesPath = sectionPaths.banques;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const paiementsPath = sectionPaths.paiements;
const systemeFinancierPath = sectionPaths.systemeFinancier;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const supervisionContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/supervision/role-de-la-bca`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-la-supervision-bancaire",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "pourquoi", iconId: "fr-icon-scales-3-line" },
        { key: "risques", iconId: "fr-icon-pulse-line" },
        { key: "objectifs", iconId: "fr-icon-shield-line" },
        { key: "difference", iconId: "fr-icon-equalizer-line" },
      ],
    },
    {
      key: "roleBca",
      id: "le-role-de-la-bca",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 6,
      cta: { href: `${banquesPath}/supervision/role-de-la-bca` },
    },
    {
      key: "roleAmsf",
      id: "le-role-de-l-amsf",
      lead: true,
      paragraphCount: 3,
      facts: [
        { key: "bca" },
        { key: "amsf" },
        { key: "separation" },
        { key: "cooperation" },
      ],
      cta: { href: `${banquesPath}/supervision/role-de-l-amsf` },
    },
    {
      key: "surveillance",
      id: "surveillance-des-etablissements",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "donnees", iconId: "fr-icon-database-line" },
        { key: "reporting", iconId: "fr-icon-file-text-line" },
        { key: "indicateurs", iconId: "fr-icon-bar-chart-line" },
        { key: "inspections", iconId: "fr-icon-search-line" },
        { key: "controles", iconId: "fr-icon-checkbox-circle-line" },
        { key: "echanges", iconId: "fr-icon-global-line" },
      ],
      cta: { href: `${banquesPath}/supervision/controles-et-inspections` },
    },
    {
      key: "risques",
      id: "les-risques-suivis",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "liquidite", iconId: "fr-icon-money-euro-circle-line" },
        { key: "solvabilite", iconId: "fr-icon-scales-3-line" },
        { key: "credit", iconId: "fr-icon-bank-card-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
        { key: "operationnel", iconId: "fr-icon-settings-5-line" },
        { key: "cyber", iconId: "fr-icon-shield-line" },
        { key: "concentration", iconId: "fr-icon-stack-line" },
        { key: "systemique", iconId: "fr-icon-pulse-line" },
      ],
      notice: true,
    },
    {
      key: "intervention",
      id: "intervention-et-mesures-correctives",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 6,
      notice: true,
    },
    {
      key: "crise",
      id: "crise-bancaire-et-stabilite-financiere",
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "detection" },
        { key: "coordination" },
        { key: "liquidite" },
        { key: "continuite" },
        { key: "resolution" },
        { key: "protection" },
      ],
      links: [
        { key: "politiqueMonetaire", href: politiqueMonetairePath },
        { key: "systemeFinancier", href: systemeFinancierPath },
        { key: "paiements", href: paiementsPath },
        { key: "banqueCentrale", href: banqueCentralePath },
      ],
    },
    {
      key: "donnees",
      id: "donnees-et-rapports-de-supervision",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      statGrid: [
        { key: "rapports", href: `${banquesPath}/supervision` },
        { key: "indicateurs", href: `${banquesPath}/supervision` },
        { key: "publications", href: `${banquesPath}/supervision` },
        { key: "decisions", href: `${banquesPath}/supervision/sanctions-et-mesures` },
      ],
      notice: true,
    },
  ],
  related: banquesRelatedDestinations(),
} as const;