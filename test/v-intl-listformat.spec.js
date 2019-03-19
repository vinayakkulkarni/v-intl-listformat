const Vue = require('vue');
const VIntlListFormat = require('v-intl-listformat');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

describe('VIntlListFormat', () => {

  it('has correctly mounted', () => {
    const vm = getComponent(VIntlListFormat);
    expect(vm._isMounted).toBeTruthy();
  });

  it('has correct default props', () => {
    const vm = getComponent(VIntlListFormat);
    expect(vm.$props).toEqual({payload: [], locale: 'en', listType: null, listStyle: null});
  });

  it('has correct custom props', () => {
    const exampleData = {
      payload: ['Frank', 'Christine', 'Flora', 'Harrison'],
      locale: 'en',
      listType: null, 
      listStyle: null,
    };
    const Ctor = Vue.extend(VIntlListFormat);
    const vm = new Ctor({ propsData: exampleData}).$mount();
    expect(vm.$props).toEqual({payload: exampleData.payload, locale: exampleData.locale, listType: exampleData.listType, listStyle: exampleData.listStyle});
  });

  it('has correct custom component name', () => {
    const vm = getComponent(VIntlListFormat);
    expect(vm.$options.name).toEqual('VIntlListFormat');
  });
});