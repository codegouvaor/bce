import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les pièces” — structure only.
 * Strings resolve from `pages.monnaie.sub.pieces.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const piecesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces/billets`,
  },
  sections: [
    {
      key: "laGamme",
      id: "la-gamme",
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3, 3, 3], note: true },
      paragraphCount: 1,
    },
    {
      key: "caracteristiques",
      id: "caracteristiques",
      subtle: true,
      cards: [
        { key: "materiaux", iconId: "fr-icon-shield-line" },
        { key: "gravures", iconId: "fr-icon-coin-line" },
        { key: "bimetal", iconId: "fr-icon-stack-line" },
        { key: "accessibilite", iconId: "fr-icon-accessibility-line" },
      ],
    },
    {
      key: "usages",
      id: "usages",
      paragraphCount: 2,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;