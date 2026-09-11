import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Le pouvoir libératoire” — structure only.
 * Strings resolve from `pages.monnaie.sub.pouvoirLiberatoire.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const pouvoirLiberatoireContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/la-monnaie-astorienne/monnaie-officielle`,
  },
  sections: [
    {
      key: "definition",
      id: "definition",
      paragraphCount: 2,
    },
    {
      key: "laLoi",
      id: "ce-que-prevoit-la-loi",
      subtle: true,
      lead: true,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "enPratique",
      id: "en-pratique",
      cards: [
        { key: "acheter", iconId: "fr-icon-bank-card-line" },
        { key: "rembourser", iconId: "fr-icon-check-line" },
        { key: "recevoir", iconId: "fr-icon-shield-line" },
        { key: "echanger", iconId: "fr-icon-refresh-line" },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;