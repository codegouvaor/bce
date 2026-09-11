import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Émise par la Banque centrale” — structure only.
 * Strings resolve from `pages.monnaie.sub.emiseParLaBca.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const emiseParLaBcaContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/la-monnaie-astorienne/pouvoir-liberatoire`,
  },
  sections: [
    {
      key: "privilege",
      id: "privilege-d-emission",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "comment",
      id: "comment-la-bca-emet",
      subtle: true,
      lead: true,
      cards: [
        { key: "billets", iconId: "fr-icon-printer-line" },
        { key: "monnaieCentrale", iconId: "fr-icon-bank-line" },
        { key: "comptes", iconId: "fr-icon-database-line" },
        { key: "controle", iconId: "fr-icon-lock-line" },
      ],
    },
    {
      key: "circuit",
      id: "le-circuit-de-l-emission",
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/circulation-monetaire` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;