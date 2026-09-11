import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the section landing page “Banques” (`/banques`).
 * Structure only: every display string is resolved from the message catalogs
 * (`pages.banques.section.*` and `pages.banques.related.*`). Hrefs, icons and
 * figure values are structural data; figures are placeholders until the
 * official BCA data ships. The page presents the Banques theme as the
 * “encadrer” mission of the portal: it opens the four theme pages and
 * establishes the perimeter of the Astorian banking system.
 */
const banquesPath = sectionPaths.banques;
const monnaiePath = sectionPaths.monnaie;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const paiementsPath = sectionPaths.paiements;
const systemeFinancierPath = sectionPaths.systemeFinancier;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const banquesSectionContent = {
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
      key: "pillars",
      id: "banques-piliers",
      lead: true,
      tiles: [
        { key: "etablissementsBancaires", href: `${banquesPath}/etablissements-bancaires`, iconId: "fr-icon-building-line" },
        { key: "agrementsEtLicences", href: `${banquesPath}/agrements-et-licences`, iconId: "fr-icon-file-text-line" },
        { key: "reglementationBancaire", href: `${banquesPath}/reglementation-bancaire`, iconId: "fr-icon-book-2-line" },
        { key: "supervision", href: `${banquesPath}/supervision`, iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "perimetre",
      id: "banques-perimetre",
      subtle: true,
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "etablissements", iconId: "fr-icon-building-line" },
        { key: "agrements", iconId: "fr-icon-draft-line" },
        { key: "cadre", iconId: "fr-icon-scales-3-line" },
        { key: "supervision", iconId: "fr-icon-shield-line" },
      ],
      cta: { href: `${banquesPath}/supervision` },
    },
    {
      key: "figures",
      id: "banques-en-chiffres",
      lead: true,
      statGrid: [
        { key: "etablissements", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "licences", href: `${banquesPath}/agrements-et-licences` },
        { key: "agrements", href: `${banquesPath}/agrements-et-licences/retrait-d-agrement` },
        { key: "supervision", href: `${banquesPath}/supervision` },
      ],
      notice: true,
    },
    {
      key: "encadrement",
      id: "banques-encadrement",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "etablissement" },
        { key: "agrement" },
        { key: "cadre" },
        { key: "supervision" },
        { key: "confiance" },
      ],
      cta: { href: `${banquesPath}/agrements-et-licences` },
    },
    {
      key: "institutions",
      id: "banques-institutions",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "republique", iconId: "fr-icon-government-line" },
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "amsf", iconId: "fr-icon-shield-line" },
        { key: "etablissements", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "assertion",
      id: "banques-distinction",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "bca" },
        { key: "amsf" },
        { key: "gouvernement" },
        { key: "ordonnancement" },
      ],
      notice: true,
    },
    {
      key: "essentiels",
      id: "banques-essentiels",
      lead: true,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "licences", href: `${banquesPath}/agrements-et-licences/licences-bancaires` },
        { key: "prudentielles", href: `${banquesPath}/reglementation-bancaire/normes-prudentielles` },
        { key: "roleBca", href: `${banquesPath}/supervision/role-de-la-bca` },
      ],
    },
    {
      key: "navigation",
      id: "banques-navigation",
      subtle: true,
      lead: true,
      links: [
        { key: "monnaie", href: monnaiePath },
        { key: "politiqueMonetaire", href: politiqueMonetairePath },
        { key: "paiements", href: paiementsPath },
        { key: "systemeFinancier", href: systemeFinancierPath },
        { key: "banqueCentrale", href: banqueCentralePath },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;