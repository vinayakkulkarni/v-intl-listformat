<script setup lang="ts">
  import {
    VIntlListFormat,
    type ListStyle,
    type ListType,
  } from 'v-intl-listformat';
  import type { DemoControl } from '~/types/analytics';
  import {
    LIST_STYLES,
    LIST_TYPES,
    LOCALES,
    PRESETS,
    nativeName,
    usageSnippet,
    type DemoLocale,
  } from '~/utils/list-options';

  const REPO = 'https://github.com/vinayakkulkarni/v-intl-listformat';
  const NPM = 'https://www.npmjs.com/package/v-intl-listformat';
  const MDN =
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat';
  const SITE = 'https://v-intl-listformat.vinayakkulkarni.dev';
  const INSTALL = 'pnpm add v-intl-listformat';
  const DESCRIPTION =
    'A tiny Vue 3 component that turns an array into a locale-aware list with Intl.ListFormat. Try every locale, type and style live.';

  useSeoMeta({
    ogType: 'website',
    ogUrl: `${SITE}/`,
    ogTitle: 'v-intl-listformat — Intl.ListFormat for Vue',
    ogDescription: DESCRIPTION,
    twitterCard: 'summary',
  });

  useHead({
    link: [{ rel: 'canonical', href: `${SITE}/` }],
    meta: [
      {
        name: 'theme-color',
        content: '#f8f6f1',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: '#14161c',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  });

  const { track } = useAnalytics();

  const items = ref<string[]>([...PRESETS.people]);
  const locale = ref<DemoLocale>('en');
  const listType = ref<ListType>('conjunction');
  const listStyle = ref<ListStyle>('long');

  const snippet = computed(() =>
    usageSnippet(items.value, locale.value, listType.value, listStyle.value),
  );

  function report(control: DemoControl, value: string) {
    track('demo_interaction', { control, value });
  }

  watch(locale, (value) => report('locale', value));
  watch(listType, (value) => report('type', value));
  watch(listStyle, (value) => report('style', value));

  const PROPS = [
    ['payload', 'string[]', 'required', 'The items to join.'],
    ['locale', 'string', "'en'", 'BCP 47 locale tag, for example de or ja.'],
    [
      'list-type',
      "'conjunction' | 'disjunction' | 'unit'",
      "'conjunction'",
      'and · or · no word.',
    ],
    [
      'list-style',
      "'long' | 'short' | 'narrow'",
      "'long'",
      'How short the separators get.',
    ],
  ] as const;
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <header
      class="flex h-16 shrink-0 items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
    >
      <p class="font-mono text-sm text-ink">
        v-intl-listformat<span class="text-accent">,</span>
      </p>
      <nav class="flex items-center gap-2" aria-label="Project">
        <OutboundLink
          :href="NPM"
          section="header"
          class="inline-flex h-9 items-center border border-rule px-3 font-mono text-xs text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
        >
          npm
        </OutboundLink>
        <OutboundLink
          :href="REPO"
          section="header"
          class="inline-flex h-9 items-center gap-2 border border-rule px-3 font-mono text-xs text-ink-2 transition-colors hover:border-ink-3 hover:text-ink"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
            />
          </svg>
          <span class="hidden sm:inline">GitHub</span>
        </OutboundLink>
        <ThemeToggle />
      </nav>
    </header>

    <main class="flex flex-1 flex-col">
      <section
        aria-labelledby="hero-title"
        class="grid gap-10 px-5 pt-10 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:pt-16"
      >
        <div class="min-w-0 lg:col-span-12">
          <h1 id="hero-title" class="font-mono text-xs text-accent-ink">
            Intl.ListFormat for Vue 3 · {{ nativeName(locale) }}
          </h1>
          <p
            class="mt-5 font-display text-[clamp(2.25rem,6.5vw,5.75rem)] leading-[1.02] font-semibold tracking-tight text-balance break-words"
            aria-live="polite"
            dir="auto"
            :lang="locale"
          >
            <VIntlListFormat
              v-if="items.length > 0"
              :payload="items"
              :locale="locale"
              :list-type="listType"
              :list-style="listStyle"
            />
            <span v-else class="text-ink-3">an empty list</span>
          </p>
        </div>

        <div class="flex min-w-0 flex-col gap-3 lg:col-span-5">
          <p class="max-w-[46ch] leading-relaxed text-ink-2">
            Pass an array, get a sentence. The separators, the
            <em>and</em> and the <em>or</em> come from the browser's own locale
            data — no dictionaries to ship.
          </p>
          <CopyCommand :command="INSTALL" />
        </div>

        <div
          class="grid min-w-0 gap-6 border-t border-rule pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12"
        >
          <ItemEditor v-model="items" @change="report" />
          <div class="grid gap-6 sm:grid-cols-2">
            <SegmentedControl
              v-model="listType"
              label="list-type"
              :options="LIST_TYPES"
            />
            <SegmentedControl
              v-model="listStyle"
              label="list-style"
              :options="LIST_STYLES"
            />
          </div>
          <div class="min-w-0">
            <label for="locale" class="mb-2 block font-mono text-xs text-ink-3"
              >locale</label
            >
            <select
              id="locale"
              v-model="locale"
              class="w-full border border-rule bg-paper px-3 py-2 font-mono text-sm text-ink"
            >
              <option v-for="tag in LOCALES" :key="tag" :value="tag">
                {{ tag }} — {{ nativeName(tag) }}
              </option>
            </select>
          </div>
          <pre
            class="overflow-x-auto border border-rule bg-paper-2 px-4 py-3 font-mono text-xs leading-relaxed text-ink"
          ><code>{{ snippet }}</code></pre>
        </div>
      </section>

      <section
        aria-labelledby="locales-title"
        class="grid gap-10 border-t border-rule px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12"
      >
        <div class="lg:col-span-4">
          <h2
            id="locales-title"
            class="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-tight"
          >
            One list, {{ LOCALES.length }} locales
          </h2>
          <p class="mt-4 max-w-[40ch] leading-relaxed text-ink-2">
            The same payload, type and style rendered by the component in every
            locale the playground offers.
          </p>
        </div>
        <ul class="min-w-0 lg:col-span-8" role="list">
          <li
            v-for="tag in LOCALES"
            :key="tag"
            class="grid gap-1 border-t border-rule py-3 sm:grid-cols-[7rem_1fr] sm:gap-6"
          >
            <span class="font-mono text-xs text-ink-3 sm:pt-1">
              {{ tag }} · {{ nativeName(tag) }}
            </span>
            <span class="min-w-0 break-words" dir="auto" :lang="tag">
              <VIntlListFormat
                :payload="items"
                :locale="tag"
                :list-type="listType"
                :list-style="listStyle"
              />
            </span>
          </li>
        </ul>
      </section>

      <section
        aria-labelledby="props-title"
        class="grid gap-10 border-t border-rule px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12"
      >
        <div class="lg:col-span-4">
          <h2
            id="props-title"
            class="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-tight"
          >
            Props
          </h2>
          <p class="mt-4 max-w-[40ch] leading-relaxed text-ink-2">
            The defaults match
            <OutboundLink
              :href="MDN"
              section="install"
              class="underline decoration-rule underline-offset-4 hover:decoration-ink-3"
              >Intl.ListFormat</OutboundLink
            >. A <code class="font-mono text-sm">formatList()</code> helper is
            exported for use outside templates.
          </p>
        </div>
        <dl class="min-w-0 lg:col-span-8">
          <div
            v-for="[name, type, fallback, description] in PROPS"
            :key="name"
            class="grid gap-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
          >
            <dt class="font-mono text-sm text-ink">{{ name }}</dt>
            <dd class="min-w-0 text-ink-2">
              <p>{{ description }}</p>
              <p class="mt-1 font-mono text-xs break-words text-ink-3">
                {{ type }} · default {{ fallback }}
              </p>
            </dd>
          </div>
        </dl>
      </section>
    </main>

    <footer
      class="flex flex-wrap items-center justify-between gap-4 border-t border-rule px-5 py-6 font-mono text-xs text-ink-3 sm:px-8 lg:px-12"
    >
      <p>MIT · made with Vue by Vinayak Kulkarni</p>
      <OutboundLink
        :href="REPO"
        section="footer"
        class="underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink-3"
      >
        github.com/vinayakkulkarni/v-intl-listformat
      </OutboundLink>
    </footer>
  </div>
</template>
