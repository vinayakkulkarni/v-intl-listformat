const Vue = require('vue');
const VIntlListFormat = require('v-intl-listformat');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

describe('VIntlListFormat', () => {
  it('has correct DOM structure', () => {
    const vm = getComponent(VIntlListFormat);

    expect(vm.$el.nodeName).toBe('SPAN');
  });
});