import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Le rôle de l'AMSF” — structure only.
 * Strings resolve from `pages.banques.sub.roleDeLAmsf.*`.
 *
 * The page presents the AMSF as the independent financial supervisory
 * authority, distinct from the BCA, respecting the institutional separation
 * of the Astorian model.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const roleDeLAmsfContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-le-role-de-l-amsf",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "autorite", iconId: "fr-icon-government-line" },
        { key: "independance", iconId: "fr-icon-shield-line" },
        { key: "mandat", iconId: "fr-icon-scales-3-line" },
        { key: "unite", iconId: "fr-icon-global-line" },
      ],
    },
    {
      key: "separation",
      id: "la-separation-avec-la-bca",
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
      key: "mission",
      id: "la-mission",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "autorisations",
      id: "les-autorisations",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "surveillance",
      id: "la-surveillance",
      lead: true,
      paragraphCount: 2,
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
      key: "cooperation",
      id: "la-cooperation",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "bca" },
        { key: "autres" },
        { key: "international" },
        { key: "echanges" },
      ],
    },
    {
      key: "liens",
      id: "liens-et-references",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "competences", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
        { key: "supervision", href: `${banquesPath}/supervision` },
        { key: "banqueCentrale", href: banqueCentralePath },
        { key: "controles", href: `${banquesPath}/supervision/controles-et-inspections` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;