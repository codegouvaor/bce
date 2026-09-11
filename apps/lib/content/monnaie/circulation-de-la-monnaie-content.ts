import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “La circulation de la monnaie” — structure only.
 * Strings resolve from `pages.monnaie.sub.circulationDeLaMonnaie.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const circulationDeLaMonnaieContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire/emissions-monetaires`,
  },
  sections: [
    {
      key: "leCircuit",
      id: "le-circuit",
      paragraphCount: 2,
    },
    {
      key: "especesEtScripturale",
      id: "especes-et-scripturale",
      subtle: true,
      lead: true,
      cards: [
        { key: "especes", iconId: "fr-icon-bank-card-line" },
        { key: "scripturale", iconId: "fr-icon-database-line" },
        { key: "electronique", iconId: "fr-icon-qr-code-line" },
        { key: "bca", iconId: "fr-icon-bank-line" },
      ],
    },
    {
      key: "vitesse",
      id: "vitesse",
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;