import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Circulation monétaire” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.circulationMonetaire.*` and `pages.monnaie.related.*`).
 */
const monnaiePath = sectionPaths.monnaie;

export const circulationMonetaireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires`,
  },
  sections: [
    {
      key: "cycle",
      id: "cycle-de-vie",
      lead: true,
      cards: [
        { key: "emission", iconId: "fr-icon-printer-line" },
        { key: "miseEnCirculation", iconId: "fr-icon-arrow-right-line" },
        { key: "circulation", iconId: "fr-icon-bank-card-line" },
        { key: "retrait", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "emissionMonetaire",
      id: "emission-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "banques", iconId: "fr-icon-bank-line" },
        { key: "bca", iconId: "fr-icon-government-line" },
        { key: "etat", iconId: "fr-icon-landmark-line" },
      ],
    },
    {
      key: "masseMonetaire",
      id: "masse-monetaire",
      lead: true,
      statGrid: [
        { key: "m3" },
        { key: "croissance" },
        { key: "fiduciaire" },
        { key: "scriptural" },
      ],
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
      cta: { href: `${monnaiePath}/donnees-monetaires` },
    },
    {
      key: "retrait",
      id: "retrait-des-billets",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;