import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Réglementation bancaire” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.banques.reglementationBancaire.*` and `pages.banques.related.*`).
 *
 * The page explains the framework within which banks exercise their
 * activities. It follows the editorial rhythm
 * “cadre → exigences → risques → protection → règles”. No prudential ratio is
 * invented: categories are presented as general families awaiting the official
 * framework.
 */
const banquesPath = sectionPaths.banques;
const paiementsPath = sectionPaths.paiements;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const reglementationBancaireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/reglementation-bancaire/normes-prudentielles`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "cadre",
      id: "le-cadre-reglementaire-bancaire",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "pourquoi", iconId: "fr-icon-scales-3-line" },
        { key: "protection", iconId: "fr-icon-shield-line" },
        { key: "systeme", iconId: "fr-icon-stack-line" },
        { key: "evolution", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "prudentielles",
      id: "exigences-prudentielles",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 6,
      cta: { href: `${banquesPath}/reglementation-bancaire/normes-prudentielles` },
    },
    {
      key: "risques",
      id: "gestion-des-risques",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "credit", iconId: "fr-icon-bank-card-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
        { key: "liquidite", iconId: "fr-icon-money-euro-circle-line" },
        { key: "operationnel", iconId: "fr-icon-settings-5-line" },
        { key: "informatique", iconId: "fr-icon-database-line" },
        { key: "cyber", iconId: "fr-icon-shield-line" },
        { key: "systemique", iconId: "fr-icon-pulse-line" },
      ],
    },
    {
      key: "clients",
      id: "protection-des-clients",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 7,
      cta: { href: `${banquesPath}/etablissements-bancaires/reclamations` },
    },
    {
      key: "securite",
      id: "securite-et-resilience",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "cybersecurite", iconId: "fr-icon-shield-line" },
        { key: "continuite", iconId: "fr-icon-refresh-line" },
        { key: "reprise", iconId: "fr-icon-time-line" },
        { key: "paiements", iconId: "fr-icon-bank-card-line" },
        { key: "incidents", iconId: "fr-icon-error-line" },
      ],
      cta: { href: `${paiementsPath}/systemes-de-paiement` },
    },
    {
      key: "declaratives",
      id: "obligations-declaratives",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "reporting" },
        { key: "prudentielles" },
        { key: "statistiques" },
        { key: "frequence" },
        { key: "qualite" },
      ],
      notice: true,
    },
    {
      key: "textes",
      id: "regles-et-textes-applicables",
      lead: true,
      paragraphCount: 1,
      bulletCount: 6,
      links: [
        { key: "textes", href: `${banquesPath}/reglementation-bancaire/textes-applicables` },
        { key: "etablissements", href: `${banquesPath}/reglementation-bancaire/informations-pour-les-etablissements` },
        { key: "amsf", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
        { key: "systemeFinancier", href: systemeFinancierPath },
      ],
    },
    {
      key: "evolution",
      id: "evolution-de-la-reglementation",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "nouveautes" },
        { key: "consultations" },
        { key: "changements" },
        { key: "calendrier" },
      ],
      notice: true,
    },
  ],
  related: banquesRelatedDestinations(),
} as const;