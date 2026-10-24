import type { ListStyle, ListType } from 'v-intl-listformat';

export const LIST_TYPES: readonly ListType[] = [
  'conjunction',
  'disjunction',
  'unit',
];

export const LIST_STYLES: readonly ListStyle[] = ['long', 'short', 'narrow'];

/** Locales the playground offers. Every tag is valid for Intl.ListFormat. */
export const LOCALES = [
  'en',
  'de',
  'fr',
  'es',
  'pt-BR',
  'hi',
  'mr',
  'ja',
  'zh',
  'ko',
  'ar',
  'ru',
  'sw',
] as const;

export type DemoLocale = (typeof LOCALES)[number];

export const PRESETS = {
  people: ['Frank', 'Christine', 'Flora', 'Harrison'],
  fruit: ['mango', 'guava', 'jackfruit'],
  pair: ['tea', 'coffee'],
} as const satisfies Record<string, readonly string[]>;

export type PresetName = keyof typeof PRESETS;

export const MAX_ITEMS = 8;
export const MAX_ITEM_LENGTH = 24;

/**
 * Normalise a typed item: trim, collapse inner whitespace, cap the length.
 * Returns null when nothing is left to add.
 */
export function normaliseItem(raw: string): string | null {
  const value = raw.trim().replace(/\s+/g, ' ').slice(0, MAX_ITEM_LENGTH);
  return value.length > 0 ? value : null;
}

/** The language name of `locale`, written in that language. */
export function nativeName(locale: string): string {
  return (
    new Intl.DisplayNames([locale], { type: 'language' }).of(locale) ?? locale
  );
}

/** The usage snippet for the current playground state. */
export function usageSnippet(
  items: readonly string[],
  locale: string,
  type: ListType,
  style: ListStyle,
): string {
  const attrs = [`:payload="${JSON.stringify(items).replaceAll('"', "'")}"`];
  if (locale !== 'en') attrs.push(`locale="${locale}"`);
  if (type !== 'conjunction') attrs.push(`list-type="${type}"`);
  if (style !== 'long') attrs.push(`list-style="${style}"`);
  return `<VIntlListFormat ${attrs.join(' ')} />`;
}
