/* eslint-disable max-lines */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'safeintmax',
	'path': '@stdlib/utils/safe-int-max',
	'value': require( '@stdlib/utils/safe-int-max' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/safe-int-min',
		'@stdlib/utils/real-max',
		'@stdlib/utils/type-max'
	]
});

ns.push({
	'alias': 'safeintmin',
	'path': '@stdlib/utils/safe-int-min',
	'value': require( '@stdlib/utils/safe-int-min' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/safe-int-max',
		'@stdlib/utils/real-min',
		'@stdlib/utils/type-min'
	]
});

ns.push({
	'alias': 'sample',
	'path': '@stdlib/random/sample',
	'value': require( '@stdlib/random/sample' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_FIN',
	'path': '@stdlib/datasets/savoy-stopwords-fin',
	'value': require( '@stdlib/datasets/savoy-stopwords-fin' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_FR',
	'path': '@stdlib/datasets/savoy-stopwords-fr',
	'value': require( '@stdlib/datasets/savoy-stopwords-fr' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_GER',
	'path': '@stdlib/datasets/savoy-stopwords-ger',
	'value': require( '@stdlib/datasets/savoy-stopwords-ger' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_IT',
	'path': '@stdlib/datasets/savoy-stopwords-it',
	'value': require( '@stdlib/datasets/savoy-stopwords-it' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_POR',
	'path': '@stdlib/datasets/savoy-stopwords-por',
	'value': require( '@stdlib/datasets/savoy-stopwords-por' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_SP',
	'path': '@stdlib/datasets/savoy-stopwords-sp',
	'value': require( '@stdlib/datasets/savoy-stopwords-sp' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SAVOY_STOPWORDS_SWE',
	'path': '@stdlib/datasets/savoy-stopwords-swe',
	'value': require( '@stdlib/datasets/savoy-stopwords-swe' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'sdot',
	'path': '@stdlib/blas/sdot',
	'value': require( '@stdlib/blas/sdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/ddot',
		'@stdlib/blas/dsdot',
		'@stdlib/blas/gdot',
		'@stdlib/blas/sdsdot'
	]
});

ns.push({
	'alias': 'SECONDS_IN_DAY',
	'path': '@stdlib/constants/time/seconds-in-day',
	'value': require( '@stdlib/constants/time/seconds-in-day' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'SECONDS_IN_HOUR',
	'path': '@stdlib/constants/time/seconds-in-hour',
	'value': require( '@stdlib/constants/time/seconds-in-hour' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'SECONDS_IN_MINUTE',
	'path': '@stdlib/constants/time/seconds-in-minute',
	'value': require( '@stdlib/constants/time/seconds-in-minute' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'SECONDS_IN_WEEK',
	'path': '@stdlib/constants/time/seconds-in-week',
	'value': require( '@stdlib/constants/time/seconds-in-week' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'secondsInMonth',
	'path': '@stdlib/time/seconds-in-month',
	'value': require( '@stdlib/time/seconds-in-month' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/seconds-in-year'
	]
});

ns.push({
	'alias': 'secondsInYear',
	'path': '@stdlib/time/seconds-in-year',
	'value': require( '@stdlib/time/seconds-in-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/seconds-in-month'
	]
});

ns.push({
	'alias': 'setConfigurableReadOnly',
	'path': '@stdlib/utils/define-configurable-read-only-property',
	'value': require( '@stdlib/utils/define-configurable-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-configurable-read-only-accessor',
		'@stdlib/utils/define-configurable-read-write-accessor',
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'setConfigurableReadOnlyAccessor',
	'path': '@stdlib/utils/define-configurable-read-only-accessor',
	'value': require( '@stdlib/utils/define-configurable-read-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-configurable-read-only-property',
		'@stdlib/utils/define-configurable-read-write-accessor',
		'@stdlib/utils/define-configurable-write-only-accessor',
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-read-only-accessor'
	]
});

ns.push({
	'alias': 'setConfigurableReadWriteAccessor',
	'path': '@stdlib/utils/define-configurable-read-write-accessor',
	'value': require( '@stdlib/utils/define-configurable-read-write-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-configurable-read-only-property',
		'@stdlib/utils/define-configurable-read-only-accessor',
		'@stdlib/utils/define-configurable-write-only-accessor',
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-read-write-accessor'
	]
});

ns.push({
	'alias': 'setConfigurableWriteOnlyAccessor',
	'path': '@stdlib/utils/define-configurable-write-only-accessor',
	'value': require( '@stdlib/utils/define-configurable-write-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-configurable-read-only-property',
		'@stdlib/utils/define-configurable-read-only-accessor',
		'@stdlib/utils/define-configurable-read-write-accessor',
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-write-only-accessor'
	]
});

ns.push({
	'alias': 'setMemoizedConfigurableReadOnly',
	'path': '@stdlib/utils/define-memoized-configurable-read-only-property',
	'value': require( '@stdlib/utils/define-memoized-configurable-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-configurable-read-only-property',
		'@stdlib/utils/define-memoized-read-only-property',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'setMemoizedReadOnly',
	'path': '@stdlib/utils/define-memoized-read-only-property',
	'value': require( '@stdlib/utils/define-memoized-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-memoized-property',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'setNonEnumerableProperty',
	'path': '@stdlib/utils/define-nonenumerable-property',
	'value': require( '@stdlib/utils/define-nonenumerable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-nonenumerable-read-only-accessor',
		'@stdlib/utils/define-nonenumerable-read-only-property',
		'@stdlib/utils/define-nonenumerable-read-write-accessor',
		'@stdlib/utils/define-nonenumerable-write-only-accessor',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'setNonEnumerableReadOnly',
	'path': '@stdlib/utils/define-nonenumerable-read-only-property',
	'value': require( '@stdlib/utils/define-nonenumerable-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-nonenumerable-property',
		'@stdlib/utils/define-nonenumerable-read-only-accessor',
		'@stdlib/utils/define-nonenumerable-read-write-accessor',
		'@stdlib/utils/define-nonenumerable-write-only-accessor',
		'@stdlib/utils/define-read-only-property'
	]
});

ns.push({
	'alias': 'setNonEnumerableReadOnlyAccessor',
	'path': '@stdlib/utils/define-nonenumerable-read-only-accessor',
	'value': require( '@stdlib/utils/define-nonenumerable-read-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-nonenumerable-property',
		'@stdlib/utils/define-nonenumerable-read-only-property',
		'@stdlib/utils/define-nonenumerable-read-write-accessor',
		'@stdlib/utils/define-nonenumerable-write-only-accessor',
		'@stdlib/utils/define-read-only-accessor'
	]
});

ns.push({
	'alias': 'setNonEnumerableReadWriteAccessor',
	'path': '@stdlib/utils/define-nonenumerable-read-write-accessor',
	'value': require( '@stdlib/utils/define-nonenumerable-read-write-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-nonenumerable-property',
		'@stdlib/utils/define-nonenumerable-read-only-accessor',
		'@stdlib/utils/define-nonenumerable-read-only-property',
		'@stdlib/utils/define-nonenumerable-write-only-accessor',
		'@stdlib/utils/define-read-write-accessor'
	]
});

ns.push({
	'alias': 'setNonEnumerableWriteOnlyAccessor',
	'path': '@stdlib/utils/define-nonenumerable-write-only-accessor',
	'value': require( '@stdlib/utils/define-nonenumerable-write-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-nonenumerable-property',
		'@stdlib/utils/define-nonenumerable-read-only-accessor',
		'@stdlib/utils/define-nonenumerable-read-only-property',
		'@stdlib/utils/define-nonenumerable-read-write-accessor',
		'@stdlib/utils/define-write-only-accessor'
	]
});

ns.push({
	'alias': 'setReadOnly',
	'path': '@stdlib/utils/define-read-only-property',
	'value': require( '@stdlib/utils/define-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-read-only-accessor',
		'@stdlib/utils/define-read-write-accessor',
		'@stdlib/utils/define-write-only-accessor'
	]
});

ns.push({
	'alias': 'setReadOnlyAccessor',
	'path': '@stdlib/utils/define-read-only-accessor',
	'value': require( '@stdlib/utils/define-read-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-read-only-property',
		'@stdlib/utils/define-read-write-accessor',
		'@stdlib/utils/define-write-only-accessor'
	]
});

ns.push({
	'alias': 'setReadWriteAccessor',
	'path': '@stdlib/utils/define-read-write-accessor',
	'value': require( '@stdlib/utils/define-read-write-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-read-only-property',
		'@stdlib/utils/define-read-only-accessor',
		'@stdlib/utils/define-write-only-accessor'
	]
});

ns.push({
	'alias': 'setWriteOnlyAccessor',
	'path': '@stdlib/utils/define-write-only-accessor',
	'value': require( '@stdlib/utils/define-write-only-accessor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-read-only-property',
		'@stdlib/utils/define-read-only-accessor',
		'@stdlib/utils/define-read-write-accessor'
	]
});

ns.push({
	'alias': 'SharedArrayBuffer',
	'path': '@stdlib/array/shared-buffer',
	'value': require( '@stdlib/array/shared-buffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer/ctor',
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'shift',
	'path': '@stdlib/utils/shift',
	'value': require( '@stdlib/utils/shift' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/pop',
		'@stdlib/utils/push',
		'@stdlib/utils/unshift'
	]
});

ns.push({
	'alias': 'shuffle',
	'path': '@stdlib/random/shuffle',
	'value': require( '@stdlib/random/shuffle' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/sample'
	]
});

ns.push({
	'alias': 'sizeOf',
	'path': '@stdlib/utils/size-of',
	'value': require( '@stdlib/utils/size-of' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/real-max',
		'@stdlib/utils/type-max'
	]
});

ns.push({
	'alias': 'snakecase',
	'path': '@stdlib/string/snakecase',
	'value': require( '@stdlib/string/snakecase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/constantcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/pascalcase'
	]
});

ns.push({
	'alias': 'some',
	'path': '@stdlib/utils/some',
	'value': require( '@stdlib/utils/some' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any',
		'@stdlib/utils/every',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none',
		'@stdlib/utils/some-by'
	]
});

ns.push({
	'alias': 'someBy',
	'path': '@stdlib/utils/some-by',
	'value': require( '@stdlib/utils/some-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/every-by',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none-by',
		'@stdlib/utils/async/some-by',
		'@stdlib/utils/some-by-right'
	]
});

ns.push({
	'alias': 'someByAsync',
	'path': '@stdlib/utils/async/some-by',
	'value': require( '@stdlib/utils/async/some-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by',
		'@stdlib/utils/async/every-by',
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/async/none-by',
		'@stdlib/utils/some-by',
		'@stdlib/utils/async/some-by-right'
	]
});

ns.push({
	'alias': 'someByRight',
	'path': '@stdlib/utils/some-by-right',
	'value': require( '@stdlib/utils/some-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by-right',
		'@stdlib/utils/every-by-right',
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/none-by-right',
		'@stdlib/utils/some-by',
		'@stdlib/utils/async/some-by-right'
	]
});

ns.push({
	'alias': 'someByRightAsync',
	'path': '@stdlib/utils/async/some-by-right',
	'value': require( '@stdlib/utils/async/some-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by-right',
		'@stdlib/utils/async/every-by-right',
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/none-by-right',
		'@stdlib/utils/async/some-by',
		'@stdlib/utils/some-by-right'
	]
});

ns.push({
	'alias': 'SOTU',
	'path': '@stdlib/datasets/sotu',
	'value': require( '@stdlib/datasets/sotu' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SPACHE_REVISED',
	'path': '@stdlib/datasets/spache-revised',
	'value': require( '@stdlib/datasets/spache-revised' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SPAM_ASSASSIN',
	'path': '@stdlib/datasets/spam-assassin',
	'value': require( '@stdlib/datasets/spam-assassin' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'SparklineBase',
	'path': '@stdlib/plot/sparklines/base/ctor',
	'value': require( '@stdlib/plot/sparklines/base/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'sparsearray2iterator',
	'path': '@stdlib/array/to-sparse-iterator',
	'value': require( '@stdlib/array/to-sparse-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator',
		'@stdlib/array/to-sparse-iterator-right'
	]
});

ns.push({
	'alias': 'sparsearray2iteratorRight',
	'path': '@stdlib/array/to-sparse-iterator-right',
	'value': require( '@stdlib/array/to-sparse-iterator-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator-right',
		'@stdlib/array/to-sparse-iterator'
	]
});

ns.push({
	'alias': 'splitStream',
	'path': '@stdlib/streams/node/split',
	'value': require( '@stdlib/streams/node/split' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/join'
	]
});

ns.push({
	'alias': 'SQRT_EPS',
	'path': '@stdlib/constants/float64/sqrt-eps',
	'value': require( '@stdlib/constants/float64/sqrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/eps'
	]
});

ns.push({
	'alias': 'SQRT_HALF',
	'path': '@stdlib/constants/float64/sqrt-half',
	'value': require( '@stdlib/constants/float64/sqrt-half' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-half'
	]
});

ns.push({
	'alias': 'SQRT_HALF_PI',
	'path': '@stdlib/constants/float64/sqrt-half-pi',
	'value': require( '@stdlib/constants/float64/sqrt-half-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'SQRT_PHI',
	'path': '@stdlib/constants/float64/sqrt-phi',
	'value': require( '@stdlib/constants/float64/sqrt-phi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/phi'
	]
});

ns.push({
	'alias': 'SQRT_PI',
	'path': '@stdlib/constants/float64/sqrt-pi',
	'value': require( '@stdlib/constants/float64/sqrt-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'SQRT_THREE',
	'path': '@stdlib/constants/float64/sqrt-three',
	'value': require( '@stdlib/constants/float64/sqrt-three' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'SQRT_TWO',
	'path': '@stdlib/constants/float64/sqrt-two',
	'value': require( '@stdlib/constants/float64/sqrt-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-two'
	]
});

ns.push({
	'alias': 'SQRT_TWO_PI',
	'path': '@stdlib/constants/float64/sqrt-two-pi',
	'value': require( '@stdlib/constants/float64/sqrt-two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/two-pi'
	]
});

ns.push({
	'alias': 'SSA_US_BIRTHS_2000_2014',
	'path': '@stdlib/datasets/ssa-us-births-2000-2014',
	'value': require( '@stdlib/datasets/ssa-us-births-2000-2014' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/cdc-nchs-us-births-1969-1988',
		'@stdlib/datasets/cdc-nchs-us-births-1994-2003'
	]
});

ns.push({
	'alias': 'sswap',
	'path': '@stdlib/blas/sswap',
	'value': require( '@stdlib/blas/sswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/dcopy',
		'@stdlib/blas/dswap',
		'@stdlib/blas/gswap'
	]
});

ns.push({
	'alias': 'Stack',
	'path': '@stdlib/utils/stack',
	'value': require( '@stdlib/utils/stack' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/fifo'
	]
});

ns.push({
	'alias': 'standalone2pkg',
	'path': './../../standalone2pkg',
	'value': require( './../../standalone2pkg' ),
	'type': 'Function',
	'related': [
		'./../../alias2standalone',
		'./../../pkg2alias',
		'./../../pkg2standalone'
	]
});

ns.push({
	'alias': 'STANDARD_CARD_DECK',
	'path': '@stdlib/datasets/standard-card-deck',
	'value': require( '@stdlib/datasets/standard-card-deck' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'startcase',
	'path': '@stdlib/string/startcase',
	'value': require( '@stdlib/string/startcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/lowercase',
		'@stdlib/string/uppercase'
	]
});

ns.push({
	'alias': 'startsWith',
	'path': '@stdlib/string/starts-with',
	'value': require( '@stdlib/string/starts-with' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/ends-with'
	]
});

ns.push({
	'alias': 'STOPWORDS_EN',
	'path': '@stdlib/datasets/stopwords-en',
	'value': require( '@stdlib/datasets/stopwords-en' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'strided.abs',
	'path': '@stdlib/math/strided/special/abs',
	'value': require( '@stdlib/math/strided/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'strided.abs2',
	'path': '@stdlib/math/strided/special/abs2',
	'value': require( '@stdlib/math/strided/special/abs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'strided.abs2By',
	'path': '@stdlib/math/strided/special/abs2-by',
	'value': require( '@stdlib/math/strided/special/abs2-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs-by',
		'@stdlib/math/strided/special/abs2'
	]
});

ns.push({
	'alias': 'strided.absBy',
	'path': '@stdlib/math/strided/special/abs-by',
	'value': require( '@stdlib/math/strided/special/abs-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/abs2-by'
	]
});

ns.push({
	'alias': 'strided.cbrt',
	'path': '@stdlib/math/strided/special/cbrt',
	'value': require( '@stdlib/math/strided/special/cbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/sqrt'
	]
});

ns.push({
	'alias': 'strided.ceil',
	'path': '@stdlib/math/strided/special/ceil',
	'value': require( '@stdlib/math/strided/special/ceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil2',
		'@stdlib/math/strided/special/ceil10',
		'@stdlib/math/strided/special/ceilb',
		'@stdlib/math/strided/special/ceiln',
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/sceil'
	]
});

ns.push({
	'alias': 'strided.dabs',
	'path': '@stdlib/math/strided/special/dabs',
	'value': require( '@stdlib/math/strided/special/dabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'strided.dabs2',
	'path': '@stdlib/math/strided/special/dabs2',
	'value': require( '@stdlib/math/strided/special/dabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'strided.dcbrt',
	'path': '@stdlib/math/strided/special/dcbrt',
	'value': require( '@stdlib/math/strided/special/dcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt'
	]
});

ns.push({
	'alias': 'strided.dceil',
	'path': '@stdlib/math/strided/special/dceil',
	'value': require( '@stdlib/math/strided/special/dceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil2',
		'@stdlib/math/strided/special/dceil10',
		'@stdlib/math/strided/special/dceilb',
		'@stdlib/math/strided/special/dceiln',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil'
	]
});

ns.push({
	'alias': 'strided.ddeg2rad',
	'path': '@stdlib/math/strided/special/ddeg2rad',
	'value': require( '@stdlib/math/strided/special/ddeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/drad2deg',
		'@stdlib/math/strided/special/sdeg2rad'
	]
});

ns.push({
	'alias': 'strided.deg2rad',
	'path': '@stdlib/math/strided/special/deg2rad',
	'value': require( '@stdlib/math/strided/special/deg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/rad2deg',
		'@stdlib/math/strided/special/sdeg2rad'
	]
});

ns.push({
	'alias': 'strided.dfloor',
	'path': '@stdlib/math/strided/special/dfloor',
	'value': require( '@stdlib/math/strided/special/dfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor2',
		'@stdlib/math/strided/special/dfloor10',
		'@stdlib/math/strided/special/dfloorb',
		'@stdlib/math/strided/special/dfloorn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sfloor'
	]
});

ns.push({
	'alias': 'strided.dinv',
	'path': '@stdlib/math/strided/special/dinv',
	'value': require( '@stdlib/math/strided/special/dinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/inv',
		'@stdlib/math/strided/special/sinv'
	]
});

ns.push({
	'alias': 'strided.dispatch',
	'path': '@stdlib/strided/dispatch',
	'value': require( '@stdlib/strided/dispatch' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'strided.dmskabs',
	'path': '@stdlib/math/strided/special/dmskabs',
	'value': require( '@stdlib/math/strided/special/dmskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'strided.dmskabs2',
	'path': '@stdlib/math/strided/special/dmskabs2',
	'value': require( '@stdlib/math/strided/special/dmskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'strided.dmskcbrt',
	'path': '@stdlib/math/strided/special/dmskcbrt',
	'value': require( '@stdlib/math/strided/special/dmskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/smskcbrt'
	]
});

ns.push({
	'alias': 'strided.dmskceil',
	'path': '@stdlib/math/strided/special/dmskceil',
	'value': require( '@stdlib/math/strided/special/dmskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dmskceil2',
		'@stdlib/math/strided/special/dmskceil10',
		'@stdlib/math/strided/special/dmskceilb',
		'@stdlib/math/strided/special/dmskceiln',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/smskceil'
	]
});

ns.push({
	'alias': 'strided.dmskdeg2rad',
	'path': '@stdlib/math/strided/special/dmskdeg2rad',
	'value': require( '@stdlib/math/strided/special/dmskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskrad2deg',
		'@stdlib/math/strided/special/smskdeg2rad'
	]
});

ns.push({
	'alias': 'strided.dmskfloor',
	'path': '@stdlib/math/strided/special/dmskfloor',
	'value': require( '@stdlib/math/strided/special/dmskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor2',
		'@stdlib/math/strided/special/dmskfloor10',
		'@stdlib/math/strided/special/dmskfloorb',
		'@stdlib/math/strided/special/dmskfloorn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/smskfloor'
	]
});

ns.push({
	'alias': 'strided.dmskinv',
	'path': '@stdlib/math/strided/special/dmskinv',
	'value': require( '@stdlib/math/strided/special/dmskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/mskinv',
		'@stdlib/math/strided/special/smskinv'
	]
});

ns.push({
	'alias': 'strided.dmskramp',
	'path': '@stdlib/math/strided/special/dmskramp',
	'value': require( '@stdlib/math/strided/special/dmskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskheaviside',
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskramp'
	]
});

ns.push({
	'alias': 'strided.dmskrsqrt',
	'path': '@stdlib/math/strided/special/dmskrsqrt',
	'value': require( '@stdlib/math/strided/special/dmskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smskrsqrt'
	]
});

ns.push({
	'alias': 'strided.dmsksqrt',
	'path': '@stdlib/math/strided/special/dmsksqrt',
	'value': require( '@stdlib/math/strided/special/dmsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smsksqrt'
	]
});

ns.push({
	'alias': 'strided.dmsktrunc',
	'path': '@stdlib/math/strided/special/dmsktrunc',
	'value': require( '@stdlib/math/strided/special/dmsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmsktrunc2',
		'@stdlib/math/strided/special/dmsktrunc10',
		'@stdlib/math/strided/special/dmsktruncb',
		'@stdlib/math/strided/special/dmsktruncn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'strided.dramp',
	'path': '@stdlib/math/strided/special/dramp',
	'value': require( '@stdlib/math/strided/special/dramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dheaviside',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'strided.drsqrt',
	'path': '@stdlib/math/strided/special/drsqrt',
	'value': require( '@stdlib/math/strided/special/drsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.dsqrt',
	'path': '@stdlib/math/strided/special/dsqrt',
	'value': require( '@stdlib/math/strided/special/dsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.dtrunc',
	'path': '@stdlib/math/strided/special/dtrunc',
	'value': require( '@stdlib/math/strided/special/dtrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dtrunc2',
		'@stdlib/math/strided/special/dtrunc10',
		'@stdlib/math/strided/special/dtruncb',
		'@stdlib/math/strided/special/dtruncn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'strided.floor',
	'path': '@stdlib/math/strided/special/floor',
	'value': require( '@stdlib/math/strided/special/floor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/floor2',
		'@stdlib/math/strided/special/floor10',
		'@stdlib/math/strided/special/floorb',
		'@stdlib/math/strided/special/floorn',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/sfloor'
	]
});

ns.push({
	'alias': 'strided.inv',
	'path': '@stdlib/math/strided/special/inv',
	'value': require( '@stdlib/math/strided/special/inv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/sinv'
	]
});

ns.push({
	'alias': 'strided.ramp',
	'path': '@stdlib/math/strided/special/ramp',
	'value': require( '@stdlib/math/strided/special/ramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/heaviside',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'strided.rsqrt',
	'path': '@stdlib/math/strided/special/rsqrt',
	'value': require( '@stdlib/math/strided/special/rsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.sabs',
	'path': '@stdlib/math/strided/special/sabs',
	'value': require( '@stdlib/math/strided/special/sabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'strided.sabs2',
	'path': '@stdlib/math/strided/special/sabs2',
	'value': require( '@stdlib/math/strided/special/sabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'strided.scbrt',
	'path': '@stdlib/math/strided/special/scbrt',
	'value': require( '@stdlib/math/strided/special/scbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.sceil',
	'path': '@stdlib/math/strided/special/sceil',
	'value': require( '@stdlib/math/strided/special/sceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/sceil2',
		'@stdlib/math/strided/special/sceil10',
		'@stdlib/math/strided/special/sceilb',
		'@stdlib/math/strided/special/sceiln',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'strided.sdeg2rad',
	'path': '@stdlib/math/strided/special/sdeg2rad',
	'value': require( '@stdlib/math/strided/special/sdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/srad2deg'
	]
});

ns.push({
	'alias': 'strided.sfloor',
	'path': '@stdlib/math/strided/special/sfloor',
	'value': require( '@stdlib/math/strided/special/sfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor2',
		'@stdlib/math/strided/special/sfloor10',
		'@stdlib/math/strided/special/sfloorb',
		'@stdlib/math/strided/special/sfloorn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'strided.sinv',
	'path': '@stdlib/math/strided/special/sinv',
	'value': require( '@stdlib/math/strided/special/sinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/inv'
	]
});

ns.push({
	'alias': 'strided.smskabs',
	'path': '@stdlib/math/strided/special/smskabs',
	'value': require( '@stdlib/math/strided/special/smskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/sabs',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'strided.smskabs2',
	'path': '@stdlib/math/strided/special/smskabs2',
	'value': require( '@stdlib/math/strided/special/smskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/sabs2',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'strided.smskcbrt',
	'path': '@stdlib/math/strided/special/smskcbrt',
	'value': require( '@stdlib/math/strided/special/smskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.smskceil',
	'path': '@stdlib/math/strided/special/smskceil',
	'value': require( '@stdlib/math/strided/special/smskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/smskceil2',
		'@stdlib/math/strided/special/smskceil10',
		'@stdlib/math/strided/special/smskceilb',
		'@stdlib/math/strided/special/smskceiln',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'strided.smskdeg2rad',
	'path': '@stdlib/math/strided/special/smskdeg2rad',
	'value': require( '@stdlib/math/strided/special/smskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskdeg2rad',
		'@stdlib/math/strided/special/sdeg2rad',
		'@stdlib/math/strided/special/smskrad2deg'
	]
});

ns.push({
	'alias': 'strided.smskfloor',
	'path': '@stdlib/math/strided/special/smskfloor',
	'value': require( '@stdlib/math/strided/special/smskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor2',
		'@stdlib/math/strided/special/smskfloor10',
		'@stdlib/math/strided/special/smskfloorb',
		'@stdlib/math/strided/special/smskfloorn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'strided.smskinv',
	'path': '@stdlib/math/strided/special/smskinv',
	'value': require( '@stdlib/math/strided/special/smskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/dmskinv',
		'@stdlib/math/strided/special/mskinv'
	]
});

ns.push({
	'alias': 'strided.smskramp',
	'path': '@stdlib/math/strided/special/smskramp',
	'value': require( '@stdlib/math/strided/special/smskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskheaviside',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'strided.smskrsqrt',
	'path': '@stdlib/math/strided/special/smskrsqrt',
	'value': require( '@stdlib/math/strided/special/smskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smsksqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.smsksqrt',
	'path': '@stdlib/math/strided/special/smsksqrt',
	'value': require( '@stdlib/math/strided/special/smsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smskcbrt',
		'@stdlib/math/strided/special/smskrsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.smsktrunc',
	'path': '@stdlib/math/strided/special/smsktrunc',
	'value': require( '@stdlib/math/strided/special/smsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smskceil',
		'@stdlib/math/strided/special/smskfloor',
		'@stdlib/math/strided/special/smsktrunc2',
		'@stdlib/math/strided/special/smsktrunc10',
		'@stdlib/math/strided/special/smsktruncb',
		'@stdlib/math/strided/special/smsktruncn',
		'@stdlib/math/strided/special/smskround',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'strided.sqrt',
	'path': '@stdlib/math/strided/special/sqrt',
	'value': require( '@stdlib/math/strided/special/sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.sramp',
	'path': '@stdlib/math/strided/special/sramp',
	'value': require( '@stdlib/math/strided/special/sramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sheaviside'
	]
});

ns.push({
	'alias': 'strided.srsqrt',
	'path': '@stdlib/math/strided/special/srsqrt',
	'value': require( '@stdlib/math/strided/special/srsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.ssqrt',
	'path': '@stdlib/math/strided/special/ssqrt',
	'value': require( '@stdlib/math/strided/special/ssqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.strunc',
	'path': '@stdlib/math/strided/special/strunc',
	'value': require( '@stdlib/math/strided/special/strunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil',
		'@stdlib/math/strided/special/sfloor',
		'@stdlib/math/strided/special/strunc2',
		'@stdlib/math/strided/special/strunc10',
		'@stdlib/math/strided/special/struncb',
		'@stdlib/math/strided/special/struncn',
		'@stdlib/math/strided/special/sround',
		'@stdlib/math/strided/special/trunc'
	]
});

ns.push({
	'alias': 'strided.trunc',
	'path': '@stdlib/math/strided/special/trunc',
	'value': require( '@stdlib/math/strided/special/trunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/trunc2',
		'@stdlib/math/strided/special/trunc10',
		'@stdlib/math/strided/special/truncb',
		'@stdlib/math/strided/special/truncn',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'stridedarray2iterator',
	'path': '@stdlib/array/to-strided-iterator',
	'value': require( '@stdlib/array/to-strided-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator'
	]
});

ns.push({
	'alias': 'stridedArrayStream',
	'path': '@stdlib/streams/node/from-strided-array',
	'value': require( '@stdlib/streams/node/from-strided-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-array'
	]
});

ns.push({
	'alias': 'string2buffer',
	'path': '@stdlib/buffer/from-string',
	'value': require( '@stdlib/buffer/from-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer',
		'@stdlib/buffer/alloc',
		'@stdlib/buffer/ctor',
		'@stdlib/buffer/from-array',
		'@stdlib/buffer/from-arraybuffer',
		'@stdlib/buffer/from-buffer'
	]
});

ns.push({
	'alias': 'sub2ind',
	'path': '@stdlib/ndarray/sub2ind',
	'value': require( '@stdlib/ndarray/sub2ind' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/ind2sub'
	]
});

ns.push({
	'alias': 'substringAfter',
	'path': '@stdlib/string/substring-after',
	'value': require( '@stdlib/string/substring-after' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/substring-before',
		'@stdlib/string/substring-before-last',
		'@stdlib/string/substring-after-last'
	]
});

ns.push({
	'alias': 'substringAfterLast',
	'path': '@stdlib/string/substring-after-last',
	'value': require( '@stdlib/string/substring-after-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/substring-before',
		'@stdlib/string/substring-before-last',
		'@stdlib/string/substring-after'
	]
});

ns.push({
	'alias': 'substringBefore',
	'path': '@stdlib/string/substring-before',
	'value': require( '@stdlib/string/substring-before' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/substring-before-last',
		'@stdlib/string/substring-after',
		'@stdlib/string/substring-after-last'
	]
});

ns.push({
	'alias': 'substringBeforeLast',
	'path': '@stdlib/string/substring-before-last',
	'value': require( '@stdlib/string/substring-before-last' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/substring-before',
		'@stdlib/string/substring-after',
		'@stdlib/string/substring-after-last'
	]
});

ns.push({
	'alias': 'SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK',
	'path': '@stdlib/datasets/suthaharan-multi-hop-sensor-network',
	'value': require( '@stdlib/datasets/suthaharan-multi-hop-sensor-network' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/suthaharan-single-hop-sensor-network'
	]
});

ns.push({
	'alias': 'SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK',
	'path': '@stdlib/datasets/suthaharan-single-hop-sensor-network',
	'value': require( '@stdlib/datasets/suthaharan-single-hop-sensor-network' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/suthaharan-multi-hop-sensor-network'
	]
});

ns.push({
	'alias': 'Symbol',
	'path': '@stdlib/symbol/ctor',
	'value': require( '@stdlib/symbol/ctor' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
