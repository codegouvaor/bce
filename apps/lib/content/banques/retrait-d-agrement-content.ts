import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Le retrait d'agrément” —
 * structure only. Strings resolve from `pages.banques.sub.retraitDAgrement.*`.
 */
const banquesPath = sectionPaths.banques;

export const retraitDAgrementContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/agrements-et-licences`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-le-retrait",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-scales-3-line" },
        { key: "gravite", iconId: "fr-icon-error-line" },
        { key: "consequences", iconId: "fr-icon-shield-line" },
        { key: "protection", iconId: "fr-icon-lock-line" },
      ],
    },
    {
      key: "motifs",
      id: "les-motifs-de-retrait",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "suspension",
      id: "la-suspension",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "effets" },
        { key: "conditions" },
        { key: "delai" },
      ],
      notice: true,
    },
    {
      key: "procedure",
      id: "la-procedure",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "alerte" },
        { key: "miseEnDemeure" },
        { key: "decision" },
        { key: "notification" },
        { key: "publication" },
      ],
    },
    {
      key: "consequences",
      id: "les-consequences-pour-l-etablissement",
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "volontaire",
      id: "la-renonciation-volontaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "protection",
      id: "la-protection-des-clients",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "devoirs" },
        { key: "information" },
        { key: "cloture" },
        { key: "recours" },
      ],
    },
    {
      key: "consulter",
      id: "consulter-le-registre",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "agrements", href: `${banquesPath}/agrements-et-licences` },
        { key: "controles", href: `${banquesPath}/supervision/controles-et-inspections` },
        { key: "sanctions", href: `${banquesPath}/supervision/sanctions-et-mesures` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;