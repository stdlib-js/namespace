<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Aliases

> A list of standard library aliases.

<section class="usage">

## Usage

```javascript
var aliases = require( '@stdlib/namespace/aliases' );
```

#### aliases( \[namespace] )

Returns a list of standard library aliases.

```javascript
var list = aliases();
// returns [...]
```

To return a list of standard library aliases associated with a particular namespace, provide a `namespace` filter.

```javascript
var list = aliases( '@stdlib/math/base/special' );
// returns [...]
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var aliases = require( '@stdlib/namespace/aliases' );

var list;
var len;
var idx;
var i;

list = aliases();
len = list.length;

// Select random aliases from the list...
for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    console.log( list[ idx ] );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: stdlib-aliases [options] [<filter>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ stdlib-aliases
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/namespace/alias2pkg`][@stdlib/namespace/alias2pkg]</span><span class="delimiter">: </span><span class="description">return the package name associated with a specified alias.</span>
-   <span class="package-name">[`@stdlib/namespace/alias2related`][@stdlib/namespace/alias2related]</span><span class="delimiter">: </span><span class="description">return aliases related to a specified alias.</span>
-   <span class="package-name">[`@stdlib/namespace/pkg2alias`][@stdlib/namespace/pkg2alias]</span><span class="delimiter">: </span><span class="description">return the alias associated with a specified package name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/namespace/alias2pkg]: https://github.com/stdlib-js/namespace/tree/main/alias2pkg

[@stdlib/namespace/alias2related]: https://github.com/stdlib-js/namespace/tree/main/alias2related

[@stdlib/namespace/pkg2alias]: https://github.com/stdlib-js/namespace/tree/main/pkg2alias

<!-- </related-links> -->

</section>

<!-- /.links -->
