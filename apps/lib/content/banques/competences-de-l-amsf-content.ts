import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les compétences de l'AMSF” —
 * structure only. Strings resolve from `pages.banques.sub.competencesDeLAmsf.*`.
 *
 * This page presents the AMSF (Autorité de la supervision financière) as an
 * independent body, distinct from the BCA, with its own regulatory and
 * supervisory mandate. The institutional separation between the BCA and
 * the AMSF is explained clearly and explicitly.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const competencesDeLAmsfContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/supervision/role-de-l-amsf`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-amsf",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "definition", iconId: "fr-icon-government-line" },
        { key: "independance", iconId: "fr-icon-shield-line" },
        { key: "mission", iconId: "fr-icon-scales-3-line" },
        { key: "difference", iconId: "fr-icon-bank-line" },
      ],
      notice: true,
    },
    {
      key: "separation",
      id: "la-separation-bca-amsf",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "bca" },
        { key: "amsf" },
        { key: "interfaces" },
        { key: "cooperation" },
      ],
    },
    {
      key: "perimetre",
      id: "le-perimetre-de-competence",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "reglementation",
      id: "la-reglementation-financiere",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "supervision",
      id: "la-supervision-financiere",
      lead: true,
      paragraphCount: 1,
      bulletCount: 5,
    },
    {
      key: "sanctions",
      id: "les-sanctions",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "interactions",
      id: "les-interactions-avec-la-bca",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "echanges" },
        { key: "partage" },
        { key: "complement" },
        { key: "independance" },
      ],
      cta: { href: banqueCentralePath },
    },
    {
      key: "ressources",
      id: "ressources-et-references",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "amsf", href: `${banquesPath}/supervision/role-de-l-amsf` },
        { key: "supervision", href: `${banquesPath}/supervision` },
        { key: "banqueCentrale", href: banqueCentralePath },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;