import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Établissements bancaires” — structure
 * only. Every display string is resolved from the message catalogs
 * (`pages.banques.etablissementsBancaires.*` and `pages.banques.related.*`).
 *
 * The page is organised in eight sections, each using the block best suited to
 * its subject (prose, feature cards, reference facts, table, flow diagram,
 * links) so the page never repeats the same component. The “registre” section
 * is designed to host the future official register of authorised institutions
 * without inventing data.
 */
const banquesPath = sectionPaths.banques;

export const etablissementsBancairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/etablissements-bancaires/categories-d-etablissements`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-etablissements-bancaires",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "role", iconId: "fr-icon-building-line" },
        { key: "economie", iconId: "fr-icon-line-chart-line" },
        { key: "types", iconId: "fr-icon-stack-line" },
        { key: "relation", iconId: "fr-icon-user-line" },
      ],
    },
    {
      key: "banquesEnAstoria",
      id: "les-banques-en-astoria",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
    },
    {
      key: "typesEtablissements",
      id: "les-differents-types-d-etablissements",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "commerciales", iconId: "fr-icon-bank-card-line" },
        { key: "publiques", iconId: "fr-icon-government-line" },
        { key: "specialisees", iconId: "fr-icon-settings-5-line" },
        { key: "paiement", iconId: "fr-icon-refresh-line" },
      ],
      cta: { href: `${banquesPath}/etablissements-bancaires/categories-d-etablissements` },
    },
    {
      key: "servicesBancaires",
      id: "les-services-bancaires",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "comptes", iconId: "fr-icon-bank-card-line" },
        { key: "depots", iconId: "fr-icon-money-euro-circle-line" },
        { key: "credits", iconId: "fr-icon-line-chart-line" },
        { key: "paiements", iconId: "fr-icon-refresh-line" },
        { key: "financement", iconId: "fr-icon-building-line" },
        { key: "epargne", iconId: "fr-icon-shield-line" },
        { key: "numerique", iconId: "fr-icon-database-line" },
      ],
    },
    {
      key: "relationsBca",
      id: "les-relations-avec-la-bca",
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "banque" },
        { key: "bca" },
        { key: "liquidite" },
        { key: "reserves" },
        { key: "paiements" },
      ],
      facts: [
        { key: "comptes" },
        { key: "liquidite" },
        { key: "reserves" },
        { key: "refinancement" },
      ],
      cta: { href: `${banquesPath}/etablissements-bancaires/comptes-des-etablissements` },
    },
    {
      key: "obligations",
      id: "les-obligations-des-etablissements",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 7,
      cta: { href: `${banquesPath}/reglementation-bancaire` },
    },
    {
      key: "registre",
      id: "registre-des-etablissements",
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 6, rowCells: [6, 6, 6], note: true },
      notice: true,
    },
    {
      key: "trouver",
      id: "trouver-un-etablissement",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "licences", href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
        { key: "competences", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
        { key: "reclamations", href: `${banquesPath}/etablissements-bancaires/reclamations` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;