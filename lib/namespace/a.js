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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'abs',
	'path': '@stdlib/math/special/abs',
	'value': require( '@stdlib/math/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/special/abs2',
		'@stdlib/math/special/inabs'
	]
});

ns.push({
	'alias': 'acronym',
	'path': '@stdlib/string/acronym',
	'value': require( '@stdlib/string/acronym' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'AFINN_96',
	'path': '@stdlib/datasets/afinn-96',
	'value': require( '@stdlib/datasets/afinn-96' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/afinn-111'
	]
});

ns.push({
	'alias': 'AFINN_111',
	'path': '@stdlib/datasets/afinn-111',
	'value': require( '@stdlib/datasets/afinn-111' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/afinn-96'
	]
});

ns.push({
	'alias': 'afull',
	'path': '@stdlib/array/full',
	'value': require( '@stdlib/array/full' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full-like',
		'@stdlib/array/ones',
		'@stdlib/array/zeros',
		'@stdlib/ndarray/full'
	]
});

ns.push({
	'alias': 'afullLike',
	'path': '@stdlib/array/full-like',
	'value': require( '@stdlib/array/full-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full',
		'@stdlib/array/ones-like',
		'@stdlib/array/zeros-like',
		'@stdlib/ndarray/full-like'
	]
});

ns.push({
	'alias': 'alias2pkg',
	'path': './../../alias2pkg',
	'value': require( './../../alias2pkg' ),
	'type': 'Function',
	'related': [
		'./../../alias2related',
		'./../../aliases',
		'./../../pkg2alias'
	]
});

ns.push({
	'alias': 'alias2related',
	'path': './../../alias2related',
	'value': require( './../../alias2related' ),
	'type': 'Function',
	'related': [
		'./../../alias2pkg',
		'./../../aliases',
		'./../../pkg2related'
	]
});

ns.push({
	'alias': 'alias2standalone',
	'path': './../../alias2standalone',
	'value': require( './../../alias2standalone' ),
	'type': 'Function',
	'related': [
		'./../../alias2pkg',
		'./../../alias2related',
		'./../../aliases',
		'./../../pkg2alias',
		'./../../pkg2standalone'
	]
});

ns.push({
	'alias': 'aliases',
	'path': './../../aliases',
	'value': require( './../../aliases' ),
	'type': 'Function',
	'related': [
		'./../../alias2pkg',
		'./../../alias2related',
		'./../../pkg2alias'
	]
});

ns.push({
	'alias': 'allocUnsafe',
	'path': '@stdlib/buffer/alloc-unsafe',
	'value': require( '@stdlib/buffer/alloc-unsafe' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer',
		'@stdlib/buffer/alloc',
		'@stdlib/buffer/ctor',
		'@stdlib/buffer/from-array',
		'@stdlib/buffer/from-arraybuffer',
		'@stdlib/buffer/from-buffer',
		'@stdlib/buffer/from-string'
	]
});

ns.push({
	'alias': 'anova1',
	'path': '@stdlib/stats/anova1',
	'value': require( '@stdlib/stats/anova1' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'ANSCOMBES_QUARTET',
	'path': '@stdlib/datasets/anscombes-quartet',
	'value': require( '@stdlib/datasets/anscombes-quartet' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'any',
	'path': '@stdlib/utils/any',
	'value': require( '@stdlib/utils/any' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/every',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none',
		'@stdlib/utils/some'
	]
});

ns.push({
	'alias': 'anyBy',
	'path': '@stdlib/utils/any-by',
	'value': require( '@stdlib/utils/any-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by',
		'@stdlib/utils/any-by-right',
		'@stdlib/utils/every-by',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none-by',
		'@stdlib/utils/some-by'
	]
});

ns.push({
	'alias': 'anyByAsync',
	'path': '@stdlib/utils/async/any-by',
	'value': require( '@stdlib/utils/async/any-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/async/any-by-right',
		'@stdlib/utils/async/every-by',
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/async/none-by',
		'@stdlib/utils/async/some-by'
	]
});

ns.push({
	'alias': 'anyByRight',
	'path': '@stdlib/utils/any-by-right',
	'value': require( '@stdlib/utils/any-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/async/any-by-right',
		'@stdlib/utils/every-by-right',
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/none-by-right',
		'@stdlib/utils/some-by-right'
	]
});

ns.push({
	'alias': 'anyByRightAsync',
	'path': '@stdlib/utils/async/any-by-right',
	'value': require( '@stdlib/utils/async/any-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by',
		'@stdlib/utils/any-by-right',
		'@stdlib/utils/async/every-by-right',
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/none-by-right',
		'@stdlib/utils/async/some-by-right'
	]
});

ns.push({
	'alias': 'aones',
	'path': '@stdlib/array/ones',
	'value': require( '@stdlib/array/ones' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full',
		'@stdlib/array/ones-like',
		'@stdlib/array/zeros',
		'@stdlib/ndarray/full'
	]
});

ns.push({
	'alias': 'aonesLike',
	'path': '@stdlib/array/ones-like',
	'value': require( '@stdlib/array/ones-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full-like',
		'@stdlib/array/ones',
		'@stdlib/array/zeros-like',
		'@stdlib/ndarray/ones-like'
	]
});

ns.push({
	'alias': 'APERY',
	'path': '@stdlib/constants/float64/apery',
	'value': require( '@stdlib/constants/float64/apery' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'append',
	'path': '@stdlib/utils/append',
	'value': require( '@stdlib/utils/append' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/prepend',
		'@stdlib/utils/push'
	]
});

ns.push({
	'alias': 'ARCH',
	'path': '@stdlib/os/arch',
	'value': require( '@stdlib/os/arch' ),
	'type': 'string',
	'related': [
		'@stdlib/os/platform'
	]
});

ns.push({
	'alias': 'argumentFunction',
	'path': '@stdlib/utils/argument-function',
	'value': require( '@stdlib/utils/argument-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constant-function',
		'@stdlib/utils/identity-function'
	]
});

ns.push({
	'alias': 'ARGV',
	'path': '@stdlib/process/argv',
	'value': require( '@stdlib/process/argv' ),
	'type': 'Array',
	'related': [
		'@stdlib/process/env'
	]
});

ns.push({
	'alias': 'array',
	'path': '@stdlib/ndarray/array',
	'value': require( '@stdlib/ndarray/array' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'array2buffer',
	'path': '@stdlib/buffer/from-array',
	'value': require( '@stdlib/buffer/from-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer',
		'@stdlib/buffer/alloc',
		'@stdlib/buffer/ctor',
		'@stdlib/buffer/from-arraybuffer',
		'@stdlib/buffer/from-buffer',
		'@stdlib/buffer/from-string'
	]
});

ns.push({
	'alias': 'array2iterator',
	'path': '@stdlib/array/to-iterator',
	'value': require( '@stdlib/array/to-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-circular-iterator',
		'@stdlib/array/to-iterator-right',
		'@stdlib/array/to-strided-iterator'
	]
});

ns.push({
	'alias': 'array2iteratorRight',
	'path': '@stdlib/array/to-iterator-right',
	'value': require( '@stdlib/array/to-iterator-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator'
	]
});

ns.push({
	'alias': 'ArrayBuffer',
	'path': '@stdlib/array/buffer',
	'value': require( '@stdlib/array/buffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer/ctor',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/shared-buffer',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'arraybuffer2buffer',
	'path': '@stdlib/buffer/from-arraybuffer',
	'value': require( '@stdlib/buffer/from-arraybuffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/buffer',
		'@stdlib/buffer/alloc',
		'@stdlib/buffer/ctor',
		'@stdlib/buffer/from-array',
		'@stdlib/buffer/from-buffer',
		'@stdlib/buffer/from-string'
	]
});

ns.push({
	'alias': 'arrayCtors',
	'path': '@stdlib/array/ctors',
	'value': require( '@stdlib/array/ctors' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed-ctors'
	]
});

ns.push({
	'alias': 'arrayDataType',
	'path': '@stdlib/array/dtype',
	'value': require( '@stdlib/array/dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes'
	]
});

ns.push({
	'alias': 'arrayDataTypes',
	'path': '@stdlib/array/dtypes',
	'value': require( '@stdlib/array/dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed-dtypes',
		'@stdlib/ndarray/dtypes'
	]
});

ns.push({
	'alias': 'arrayMinDataType',
	'path': '@stdlib/array/min-dtype',
	'value': require( '@stdlib/array/min-dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/array/promotion-rules',
		'@stdlib/array/safe-casts'
	]
});

ns.push({
	'alias': 'arrayNextDataType',
	'path': '@stdlib/array/next-dtype',
	'value': require( '@stdlib/array/next-dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtype',
		'@stdlib/array/dtypes'
	]
});

ns.push({
	'alias': 'arrayPromotionRules',
	'path': '@stdlib/array/promotion-rules',
	'value': require( '@stdlib/array/promotion-rules' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/array/safe-casts',
		'@stdlib/ndarray/promotion-rules'
	]
});

ns.push({
	'alias': 'arraySafeCasts',
	'path': '@stdlib/array/safe-casts',
	'value': require( '@stdlib/array/safe-casts' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/convert',
		'@stdlib/array/convert-same',
		'@stdlib/array/dtypes',
		'@stdlib/array/same-kind-casts',
		'@stdlib/ndarray/safe-casts'
	]
});

ns.push({
	'alias': 'arraySameKindCasts',
	'path': '@stdlib/array/same-kind-casts',
	'value': require( '@stdlib/array/same-kind-casts' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/convert',
		'@stdlib/array/convert-same',
		'@stdlib/array/dtypes',
		'@stdlib/array/safe-casts',
		'@stdlib/ndarray/same-kind-casts'
	]
});

ns.push({
	'alias': 'arrayShape',
	'path': '@stdlib/array/shape',
	'value': require( '@stdlib/array/shape' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/generic',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'arrayStream',
	'path': '@stdlib/streams/node/from-array',
	'value': require( '@stdlib/streams/node/from-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-circular-array',
		'@stdlib/streams/node/from-iterator',
		'@stdlib/streams/node/from-strided-array'
	]
});

ns.push({
	'alias': 'arrayview2iterator',
	'path': '@stdlib/array/to-view-iterator',
	'value': require( '@stdlib/array/to-view-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator',
		'@stdlib/array/to-strided-iterator',
		'@stdlib/array/to-view-iterator-right'
	]
});

ns.push({
	'alias': 'arrayview2iteratorRight',
	'path': '@stdlib/array/to-view-iterator-right',
	'value': require( '@stdlib/array/to-view-iterator-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-iterator-right',
		'@stdlib/array/to-strided-iterator',
		'@stdlib/array/to-view-iterator'
	]
});

ns.push({
	'alias': 'AsyncIteratorSymbol',
	'path': '@stdlib/symbol/async-iterator',
	'value': require( '@stdlib/symbol/async-iterator' ),
	'type': 'symbol',
	'related': [
		'@stdlib/symbol/ctor',
		'@stdlib/symbol/iterator'
	]
});

ns.push({
	'alias': 'azeros',
	'path': '@stdlib/array/zeros',
	'value': require( '@stdlib/array/zeros' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full',
		'@stdlib/array/ones',
		'@stdlib/array/zeros-like',
		'@stdlib/ndarray/zeros'
	]
});

ns.push({
	'alias': 'azerosLike',
	'path': '@stdlib/array/zeros-like',
	'value': require( '@stdlib/array/zeros-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/full-like',
		'@stdlib/array/ones-like',
		'@stdlib/array/zeros',
		'@stdlib/ndarray/zeros-like'
	]
});


// EXPORTS //

module.exports = ns;
