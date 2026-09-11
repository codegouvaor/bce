import { sectionPaths } from "@/lib/site-structure";
import { politiqueMonetaireRelatedDestinations } from "@/lib/content/politique-monetaire/politique-monetaire-related";

/**
 * Content configuration of the page “La répercussion sur le crédit” —
 * structure only. Strings resolve from
 * `pages.politiqueMonetaire.sub.repercussionSurLeCredit.*`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const monnaiePath = sectionPaths.monnaie;

export const repercussionSurLeCreditContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${politiqueMonetairePath}/taux-directeurs`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "principe",
      id: "le-principe-de-la-transmission",
      lead: true,
      paragraphCount: 2,
    },
    {
      key: "canalTaux",
      id: "le-canal-des-taux",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      flow: [
        { key: "taux" },
        { key: "financement" },
        { key: "credit" },
        { key: "demande" },
        { key: "economie" },
      ],
    },
    {
      key: "creditMenages",
      id: "le-credit-aux-menages",
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "immobilier", iconId: "fr-icon-home-4-line" },
        { key: "consommation", iconId: "fr-icon-shopping-bag-line" },
        { key: "duree", iconId: "fr-icon-time-line" },
        { key: "cout", iconId: "fr-icon-money-euro-circle-line" },
      ],
      bulletCount: 2,
    },
    {
      key: "creditEntreprises",
      id: "le-credit-aux-entreprises",
      subtle: true,
      lead: true,
      paragraphCount: 2,
      cards: [
        { key: "investissement", iconId: "fr-icon-settings-5-line" },
        { key: "tresorerie", iconId: "fr-icon-bank-card-line" },
        { key: "export", iconId: "fr-icon-global-line" },
        { key: "petites", iconId: "fr-icon-building-line" },
      ],
    },
    {
      key: "depots",
      id: "les-depots",
      lead: true,
      paragraphCount: 2,
      bulletCount: 2,
    },
    {
      key: "delais",
      id: "les-delais-de-transmission",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      bulletCount: 4,
      notice: true,
    },
    {
      key: "statistiques",
      id: "les-statistiques-de-credit",
      lead: true,
      paragraphCount: 1,
      statGrid: [
        { key: "creditMenages", href: `${monnaiePath}/donnees-monetaires` },
        { key: "creditEntreprises", href: `${monnaiePath}/donnees-monetaires` },
        { key: "conditions", href: `${monnaiePath}/donnees-monetaires/statistiques-monetaires` },
      ],
      notice: true,
    },
    {
      key: "documentation",
      id: "pour-aller-plus-loin",
      subtle: true,
      lead: true,
      paragraphCount: 1,
      links: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "instruments", href: `${politiqueMonetairePath}/instruments-monetaires` },
        { key: "rapports", href: `${politiqueMonetairePath}/publications/rapports` },
        { key: "banques", href: `${sectionPaths.banques}` },
      ],
      notice: true,
    },
  ],
  related: politiqueMonetaireRelatedDestinations(),
} as const;