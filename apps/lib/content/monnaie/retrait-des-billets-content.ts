import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Le retrait des billets” — structure only.
 * Strings resolve from `pages.monnaie.sub.retraitDesBillets.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const retraitDesBilletsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire/circulation-de-la-monnaie`,
  },
  sections: [
    {
      key: "pourquoiRetirer",
      id: "pourquoi-retirer",
      paragraphCount: 2,
    },
    {
      key: "laProcedure",
      id: "la-procedure",
      subtle: true,
      lead: true,
      bulletCount: 5,
    },
    {
      key: "echange",
      id: "echange",
      paragraphCount: 2,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;