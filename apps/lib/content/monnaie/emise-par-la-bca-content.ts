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
    {
      key: "billets",
      id: "les-billets-signature-de-la-bca",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "monnaieCentrale",
      id: "la-monnaie-de-banque-centrale",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "nature" },
        { key: "role" },
        { key: "detenteurs" },
      ],
    },
    {
      key: "comptes",
      id: "les-comptes-des-banques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "controle",
      id: "le-controle-de-la-creation-monetaire",
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "missions",
      id: "les-missions-de-la-bca",
      subtle: true,
      lead: true,
      links: [
        { key: "missions", href: `${sectionPaths.banqueCentrale}/presentation/missions` },
        { key: "politique", href: sectionPaths.politiqueMonetaire },
        { key: "circulation", href: `${monnaiePath}/circulation-monetaire` },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;