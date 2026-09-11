import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les informations pour les établissements”
 * — structure only. Strings resolve from
 * `pages.banques.sub.informationsPourLesEtablissements.*`.
 *
 * This page serves as a practical guide for banking institutions about
 * the obligations and references relevant to their operations.
 */
const banquesPath = sectionPaths.banques;

export const informationsPourLesEtablissementsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/reglementation-bancaire`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-informations",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "definition", iconId: "fr-icon-file-text-line" },
        { key: "destinataires", iconId: "fr-icon-building-line" },
        { key: "utilite", iconId: "fr-icon-shield-line" },
        { key: "actualisation", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "obligations",
      id: "les-obligations-reglementaires",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "reporting",
      id: "le-reporting-reglementaire",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "definition" },
        { key: "type" },
        { key: "frequence" },
        { key: "modalites" },
      ],
    },
    {
      key: "securite",
      id: "la-securite-et-la-continuite",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 5,
    },
    {
      key: "normes",
      id: "les-normes-a-observer",
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "prudentielles", href: `${banquesPath}/reglementation-bancaire/normes-prudentielles` },
        { key: "textes", href: `${banquesPath}/reglementation-bancaire/textes-applicables` },
        { key: "risques", href: `${banquesPath}/reglementation-bancaire` },
      ],
    },
    {
      key: "ressources",
      id: "les-ressources-disponibles",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "guides", iconId: "fr-icon-book-2-line" },
        { key: "webinaires", iconId: "fr-icon-mail-line" },
        { key: "documentation", iconId: "fr-icon-file-text-line" },
        { key: "contacts", iconId: "fr-icon-global-line" },
      ],
    },
    {
      key: "amsf",
      id: "les-competences-de-l-amsf",
      lead: true,
      paragraphCount: 2,
      notice: true,
      cta: { href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
    },
    {
      key: "orientation",
      id: "orientations",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "reglementation", href: `${banquesPath}/reglementation-bancaire` },
        { key: "supervision", href: `${banquesPath}/supervision` },
        { key: "etablissements", href: `${banquesPath}/etablissements-bancaires` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;