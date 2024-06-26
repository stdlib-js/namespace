#!/usr/bin/env node

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

var resolve = require( 'path' ).resolve;
var logger = require( 'debug' );
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var namespace = require( './../..' );
var pkg2alias = require( './../../pkg2alias' );
var objectKeys = require( '@stdlib/utils/keys' );


// VARIABLES //

var debug = logger( 'namespace:pkg2related:build' );

// Output file paths:
var OUTPUT_JSON = resolve( __dirname, '..', 'data', 'data.json' );
var OUTPUT_CSV = resolve( __dirname, '..', 'data', 'data.csv' );


// FUNCTIONS //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var related;
	var alias;
	var fopts;
	var keys;
	var json;
	var tmp;
	var csv;
	var ns;
	var i;
	var j;

	debug( 'Extracting namespace package data...' );
	ns = namespace();
	json = {};
	for ( i = 0; i < ns.length; i++ ) {
		related = ns[ i ].related.slice();

		// Check that each related package actually corresponds to an alias in the namespace, as sometimes packages are added to the `related` field before they are actually created...
		tmp = [];
		for ( j = 0; j < related.length; j++ ) {
			alias = pkg2alias( related[ j ] );
			if ( alias ) {
				tmp.push( related[ j ] );
			} else {
				console.error( 'WARNING: unable to resolve related package `'+related[j]+'` for `'+ns[i].alias+'`.' ); // eslint-disable-line no-console
			}
		}
		json[ ns[i].path ] = tmp;
	}

	debug( 'Writing to JSON file...' );
	fopts = {
		'encoding': 'utf8'
	};
	writeFile( OUTPUT_JSON, JSON.stringify( json )+'\n', fopts );

	debug( 'Writing to CSV file...' );
	fopts = {
		'encoding': 'utf8'
	};
	keys = objectKeys( json );
	csv = '';
	for ( i = 0; i < keys.length; i++ ) {
		csv += '"' + keys[ i ] + '","' + json[ keys[i] ].join( ',' ) + '"\n'; // Note: ensures trailing newline
	}
	writeFile( OUTPUT_CSV, csv, fopts );
}


// MAIN //

main();
