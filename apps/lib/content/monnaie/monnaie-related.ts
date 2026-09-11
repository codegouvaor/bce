import { sectionPaths } from "@/lib/site-structure";

/**
 * Cross-links of the Monnaie theme, shared by every page of the group.
 *
 * This module centralises the *structure* of the four theme pages navigation
 * (their keys and hrefs) — not their editorial content, which stays in each
 * page's dedicated `{page}-content.ts` file and in the message catalogs.
 * Labels and descriptions are resolved from `pages.monnaie.related.<key>.*`
 * by `lib/monnaie-localize.ts`.
 */
const monnaiePath = sectionPaths.monnaie;

const themePages = [
  { key: "laMonnaieAstorienne", href: `${monnaiePath}/la-monnaie-astorienne` },
  { key: "billetsEtPieces", href: `${monnaiePath}/billets-et-pieces` },
  { key: "circulationMonetaire", href: `${monnaiePath}/circulation-monetaire` },
  { key: "donneesMonetaires", href: `${monnaiePath}/donnees-monetaires` },
] as const;

export type MonnaieRelatedLink = (typeof themePages)[number];

/** The four theme pages of the Monnaie group, as cross-links. */
export function monnaieRelatedDestinations(): ReadonlyArray<MonnaieRelatedLink> {
  return themePages;
}