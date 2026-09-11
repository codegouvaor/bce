import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Billets et pièces” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.billetsEtPieces.*` and `pages.monnaie.related.*`).
 * Denomination values are structural demonstration data, marked as such.
 */
const monnaiePath = sectionPaths.monnaie;

export const billetsPiecesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire`,
    noticeKey: "hero.notice",
    statKey: "hero.stat",
  },
  sections: [
    {
      key: "especes",
      id: "especes-en-circulation",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "billets", href: `${monnaiePath}/donnees-monetaires` },
        { key: "pieces", href: `${monnaiePath}/donnees-monetaires` },
        { key: "coupures", href: `${monnaiePath}/donnees-monetaires` },
      ],
      notice: true,
    },
    {
      key: "billets",
      id: "billets-en-circulation",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      denominations: [
        { key: "b10", value: "10", tag: true, motif: true },
        { key: "b20", value: "20", tag: true, motif: true },
        { key: "b50", value: "50", tag: true, motif: true },
        { key: "b100", value: "100", tag: true, motif: true },
        { key: "b200", value: "200", tag: true, motif: true },
      ],
    },
    {
      key: "pieces",
      id: "pieces-en-circulation",
      lead: true,
      paragraphCount: 1,
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
      id: "caracteristiques",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2, 2, 2], note: true },
    },
    {
      key: "securite",
      id: "securite",
      lead: true,
      paragraphCount: 1,
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
      paragraphCount: 1,
      steps: [{ key: "toucher" }, { key: "regarder" }, { key: "incliner" }, { key: "controler" }],
    },
    {
      key: "cycle",
      id: "emission-retrait-remplacement",
      lead: true,
      paragraphCount: 2,
      flow: [
        { key: "emission" },
        { key: "circulation" },
        { key: "tri" },
        { key: "retrait" },
        { key: "remplacement" },
      ],
      notice: true,
    },
    {
      key: "pratiques",
      id: "informations-pratiques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "conservation", iconId: "fr-icon-lock-line" },
        { key: "acceptation", iconId: "fr-icon-check-line" },
        { key: "contrefacon", iconId: "fr-icon-shield-line" },
      ],
      links: [
        { key: "circulation", href: `${monnaiePath}/circulation-monetaire` },
        { key: "fausseMonnaie", href: `${monnaiePath}/circulation-monetaire/lutte-contre-la-fausse-monnaie` },
        { key: "retrait", href: `${monnaiePath}/circulation-monetaire/retrait-des-billets` },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;