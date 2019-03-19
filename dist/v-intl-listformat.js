(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VIntlListFormat = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var script = {
    name: 'VIntlListFormat',
    props: {
      payload: {
        type: Array,
        default: function _default() {
          return [];
        },

        required: true
      },
      locale: {
        type: String,
        default: 'en',
        required: false
      },
      listType: {
        type: String,
        default: null,
        required: false
      },
      listStyle: {
        type: String,
        default: null,
        required: false
      }
    },
    computed: {
      listFormat: function listFormat() {
        var t = this;
        var vendor = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' ? navigator.vendor : 'Unknown';
        var options = { type: t.listType, style: t.listStyle };
        if (vendor && vendor.includes('Google')) {
          if (options.type === null) {
            options = {};
          }
          if (options.style === null) {
            delete options.style;
          }
          return new Intl.ListFormat(t.locale, options).format(t.payload);
        }
        return 'Unfortunately your browser does not support this plugin!';
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    }

    var options = typeof script === 'function' ? script.options : script;

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true;

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    }

    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      hook = function hook(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        }

        if (style) {
          style.call(this, createInjectorSSR(context));
        }

        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };

      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var __vue_script__ = script;

  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("span", [_vm._v(_vm._s(_vm.listFormat))]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_inject_styles__ = undefined;

  var __vue_scope_id__ = undefined;

  var __vue_module_identifier__ = undefined;

  var __vue_is_functional_template__ = false;


  var VIntlListFormat = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  return VIntlListFormat;

})));
