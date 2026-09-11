import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les encours monétaires” — structure only.
 * Strings resolve from `pages.monnaie.sub.encoursMonetaires.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const encoursMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires/agregats-monetaires`,
  },
  sections: [
    {
      key: "enChiffres",
      id: "en-chiffres",
      cards: [
        { key: "masse", iconId: "fr-icon-database-line" },
        { key: "fiduciaire", iconId: "fr-icon-bank-card-line" },
        { key: "credit", iconId: "fr-icon-bank-line" },
        { key: "reserves", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "evolution",
      id: "evolution",
      subtle: true,
      table: { headerCount: 4, rowCells: [4, 4, 4, 4], note: true },
    },
    {
      key: "lireUnEncours",
      id: "lire-un-encours",
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;