import { describe, expect, it } from 'vite-plus/test';
import {
  LIST_STYLES,
  LIST_TYPES,
  LOCALES,
  MAX_ITEM_LENGTH,
  nativeName,
  normaliseItem,
  usageSnippet,
} from '../../app/utils/list-options';

describe('list options', () => {
  it('offers only locales that Intl.ListFormat accepts', () => {
    for (const locale of LOCALES) {
      for (const type of LIST_TYPES) {
        for (const style of LIST_STYLES) {
          expect(() =>
            new Intl.ListFormat(locale, { type, style }).format(['a', 'b']),
          ).not.toThrow();
        }
      }
    }
  });

  it('names a locale in its own language', () => {
    expect(nativeName('de')).toBe('Deutsch');
    expect(nativeName('fr')).toBe('français');
  });
});

describe('normaliseItem', () => {
  it('trims and collapses whitespace', () => {
    expect(normaliseItem('  green   tea ')).toBe('green tea');
  });

  it('rejects blank input', () => {
    expect(normaliseItem('   ')).toBeNull();
  });

  it('caps the length', () => {
    expect(normaliseItem('x'.repeat(100))).toHaveLength(MAX_ITEM_LENGTH);
  });
});

describe('usageSnippet', () => {
  it('omits props that match the defaults', () => {
    expect(usageSnippet(['a', 'b'], 'en', 'conjunction', 'long')).toBe(
      `<VIntlListFormat :payload="['a','b']" />`,
    );
  });

  it('includes every non-default prop', () => {
    expect(usageSnippet(['a'], 'de', 'unit', 'narrow')).toBe(
      `<VIntlListFormat :payload="['a']" locale="de" list-type="unit" list-style="narrow" />`,
    );
  });
});
