import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les statistiques monétaires” — structure only.
 * Strings resolve from `pages.monnaie.sub.statistiquesMonetaires.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const statistiquesMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires/agregats-monetaires`,
  },
  sections: [
    {
      key: "lesSeries",
      id: "les-series",
      lead: true,
      cards: [
        { key: "masse", iconId: "fr-icon-database-line" },
        { key: "fiduciaire", iconId: "fr-icon-bank-card-line" },
        { key: "credit", iconId: "fr-icon-bank-line" },
        { key: "taux", iconId: "fr-icon-line-chart-line" },
      ],
    },
    {
      key: "calendrier",
      id: "calendrier",
      subtle: true,
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "methodes",
      id: "methodes",
      paragraphCount: 2,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;