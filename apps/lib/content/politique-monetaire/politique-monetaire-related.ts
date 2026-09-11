import { sectionPaths } from "@/lib/site-structure";

/**
 * Cross-links of the Politique monétaire theme, shared by every page of the
 * group.
 *
 * This module centralises the *structure* of the four theme pages navigation
 * (their keys and hrefs) — not their editorial content, which stays in each
 * page's dedicated `{page}-content.ts` file and in the message catalogs.
 * Labels and descriptions are resolved from `pages.politiqueMonetaire.related.<key>.*`
 * by `lib/theme-localize.ts`.
 */
const politiqueMonetairePath = sectionPaths.politiqueMonetaire;

const themePages = [
  { key: "decisions", href: `${politiqueMonetairePath}/decisions` },
  { key: "tauxDirecteurs", href: `${politiqueMonetairePath}/taux-directeurs` },
  { key: "instrumentsMonetaires", href: `${politiqueMonetairePath}/instruments-monetaires` },
  { key: "publications", href: `${politiqueMonetairePath}/publications` },
] as const;

export type PolitiqueMonetaireRelatedLink = (typeof themePages)[number];

/** The four theme pages of the Politique monétaire group, as cross-links. */
export function politiqueMonetaireRelatedDestinations(): ReadonlyArray<PolitiqueMonetaireRelatedLink> {
  return themePages;
}