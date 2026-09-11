import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Authentifier un billet” — structure only.
 * Strings resolve from `pages.monnaie.sub.authentifierUnBillet.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const authentifierUnBilletContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces/caracteristiques-et-securite`,
  },
  sections: [
    {
      key: "lesQuatreGestes",
      id: "les-quatre-gestes",
      lead: true,
      cards: [
        { key: "toucher", iconId: "fr-icon-hand-sanitizer-line" },
        { key: "regarder", iconId: "fr-icon-eye-line" },
        { key: "incliner", iconId: "fr-icon-refresh-line" },
        { key: "controler", iconId: "fr-icon-search-line" },
      ],
    },
    {
      key: "enCasDeDoute",
      id: "en-cas-de-doute",
      subtle: true,
      paragraphCount: 2,
    },
    {
      key: "signaler",
      id: "signaler",
      bulletCount: 4,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;