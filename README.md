# pathify-string

Make Node's [Path] method available as getters on String

[path]: https://nodejs.org/api/path.html

## Install

```sh
npm i pathify-string
```

## Usage

Just include at the beginning:
```js
require('pathify-string')
```
It patches String.prototype:

```js
const path = __dirname.join('/some/path')
// is equivalent to:
const path = require('path').join('/some/path')
```

```js
const basename = path.basename
// is equivalent to:
const basename = require('path').basename(path)
```
```js
const basename = path.basename(path.extname)
// is equivalent to:
conet nodePath = require('path')
const basename = nodePath.basename(path, nodePath.extname(path))
```

