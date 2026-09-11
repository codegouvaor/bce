import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les conditions d'agrément” —
 * structure only. Strings resolve from `pages.banques.sub.conditionsDAgrement.*`.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const conditionsDAgrementContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/agrements-et-licences/demande-d-agrement`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-conditions",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-scales-3-line" },
        { key: "principe", iconId: "fr-icon-shield-line" },
        { key: "juridique", iconId: "fr-icon-file-text-line" },
        { key: "controle", iconId: "fr-icon-search-line" },
      ],
    },
    {
      key: "capital",
      id: "exigences-de-capital",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "gouvernance",
      id: "gouvernance-et-organisation",
      lead: true,
      paragraphCount: 1,
      bulletCount: 5,
    },
    {
      key: "systemes",
      id: "les-systemes-informatiques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "risques",
      id: "la-gestion-des-risques",
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "credit", iconId: "fr-icon-bank-card-line" },
        { key: "marche", iconId: "fr-icon-line-chart-line" },
        { key: "liquidite", iconId: "fr-icon-money-euro-circle-line" },
        { key: "operationnel", iconId: "fr-icon-settings-5-line" },
        { key: "conformite", iconId: "fr-icon-check-line" },
      ],
    },
    {
      key: "model",
      id: "le-modele-economique",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "actionnariat",
      id: "l-actionnariat-et-le-controle",
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "approfondir",
      id: "pour-approfondir",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "processus", href: `${banquesPath}/agrements-et-licences/demande-d-agrement` },
        { key: "conditions", href: `${banquesPath}/agrements-et-licences/conditions-d-agrement` },
        { key: "banqueCentrale", href: banqueCentralePath },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;