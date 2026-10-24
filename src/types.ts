/** `conjunction` → "a, b and c", `disjunction` → "a, b or c", `unit` → "a, b, c". */
export type ListType = Intl.ListFormatType;

/** `long` (default), `short` or `narrow`. */
export type ListStyle = Intl.ListFormatStyle;

export interface VIntlListFormatProps {
  /** The items to join. */
  payload: readonly string[];
  /** BCP 47 locale tag, for example `en`, `de` or `ja`. */
  locale?: Intl.LocalesArgument;
  /** Grouping word: and / or / none. */
  listType?: ListType;
  /** Length of the separators. */
  listStyle?: ListStyle;
}
