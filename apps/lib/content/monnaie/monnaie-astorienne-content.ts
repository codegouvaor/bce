import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “La monnaie astorienne” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.laMonnaieAstorienne.*` and `pages.monnaie.related.*`).
 */
const monnaiePath = sectionPaths.monnaie;

export const monnaieAstorienneContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "definition",
      id: "monnaie-definition",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "unite", iconId: "fr-icon-scales-3-line" },
        { key: "echange", iconId: "fr-icon-arrow-right-line" },
        { key: "reserve", iconId: "fr-icon-shield-line" },
      ],
    },
    {
      key: "official",
      id: "monnaie-officielle",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      table: { headerCount: 2, rowCells: [2, 2, 2, 2, 2, 2], note: true },
    },
    {
      key: "emission",
      id: "monnaie-emission",
      lead: true,
      paragraphCount: 2,
      cta: { href: `${sectionPaths.banqueCentrale}/presentation/missions` },
    },
    {
      key: "cadre",
      id: "monnaie-cadre",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "independance", iconId: "fr-icon-government-line" },
        { key: "pouvoirLiberatoire", iconId: "fr-icon-check-line" },
        { key: "stabilite", iconId: "fr-icon-shield-line" },
        { key: "protection", iconId: "fr-icon-lock-line" },
      ],
    },
    {
      key: "politique",
      id: "monnaie-politique",
      lead: true,
      paragraphCount: 2,
      cta: { href: sectionPaths.politiqueMonetaire },
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;