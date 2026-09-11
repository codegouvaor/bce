import { sectionPaths } from "@/lib/site-structure";
import { banquesRelatedDestinations } from "@/lib/content/banques/banques-related";

/**
 * Content configuration of the page “Le rôle de la BCA” — structure only.
 * Strings resolve from `pages.banques.sub.roleDeLaBca.*`.
 *
 * The page describes the responsibilities of the BCA within the Astorian
 * institutional model: monetary stability, liquidity, infrastructures and
 * systemic risks within its mandate. It explicitly does not attribute to the
 * BCA the powers that belong to the AMSF.
 */
const banquesPath = sectionPaths.banques;
const banqueCentralePath = sectionPaths.banqueCentrale;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const systemeFinancierPath = sectionPaths.systemeFinancier;
const paiementsPath = sectionPaths.paiements;

export const roleDeLaBcaContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${banquesPath}/supervision`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "comprendre",
      id: "comprendre-le-role-de-la-bca",
      lead: true,
      paragraphCount: 3,
      cards: [
        { key: "stabilite", iconId: "fr-icon-shield-line" },
        { key: "liquidite", iconId: "fr-icon-money-euro-circle-line" },
        { key: "infrastructures", iconId: "fr-icon-bank-line" },
        { key: "periode", iconId: "fr-icon-pulse-line" },
      ],
    },
    {
      key: "monetaire",
      id: "la-stabilite-monetaire",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cta: { href: politiqueMonetairePath },
    },
    {
      key: "liquidite",
      id: "la-liquidite",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
      cta: { href: systemeFinancierPath },
    },
    {
      key: "infrastructures",
      id: "les-infrastructures",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      bulletCount: 3,
      cta: { href: paiementsPath },
    },
    {
      key: "acces",
      id: "l-acces-aux-operations",
      lead: true,
      paragraphCount: 2,
      facts: [
        { key: "titulaires" },
        { key: "compte" },
        { key: "conditions" },
        { key: "regles" },
      ],
    },
    {
      key: "systemique",
      id: "les-risques-systemiques",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "detection", iconId: "fr-icon-pulse-line" },
        { key: "coordination", iconId: "fr-icon-global-line" },
        { key: "prevention", iconId: "fr-icon-shield-line" },
        { key: "gestion", iconId: "fr-icon-refresh-line" },
      ],
    },
    {
      key: "surveillance",
      id: "la-surveillance",
      lead: true,
      paragraphCount: 2,
      bulletCount: 4,
    },
    {
      key: "frontieres",
      id: "les-frontieres-avec-l-amsf",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
      links: [
        { key: "amsf", href: `${banquesPath}/supervision/role-de-l-amsf` },
        { key: "repartition", href: `${banquesPath}/reglementation-bancaire/competences-de-l-amsf` },
        { key: "banqueCentrale", href: banqueCentralePath },
      ],
    },
  ],
  related: banquesRelatedDestinations(),
} as const;