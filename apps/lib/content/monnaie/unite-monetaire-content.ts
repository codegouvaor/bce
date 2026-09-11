import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “L'unité monétaire” — structure only.
 * Strings resolve from `pages.monnaie.sub.uniteMonetaire.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const uniteMonetaireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/la-monnaie-astorienne/monnaie-officielle`,
  },
  sections: [
    {
      key: "leFrancEtSesSubdivisions",
      id: "le-franc-et-ses-subdivisions",
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
      paragraphCount: 1,
    },
    {
      key: "uniteDeCompte",
      id: "unite-de-compte",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/donnees-monetaires` },
    },
    {
      key: "uneUniteUnique",
      id: "une-unite-unique",
      cards: [
        { key: "simplicite", iconId: "fr-icon-check-line" },
        { key: "confiance", iconId: "fr-icon-shield-line" },
        { key: "integration", iconId: "fr-icon-global-line" },
        { key: "stabilite", iconId: "fr-icon-government-line" },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;