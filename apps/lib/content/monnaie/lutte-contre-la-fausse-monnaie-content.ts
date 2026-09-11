import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content of the page “Lutte contre la fausse monnaie” — structure only.
 * Strings resolve from `pages.monnaie.sub.lutteContreLaFausseMonnaie.*`.
 */
const monnaiePath = sectionPaths.monnaie;

export const lutteContreLaFausseMonnaieContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/billets-et-pieces/authentifier-un-billet`,
  },
  sections: [
    {
      key: "unEnjeuDeConfiance",
      id: "un-enjeu-de-confiance",
      paragraphCount: 2,
    },
    {
      key: "lesActeurs",
      id: "les-acteurs",
      subtle: true,
      lead: true,
      cards: [
        { key: "bca", iconId: "fr-icon-government-line" },
        { key: "banques", iconId: "fr-icon-bank-line" },
        { key: "forces", iconId: "fr-icon-shield-line" },
        { key: "public", iconId: "fr-icon-user-line" },
      ],
    },
    {
      key: "queFaire",
      id: "que-faire",
      bulletCount: 4,
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;