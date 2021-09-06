<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Namespace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library namespace.

<section class="installation">

## Installation

```bash
npm install @stdlib/namespace
```

</section>

<section class="usage">

## Usage

```javascript
var namespace = require( '@stdlib/namespace' );
```

#### namespace()

Returns the standard library namespace.

```javascript
var ns = namespace();
// returns [ {...}, {...}, ... ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example. Possibly adding to global namespace as was done in previous example. Can see REPL context generation for inspiration. -->

<!-- eslint no-undef: "error" -->

```javascript
var namespace = require( '@stdlib/namespace' );

var ns = namespace();
// returns [ {...}, {...}, ... ]
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/namespace
```

</section>

<section class="usage">

### Usage

```text
Usage: stdlib-namespace [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --fields f1,f2,...    Print fields as CSV.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   The default output format is newline-delimited JSON ([NDJSON][ndjson]). Each printed `object` will contain the following fields: `alias`, `path`, `type`, and `related`. If a namespace element's value can be serialized as [JSON][json], the `object` will contain the element `value`. Otherwise, the `value` field will be missing.
-   To output data as comma-separated values ([CSV][csv]), specify the desired fields. Supported fields include: `alias`, `path`, `type`, and `related`. The first line is a header line, and all values are enclosed in double quotes `"..."`.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ stdlib-namespace
{...}
{...}
{...}
...
```

To output data as [CSV][csv],

```bash
$ stdlib-namespace --fields alias,type
"alias","type"
"AFINN_111","Function"
"AFINN_96","Function"
"any","Function"
"anyBy","Function"
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/namespace.svg
[npm-url]: https://npmjs.org/package/@stdlib/namespace

[test-image]: https://github.com/stdlib-js/namespace/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/namespace/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/namespace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/namespace?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/namespace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/namespace/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/namespace/main/LICENSE

[csv]: https://tools.ietf.org/html/rfc4180

[json]: http://www.json.org/

[ndjson]: http://specs.frictionlessdata.io/ndjson/

</section>

<!-- /.links -->
