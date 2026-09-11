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
  ],
  related: monnaieRelatedDestinations(),
} as const;