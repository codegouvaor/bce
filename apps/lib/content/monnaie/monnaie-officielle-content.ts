import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “La monnaie officielle” — structure only.
 * Strings resolve from `pages.monnaie.sub.monnaieOfficielle.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const monnaieOfficielleContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/la-monnaie-astorienne/unite-monetaire`,
  },
  sections: [
    {
      key: "cadre",
      id: "monnaie-de-la-republique",
      lead: true,
      paragraphCount: 3,
      notice: true,
    },
    {
      key: "coursLegal",
      id: "cours-legal",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
    },
    {
      key: "enPratique",
      id: "en-pratique",
      cards: [
        { key: "payer", iconId: "fr-icon-bank-card-line" },
        { key: "etrePaye", iconId: "fr-icon-check-line" },
        { key: "epargner", iconId: "fr-icon-shield-line" },
        { key: "echanger", iconId: "fr-icon-global-line" },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;