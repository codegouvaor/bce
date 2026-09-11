import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Le registre des établissements agréés” —
 * structure only. Strings resolve from `pages.banques.sub.registreDesEtablissementsAgrees.*`.
 *
 * This page is the future entry point of the official register of authorised
 * banking and financial institutions. Today, no establishment is published: the
 * table and crystal cells are placeholders fed by the future official data, and
 * the section documents the data model (name, type, status, licence, activity,
 * date) without inventing any institution.
 */
const banquesPath = sectionPaths.banques;

export const registreDesEtablissementsAgreesContent = {
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
      id: "comprendre-le-registre",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "public", iconId: "fr-icon-global-line" },
        { key: "verification", iconId: "fr-icon-search-line" },
        { key: "confiance", iconId: "fr-icon-shield-line" },
        { key: "actualite", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "perimetre",
      id: "le-perimetre-du-registre",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "recherche",
      id: "rechercher-un-etablissement",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "nom", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "categorie", href: `${banquesPath}/etablissements-bancaires/categories-d-etablissements` },
        { key: "statut", href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
        { key: "licence", href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
      ],
    },
    {
      key: "donnees",
      id: "les-donnees-du-registre",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "nom" },
        { key: "type" },
        { key: "statut" },
        { key: "licence" },
        { key: "numero" },
        { key: "date" },
      ],
    },
    {
      key: "activites",
      id: "les-activites-autorisees",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "depots", iconId: "fr-icon-money-euro-circle-line" },
        { key: "credits", iconId: "fr-icon-bank-card-line" },
        { key: "paiements", iconId: "fr-icon-refresh-line" },
        { key: "epargne", iconId: "fr-icon-shield-line" },
      ],
      notice: true,
    },
    {
      key: "etat",
      id: "etat-de-l-autorisation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 3, rowCells: [3, 3, 3], note: true },
    },
    {
      key: "verifier",
      id: "verifier-une-licence",
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "identifier" },
        { key: "consulter" },
        { key: "verifier" },
        { key: "obtenir" },
      ],
      cta: { href: `${banquesPath}/agrements-et-licences` },
    },
    {
      key: "publication",
      id: "la-publication-du-registre",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      notice: true,
      links: [
        { key: "criteres", href: `${banquesPath}/agrements-et-licences/conditions-d-agrement` },
        { key: "licences", href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
        { key: "retrait", href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;