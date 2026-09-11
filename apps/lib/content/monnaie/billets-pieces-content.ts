import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Billets et pièces” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.billetsEtPieces.*` and `pages.monnaie.related.*`).
 * Denomination values are structural demonstration data.
 */
const monnaiePath = sectionPaths.monnaie;

export const billetsPiecesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire`,
  },
  sections: [
    {
      key: "billets",
      id: "billets-en-circulation",
      lead: true,
      denominations: [
        { key: "b10", value: "10", tag: true, motif: true },
        { key: "b20", value: "20", tag: true, motif: true },
        { key: "b50", value: "50", tag: true, motif: true },
        { key: "b100", value: "100", tag: true, motif: true },
        { key: "b200", value: "200", tag: true, motif: true },
      ],
      notice: true,
    },
    {
      key: "pieces",
      id: "pieces-en-circulation",
      subtle: true,
      lead: true,
      denominations: [
        { key: "p5", value: "5" },
        { key: "p10", value: "10" },
        { key: "p20", value: "20" },
        { key: "p50", value: "50" },
        { key: "p1", value: "1" },
        { key: "p2", value: "2" },
      ],
    },
    {
      key: "caracteristiques",
      id: "caracteristiques-et-securite",
      lead: true,
      cards: [
        { key: "papier", iconId: "fr-icon-file-text-line" },
        { key: "relief", iconId: "fr-icon-eye-line" },
        { key: "filigrane", iconId: "fr-icon-search-line" },
        { key: "fenetre", iconId: "fr-icon-eye-line" },
        { key: "impression", iconId: "fr-icon-printer-line" },
        { key: "fluorescence", iconId: "fr-icon-sun-line" },
        { key: "microtexte", iconId: "fr-icon-zoom-in-line" },
        { key: "barcode", iconId: "fr-icon-barcode-line" },
      ],
    },
    {
      key: "authentifier",
      id: "authentifier-un-billet",
      subtle: true,
      lead: true,
      steps: [{ key: "toucher" }, { key: "regarder" }, { key: "incliner" }, { key: "controler" }],
    },
    {
      key: "pratiques",
      id: "informations-pratiques",
      lead: true,
      paragraphCount: 3,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;