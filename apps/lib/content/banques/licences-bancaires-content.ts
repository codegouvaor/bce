import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les licences bancaires” —
 * structure only. Strings resolve from `pages.banques.sub.licencesBancaires.*`.
 *
 * The page explains the different levels of authorisation that may exist
 * within the Astorian banking framework. Categories are presented as
 * general institutional types — no definitive legal classification is
 * invented.
 */
const banquesPath = sectionPaths.banques;

export const licencesBancairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/agrements-et-licences/demande-d-agrement`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-licences",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-draft-line" },
        { key: "importance", iconId: "fr-icon-shield-line" },
        { key: "categories", iconId: "fr-icon-stack-line" },
        { key: "controle", iconId: "fr-icon-search-line" },
      ],
    },
    {
      key: "bancaire",
      id: "la-licence-bancaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "activites" },
        { key: "exigences" },
        { key: "particularites" },
      ],
    },
    {
      key: "specialisee",
      id: "la-licence-specialisee",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "activites" },
        { key: "limites" },
        { key: "perimetre" },
      ],
    },
    {
      key: "paiement",
      id: "l-autorisation-de-paiement",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "activites" },
        { key: "conditions" },
        { key: "particularites" },
      ],
    },
    {
      key: "autres",
      id: "les-autres-autorisations",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "epargne", iconId: "fr-icon-shield-line" },
        { key: "transfert", iconId: "fr-icon-refresh-line" },
        { key: "gestion", iconId: "fr-icon-settings-5-line" },
        { key: "conseil", iconId: "fr-icon-user-line" },
      ],
      notice: true,
    },
    {
      key: "evolution",
      id: "l-evolution-des-licences",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      cta: { href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
    },
    {
      key: "tableau",
      id: "comparer-les-types",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
    },
    {
      key: "consulter",
      id: "consulter-les-informations",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "conditions", href: `${banquesPath}/agrements-et-licences/conditions-d-agrement` },
        { key: "demande", href: `${banquesPath}/agrements-et-licences/demande-d-agrement` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;