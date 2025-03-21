/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
	'alias': 'base.uint32ToInt32',
	'path': '@stdlib/number/uint32/base/to-int32',
	'value': require( '@stdlib/number/uint32/base/to-int32' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.umul',
	'path': '@stdlib/number/uint32/base/mul',
	'value': require( '@stdlib/number/uint32/base/mul' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/int32/base/mul'
	]
});

ns.push({
	'alias': 'base.umuldw',
	'path': '@stdlib/number/uint32/base/muldw',
	'value': require( '@stdlib/number/uint32/base/muldw' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/int32/base/muldw',
		'@stdlib/number/uint32/base/mul'
	]
});

ns.push({
	'alias': 'base.uncapitalize',
	'path': '@stdlib/string/base/uncapitalize',
	'value': require( '@stdlib/string/base/uncapitalize' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/capitalize'
	]
});

ns.push({
	'alias': 'base.uppercase',
	'path': '@stdlib/string/base/uppercase',
	'value': require( '@stdlib/string/base/uppercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/lowercase'
	]
});


// EXPORTS //

module.exports = ns;
