/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
	'alias': 'random.array.arcsine',
	'path': '@stdlib/random/array/arcsine',
	'value': require( '@stdlib/random/array/arcsine' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/arcsine',
		'@stdlib/random/base/arcsine',
		'@stdlib/random/strided/arcsine'
	]
});

ns.push({
	'alias': 'random.array.beta',
	'path': '@stdlib/random/array/beta',
	'value': require( '@stdlib/random/array/beta' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/beta',
		'@stdlib/random/base/beta',
		'@stdlib/random/strided/beta'
	]
});

ns.push({
	'alias': 'random.array.discreteUniform',
	'path': '@stdlib/random/array/discrete-uniform',
	'value': require( '@stdlib/random/array/discrete-uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/uniform',
		'@stdlib/random/discrete-uniform',
		'@stdlib/random/base/discrete-uniform',
		'@stdlib/random/strided/discrete-uniform'
	]
});

ns.push({
	'alias': 'random.array.exponential',
	'path': '@stdlib/random/array/exponential',
	'value': require( '@stdlib/random/array/exponential' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/exponential',
		'@stdlib/random/base/exponential',
		'@stdlib/random/strided/exponential'
	]
});

ns.push({
	'alias': 'random.array.lognormal',
	'path': '@stdlib/random/array/lognormal',
	'value': require( '@stdlib/random/array/lognormal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/lognormal',
		'@stdlib/random/base/lognormal',
		'@stdlib/random/strided/lognormal'
	]
});

ns.push({
	'alias': 'random.array.normal',
	'path': '@stdlib/random/array/normal',
	'value': require( '@stdlib/random/array/normal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/normal',
		'@stdlib/random/base/normal',
		'@stdlib/random/strided/normal'
	]
});

ns.push({
	'alias': 'random.array.randu',
	'path': '@stdlib/random/array/randu',
	'value': require( '@stdlib/random/array/randu' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/uniform',
		'@stdlib/random/base/randu',
		'@stdlib/random/strided/randu',
		'@stdlib/random/randu'
	]
});

ns.push({
	'alias': 'random.array.uniform',
	'path': '@stdlib/random/array/uniform',
	'value': require( '@stdlib/random/array/uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/discrete-uniform',
		'@stdlib/random/base/uniform',
		'@stdlib/random/strided/uniform',
		'@stdlib/random/uniform'
	]
});


// EXPORTS //

module.exports = ns;