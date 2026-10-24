<script setup lang="ts">
  import {
    MAX_ITEMS,
    MAX_ITEM_LENGTH,
    PRESETS,
    normaliseItem,
    type PresetName,
  } from '~/utils/list-options';

  const items = defineModel<string[]>({ required: true });
  const emit = defineEmits<{
    change: [control: 'add_item' | 'remove_item' | 'preset', value: string];
  }>();

  const draft = ref('');
  const full = computed(() => items.value.length >= MAX_ITEMS);

  function add() {
    const value = normaliseItem(draft.value);
    if (!value || full.value) return;
    items.value = [...items.value, value];
    draft.value = '';
    emit('change', 'add_item', String(items.value.length));
  }

  function remove(index: number) {
    items.value = items.value.filter((_, i) => i !== index);
    emit('change', 'remove_item', String(items.value.length));
  }

  function usePreset(name: PresetName) {
    items.value = [...PRESETS[name]];
    emit('change', 'preset', name);
  }
</script>

<template>
  <div class="min-w-0">
    <p id="items-label" class="mb-2 font-mono text-xs text-ink-3">
      payload · {{ items.length }}/{{ MAX_ITEMS }}
    </p>
    <ul class="flex flex-wrap gap-2" aria-labelledby="items-label" role="list">
      <li
        v-for="(item, index) in items"
        :key="`${index}-${item}`"
        class="inline-flex max-w-full items-stretch border border-rule bg-paper-2"
      >
        <span class="truncate px-3 py-1.5 text-sm">{{ item }}</span>
        <button
          type="button"
          class="border-l border-rule px-2 font-mono text-xs text-ink-3 transition-colors hover:text-accent-ink"
          :aria-label="`Remove ${item}`"
          @click="remove(index)"
        >
          ×
        </button>
      </li>
    </ul>

    <form class="mt-3 flex min-w-0 border border-rule" @submit.prevent="add">
      <label for="new-item" class="sr-only">Add an item</label>
      <input
        id="new-item"
        v-model="draft"
        type="text"
        autocomplete="off"
        :maxlength="MAX_ITEM_LENGTH"
        :disabled="full"
        :placeholder="full ? 'list is full' : 'add an item, press enter'"
        class="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink placeholder:text-ink-3 focus-visible:outline-offset-0 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        :disabled="full"
        class="shrink-0 border-l border-rule px-4 font-mono text-xs text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
      >
        add
      </button>
    </form>

    <div
      class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-3"
    >
      <span>presets</span>
      <button
        v-for="(_, name) in PRESETS"
        :key="name"
        type="button"
        class="underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink-3"
        @click="usePreset(name)"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>
