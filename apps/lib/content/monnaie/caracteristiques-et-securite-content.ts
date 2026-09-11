import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Caractéristiques et sécurité” — structure only.
 * Strings resolve from `pages.monnaie.sub.caracteristiquesEtSecurite.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const caracteristiquesEtSecuriteContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces/authentifier-un-billet`,
  },
  sections: [
    {
      key: "lesElements",
      id: "les-elements",
      lead: true,
      cards: [
        { key: "papier", iconId: "fr-icon-file-text-line" },
        { key: "filigrane", iconId: "fr-icon-search-line" },
        { key: "fenetre", iconId: "fr-icon-eye-line" },
        { key: "reliefs", iconId: "fr-icon-hand-sanitizer-line" },
        { key: "coincidence", iconId: "fr-icon-printer-line" },
        { key: "micro", iconId: "fr-icon-zoom-in-line" },
        { key: "uv", iconId: "fr-icon-sun-line" },
        { key: "barcode", iconId: "fr-icon-barcode-line" },
      ],
    },
    {
      key: "parTransparence",
      id: "par-transparence",
      subtle: true,
      paragraphCount: 2,
    },
    {
      key: "signesDAlerte",
      id: "signes-d-alerte",
      bulletCount: 4,
      notice: true,
    },
    {
      key: "leToucher",
      id: "le-toucher",
      lead: true,
      paragraphCount: 2,
      bulletCount: 2,
    },
    {
      key: "leRegard",
      id: "le-regard",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "leMouvement",
      id: "le-mouvement",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "ultraviolet",
      id: "sous-lumiere-ultraviolette",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "references",
      id: "les-references-officielles",
      lead: true,
      links: [
        { key: "billets", href: `${monnaiePath}/billets-et-pieces/billets` },
        { key: "authentifier", href: `${monnaiePath}/billets-et-pieces/authentifier-un-billet` },
        { key: "fausseMonnaie", href: `${monnaiePath}/circulation-monetaire/lutte-contre-la-fausse-monnaie` },
      ],
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;