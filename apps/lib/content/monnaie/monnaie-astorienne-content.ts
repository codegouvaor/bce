import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “La monnaie astorienne” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.laMonnaieAstorienne.*` and `pages.monnaie.related.*`).
 *
 * The page is organised in eight sections, each using the block best suited to
 * its subject (prose, feature cards, reference facts, table, bullets, figures,
 * flow diagram, links) so the page never repeats the same component.
 */
const monnaiePath = sectionPaths.monnaie;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

export const monnaieAstorienneContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces`,
    noticeKey: "hero.notice",
    statKey: "hero.stat",
  },
  sections: [
    {
      key: "definition",
      id: "monnaie-definition",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "unite", iconId: "fr-icon-scales-3-line" },
        { key: "echange", iconId: "fr-icon-arrow-right-line" },
        { key: "reserve", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "unite",
      id: "monnaie-unite-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "nom" },
        { key: "symbole" },
        { key: "unite" },
        { key: "subdivisions" },
        { key: "affichage" },
        { key: "usages" },
      ],
    },
    {
      key: "official",
      id: "monnaie-officielle",
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2, 2], note: true },
    },
    {
      key: "emission",
      id: "monnaie-emission",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "billets", iconId: "fr-icon-file-text-line" },
        { key: "pieces", iconId: "fr-icon-coin-fill" },
        { key: "monnaieCentrale", iconId: "fr-icon-bank-line" },
        { key: "monnaieBancaire", iconId: "fr-icon-building-line" },
      ],
      cta: { href: `${sectionPaths.banqueCentrale}/presentation/missions` },
    },
    {
      key: "pouvoirLiberatoire",
      id: "monnaie-pouvoir-liberatoire",
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "cadre",
      id: "monnaie-cadre",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "republique", iconId: "fr-icon-government-line" },
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "tresor", iconId: "fr-icon-money-euro-circle-line" },
        { key: "banques", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "stabilite",
      id: "monnaie-stabilite",
      lead: true,
      paragraphCount: 2,
      statGrid: [{ key: "inflation" }, { key: "taux" }, { key: "m3" }],
      notice: true,
      cta: { href: politiqueMonetairePath },
    },
    {
      key: "economie",
      id: "monnaie-economie",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "monnaie" },
        { key: "banques" },
        { key: "paiements" },
        { key: "economie" },
        { key: "politique" },
      ],
      links: [
        { key: "billetsEtPieces", href: `${monnaiePath}/billets-et-pieces` },
        { key: "circulation", href: `${monnaiePath}/circulation-monetaire` },
        { key: "donnees", href: `${monnaiePath}/donnees-monetaires` },
        { key: "politique", href: politiqueMonetairePath },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;
