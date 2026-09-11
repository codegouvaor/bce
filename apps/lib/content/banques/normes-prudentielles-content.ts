import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les normes prudentielles” —
 * structure only. Strings resolve from `pages.banques.sub.normesPrudentielles.*`.
 *
 * The page explains the prudential requirements of the Astorian banking system
 * as general families. No specific ratio or capital threshold is invented.
 */
const banquesPath = sectionPaths.banques;

export const normesPrudentiellesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/reglementation-bancaire`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-normes",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-scales-3-line" },
        { key: "objectif", iconId: "fr-icon-shield-line" },
        { key: "solidite", iconId: "fr-icon-stack-line" },
        { key: "prevention", iconId: "fr-icon-check-line" },
      ],
    },
    {
      key: "fondsPropres",
      id: "les-fonds-propres",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "role" },
        { key: "categories" },
        { key: "niveau" },
      ],
      notice: true,
    },
    {
      key: "liquidite",
      id: "les-exigences-de-liquidite",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "objectif" },
        { key: "ratios" },
        { key: "horizon" },
      ],
    },
    {
      key: "solvabilite",
      id: "les-ratios-de-solvabilite",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "definition" },
        { key: "composants" },
        { key: "niveaux" },
        { key: "observation" },
      ],
      notice: true,
    },
    {
      key: "exposition",
      id: "les-expositions-et-concentrations",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "absorption",
      id: "la-capacite-d-absorption-des-pertes",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "role" },
        { key: "instrument" },
      ],
    },
    {
      key: "evolution",
      id: "l-evolution-des-normes",
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "analyse" },
        { key: "consultation" },
        { key: "publication" },
        { key: "application" },
      ],
      links: [
        { key: "textes", href: `${banquesPath}/reglementation-bancaire/textes-applicables` },
        { key: "etablissements", href: `${banquesPath}/reglementation-bancaire/informations-pour-les-etablissements` },
        { key: "amsf", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
      ],
    },
    {
      key: "relie",
      id: "en-lien-avec",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      notice: true,
      links: [
        { key: "risques", href: `${banquesPath}/reglementation-bancaire` },
        { key: "supervision", href: `${banquesPath}/supervision` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;