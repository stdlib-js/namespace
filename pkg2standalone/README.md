<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# pkg2standalone

> Return the standalone package name associated with a provided internal package name.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pkg2standalone = require( '@stdlib/namespace/pkg2standalone' );
```

#### pkg2standalone( pkg )

Returns the standalone package name associated with a provided internal package name.

```javascript
var v = pkg2standalone( '@stdlib/math/base/special/sin' );
// returns '@stdlib/math-base-special-sin'
```

If provided an unrecognized `pkg`, the function returns `null`.

```javascript
var v = pkg2standalone( 'unrecognized_pkg_beep_boop_bop_bip' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var aliases = require( '@stdlib/namespace/aliases' );
var alias2pkg = require( '@stdlib/namespace/alias2pkg' );
var pkg2standalone = require( '@stdlib/namespace/pkg2standalone' );

var list;
var len;
var idx;
var v1;
var v2;
var i;

list = aliases();
len = list.length;

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    v1 = alias2pkg( list[ idx ] );
    v2 = pkg2standalone( v1 );
    console.log( 'alias: %s. pkg: %s.', list[ idx ], v1 );
    console.log( 'pkg: %s. standalone: %s.', v1, v2 );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: stdlib-pkg2standalone [options] <pkg>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ stdlib-pkg2standalone '@stdlib/math/base/special/sin'
@stdlib/math-base-special-sin
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/namespace/alias2pkg`][@stdlib/namespace/alias2pkg]</span><span class="delimiter">: </span><span class="description">return the package name associated with a specified alias.</span>
-   <span class="package-name">[`@stdlib/namespace/alias2standalone`][@stdlib/namespace/alias2standalone]</span><span class="delimiter">: </span><span class="description">return the standalone package name associated with a specified alias.</span>
-   <span class="package-name">[`@stdlib/namespace/aliases`][@stdlib/namespace/aliases]</span><span class="delimiter">: </span><span class="description">standard library aliases.</span>
-   <span class="package-name">[`@stdlib/namespace/pkg2alias`][@stdlib/namespace/pkg2alias]</span><span class="delimiter">: </span><span class="description">return the alias associated with a specified package name.</span>
-   <span class="package-name">[`@stdlib/namespace/pkg2related`][@stdlib/namespace/pkg2related]</span><span class="delimiter">: </span><span class="description">return package names related to a specified package name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/namespace/alias2pkg]: https://github.com/stdlib-js/namespace/tree/main/alias2pkg

[@stdlib/namespace/alias2standalone]: https://github.com/stdlib-js/namespace/tree/main/alias2standalone

[@stdlib/namespace/aliases]: https://github.com/stdlib-js/namespace/tree/main/aliases

[@stdlib/namespace/pkg2alias]: https://github.com/stdlib-js/namespace/tree/main/pkg2alias

[@stdlib/namespace/pkg2related]: https://github.com/stdlib-js/namespace/tree/main/pkg2related

<!-- </related-links> -->

</section>

<!-- /.links -->
