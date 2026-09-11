import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les textes applicables” —
 * structure only. Strings resolve from `pages.banques.sub.textesApplicables.*`.
 *
 * This page is the documentary library of the bancaire regulation theme.
 * It documents the categories of texts without publishing fictitious
 * documents.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const textesApplicablesContent = {
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
      id: "comprendre-les-textes",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-file-text-line" },
        { key: "hierarchie", iconId: "fr-icon-stack-line" },
        { key: "acces", iconId: "fr-icon-global-line" },
        { key: "actualisation", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "reglements",
      id: "les-reglements",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "nature" },
        { key: "portee" },
        { key: "effet" },
      ],
    },
    {
      key: "decisions",
      id: "les-decisions",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "nature" },
        { key: "portee" },
        { key: "destinataires" },
      ],
    },
    {
      key: "instructions",
      id: "les-instructions",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "nature" },
        { key: "portee" },
        { key: "cibles" },
      ],
    },
    {
      key: "cadres",
      id: "les-cadres",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "guides",
      id: "les-guides-et-documents-techniques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "recherche",
      id: "rechercher-un-texte",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "reglementation", href: `${banquesPath}/reglementation-bancaire` },
        { key: "etablissements", href: `${banquesPath}/reglementation-bancaire/informations-pour-les-etablissements` },
        { key: "amsf", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
      ],
    },
    {
      key: "references",
      id: "references",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      notice: true,
      links: [
        { key: "banqueCentrale", href: banqueCentralePath },
        { key: "normes", href: `${banquesPath}/reglementation-bancaire/normes-prudentielles` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;