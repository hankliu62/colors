# @hankliu/colors

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![build status][github-actions-image]][github-actions-url] [![Codecov][codecov-image]][codecov-url] [![bundle size][bundlephobia-image]][bundlephobia-url] [![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/@hankliu/colors.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@hankliu/colors
[travis-image]: https://img.shields.io/travis/hankliu62/icons/master?style=flat-square
[github-actions-image]: https://github.com/hankliu62/icons/workflows/CI/badge.svg
[github-actions-url]: https://github.com/hankliu62/icons/actions
[codecov-image]: https://img.shields.io/codecov/c/github/hankliu62/icons/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/hankliu62/icons
[download-image]: https://img.shields.io/npm/dm/@hankliu/colors.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hankliu/colors
[bundlephobia-url]: https://bundlephobia.com/package/@hankliu/colors
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@hankliu/colors
[dumi-url]: https://github.com/umijs/dumi
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square

🎨 [HankLiu UI](https://hankliu62.github.io/hankliu-ui/index-cn) 的颜色调色板计算器

![](https://user-images.githubusercontent.com/507615/55726820-43e68400-5a43-11e9-8541-b0fc28b78f37.png)

## 安装

```bash
npm install @hankliu/colors --save
```

or

```bash
yarn add @hankliu/colors
```

or

```bash
pnpm install @hankliu/colors
```

## 使用

```bash
$ npm install @hankliu/colors --save
```

```js
import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from '@hankliu/colors';

console.log(blue); // ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']
console.log(blue.primary); // '#1677FF'
```

```js
import { generate, presetPalettes } from '@hankliu/colors';

// Generate color palettes by a given color
const colors = generate('#1890ff');
console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(presetPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

```js
import { generate, presetDarkPalettes } from '@hankliu/colors';

// Generate dark color palettes by a given color
const colors = generate('#1890ff', {
  theme: 'dark',
  backgroundColor: '#141414',
});
console.log(colors); // ['#111d2c', '#112a45', '#15395b', '#164c7e', '#1765ad', '#177ddc', '#3c9ae8', '#65b7f3', '#8dcff8', '#b7e3fa']
console.log(presetDarkPalettes);
/*
{
  red: [...],
  volcano: [...],
  orange: [...],
  gold: [...],
  yellow: [...],
  lime: [...],
  green: [...],
  cyan: [...],
  blue: [...],
  geekblue: [...],
  purple: [...],
  magenta: [...],
}
*/
```

## 案例

`npm start` 然后打开 http://localhost:8000/examples/

线上案例: https://hankliu62.github.io/icons/colors

## 单元测试

```
npm test
```

## 覆盖率

```
npm run coverage
```

## License

@hankliu/colors is released under the MIT license.
