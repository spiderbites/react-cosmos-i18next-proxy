# react-cosmos-i18next-proxy

Wrap an [react-i18next](https://react.i18next.com/) provider around your [react-cosmos](https://github.com/react-cosmos/react-cosmos) fixtures.

## Installation

```bash
npm install -D react-cosmos-i18next-proxy
```

## Usage

```js
// cosmos.proxies.js
import createi18nextProxy from "react-cosmos-i18next-proxy";

// i18n instance options, see: https://react.i18next.com/components/i18next-instance
const i18nInstanceOptions = { fallbackLng: "en" };
export default [createi18nextProxy(i18nInstanceOptions)];
```
