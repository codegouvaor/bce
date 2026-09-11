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
    {
      key: "techniques",
      id: "les-techniques-de-contrefacon",
      subtle: true,
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "elements",
      id: "les-elements-de-securite",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "filigrane", iconId: "fr-icon-search-line" },
        { key: "fenetre", iconId: "fr-icon-eye-line" },
        { key: "relief", iconId: "fr-icon-hand-sanitizer-line" },
        { key: "uv", iconId: "fr-icon-sun-line" },
      ],
    },
    {
      key: "sanctions",
      id: "les-sanctions",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
    },
    {
      key: "cooperation",
      id: "la-cooperation-institutionnelle",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "signalement",
      id: "signaler-un-faux-billet",
      subtle: true,
      lead: true,
      steps: [
        { key: "verifier" },
        { key: "nePasUtiliser" },
        { key: "remettre" },
        { key: "signaler" },
      ],
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;