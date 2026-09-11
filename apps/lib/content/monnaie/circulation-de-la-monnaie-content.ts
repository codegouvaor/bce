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
    {
      key: "acteurs",
      id: "les-acteurs",
      subtle: true,
      lead: true,
      cards: [
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "banques", iconId: "fr-icon-bank-line" },
        { key: "entreprises", iconId: "fr-icon-building-line" },
        { key: "menages", iconId: "fr-icon-user-line" },
      ],
    },
    {
      key: "fiduciaire",
      id: "la-monnaie-fiduciaire",
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
    },
    {
      key: "scripturale",
      id: "la-monnaie-scripturale",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
    },
    {
      key: "mouvements",
      id: "les-mouvements-entre-etablissements",
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "bca" },
        { key: "banques" },
        { key: "usagers" },
        { key: "banquesRetour" },
        { key: "bcaRetour" },
      ],
    },
    {
      key: "mesure",
      id: "mesurer-la-circulation",
      subtle: true,
      lead: true,
      statGrid: [
        { key: "encours" },
        { key: "valeur" },
        { key: "evolution" },
        { key: "part" },
      ],
      cta: { href: `${monnaiePath}/donnees-monetaires` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;