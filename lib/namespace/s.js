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

/* eslint-disable stdlib/require-order */

'use strict';

// MODULES //

var append = require( './append.js' );


// MAIN //

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
	'alias': 'scalar2array',
	'path': '@stdlib/array/from-scalar',
	'value': require( '@stdlib/array/from-scalar' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator'
	]
});

ns.push({
	'alias': 'scalar2ndarray',
	'path': '@stdlib/ndarray/from-scalar',
	'value': require( '@stdlib/ndarray/from-scalar' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
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
	'alias': 'sentencize',
	'path': '@stdlib/nlp/sentencize',
	'value': require( '@stdlib/nlp/sentencize' ),
	'type': 'Function',
	'related': [
		'@stdlib/nlp/tokenize'
	]
});

ns.push({
	'alias': 'seq2slice',
	'path': '@stdlib/slice/seq2slice',
	'value': require( '@stdlib/slice/seq2slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/ctor',
		'@stdlib/slice/seq2multislice'
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
	'alias': 'Slice',
	'path': '@stdlib/slice/ctor',
	'value': require( '@stdlib/slice/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/ctor',
		'@stdlib/slice/multi'
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
	'alias': 'someInBy',
	'path': '@stdlib/object/some-in-by',
	'value': require( '@stdlib/object/some-in-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-in-by',
		'@stdlib/object/every-in-by',
		'@stdlib/utils/some-by',
		'@stdlib/utils/some-own-by'
	]
});

ns.push({
	'alias': 'someOwnBy',
	'path': '@stdlib/utils/some-own-by',
	'value': require( '@stdlib/utils/some-own-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-own-by',
		'@stdlib/object/every-own-by',
		'@stdlib/utils/some-by',
		'@stdlib/object/some-in-by'
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
	'path': '@stdlib/dstructs/stack',
	'value': require( '@stdlib/dstructs/stack' ),
	'type': 'Function',
	'related': [
		'@stdlib/dstructs/fifo'
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

append( ns, require( './strided' ) );

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
	'alias': 'structFactory',
	'path': '@stdlib/dstructs/struct',
	'value': require( '@stdlib/dstructs/struct' ),
	'type': 'Function',
	'related': []
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
