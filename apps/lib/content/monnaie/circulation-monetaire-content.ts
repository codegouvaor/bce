import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Circulation monétaire” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.circulationMonetaire.*` and `pages.monnaie.related.*`).
 *
 * Eight sections build the systemic view of how money moves through the
 * Astorian economy: creation, issue, the cash circuit, scriptural money, the
 * role of banks, withdrawal and destruction, and how circulation is measured.
 */
const monnaiePath = sectionPaths.monnaie;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const circulationMonetaireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires`,
    noticeKey: "hero.notice",
    statKey: "hero.stat",
  },
  sections: [
    {
      key: "vision",
      id: "comprendre-la-circulation",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "creation", iconId: "fr-icon-printer-line" },
        { key: "especes", iconId: "fr-icon-coin-fill" },
        { key: "scripturale", iconId: "fr-icon-bank-card-line" },
        { key: "mesure", iconId: "fr-icon-database-line" },
      ],
    },
    {
      key: "creation",
      id: "creation-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2], note: true },
    },
    {
      key: "emissionEspeces",
      id: "emission-des-especes",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "tresor", iconId: "fr-icon-money-euro-circle-line" },
        { key: "banques", iconId: "fr-icon-building-line" },
      ],
      cta: { href: `${monnaiePath}/billets-et-pieces` },
    },
    {
      key: "circulationEspeces",
      id: "circulation-des-especes",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "bca" },
        { key: "banques" },
        { key: "usagers" },
        { key: "banquesRetour" },
        { key: "bcaRetour" },
      ],
      notice: true,
    },
    {
      key: "scripturale",
      id: "monnaie-scripturale",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "banques",
      id: "role-des-banques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "depots", iconId: "fr-icon-bank-line" },
        { key: "credit", iconId: "fr-icon-draft-line" },
        { key: "liquidite", iconId: "fr-icon-refresh-line" },
        { key: "reserves", iconId: "fr-icon-shield-line" },
      ],
      cta: { href: `${systemeFinancierPath}/reserves` },
    },
    {
      key: "retrait",
      id: "retrait-et-destruction",
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "circulation" },
        { key: "retour" },
        { key: "controle" },
        { key: "retrait" },
        { key: "destruction" },
        { key: "remplacement" },
      ],
      notice: true,
    },
    {
      key: "mesurer",
      id: "mesurer-la-circulation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "encours", href: `${monnaiePath}/donnees-monetaires` },
        { key: "valeur", href: `${monnaiePath}/donnees-monetaires` },
        { key: "evolution", href: `${monnaiePath}/donnees-monetaires` },
        { key: "part", href: `${monnaiePath}/donnees-monetaires` },
      ],
      cta: { href: `${monnaiePath}/donnees-monetaires` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;