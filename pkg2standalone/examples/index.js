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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var aliases = require( './../../aliases' );
var alias2pkg = require( './../../alias2pkg' );
var pkg2standalone = require( './../lib' );

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
