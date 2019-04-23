# Config Options

Mints will search `mints.config.js`, `.mintsrc.js` or `mintsConfig` property in `package.json` from your project.

The config is basically a pure object containing following properties.

```javascript
module.exports = {
  // ...config
};
```

## mode

  * Type: `enum`
  * Default: `MPA`
  * CLI: `-m, --mode <type>`

Specity your application type `MPA` or `SPA`.

## entry

  * Type: `string` `[string]` `object`
  * Default: `index` in `SPA`, `pages/**/index.js` in `MPA`
  * CLI: no support

Specify the entry file(s).

## outDir

  * Type: `string`
  * Default: `dist`
  * CLI: `-d, --out-dir <dir>`

The directory to output files.

## publicUrl

  * Type: `string`
  * Default: `/`
  * CLI: `--public-url <url>`

The base URL your application bundle will be deployed at.

## css

### css.module

  * Type: `boolean`
  * Default: `true`
  * CLI: no support

Whether to enable module for CSS files.

### css.sourceMap

  * Type: `boolean`
  * Default: `true`
  * CLI: no support

Whether to enable source map for CSS files.

## alias

  * Type: `object`
  * Default: `{}`
  * CLI: no support

Configure webpack's [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) property.

## port

  * Type: `number`
  * Default: `4255`
  * CLI: `-p --port <port>`

Configure server port.

## host

  * Type: `string`
  * Default: `localhost`
  * CLI: `-h --host <host>`

Configure server host.
