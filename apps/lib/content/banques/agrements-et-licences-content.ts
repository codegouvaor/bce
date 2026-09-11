import { platformPath, sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Agréments et licences” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.banques.agrementsEtLicences.*` and `pages.banques.related.*`).
 *
 * The page explains how an establishment may be authorised to operate. It is
 * organised in eight sections following the editorial rhythm
 * “comprendre → conditions → procédure → décision → registre”. No factual
 * licence regime is invented: categories and conditions are presented as
 * general principles awaiting the official rules.
 */
const banquesPath = sectionPaths.banques;

export const agrementsEtLicencesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/agrements-et-licences/conditions-d-agrement`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-l-agrement-bancaire",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "definition", iconId: "fr-icon-draft-line" },
        { key: "necessite", iconId: "fr-icon-shield-line" },
        { key: "activites", iconId: "fr-icon-bank-card-line" },
        { key: "intervenants", iconId: "fr-icon-government-line" },
      ],
    },
    {
      key: "quiPeutDemander",
      id: "qui-peut-demander-un-agrement",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 7,
    },
    {
      key: "typesLicences",
      id: "types-de-licences",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "bancaire", iconId: "fr-icon-bank-line" },
        { key: "specialisee", iconId: "fr-icon-settings-5-line" },
        { key: "paiement", iconId: "fr-icon-refresh-line" },
        { key: "autres", iconId: "fr-icon-file-text-line" },
      ],
      cta: { href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
    },
    {
      key: "deposerDemande",
      id: "deposer-une-demande",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "projet" },
        { key: "dossier" },
        { key: "instruction" },
        { key: "evaluation" },
        { key: "decision" },
        { key: "agrement" },
        { key: "registre" },
      ],
      cta: { href: `${banquesPath}/agrements-et-licences/demande-d-agrement` },
    },
    {
      key: "conditions",
      id: "conditions-d-autorisation",
      lead: true,
      paragraphCount: 2,
      bulletCount: 9,
    },
    {
      key: "decision",
      id: "decision-et-publication",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      steps: [
        { key: "decision" },
        { key: "notification" },
        { key: "publication" },
        { key: "registre" },
        { key: "conditions" },
        { key: "restrictions" },
      ],
    },
    {
      key: "modification",
      id: "modification-retrait-et-suspension",
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2, 2, 2], note: true },
      cta: { href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
    },
    {
      key: "consulter",
      id: "consulter-les-agrements",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "licences", href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
        { key: "demande", href: `${banquesPath}/agrements-et-licences/demande-d-agrement` },
        { key: "plateforme", href: platformPath },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;