import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the section landing page “Monnaie” (`/monnaie`).
 *
 * Structure only: every display string is resolved from the message catalogs
 * (`pages.monnaie.section.*` and `pages.monnaie.related.*`) by
 * `lib/monnaie-localize.ts`. Hrefs, icons and figure values are structural
 * data; figures are demonstration data until the official BCA data ships.
 */
const monnaiePath = sectionPaths.monnaie;

export const monnaieSectionContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/la-monnaie-astorienne`,
  },
  sections: [
    {
      key: "pillars",
      id: "monnaie-piliers",
      lead: true,
      tiles: [
        { key: "laMonnaieAstorienne", href: `${monnaiePath}/la-monnaie-astorienne`, iconId: "fr-icon-money-euro-circle-line" },
        { key: "billetsEtPieces", href: `${monnaiePath}/billets-et-pieces`, iconId: "fr-icon-bank-card-line" },
        { key: "circulationMonetaire", href: `${monnaiePath}/circulation-monetaire`, iconId: "fr-icon-refresh-line" },
        { key: "donneesMonetaires", href: `${monnaiePath}/donnees-monetaires`, iconId: "fr-icon-database-line" },
      ],
    },
    {
      key: "institution",
      id: "monnaie-bca",
      subtle: true,
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "emission", iconId: "fr-icon-printer-line" },
        { key: "stabilite", iconId: "fr-icon-shield-line" },
        { key: "confiance", iconId: "fr-icon-lock-line" },
      ],
      cta: { href: sectionPaths.politiqueMonetaire },
    },
    {
      key: "figures",
      id: "monnaie-en-chiffres",
      lead: true,
      statGrid: [
        { key: "taux", href: `${sectionPaths.politiqueMonetaire}/taux-directeurs` },
        { key: "inflation", href: `${sectionPaths.politiqueMonetaire}/publications` },
        { key: "m3", href: `${monnaiePath}/donnees-monetaires` },
        { key: "fiduciaire", href: `${monnaiePath}/donnees-monetaires` },
      ],
      notice: true,
    },
    {
      key: "institutionLink",
      id: "monnaie-institution",
      subtle: true,
      lead: true,
      cta: { href: sectionPaths.banqueCentrale },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;