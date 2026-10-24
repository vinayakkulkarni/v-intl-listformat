import type { ListStyle, ListType } from './types';

/**
 * Join `items` into a locale-aware list with `Intl.ListFormat`.
 * Throws a `RangeError` for an invalid locale, like the native API.
 */
export function formatList(
  items: readonly string[],
  locale: Intl.LocalesArgument = 'en',
  type: ListType = 'conjunction',
  style: ListStyle = 'long',
): string {
  return new Intl.ListFormat(locale, { type, style }).format(items);
}
