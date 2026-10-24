# v-intl-listformat

[![CI](https://github.com/vinayakkulkarni/v-intl-listformat/actions/workflows/ci.yml/badge.svg)](https://github.com/vinayakkulkarni/v-intl-listformat/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/v-intl-listformat.svg)](https://www.npmjs.com/package/v-intl-listformat)
[![npm downloads](https://img.shields.io/npm/dm/v-intl-listformat.svg)](https://www.npmjs.com/package/v-intl-listformat)

Tiny Vue 3 component for [`Intl.ListFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat). Pass an array, get a locale-aware list: `Frank, Christine, and Flora`.

**Live demo:** https://v-intl-listformat.vinayakkulkarni.dev

## Requirements

- [Vue](https://vuejs.org/) 3.5+
- A runtime with `Intl.ListFormat` (every evergreen browser, Node 14+, Cloudflare Workers)

## Install

```bash
pnpm add v-intl-listformat
```

## Usage

```vue
<script setup lang="ts">
  import { VIntlListFormat } from 'v-intl-listformat';

  const names = ['Frank', 'Christine'];
</script>

<template>
  <VIntlListFormat :payload="names" />
  <!-- → Frank and Christine -->

  <VIntlListFormat :payload="names" locale="de" list-type="disjunction" />
  <!-- → Frank oder Christine -->
</template>
```

Outside templates, use the helper:

```ts
import { formatList } from 'v-intl-listformat';

formatList(['a', 'b', 'c'], 'en', 'unit', 'narrow'); // → 'a b c'
```

### Props

| Name         | Type                                       | Required | Default         | Description                       |
| ------------ | ------------------------------------------ | -------- | --------------- | --------------------------------- |
| `payload`    | `string[]`                                 | Yes      | —               | The items to join.                |
| `locale`     | `string`                                   | No       | `'en'`          | BCP 47 locale tag.                |
| `list-type`  | `'conjunction' \| 'disjunction' \| 'unit'` | No       | `'conjunction'` | _and_, _or_, or no grouping word. |
| `list-style` | `'long' \| 'short' \| 'narrow'`            | No       | `'long'`        | Length of the separators.         |

An invalid `locale` throws a `RangeError`, like `Intl.ListFormat` itself.

## Development

Node 26 and pnpm (version pinned in `packageManager`).

```bash
pnpm install
pnpm run lint && pnpm run format:check && pnpm run typecheck && pnpm run test
pnpm run build        # the package → dist/
pnpm run dev:demo     # the demo (Nuxt) at localhost:3000
pnpm run deploy       # build the demo and deploy the Cloudflare Worker
```

The demo lives in `demo/`: a Nuxt app on Cloudflare Workers (`v-intl-listformat-demo`) that renders the component from `src/`.

## License

[MIT](./LICENSE) © [Vinayak Kulkarni](https://vinayakkulkarni.dev)
