import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “Les objectifs monétaires” — structure
 * only. Strings resolve from `pages.politiqueMonetaire.sub.objectifsMonetaires.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const banqueCentralePath = sectionPaths.banqueCentrale;

export const objectifsMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/decisions`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "mandat",
      id: "le-mandat-statutaire",
      lead: true,
      paragraphCount: 2,
      cta: { href: `${banqueCentralePath}/presentation/missions` },
    },
    {
      key: "stabilitePrix",
      id: "la-stabilite-des-prix",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "pouvoirAchat", iconId: "fr-icon-money-euro-circle-line" },
        { key: "anticipations", iconId: "fr-icon-compass-3-line" },
        { key: "decision", iconId: "fr-icon-scales-3-line" },
      ],
    },
    {
      key: "stabiliteMonetaire",
      id: "la-stabilite-monetaire",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "uniteCompte", iconId: "fr-icon-money-euro-circle-line" },
        { key: "confiance", iconId: "fr-icon-shield-line" },
        { key: "circulation", iconId: "fr-icon-refresh-line" },
      ],
      bulletCount: 2,
    },
    {
      key: "stabiliteFinanciere",
      id: "la-stabilite-financiere",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      notice: true,
    },
    {
      key: "conditionsMonetaires",
      id: "les-conditions-monetaires",
      lead: true,
      paragraphCount: 1,
      facts: [
        { key: "taux" },
        { key: "liquidite" },
        { key: "credit" },
        { key: "financement" },
      ],
    },
    {
      key: "cadre",
      id: "le-cadre-institutionnel",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      cards: [
        { key: "constitution", iconId: "fr-icon-government-line" },
        { key: "loi", iconId: "fr-icon-book-2-line" },
        { key: "bca", iconId: "fr-icon-bank-line" },
        { key: "republique", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "hierarchie",
      id: "la-hierarchie-des-objectifs",
      lead: true,
      paragraphCount: 1,
      steps: [
        { key: "stabilitePrix" },
        { key: "stabiliteMonetaire" },
        { key: "stabiliteFinanciere" },
        { key: "conditionsMonetaires" },
      ],
    },
    {
      key: "renduCompte",
      id: "le-rendu-compte",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
        { key: "communiques", href: `${politiqueMonetairePath}/decisions/communiques` },
        { key: "gouvernance", href: `${banqueCentralePath}/gouvernance` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;