import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Les catégories d'établissements” —
 * structure only. Strings resolve from `pages.banques.sub.categoriesDEtablissements.*`.
 *
 * The page presents the categories of the Astorian banking system as
 * institutional categories — no definitive legal classification is invented.
 */
const banquesPath = sectionPaths.banques;

export const categoriesDEtablissementsContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/etablissements-bancaires`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-les-categories",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "classification", iconId: "fr-icon-stack-line" },
        { key: "activites", iconId: "fr-icon-bank-card-line" },
        { key: "statut", iconId: "fr-icon-file-text-line" },
        { key: "perimetre", iconId: "fr-icon-global-line" },
      ],
    },
    {
      key: "commerciales",
      id: "les-banques-commerciales",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "clients" },
        { key: "activites" },
        { key: "contreparties" },
        { key: "cadre" },
      ],
    },
    {
      key: "publiques",
      id: "les-banques-publiques",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "statut" },
        { key: "missions" },
        { key: "gouvernance" },
        { key: "specificites" },
      ],
    },
    {
      key: "specialisees",
      id: "les-etablissements-specialises",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "financement", iconId: "fr-icon-building-line" },
        { key: "epargne", iconId: "fr-icon-shield-line" },
        { key: "intermediation", iconId: "fr-icon-line-chart-line" },
        { key: "specialites", iconId: "fr-icon-settings-5-line" },
      ],
    },
    {
      key: "paiement",
      id: "les-etablissements-de-paiement",
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      cta: { href: `${sectionPaths.paiements}/systemes-de-paiement` },
    },
    {
      key: "autres",
      id: "les-autres-categories",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      notice: true,
    },
    {
      key: "regime",
      id: "le-regime-applicable",
      lead: true,
      paragraphCount: 1,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "evolution",
      id: "l-evolution-des-categories",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      notice: true,
      links: [
        { key: "agrements", href: `${banquesPath}/agrements-et-licences` },
        { key: "registre", href: `${banquesPath}/etablissements-bancaires/registre-des-etablissements-agrees` },
        { key: "normes", href: `${banquesPath}/reglementation-bancaire/normes-prudentielles` },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;