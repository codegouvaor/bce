import { platformPath, sectionPaths } from "@/lib/site-structure";

/**
 * Content configuration of the homepage of the Banque centrale d'Astoria.
 *
 * The homepage is the digital front door of the central bank. It is organised
 * around ten sections with a clear editorial hierarchy:
 *
 *   Niveau 1 — Introduction, Situation monétaire, Politique monétaire
 *   Niveau 2 — La monnaie astorienne, Système bancaire, Paiements, Données
 *   Niveau 3 — Publications et calendrier, Services
 *   Niveau 4 — La Banque centrale
 *
 * Every section is driven by this configuration and the message catalogs
 * (`apps/messages/{fr,en}.json`, namespace `home`), the same pattern as the
 * Monnaie theme pages: the structure (keys, hrefs, icons, figures) lives here,
 * every display string lives in the catalogs. Paths reuse the URL plan of
 * `site-structure` (`sectionPaths`, `platformPath`) so the header, footer and
 * homepage never drift apart.
 *
 * The figures, dates and statuses below are *structural placeholders*: they
 * define the interface, not final official figures, and are marked as such in
 * the copy. When the BCA data API ships, these arrays become the seam where
 * server data plugs in (`/api/monetary/indicators`, `/api/monetary/policy`,
 * `/api/payments/status`, `/api/banking/statistics`, …) — no fake API is
 * created here.
 */

const MONNAIE = sectionPaths.monnaie;
const POLITIQUE = sectionPaths.politiqueMonetaire;
const BANQUES = sectionPaths.banques;
const MARCHES = sectionPaths.marchesFinanciers;
const PAIEMENTS = sectionPaths.paiements;
const SYSTEME = sectionPaths.systemeFinancier;
const INSTITUTION = sectionPaths.banqueCentrale;

const DECISIONS_PATH = `${POLITIQUE}/decisions`;
const COMMUNIQUES_PATH = `${POLITIQUE}/decisions/communiques`;
const CALENDAR_PATH = `${POLITIQUE}/decisions/calendrier-des-decisions`;
const RATES_PATH = `${POLITIQUE}/taux-directeurs`;
const STATS_PATH = `${MONNAIE}/donnees-monetaires`;
const FINANCIAL_STATS_PATH = `${MARCHES}/donnees-et-statistiques`;

