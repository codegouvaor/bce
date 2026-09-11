import { sectionPaths } from "@/lib/site-structure";
import { monnaieRelatedDestinations } from "@/lib/content/monnaie/monnaie-related";

/**
 * Content configuration of the page “Données monétaires” — structure only.
 * Every display string is resolved from the message catalogs
 * (`pages.monnaie.donneesMonetaires.*` and `pages.monnaie.related.*`).
 */
const monnaiePath = sectionPaths.monnaie;
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;
const systemeFinancierPath = sectionPaths.systemeFinancier;

export const donneesMonetairesContent = {
  hero: {
    kickerKey: "hero.kicker",
    titleKey: "hero.title",
    leadKey: "hero.lead",
    ctaKey: "hero.cta",
    ctaHref: `${monnaiePath}/circulation-monetaire`,
    noticeKey: "hero.notice",
  },
  sections: [
    {
      key: "indicateursCles",
      id: "indicateurs-cles",
      lead: true,
      statGrid: [
        { key: "taux", href: `${politiqueMonetairePath}/taux-directeurs` },
        { key: "inflation", href: `${politiqueMonetairePath}/publications` },
        { key: "m3", href: monnaiePath },
        { key: "reserves", href: `${systemeFinancierPath}/reserves` },
      ],
    },
    {
      key: "agregats",
      id: "agregats-monetaires",
      subtle: true,
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "circulationFiduciaire",
      id: "circulation-fiduciaire",
      lead: true,
      statGrid: [{ key: "billets" }, { key: "pieces" }, { key: "part" }, { key: "billetsParHabitant" }],
    },
    {
      key: "masseMonetaire",
      id: "evolution-masse-monetaire",
      subtle: true,
      lead: true,
      table: { headerCount: 5, rowCells: [5, 5, 5, 5, 5], note: true },
    },
    {
      key: "reserves",
      id: "reserves-et-liquidite",
      lead: true,
      table: { headerCount: 3, rowCells: [3, 3, 3, 3], note: true },
    },
    {
      key: "taux",
      id: "taux-directeurs",
      subtle: true,
      lead: true,
      table: { headerCount: 2, rowCells: [2, 2, 2], note: true },
      cta: { href: `${politiqueMonetairePath}/taux-directeurs` },
    },
    {
      key: "publications",
      id: "publications-et-donnees",
      lead: true,
      links: [
        { key: "statistiques", href: `${monnaiePath}/donnees-monetaires/publications` },
        { key: "publications", href: `${politiqueMonetairePath}/publications` },
        { key: "donneesOuvertes", href: `${sectionPaths.marchesFinanciers}/donnees-et-statistiques/donnees-ouvertes` },
      ],
      notice: true,
    },
  ],
  related: monnaieRelatedDestinations(),
} as const;