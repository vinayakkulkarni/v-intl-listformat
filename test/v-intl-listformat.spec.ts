import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vite-plus/test';
import { VIntlListFormat, formatList } from '../src';

const NAMES = ['Frank', 'Christine', 'Flora', 'Harrison'];

describe('VIntlListFormat', () => {
  it('has the component name', () => {
    expect(VIntlListFormat.name).toBe('VIntlListFormat');
  });

  it('renders a conjunction in English by default', () => {
    const wrapper = mount(VIntlListFormat, { props: { payload: NAMES } });
    expect(wrapper.text()).toBe('Frank, Christine, Flora, and Harrison');
  });

  it('renders an empty string for an empty payload', () => {
    const wrapper = mount(VIntlListFormat, { props: { payload: [] } });
    expect(wrapper.text()).toBe('');
  });

  it('passes locale, type and style to Intl.ListFormat', () => {
    const wrapper = mount(VIntlListFormat, {
      props: {
        payload: ['Frank', 'Christine'],
        locale: 'de',
        listType: 'disjunction',
      },
    });
    expect(wrapper.text()).toBe('Frank oder Christine');
  });

  it('updates when the payload changes', async () => {
    const wrapper = mount(VIntlListFormat, { props: { payload: ['a'] } });
    await wrapper.setProps({ payload: ['a', 'b'] });
    expect(wrapper.text()).toBe('a and b');
  });
});

describe('formatList', () => {
  it('matches the native API for every type and style', () => {
    for (const type of ['conjunction', 'disjunction', 'unit'] as const) {
      for (const style of ['long', 'short', 'narrow'] as const) {
        expect(formatList(NAMES, 'en', type, style)).toBe(
          new Intl.ListFormat('en', { type, style }).format(NAMES),
        );
      }
    }
  });

  it('throws a RangeError for an invalid locale', () => {
    expect(() => formatList(NAMES, 'not a locale')).toThrow(RangeError);
  });
});
