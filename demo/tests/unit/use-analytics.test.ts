import { describe, expect, it, vi } from 'vite-plus/test';
import { createAnalytics } from '../../app/composables/use-analytics';

describe('createAnalytics', () => {
  it('sends one track() call to GA4, Plausible and OpenPanel', () => {
    const gtag = vi.fn();
    const plausible = vi.fn();
    const openpanel = vi.fn();
    const { track } = createAnalytics({
      ga: { gtag },
      plausible: { plausible },
      openpanel: { track: openpanel },
    });

    const props = { control: 'locale', value: 'de' } as const;
    track('demo_interaction', props);

    expect(gtag).toHaveBeenCalledWith('event', 'demo_interaction', props);
    expect(plausible).toHaveBeenCalledWith('demo_interaction', { props });
    expect(openpanel).toHaveBeenCalledWith('demo_interaction', props);
  });

  it('skips trackers that did not boot (GA4 without an ID)', () => {
    const plausible = vi.fn();
    const openpanel = vi.fn();
    const { track } = createAnalytics({
      plausible: { plausible },
      openpanel: { track: openpanel },
    });

    expect(() =>
      track('install_copy', { command: 'pnpm install' }),
    ).not.toThrow();
    expect(plausible).toHaveBeenCalledOnce();
    expect(openpanel).toHaveBeenCalledOnce();
  });
});
