const isIgnored = (file) =>
  /(?:^|\/)(?:pnpm-lock\.yaml|CHANGELOG\.md)$/.test(file);

export default {
  '*.{js,ts,vue}': (files) => {
    const filtered = files.filter((f) => !isIgnored(f));
    return filtered.length > 0
      ? [
          `vp lint --fix ${filtered.join(' ')}`,
          `vp fmt --write ${filtered.join(' ')}`,
        ]
      : [];
  },
  '*.{json,jsonc,md,yml,yaml,css}': (files) => {
    const filtered = files.filter((f) => !isIgnored(f));
    return filtered.length > 0 ? [`vp fmt --write ${filtered.join(' ')}`] : [];
  },
};
