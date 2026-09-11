import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les agrégats monétaires” — structure only.
 * Strings resolve from `pages.monnaie.sub.agregatsMonetaires.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const agregatsMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires/encours-monetaires`,
  },
  sections: [
    {
      key: "deM0aM3",
      id: "de-m0-a-m3",
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "commentLesLire",
      id: "comment-les-lire",
      subtle: true,
      paragraphCount: 2,
    },
    {
      key: "pourquoiLesSuivre",
      id: "pourquoi-les-suivre",
      cards: [
        { key: "inflation", iconId: "fr-icon-line-chart-line" },
        { key: "credit", iconId: "fr-icon-bank-line" },
        { key: "politique", iconId: "fr-icon-government-line" },
        { key: "comparer", iconId: "fr-icon-database-line" },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;