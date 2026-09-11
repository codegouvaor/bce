import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Publications monétaires” — structure only.
 * Strings resolve from `pages.monnaie.sub.publicationsMonetaires.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const publicationsMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/donnees-monetaires/statistiques-monetaires`,
  },
  sections: [
    {
      key: "lesPublications",
      id: "les-publications",
      lead: true,
      cards: [
        { key: "rapports", iconId: "fr-icon-book-2-line" },
        { key: "series", iconId: "fr-icon-file-text-line" },
        { key: "methodes", iconId: "fr-icon-draft-line" },
        { key: "ouvertes", iconId: "fr-icon-database-line" },
      ],
    },
    {
      key: "calendrier",
      id: "calendrier",
      subtle: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "acceder",
      id: "acceder",
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "rapports",
      id: "les-rapports-monetaires",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "series",
      id: "les-series-statistiques",
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "methodes",
      id: "la-methodologie",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 3,
    },
    {
      key: "formats",
      id: "les-formats",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "pdf", iconId: "fr-icon-file-text-line" },
        { key: "csv", iconId: "fr-icon-database-line" },
        { key: "api", iconId: "fr-icon-qr-code-line" },
        { key: "docs", iconId: "fr-icon-book-2-line" },
      ],
    },
    {
      key: "abonnement",
      id: "rester-informe",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cta: { href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;