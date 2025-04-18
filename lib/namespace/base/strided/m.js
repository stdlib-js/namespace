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

/* eslint-disable max-lines */

'use strict';

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.mapBy',
	'path': '@stdlib/strided/base/map-by',
	'value': require( '@stdlib/strided/base/map-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/map-by2',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.mapBy2',
	'path': '@stdlib/strided/base/map-by2',
	'value': require( '@stdlib/strided/base/map-by2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/map-by',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.max',
	'path': '@stdlib/stats/base/max',
	'value': require( '@stdlib/stats/base/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/strided/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxabs',
	'path': '@stdlib/stats/base/maxabs',
	'value': require( '@stdlib/stats/base/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/strided/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.maxBy',
	'path': '@stdlib/stats/base/max-by',
	'value': require( '@stdlib/stats/base/max-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/strided/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxsorted',
	'path': '@stdlib/stats/base/maxsorted',
	'value': require( '@stdlib/stats/base/maxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxsorted',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/nanmaxsorted',
		'@stdlib/stats/strided/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.maxViewBufferIndex',
	'path': '@stdlib/strided/base/max-view-buffer-index',
	'value': require( '@stdlib/strided/base/max-view-buffer-index' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.strided.mean',
	'path': '@stdlib/stats/base/mean',
	'value': require( '@stdlib/stats/base/mean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.meankbn',
	'path': '@stdlib/stats/base/meankbn',
	'value': require( '@stdlib/stats/base/meankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeankbn',
		'@stdlib/stats/base/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.meankbn2',
	'path': '@stdlib/stats/base/meankbn2',
	'value': require( '@stdlib/stats/base/meankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn2',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeankbn2',
		'@stdlib/stats/base/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.meanors',
	'path': '@stdlib/stats/base/meanors',
	'value': require( '@stdlib/stats/base/meanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanors',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.meanpn',
	'path': '@stdlib/stats/base/meanpn',
	'value': require( '@stdlib/stats/base/meanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.meanpw',
	'path': '@stdlib/stats/base/meanpw',
	'value': require( '@stdlib/stats/base/meanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/strided/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.meanwd',
	'path': '@stdlib/stats/base/meanwd',
	'value': require( '@stdlib/stats/base/meanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanwd',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/strided/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.mediansorted',
	'path': '@stdlib/stats/base/mediansorted',
	'value': require( '@stdlib/stats/base/mediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmediansorted',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/median',
		'@stdlib/stats/base/nanmediansorted',
		'@stdlib/stats/strided/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.metaDataProps',
	'path': '@stdlib/strided/base/meta-data-props',
	'value': require( '@stdlib/strided/base/meta-data-props' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.strided.min',
	'path': '@stdlib/stats/base/min',
	'value': require( '@stdlib/stats/base/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/strided/smin'
	]
});

ns.push({
	'alias': 'base.strided.minabs',
	'path': '@stdlib/stats/base/minabs',
	'value': require( '@stdlib/stats/base/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/strided/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.minBy',
	'path': '@stdlib/stats/base/min-by',
	'value': require( '@stdlib/stats/base/min-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/strided/smin'
	]
});

ns.push({
	'alias': 'base.strided.minsorted',
	'path': '@stdlib/stats/base/minsorted',
	'value': require( '@stdlib/stats/base/minsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanminsorted',
		'@stdlib/stats/strided/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.minViewBufferIndex',
	'path': '@stdlib/strided/base/min-view-buffer-index',
	'value': require( '@stdlib/strided/base/min-view-buffer-index' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/offset-view'
	]
});

ns.push({
	'alias': 'base.strided.mskmax',
	'path': '@stdlib/stats/base/mskmax',
	'value': require( '@stdlib/stats/base/mskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/strided/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.mskmin',
	'path': '@stdlib/stats/base/mskmin',
	'value': require( '@stdlib/stats/base/mskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/strided/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.mskrange',
	'path': '@stdlib/stats/base/mskrange',
	'value': require( '@stdlib/stats/base/mskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/strided/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.mskunary',
	'path': '@stdlib/strided/base/mskunary',
	'value': require( '@stdlib/strided/base/mskunary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/msknullary',
		'@stdlib/strided/base/mskquaternary',
		'@stdlib/strided/base/mskquinary',
		'@stdlib/strided/base/mskternary',
		'@stdlib/strided/base/smskmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.mskunaryDtypeSignatures',
	'path': '@stdlib/strided/base/mskunary-dtype-signatures',
	'value': require( '@stdlib/strided/base/mskunary-dtype-signatures' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/mskunary-signature-callbacks'
	]
});

ns.push({
	'alias': 'base.strided.mskunarySignatureCallbacks',
	'path': '@stdlib/strided/base/mskunary-signature-callbacks',
	'value': require( '@stdlib/strided/base/mskunary-signature-callbacks' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/mskunary-dtype-signatures'
	]
});


// EXPORTS //

module.exports = ns;
