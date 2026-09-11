import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Les émissions monétaires” — structure only.
 * Strings resolve from `pages.monnaie.sub.emissionsMonetaires.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const emissionsMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire/circulation-de-la-monnaie`,
  },
  sections: [
    {
      key: "quiCreeLaMonnaie",
      id: "qui-cree-la-monnaie",
      paragraphCount: 2,
    },
    {
      key: "lesFormes",
      id: "les-formes-de-l-emission",
      subtle: true,
      lead: true,
      cards: [
        { key: "fiduciaire", iconId: "fr-icon-bank-card-line" },
        { key: "scripturale", iconId: "fr-icon-database-line" },
        { key: "banqueCentrale", iconId: "fr-icon-bank-line" },
        { key: "electronique", iconId: "fr-icon-qr-code-line" },
      ],
    },
    {
      key: "roleBca",
      id: "le-role-de-la-bca",
      paragraphCount: 2,
      cta: { href: sectionPaths.politiqueMonetaire },
    },
    {
      key: "fiduciaire",
      id: "l-emission-fiduciaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "scripturale",
      id: "la-creation-scripturale",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "origine" },
        { key: "mecanisme" },
        { key: "destruction" },
      ],
    },
    {
      key: "credit",
      id: "le-role-du-credit",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
    },
    {
      key: "limites",
      id: "les-limites-de-la-creation-monetaire",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "demande", iconId: "fr-icon-user-line" },
        { key: "prudentiel", iconId: "fr-icon-lock-line" },
        { key: "politique", iconId: "fr-icon-government-line" },
      ],
      notice: true,
    },
    {
      key: "approfondir",
      id: "approfondir",
      subtle: true,
      lead: true,
      links: [
        { key: "circulation", href: `${monnaiePath}/circulation-monetaire/circulation-de-la-monnaie` },
        { key: "bca", href: `${monnaiePath}/la-monnaie-astorienne/emise-par-la-bca` },
        { key: "donnees", href: `${monnaiePath}/donnees-monetaires` },
      ],
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;