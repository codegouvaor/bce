import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Sanctions et mesures” — structure only.
 * Strings resolve from `pages.banques.sub.sanctionsEtMesures.*`.
 *
 * The page presents the principles governing corrective measures. No precise
 * sanction is invented; measures are described as general institutional
 * principles awaiting the official framework.
 */
const banquesPath = sectionPaths.banques;

export const sanctionsEtMesuresContent = {
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
      id: "comprendre-les-sanctions",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-scales-3-line" },
        { key: "gradation", iconId: "fr-icon-stack-line" },
        { key: "proportionalite", iconId: "fr-icon-check-line" },
        { key: "transparence", iconId: "fr-icon-global-line" },
      ],
    },
    {
      key: "mesures",
      id: "les-mesures-correctives",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "correction", iconId: "fr-icon-refresh-line" },
        { key: "preventives", iconId: "fr-icon-shield-line" },
        { key: "restrictions", iconId: "fr-icon-lock-line" },
        { key: "redressement", iconId: "fr-icon-file-text-line" },
      ],
    },
    {
      key: "gradation",
      id: "la-gradation-des-mesures",
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "alerte" },
        { key: "correction" },
        { key: "restriction" },
        { key: "suspension" },
        { key: "retrait" },
      ],
    },
    {
      key: "procedure",
      id: "la-procedure",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "constat" },
        { key: "notification" },
        { key: "observation" },
        { key: "decision" },
        { key: "publication" },
      ],
    },
    {
      key: "integration",
      id: "l-integration-prudentielle",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "competence",
      id: "la-competence",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
    },
    {
      key: "consequences",
      id: "les-consequences",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "sanction" },
        { key: "publication" },
        { key: "registre" },
        { key: "recours" },
      ],
    },
    {
      key: "liens",
      id: "liens-utiles",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "supervision", href: `${banquesPath}/supervision` },
        { key: "retrait", href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
        { key: "roleAmsf", href: `${banquesPath}/supervision/role-de-l-amsf` },
        { key: "controles", href: `${banquesPath}/supervision/controles-et-inspections` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;