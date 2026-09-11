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
  ],
  related: monnaieRelatedDestinations(),
} as const;