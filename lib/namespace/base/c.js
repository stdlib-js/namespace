/* eslint-disable max-lines */

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
	'alias': 'base.cabs',
	'path': '@stdlib/math/base/special/cabs',
	'value': require( '@stdlib/math/base/special/cabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs2',
		'@stdlib/math/base/special/abs'
	]
});

ns.push({
	'alias': 'base.cabs2',
	'path': '@stdlib/math/base/special/cabs2',
	'value': require( '@stdlib/math/base/special/cabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs',
		'@stdlib/math/base/special/abs2'
	]
});

ns.push({
	'alias': 'base.cadd',
	'path': '@stdlib/math/base/ops/cadd',
	'value': require( '@stdlib/math/base/ops/cadd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/cmul',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.cbrt',
	'path': '@stdlib/math/base/special/cbrt',
	'value': require( '@stdlib/math/base/special/cbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow',
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.cbrtf',
	'path': '@stdlib/math/base/special/cbrtf',
	'value': require( '@stdlib/math/base/special/cbrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt',
		'@stdlib/math/base/special/powf',
		'@stdlib/math/base/special/sqrtf'
	]
});

ns.push({
	'alias': 'base.cceil',
	'path': '@stdlib/math/base/special/cceil',
	'value': require( '@stdlib/math/base/special/cceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.cceiln',
	'path': '@stdlib/math/base/special/cceiln',
	'value': require( '@stdlib/math/base/special/cceiln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.ccis',
	'path': '@stdlib/math/base/special/ccis',
	'value': require( '@stdlib/math/base/special/ccis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.cdiv',
	'path': '@stdlib/math/base/ops/cdiv',
	'value': require( '@stdlib/math/base/ops/cdiv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cmul',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.ceil',
	'path': '@stdlib/math/base/special/ceil',
	'value': require( '@stdlib/math/base/special/ceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/round'
	]
});

ns.push({
	'alias': 'base.ceil2',
	'path': '@stdlib/math/base/special/ceil2',
	'value': require( '@stdlib/math/base/special/ceil2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round2'
	]
});

ns.push({
	'alias': 'base.ceil10',
	'path': '@stdlib/math/base/special/ceil10',
	'value': require( '@stdlib/math/base/special/ceil10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round10'
	]
});

ns.push({
	'alias': 'base.ceilb',
	'path': '@stdlib/math/base/special/ceilb',
	'value': require( '@stdlib/math/base/special/ceilb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/roundb'
	]
});

ns.push({
	'alias': 'base.ceilf',
	'path': '@stdlib/math/base/special/ceilf',
	'value': require( '@stdlib/math/base/special/ceilf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/floorf',
		'@stdlib/math/base/special/roundf'
	]
});

ns.push({
	'alias': 'base.ceiln',
	'path': '@stdlib/math/base/special/ceiln',
	'value': require( '@stdlib/math/base/special/ceiln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/roundn'
	]
});

ns.push({
	'alias': 'base.ceilsd',
	'path': '@stdlib/math/base/special/ceilsd',
	'value': require( '@stdlib/math/base/special/ceilsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/floorsd',
		'@stdlib/math/base/special/roundsd',
		'@stdlib/math/base/special/truncsd'
	]
});

ns.push({
	'alias': 'base.cexp',
	'path': '@stdlib/math/base/special/cexp',
	'value': require( '@stdlib/math/base/special/cexp' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.cflipsign',
	'path': '@stdlib/math/base/special/cflipsign',
	'value': require( '@stdlib/math/base/special/cflipsign' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cneg',
		'@stdlib/math/base/special/csignum'
	]
});

ns.push({
	'alias': 'base.cfloor',
	'path': '@stdlib/math/base/special/cfloor',
	'value': require( '@stdlib/math/base/special/cfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.cfloorn',
	'path': '@stdlib/math/base/special/cfloorn',
	'value': require( '@stdlib/math/base/special/cfloorn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.cinv',
	'path': '@stdlib/math/base/special/cinv',
	'value': require( '@stdlib/math/base/special/cinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cdiv'
	]
});

ns.push({
	'alias': 'base.clamp',
	'path': '@stdlib/math/base/special/clamp',
	'value': require( '@stdlib/math/base/special/clamp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/clampf',
		'@stdlib/math/base/special/wrap'
	]
});

ns.push({
	'alias': 'base.clampf',
	'path': '@stdlib/math/base/special/clampf',
	'value': require( '@stdlib/math/base/special/clampf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/clamp',
		'@stdlib/math/base/special/wrapf'
	]
});

ns.push({
	'alias': 'base.cmul',
	'path': '@stdlib/math/base/ops/cmul',
	'value': require( '@stdlib/math/base/ops/cmul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.cneg',
	'path': '@stdlib/math/base/ops/cneg',
	'value': require( '@stdlib/math/base/ops/cneg' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs'
	]
});

ns.push({
	'alias': 'base.continuedFraction',
	'path': '@stdlib/math/base/tools/continued-fraction',
	'value': require( '@stdlib/math/base/tools/continued-fraction' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.copysign',
	'path': '@stdlib/math/base/special/copysign',
	'value': require( '@stdlib/math/base/special/copysign' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/flipsign'
	]
});

ns.push({
	'alias': 'base.cos',
	'path': '@stdlib/math/base/special/cos',
	'value': require( '@stdlib/math/base/special/cos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cospi',
		'@stdlib/math/base/special/cosm1',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.cosh',
	'path': '@stdlib/math/base/special/cosh',
	'value': require( '@stdlib/math/base/special/cosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sinh',
		'@stdlib/math/base/special/tanh'
	]
});

ns.push({
	'alias': 'base.cosm1',
	'path': '@stdlib/math/base/special/cosm1',
	'value': require( '@stdlib/math/base/special/cosm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos'
	]
});

ns.push({
	'alias': 'base.cospi',
	'path': '@stdlib/math/base/special/cospi',
	'value': require( '@stdlib/math/base/special/cospi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos'
	]
});

ns.push({
	'alias': 'base.covercos',
	'path': '@stdlib/math/base/special/covercos',
	'value': require( '@stdlib/math/base/special/covercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/coversin',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.coversin',
	'path': '@stdlib/math/base/special/coversin',
	'value': require( '@stdlib/math/base/special/coversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/covercos',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.cphase',
	'path': '@stdlib/math/base/special/cphase',
	'value': require( '@stdlib/math/base/special/cphase' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs'
	]
});

ns.push({
	'alias': 'base.cpolar',
	'path': '@stdlib/math/base/special/cpolar',
	'value': require( '@stdlib/math/base/special/cpolar' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs',
		'@stdlib/math/base/special/cphase'
	]
});

ns.push({
	'alias': 'base.cround',
	'path': '@stdlib/math/base/special/cround',
	'value': require( '@stdlib/math/base/special/cround' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.croundn',
	'path': '@stdlib/math/base/special/croundn',
	'value': require( '@stdlib/math/base/special/croundn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.csignum',
	'path': '@stdlib/math/base/special/csignum',
	'value': require( '@stdlib/math/base/special/csignum' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/signum'
	]
});

ns.push({
	'alias': 'base.csub',
	'path': '@stdlib/math/base/ops/csub',
	'value': require( '@stdlib/math/base/ops/csub' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/cmul'
	]
});


// EXPORTS //

module.exports = ns;