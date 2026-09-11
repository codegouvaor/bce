import { sectionPaths } from "@/lib/site-structure";

/**
 * Content configuration of the BCE home page.
 *
 * Every section of the homepage is driven by this configuration and the
 * message catalogs — the same pattern as the other Astoria portals — so the
 * content can evolve without rewriting the interface. Paths reuse the URL plan
 * of `site-structure` (`sectionPaths`) so the header, footer and homepage never
 * drift apart.
 *
 * The indicators, the monetary-policy decision and the publication list below
 * are *structural placeholders*: they define the interface, not final figures.
 * The values are deliberately fictive and marked as such; when the BCA API
 * ships, these arrays become the seam where server data plugs in.
 */

const DECISION_PATH = `${sectionPaths.politiqueMonetaire}/decisions`;
const RATES_PATH = `${sectionPaths.politiqueMonetaire}/taux-directeurs`;
const STATS_PATH = `${sectionPaths.monnaie}/donnees-monetaires`;

export const homeContent = {
  /** Key of the “recent monetary-policy decision” highlight. */
  decision: {
    href: DECISION_PATH,
    rateValue: "2,50 %",
    /** `home.decision.items.<key>.*` message keys. */
    keys: ["taux", "date", "prochaine"] as const,
  },
  /**
   * Key monetary & financial indicators shown on the home page.
   * `value` is a structural placeholder (fictive); `href` resolves the detail
   * section. `labelKey` reuses the `home.indicators.items.<key>` labels.
   */
  indicators: [
    { key: "tauxDirecteur", value: "2,50 %", href: RATES_PATH },
    { key: "inflation", value: "1,8 %", href: STATS_PATH },
    { key: "reserves", value: "132 Md", href: `${sectionPaths.systemeFinancier}/reserves` },
    { key: "masseMonetaire", value: "4 210 Md", href: STATS_PATH },
    { key: "tauxDeChange", value: "1,000", href: STATS_PATH },
    { key: "systemesDePaiement", value: "Opérationnels", href: sectionPaths.paiements },
  ] as const,
  /**
   * The main missions of the BCA. `labelKey`/`descKey` reuse the header panel
   * vocabulary (`nav.panel.<section>.title` / `.text`) so the homepage speaks
   * the same language as the navigation.
   */
  missions: [
    { key: "monnaie", section: "monnaie", href: sectionPaths.monnaie },
    { key: "politiqueMonetaire", section: "politiqueMonetaire", href: sectionPaths.politiqueMonetaire },
    { key: "banques", section: "banques", href: sectionPaths.banques },
    { key: "paiements", section: "paiements", href: sectionPaths.paiements },
    { key: "systemeFinancier", section: "systemeFinancier", href: sectionPaths.systemeFinancier },
    { key: "marchesFinanciers", section: "marchesFinanciers", href: sectionPaths.marchesFinanciers },
  ] as const,
  /**
   * Professional services of the BCA — the operational interface, kept
   * distinct from the six editorial subjects. Labels come from
   * `home.services.items.<key>.*`.
   */
  services: [
    {
      key: "banqueEtat",
      href: "/services/banque-de-l-etat",
      iconId: "fr-icon-bank-line",
    },
    {
      key: "etablissementsFinanciers",
      href: "/services/etablissements-financiers",
      iconId: "fr-icon-building-line",
    },
    {
      key: "systemePaiement",
      href: "/services/systeme-de-paiement",
      iconId: "fr-icon-refresh-line",
    },
    {
      key: "donneesApi",
      href: "/donnees-et-ressources",
      iconId: "fr-icon-database-line",
    },
  ] as const,
  /**
   * Latest institutional publications. `labelKey`/`tagKey`/`dateKey` resolve
   * under `home.publications.items.<key>.*`; `href` points to the target
   * section (routes being published).
   */
  publications: {
    featured: {
      titleKey: "publications.featured.title",
      textKey: "publications.featured.text",
      tagKey: "publications.featured.tag",
      dateKey: "publications.featured.date",
      href: DECISION_PATH,
    },
    secondary: [
      { titleKey: "publications.communique.title", tagKey: "publications.communique.tag", dateKey: "publications.communique.date", href: `${sectionPaths.politiqueMonetaire}/publications` },
      { titleKey: "publications.rapport.title", tagKey: "publications.rapport.tag", dateKey: "publications.rapport.date", href: `${sectionPaths.marchesFinanciers}/stabilite-financiere` },
      { titleKey: "publications.statistiques.title", tagKey: "publications.statistiques.tag", dateKey: "publications.statistiques.date", href: STATS_PATH },
    ] as const,
  },
  /**
   * The institution — closing section coherent with the “La Banque centrale”
   * header entry.
   */
  institution: [
    { key: "presentation", href: `${sectionPaths.banqueCentrale}/presentation` },
    { key: "gouvernance", href: `${sectionPaths.banqueCentrale}/gouvernance` },
    { key: "organisation", href: `${sectionPaths.banqueCentrale}/organisation` },
    { key: "carrieres", href: `${sectionPaths.banqueCentrale}/carrieres` },
    { key: "transparence", href: `${sectionPaths.banqueCentrale}/gouvernance/transparence` },
    { key: "contact", href: "/contact" },
  ] as const,
} as const;