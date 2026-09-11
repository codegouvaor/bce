import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Réclamations” — structure only.
 * Strings resolve from `pages.banques.sub.reclamations.*`.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const reclamationsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/etablissements-bancaires`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-reclamations",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-file-text-line" },
        { key: "droit", iconId: "fr-icon-scales-3-line" },
        { key: "procedure", iconId: "fr-icon-arrow-right-line" },
        { key: "suivi", iconId: "fr-icon-check-line" },
      ],
    },
    {
      key: "avant",
      id: "avant-de-reclamer",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "procedure",
      id: "la-procedure-de-reclamation",
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "etablissement" },
        { key: "ecrit" },
        { key: "traitement" },
        { key: "reponse" },
        { key: "recours" },
      ],
    },
    {
      key: "mediation",
      id: "la-mediation",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "role" },
        { key: "condition" },
        { key: "procedure" },
        { key: "decision" },
      ],
    },
    {
      key: "normes",
      id: "les-normes-de-traitement",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2], note: true },
    },
    {
      key: "etablissement",
      id: "le-role-de-l-etablissement",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "guides",
      id: "guides-et-ressources",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "conditions", href: `${banquesPath}/reglementation-bancaire/informations-pour-les-etablissements` },
        { key: "competences", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
        { key: "roleBca", href: `${banquesPath}/supervision/role-de-la-bca` },
      ],
    },
    {
      key: "orientation",
      id: "orientations",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      notice: true,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "banqueCentrale", href: banqueCentralePath },
        { key: "etablissements", href: `${banquesPath}/etablissements-bancaires` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;