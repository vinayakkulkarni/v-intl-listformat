# v-intl-listformat :zap: [![Build Status](https://travis-ci.org/vinayakkulkarni/v-intl-listformat.svg?branch=master)](https://travis-ci.org/vinayakkulkarni/v-intl-listformat) <a href="https://github.com/vinayakkulkarni/v-intl-listformat/releases/latest"><img src="https://img.shields.io/github/release/vinayakkulkarni/v-intl-listformat.svg" alt="github release"></a> <a href="http://npmjs.org/package/v-intl-listformat"><img src="https://img.shields.io/npm/v/v-intl-listformat.svg" alt="npm version"></a> <a href="http://npm-stat.com/charts.html?package=v-intl-listformat"><img src="https://img.shields.io/npm/dm/v-intl-listformat.svg" alt="npm downloads"></a>

+ Tiny Vue component for [Intl.ListFormat](https://www.chromestatus.com/feature/4764538272481280)

+ This is [on GitHub](https://github.com/vinayakkulkarni/v-intl-listformat)  so let me know if I've b0rked it somewhere, give me a star :star: if you like it :beers:

+ Demo here -> [💯 Webpackbin Link](https://goo.gl/9itxBq)

## Requirements

* [Vue.js](https://vuejs.org/) 2.x

## :white_check_mark: Install :ok_hand:

```bash
npm install v-intl-listformat --save
// or
yarn add v-intl-listformat
```

## :white_check_mark: Usage :mortar_board:

Register the component globally:
```javascript
Vue.component('IntlListFormat', require('v-intl-listformat'));
```
Or use locally
```javascript
import IntlListFormat from 'v-intl-listformat';
```

## :white_check_mark: Example 1 :four_leaf_clover:

```html
<intl-local-format v-model="yourLocalVariable"></intl-local-format>
```

```javascript
Vue.component('example-component', {
	data() {
		return {
			yourLocalVariable: ['Frank', 'Christine'],
		};
	}
});
```

### :white_check_mark: :book: Props

| Name | Type | Required? | Default | Description |
| --- | --- | --- | --- | --- |
| `locale` | String | No | `en` | Locale you want to initialise the formatting to be done. |
| `payload` | Array | Yes | `[]` | Locale you want to initialise the formatting to be done. |
| `type` | String | No | `''` | Type can be `disjunction` or `unit`. |
| `style` | String | No | `''` | Style is passed with type, values can be `short` or `narrow`. |

## NPM :octocat:  

[![NPM](https://nodei.co/npm/v-intl-listformat.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/v-intl-listformat/)