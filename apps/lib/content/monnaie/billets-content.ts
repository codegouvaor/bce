import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les billets” — structure only.
 * Strings resolve from `pages.monnaie.sub.billets.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const billetsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces/pieces`,
  },
  sections: [
    {
      key: "laGamme",
      id: "la-gamme",
      lead: true,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4, 4], note: true },
      paragraphCount: 1,
    },
    {
      key: "lireUnBillet",
      id: "lire-un-billet",
      subtle: true,
      lead: true,
      cards: [
        { key: "valeur", iconId: "fr-icon-money-euro-circle-line" },
        { key: "motif", iconId: "fr-icon-image-line" },
        { key: "couleur", iconId: "fr-icon-palette-line" },
        { key: "signature", iconId: "fr-icon-government-line" },
      ],
    },
    {
      key: "verifier",
      id: "verifier",
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/billets-et-pieces/authentifier-un-billet` },
    },
    {
      key: "couleurs",
      id: "les-couleurs",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "b10" },
        { key: "b20" },
        { key: "b50" },
        { key: "b100" },
        { key: "b200" },
      ],
    },
    {
      key: "format",
      id: "le-format",
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3, 3], note: true },
    },
    {
      key: "securite",
      id: "les-elements-de-securite",
      subtle: true,
      lead: true,
      cards: [
        { key: "filigrane", iconId: "fr-icon-search-line" },
        { key: "fenetre", iconId: "fr-icon-eye-line" },
        { key: "relief", iconId: "fr-icon-hand-sanitizer-line" },
        { key: "micro", iconId: "fr-icon-zoom-in-line" },
      ],
      cta: { href: `${monnaiePath}/billets-et-pieces/caracteristiques-et-securite` },
    },
    {
      key: "renouvellement",
      id: "renouvellement-des-series",
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "enSavoirPlus",
      id: "en-savoir-plus",
      subtle: true,
      lead: true,
      links: [
        { key: "pieces", href: `${monnaiePath}/billets-et-pieces/pieces` },
        { key: "authentifier", href: `${monnaiePath}/billets-et-pieces/authentifier-un-billet` },
        { key: "retrait", href: `${monnaiePath}/circulation-monetaire/retrait-des-billets` },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;