/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// MODULES //

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var alias2pkg = require( './../../alias2pkg' );
var startsWith = require( '@stdlib/string/starts-with' );
var ALIASES = require( './../data/data.json' );


// VARIABLES //

var PKGS; // lazily defined


// FUNCTIONS //

/**
* Resolves package names for all aliases.
*
* @private
* @returns {ArrayArray} pairs of package names and corresponding aliases
*/
function resolvePackages() {
	var i;
	if ( PKGS ) {
		return PKGS;
	}
	PKGS = [];
	for ( i = 0; i < ALIASES.length; i++ ) {
		PKGS.push( [ alias2pkg( ALIASES[i] ), ALIASES[i] ] );
	}
	return PKGS;
}


// MAIN //

/**
* Returns a list of standard library aliases.
*
* @param {string} [namespace] - namespace filter
* @throws {TypeError} must provide a string
* @returns {Array} list of aliases
*
* @example
* var list = aliases();
* // returns [...]
*
* @example
* var list = aliases( '@stdlib/math/base/special' );
* // returns [...]
*/
function aliases( namespace ) {
	var pkgs;
	var out;
	var i;
	if ( arguments.length === 0 ) {
		return ALIASES.slice();
	}
	if ( !isString( namespace ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + namespace + '`.' );
	}
	pkgs = resolvePackages();
	out = [];
	for ( i = 0; i < pkgs.length; i++ ) {
		if ( startsWith( pkgs[i][0], namespace ) ) {
			out.push( pkgs[i][1] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = aliases;
