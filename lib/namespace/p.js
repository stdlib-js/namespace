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
	'alias': 'PACE_BOSTON_HOUSE_PRICES',
	'path': '@stdlib/datasets/pace-boston-house-prices',
	'value': require( '@stdlib/datasets/pace-boston-house-prices' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/harrison-boston-house-prices',
		'@stdlib/datasets/harrison-boston-house-prices-corrected'
	]
});

ns.push({
	'alias': 'pad',
	'path': '@stdlib/string/pad',
	'value': require( '@stdlib/string/pad' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/left-pad',
		'@stdlib/string/right-pad'
	]
});

ns.push({
	'alias': 'padjust',
	'path': '@stdlib/stats/padjust',
	'value': require( '@stdlib/stats/padjust' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'papply',
	'path': '@stdlib/utils/papply',
	'value': require( '@stdlib/utils/papply' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/papply-right'
	]
});

ns.push({
	'alias': 'papplyRight',
	'path': '@stdlib/utils/papply-right',
	'value': require( '@stdlib/utils/papply-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/papply'
	]
});

ns.push({
	'alias': 'parallel',
	'path': '@stdlib/utils/parallel',
	'value': require( '@stdlib/utils/parallel' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'parseJSON',
	'path': '@stdlib/utils/parse-json',
	'value': require( '@stdlib/utils/parse-json' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'pascalcase',
	'path': '@stdlib/string/pascalcase',
	'value': require( '@stdlib/string/pascalcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/constantcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'PATH_DELIMITER',
	'path': '@stdlib/constants/path/delimiter',
	'value': require( '@stdlib/constants/path/delimiter' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/delimiter-posix',
		'@stdlib/constants/path/delimiter-win32'
	]
});

ns.push({
	'alias': 'PATH_DELIMITER_POSIX',
	'path': '@stdlib/constants/path/delimiter-posix',
	'value': require( '@stdlib/constants/path/delimiter-posix' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/delimiter',
		'@stdlib/constants/path/delimiter-win32'
	]
});

ns.push({
	'alias': 'PATH_DELIMITER_WIN32',
	'path': '@stdlib/constants/path/delimiter-win32',
	'value': require( '@stdlib/constants/path/delimiter-win32' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/delimiter',
		'@stdlib/constants/path/delimiter-posix'
	]
});

ns.push({
	'alias': 'PATH_SEP',
	'path': '@stdlib/constants/path/sep',
	'value': require( '@stdlib/constants/path/sep' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/sep-posix',
		'@stdlib/constants/path/sep-win32'
	]
});

ns.push({
	'alias': 'PATH_SEP_POSIX',
	'path': '@stdlib/constants/path/sep-posix',
	'value': require( '@stdlib/constants/path/sep-posix' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/sep',
		'@stdlib/constants/path/sep-win32'
	]
});

ns.push({
	'alias': 'PATH_SEP_WIN32',
	'path': '@stdlib/constants/path/sep-win32',
	'value': require( '@stdlib/constants/path/sep-win32' ),
	'type': 'string',
	'related': [
		'@stdlib/constants/path/sep',
		'@stdlib/constants/path/sep-posix'
	]
});

ns.push({
	'alias': 'pcorrtest',
	'path': '@stdlib/stats/pcorrtest',
	'value': require( '@stdlib/stats/pcorrtest' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'percentEncode',
	'path': '@stdlib/string/percent-encode',
	'value': require( '@stdlib/string/percent-encode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'PHI',
	'path': '@stdlib/constants/float64/phi',
	'value': require( '@stdlib/constants/float64/phi' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'PI',
	'path': '@stdlib/constants/float64/pi',
	'value': require( '@stdlib/constants/float64/pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/two-pi'
	]
});

ns.push({
	'alias': 'PI_SQUARED',
	'path': '@stdlib/constants/float64/pi-squared',
	'value': require( '@stdlib/constants/float64/pi-squared' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'pick',
	'path': '@stdlib/utils/pick',
	'value': require( '@stdlib/utils/pick' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/pick-by'
	]
});

ns.push({
	'alias': 'pickArguments',
	'path': '@stdlib/utils/pick-arguments',
	'value': require( '@stdlib/utils/pick-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/reorder-arguments',
		'@stdlib/utils/reverse-arguments'
	]
});

ns.push({
	'alias': 'pickBy',
	'path': '@stdlib/utils/pick-by',
	'value': require( '@stdlib/utils/pick-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/pick'
	]
});

ns.push({
	'alias': 'PINF',
	'path': '@stdlib/constants/float64/pinf',
	'value': require( '@stdlib/constants/float64/pinf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ninf'
	]
});

ns.push({
	'alias': 'pkg2alias',
	'path': './../../pkg2alias',
	'value': require( './../../pkg2alias' ),
	'type': 'Function',
	'related': [
		'./../../alias2pkg',
		'./../../aliases',
		'./../../pkg2related'
	]
});

ns.push({
	'alias': 'pkg2related',
	'path': './../../pkg2related',
	'value': require( './../../pkg2related' ),
	'type': 'Function',
	'related': [
		'./../../alias2related',
		'./../../aliases',
		'./../../pkg2alias'
	]
});

ns.push({
	'alias': 'pkg2standalone',
	'path': './../../pkg2standalone',
	'value': require( './../../pkg2standalone' ),
	'type': 'Function',
	'related': [
		'./../../alias2pkg',
		'./../../alias2standalone',
		'./../../aliases',
		'./../../pkg2alias',
		'./../../pkg2related'
	]
});

ns.push({
	'alias': 'PLATFORM',
	'path': '@stdlib/os/platform',
	'value': require( '@stdlib/os/platform' ),
	'type': 'string',
	'related': [
		'@stdlib/os/arch'
	]
});

ns.push({
	'alias': 'plot',
	'path': '@stdlib/plot',
	'value': require( '@stdlib/plot' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot/ctor'
	]
});

ns.push({
	'alias': 'Plot',
	'path': '@stdlib/plot/ctor',
	'value': require( '@stdlib/plot/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot'
	]
});

ns.push({
	'alias': 'pluck',
	'path': '@stdlib/utils/pluck',
	'value': require( '@stdlib/utils/pluck' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/deep-pluck',
		'@stdlib/utils/pick'
	]
});

ns.push({
	'alias': 'pop',
	'path': '@stdlib/utils/pop',
	'value': require( '@stdlib/utils/pop' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/push',
		'@stdlib/utils/shift',
		'@stdlib/utils/unshift'
	]
});

ns.push({
	'alias': 'porterStemmer',
	'path': '@stdlib/nlp/porter-stemmer',
	'value': require( '@stdlib/nlp/porter-stemmer' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'prepend',
	'path': '@stdlib/utils/prepend',
	'value': require( '@stdlib/utils/prepend' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/append',
		'@stdlib/utils/unshift'
	]
});

ns.push({
	'alias': 'prevGraphemeClusterBreak',
	'path': '@stdlib/string/prev-grapheme-cluster-break',
	'value': require( '@stdlib/string/prev-grapheme-cluster-break' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/num-grapheme-clusters',
		'@stdlib/string/next-grapheme-cluster-break'
	]
});

ns.push({
	'alias': 'PRIMES_100K',
	'path': '@stdlib/datasets/primes-100k',
	'value': require( '@stdlib/datasets/primes-100k' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/primes'
	]
});

ns.push({
	'alias': 'properties',
	'path': '@stdlib/utils/properties',
	'value': require( '@stdlib/utils/properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-properties',
		'@stdlib/utils/inherited-properties',
		'@stdlib/utils/properties-in',
		'@stdlib/utils/property-names',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'propertiesIn',
	'path': '@stdlib/utils/properties-in',
	'value': require( '@stdlib/utils/properties-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-properties',
		'@stdlib/utils/inherited-properties',
		'@stdlib/utils/properties',
		'@stdlib/utils/property-names-in',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'propertyDescriptor',
	'path': '@stdlib/utils/property-descriptor',
	'value': require( '@stdlib/utils/property-descriptor' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property',
		'@stdlib/utils/define-property',
		'@stdlib/utils/property-descriptor-in',
		'@stdlib/utils/property-descriptors'
	]
});

ns.push({
	'alias': 'propertyDescriptorIn',
	'path': '@stdlib/utils/property-descriptor-in',
	'value': require( '@stdlib/utils/property-descriptor-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-property',
		'@stdlib/utils/define-property',
		'@stdlib/utils/property-descriptor',
		'@stdlib/utils/property-descriptors-in'
	]
});

ns.push({
	'alias': 'propertyDescriptors',
	'path': '@stdlib/utils/property-descriptors',
	'value': require( '@stdlib/utils/property-descriptors' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-property',
		'@stdlib/utils/define-properties',
		'@stdlib/utils/property-descriptor',
		'@stdlib/utils/property-descriptors-in',
		'@stdlib/utils/property-names',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'propertyDescriptorsIn',
	'path': '@stdlib/utils/property-descriptors-in',
	'value': require( '@stdlib/utils/property-descriptors-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/define-properties',
		'@stdlib/utils/property-descriptor-in',
		'@stdlib/utils/property-descriptors',
		'@stdlib/utils/property-names-in',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'propertyNames',
	'path': '@stdlib/utils/property-names',
	'value': require( '@stdlib/utils/property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/keys',
		'@stdlib/utils/nonenumerable-property-names',
		'@stdlib/utils/property-names-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'propertyNamesIn',
	'path': '@stdlib/utils/property-names-in',
	'value': require( '@stdlib/utils/property-names-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/keys',
		'@stdlib/utils/nonenumerable-property-names-in',
		'@stdlib/utils/property-names',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'propertySymbols',
	'path': '@stdlib/utils/property-symbols',
	'value': require( '@stdlib/utils/property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/property-names',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'propertySymbolsIn',
	'path': '@stdlib/utils/property-symbols-in',
	'value': require( '@stdlib/utils/property-symbols-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/property-names-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'Proxy',
	'path': '@stdlib/proxy/ctor',
	'value': require( '@stdlib/proxy/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'push',
	'path': '@stdlib/utils/push',
	'value': require( '@stdlib/utils/push' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/pop',
		'@stdlib/utils/shift',
		'@stdlib/utils/unshift'
	]
});


// EXPORTS //

module.exports = ns;
