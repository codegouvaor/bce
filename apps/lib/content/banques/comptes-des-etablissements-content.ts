import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les comptes des établissements” —
 * structure only. Strings resolve from `pages.banques.sub.comptesDesEtablissements.*`.
 *
 * The page explains the relationship between banks and the BCA, through
 * accounts held at the central bank.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const comptesDesEtablissementsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-comptes",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-bank-line" },
        { key: "role", iconId: "fr-icon-money-euro-circle-line" },
        { key: "acces", iconId: "fr-icon-shield-line" },
        { key: "condition", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "nature",
      id: "la-nature-du-compte",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "type" },
        { key: "titulaire" },
        { key: "usage" },
        { key: "solde" },
      ],
    },
    {
      key: "utilisation",
      id: "l-utilisation-du-compte",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "liquidite", iconId: "fr-icon-money-euro-circle-line" },
        { key: "paiements", iconId: "fr-icon-refresh-line" },
        { key: "obligations", iconId: "fr-icon-shield-line" },
        { key: "reporting", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "reserves",
      id: "les-reserves-obligatoires",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${systemeFinancierPath}/reserves/reserves-obligatoires` },
    },
    {
      key: "refinancement",
      id: "le-refinancement",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "operations", iconId: "fr-icon-arrow-right-line" },
        { key: "facilites", iconId: "fr-icon-refresh-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
        { key: "conditions", iconId: "fr-icon-scales-3-line" },
      ],
      cta: { href: systemeFinancierPath },
    },
    {
      key: "systeme",
      id: "les-systemes-de-paiement",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "interbancaire", iconId: "fr-icon-refresh-line" },
        { key: "reglement", iconId: "fr-icon-check-line" },
        { key: "securite", iconId: "fr-icon-shield-line" },
        { key: "infrastructure", iconId: "fr-icon-bank-line" },
      ],
      cta: { href: sectionPaths.paiements },
    },
    {
      key: "obligations",
      id: "les-obligations-institutionnelles",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "orienter",
      id: "pour-aller-plus-loin",
      subtle: true,
      lead: true,
      links: [
        { key: "banqueCentrale", href: banqueCentralePath },
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "agrements", href: `${banquesPath}/agrements-et-licences` },
        { key: "politiqueMonetaire", href: sectionPaths.politiqueMonetaire },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;