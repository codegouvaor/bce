import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Contrôles et inspections” —
 * structure only. Strings resolve from `pages.banques.sub.controlesEtInspections.*`.
 */
const banquesPath = sectionPaths.banques;

export const controlesEtInspectionsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/supervision`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-controles",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-search-line" },
        { key: "objectif", iconId: "fr-icon-shield-line" },
        { key: "portee", iconId: "fr-icon-stack-line" },
        { key: "moyens", iconId: "fr-icon-database-line" },
      ],
    },
    {
      key: "controles",
      id: "les-types-de-controles",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "documentaire", iconId: "fr-icon-file-text-line" },
        { key: "surPlace", iconId: "fr-icon-building-line" },
        { key: "thematique", iconId: "fr-icon-book-2-line" },
        { key: "definitive", iconId: "fr-icon-bar-chart-line" },
      ],
    },
    {
      key: "donnees",
      id: "les-donnees-et-les-indicateurs",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "reporting" },
        { key: "indicateurs" },
        { key: "alertes" },
        { key: "analyse" },
      ],
    },
    {
      key: "inspection",
      id: "les-inspections",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "annonce" },
        { key: "deroulement" },
        { key: "conclusions" },
        { key: "suivi" },
      ],
    },
    {
      key: "suivi",
      id: "le-suivi-des-controles",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "resultats",
      id: "les-resultats",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "amsf",
      id: "la-cooperation-bca-amsf",
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${banquesPath}/supervision/role-de-l-amsf` },
    },
    {
      key: "liens",
      id: "liens-utiles",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "supervision", href: `${banquesPath}/supervision` },
        { key: "obligations", href: `${banquesPath}/etablissements-bancaires` },
        { key: "sanctions", href: `${banquesPath}/supervision/sanctions-et-mesures` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;