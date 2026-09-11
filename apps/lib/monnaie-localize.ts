/**
 * Backward-compatible entry point of the Monnaie theme localization.
 *
 * The localization layer is now shared by every theme of the portal: see
 * `lib/theme-localize.ts`. Monnaie pages keep importing from this module so
 * the theme convention stays stable while the implementation lives in one
 * place.
 */
export * from "@/lib/theme-localize";
