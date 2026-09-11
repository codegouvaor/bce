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
    {
      key: "serie",
      id: "le-retrait-d-une-serie",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "delai",
      id: "les-delais",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "retrait" },
        { key: "echange" },
        { key: "annonce" },
      ],
    },
    {
      key: "remplacement",
      id: "le-remplacement",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "destruction",
      id: "la-destruction",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "approfondir",
      id: "approfondir",
      subtle: true,
      lead: true,
      links: [
        { key: "circulation", href: `${monnaiePath}/circulation-monetaire/circulation-de-la-monnaie` },
        { key: "authentifier", href: `${monnaiePath}/billets-et-pieces/authentifier-un-billet` },
        { key: "fausseMonnaie", href: `${monnaiePath}/circulation-monetaire/lutte-contre-la-fausse-monnaie` },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;