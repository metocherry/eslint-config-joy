# eslint-config-joy

## Install

```bash
yarn add --dev \
  eslint \
  eslint-import-resolver-node \
  eslint-plugin-import \
  @metocherry/eslint-config-joy
```

with typescript

```bash
yarn add --dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

with react

```bash
yarn add --dev eslint-plugin-react 
```

## Usage

```json
{
  "extends": [
    "@metocherry/eslint-config-joy"
  ]
}
```

with typescript

```json
{
  "extends": [
    "@metocherry/eslint-config-joy",
    "@metocherry/eslint-config-joy/typescript"
  ]
}
```

with react

```json
{
  "extends": [
    "@metocherry/eslint-config-joy",
    "@metocherry/eslint-config-joy/react"
  ]
}
```

with react, typescript

```json
{
  "extends": [
    "@metocherry/eslint-config-joy",
    "@metocherry/eslint-config-joy/react",
    "@metocherry/eslint-config-joy/typescript"
  ]
}
``