export const homeContent = {
  /**
   * Section 01 — Introduction institutionnelle. Two priority access: the
   * monetary-policy decisions and the data, data being what the BCA produces
   * and publishes.
   */
  hero: {
    ctaDecisions: { href: DECISIONS_PATH },
    ctaData: { href: STATS_PATH },
  },
  /**
   * Section 02 — Situation monétaire. Key monetary indicators in a single
   * legible band, with the reference date. `value` is a structural
   * placeholder; `href` resolves the detail section.
   */
  situation: {
    primary: [
      { key: "tauxDirecteur", value: "2,50 %", href: RATES_PATH },
      { key: "inflation", value: "1,8 %", href: STATS_PATH },
      { key: "reserves", value: "132 Md", href: `${SYSTEME}/reserves` },
      { key: "masseMonetaire", value: "4 210 Md", href: STATS_PATH },
    ],
    secondary: [
      { key: "circulationMonetaire", value: "38,2 Md", href: `${MONNAIE}/circulation-monetaire` },
      { key: "tauxDeChange", value: "1,000", href: STATS_PATH },
    ],
    cta: { href: STATS_PATH },
  },
  /**
   * Section 03 — Politique monétaire. The last decision of the Monetary
   * Policy Council: current rate, previous rate, decision date and next
   * meeting. `rateValue` is a structural placeholder; the item details are
   * localized in the catalogs (`home.decision.items.<key>.*`).
   */
  decision: {
    rateValue: "2,50 %",
    /** `home.decision.items.<key>.*` message keys. */
    items: ["date", "precedent", "prochaine"] as const,
    ctaCommunique: { href: COMMUNIQUES_PATH },
    ctaDocuments: { href: DECISIONS_PATH },
  },
  /**
   * Section 04 — La monnaie astorienne. Editorial transition between the
   * indicators and the understanding of the monetary system.
   */
  monnaie: {
    /** `home.monnaie.essentials.<key>.*` message keys. */
    essentials: [
      { key: "unite", iconId: "fr-icon-money-euro-circle-line" },
      { key: "emission", iconId: "fr-icon-printer-line" },
      { key: "billets", iconId: "fr-icon-bank-card-line" },
      { key: "pieces", iconId: "fr-icon-coin-line" },
      { key: "circulation", iconId: "fr-icon-refresh-line" },
      { key: "principes", iconId: "fr-icon-lock-line" },
    ] as const,
    cta: { href: `${MONNAIE}/la-monnaie-astorienne` },
  },
  /**
   * Section 05 — Système bancaire. The BCA as the bank of banks: figures of
   * the banking system and access to the supervision, regulation and
   * stability destinations.
   */
  banques: {
    figures: [
      { key: "etablissements", value: "38", href: `${BANQUES}/etablissements-bancaires` },
      { key: "liquidite", value: "1 240 Md", href: `${SYSTEME}/liquidite` },
      { key: "reserves", value: "132 Md", href: `${SYSTEME}/reserves` },
      { key: "stabilite", value: "Stable", href: `${MARCHES}/stabilite-financiere` },
    ] as const,
    links: [
      { key: "etablissements", href: `${BANQUES}/etablissements-bancaires` },
      { key: "agrements", href: `${BANQUES}/agrements-et-licences` },
      { key: "reglementation", href: `${BANQUES}/reglementation-bancaire` },
      { key: "liquidite", href: `${SYSTEME}/liquidite` },
      { key: "stabilite", href: `${MARCHES}/stabilite-financiere` },
    ] as const,
  },
  /**
   * Section 06 — Paiements. The BCA as operator and guarantor of the payment
   * and settlement infrastructures.
   */
  paiements: {
    items: [
      { key: "systemes", iconId: "fr-icon-refresh-line", href: `${PAIEMENTS}/systemes-de-paiement` },
      { key: "interbancaire", iconId: "fr-icon-bank-line", href: `${PAIEMENTS}/paiements-interbancaires` },
      { key: "reglement", iconId: "fr-icon-checkbox-circle-line", href: `${PAIEMENTS}/reglement` },
      { key: "infrastructures", iconId: "fr-icon-line-chart-line", href: `${SYSTEME}/infrastructure-financiere` },
      { key: "innovation", iconId: "fr-icon-lightbulb-line", href: `${PAIEMENTS}/innovation-financiere` },
    ] as const,
  },
  /**
   * Section 07 — Données et statistiques. Series table (`value`, `variation`
   * are structural placeholders) and access to the data destinations.
   */
  donnees: {
    series: [
      { key: "tauxDirecteur", value: "2,50 %", variation: "—" },
      { key: "inflation", value: "1,8 %", variation: "−0,2 pt" },
      { key: "masseMonetaire", value: "4 210 Md", variation: "+0,6 %" },
      { key: "reserves", value: "132 Md", variation: "+2,1 %" },
      { key: "circulation", value: "38,2 Md", variation: "+1,4 %" },
    ] as const,
    links: [
      { key: "donneesMonetaires", href: STATS_PATH },
      { key: "statistiquesFinancieres", href: FINANCIAL_STATS_PATH },
      { key: "seriesTemporelles", href: `${MONNAIE}/donnees-monetaires/statistiques-monetaires` },
      { key: "telechargements", href: `${MONNAIE}/donnees-monetaires/encours-monetaires` },
      { key: "api", href: `${MONNAIE}/donnees-monetaires/publications` },
    ] as const,
  },
  /**
   * Section 08 — Publications et calendrier. Official publications and the
   * institutional calendar — not a news feed.
   */
  publications: {
    items: [
      { key: "decision", href: DECISIONS_PATH },
      { key: "stabilite", href: `${MARCHES}/stabilite-financiere` },
      { key: "bulletin", href: `${POLITIQUE}/publications` },
      { key: "statistiques", href: STATS_PATH },
      { key: "rapports", href: `${INSTITUTION}/presentation` },
    ] as const,
    calendar: [
      { key: "decision", href: CALENDAR_PATH },
      { key: "publication", href: `${POLITIQUE}/publications` },
      { key: "statistiques", href: STATS_PATH },
      { key: "evenement", href: `${INSTITUTION}/gouvernance` },
    ] as const,
    allLink: { href: `${POLITIQUE}/publications` },
  },
  /**
   * Section 09 — Services de la Banque centrale. The operational platform of
   * the bank (financial institutions, State banking, payment systems, data &
   * APIs), distinct from the seven editorial entries of the header.
   */
  services: [
    {
      key: "etablissementsFinanciers",
      href: `${platformPath}/etablissements-financiers`,
      iconId: "fr-icon-building-line",
    },
    {
      key: "banqueEtat",
      href: `${platformPath}/banque-de-l-etat`,
      iconId: "fr-icon-bank-line",
    },
    {
      key: "systemePaiement",
      href: `${platformPath}/systeme-de-paiement`,
      iconId: "fr-icon-refresh-line",
    },
    {
      key: "donneesApi",
      href: FINANCIAL_STATS_PATH,
      iconId: "fr-icon-database-line",
    },
  ] as const,
  /**
   * Section 10 — La Banque centrale. Institutional closing, coherent with the
   * “La Banque centrale” entry of the header.
   */
  institution: {
    cta: { href: INSTITUTION },
    links: [
      { key: "missions", href: `${INSTITUTION}/presentation/missions` },
      { key: "gouvernance", href: `${INSTITUTION}/gouvernance` },
      { key: "organisation", href: `${INSTITUTION}/organisation` },
      { key: "independance", href: `${INSTITUTION}/presentation/independance` },
      { key: "transparence", href: `${INSTITUTION}/gouvernance/transparence` },
      { key: "carrieres", href: `${INSTITUTION}/carrieres` },
    ] as const,
  },
} as const;