<script setup lang="ts" generic="T extends string">
  const props = defineProps<{
    label: string;
    options: readonly T[];
  }>();

  const model = defineModel<T>({ required: true });
</script>

<template>
  <fieldset class="min-w-0">
    <legend class="mb-2 font-mono text-xs text-ink-3">{{ props.label }}</legend>
    <div class="grid grid-cols-3 border border-rule">
      <label
        v-for="option in props.options"
        :key="option"
        class="relative cursor-pointer border-r border-rule px-2 py-2 text-center font-mono text-xs text-ink-2 transition-colors last:border-r-0 hover:text-ink has-checked:bg-ink has-checked:text-paper has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
      >
        <input
          v-model="model"
          type="radio"
          class="sr-only"
          :name="props.label"
          :value="option"
        />
        {{ option }}
      </label>
    </div>
  </fieldset>
</template>
