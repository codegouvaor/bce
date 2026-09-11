import { sectionPaths } from "@/lib/site-structure";

/**
 * Cross-links of the Banques theme, shared by every page of the group.
 *
 * This module centralises the *structure* of the four theme pages navigation
 * (their keys and hrefs) — not their editorial content, which stays in each
 * page's dedicated `{page}-content.ts` file and in the message catalogs.
 * Labels and descriptions are resolved from `pages.banques.related.<key>.*`
 * by `lib/theme-localize.ts`.
 */
const banquesPath = sectionPaths.banques;

const themePages = [
  { key: "etablissementsBancaires", href: `${banquesPath}/etablissements-bancaires` },
  { key: "agrementsEtLicences", href: `${banquesPath}/agrements-et-licences` },
  { key: "reglementationBancaire", href: `${banquesPath}/reglementation-bancaire` },
  { key: "supervision", href: `${banquesPath}/supervision` },
] as const;

export type BanquesRelatedLink = (typeof themePages)[number];

/** The four theme pages of the Banques group, as cross-links. */
export function banquesRelatedDestinations(): ReadonlyArray<BanquesRelatedLink> {
  return themePages;
}