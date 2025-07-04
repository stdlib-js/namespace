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
	'alias': 'base.strided.dabs',
	'path': '@stdlib/math/strided/special/dabs',
	'value': require( '@stdlib/math/strided/special/dabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'base.strided.dabs2',
	'path': '@stdlib/math/strided/special/dabs2',
	'value': require( '@stdlib/math/strided/special/dabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'base.strided.dapx',
	'path': '@stdlib/blas/ext/base/dapx',
	'value': require( '@stdlib/blas/ext/base/dapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dwapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/sapx'
	]
});

ns.push({
	'alias': 'base.strided.dapxsum',
	'path': '@stdlib/blas/ext/base/dapxsum',
	'value': require( '@stdlib/blas/ext/base/dapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn',
	'path': '@stdlib/blas/ext/base/dapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn2',
	'path': '@stdlib/blas/ext/base/dapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumors',
	'path': '@stdlib/blas/ext/base/dapxsumors',
	'value': require( '@stdlib/blas/ext/base/dapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsumors'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumpw',
	'path': '@stdlib/blas/ext/base/dapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dasum',
	'path': '@stdlib/blas/base/dasum',
	'value': require( '@stdlib/blas/base/dasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/dasum',
		'@stdlib/blas/ext/base/dsum'
	]
});

ns.push({
	'alias': 'base.strided.dasumpw',
	'path': '@stdlib/blas/ext/base/dasumpw',
	'value': require( '@stdlib/blas/ext/base/dasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/sasumpw',
		'@stdlib/blas/ext/dasumpw'
	]
});

ns.push({
	'alias': 'base.strided.daxpy',
	'path': '@stdlib/blas/base/daxpy',
	'value': require( '@stdlib/blas/base/daxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/daxpy'
	]
});

ns.push({
	'alias': 'base.strided.dcbrt',
	'path': '@stdlib/math/strided/special/dcbrt',
	'value': require( '@stdlib/math/strided/special/dcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/scbrt'
	]
});

ns.push({
	'alias': 'base.strided.dceil',
	'path': '@stdlib/math/strided/special/dceil',
	'value': require( '@stdlib/math/strided/special/dceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dceil2',
		'@stdlib/math/strided/special/dceil10',
		'@stdlib/math/strided/special/dceilb',
		'@stdlib/math/strided/special/dceiln',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/sceil'
	]
});

ns.push({
	'alias': 'base.strided.dcopy',
	'path': '@stdlib/blas/base/dcopy',
	'value': require( '@stdlib/blas/base/dcopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/dcopy'
	]
});

ns.push({
	'alias': 'base.strided.dcumax',
	'path': '@stdlib/stats/strided/dcumax',
	'value': require( '@stdlib/stats/strided/dcumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/strided/dcumin',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumax',
		'@stdlib/stats/strided/scumax'
	]
});

ns.push({
	'alias': 'base.strided.dcumaxabs',
	'path': '@stdlib/stats/strided/dcumaxabs',
	'value': require( '@stdlib/stats/strided/dcumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/strided/dcuminabs',
		'@stdlib/stats/base/dnancumaxabs',
		'@stdlib/stats/strided/scumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dcumin',
	'path': '@stdlib/stats/strided/dcumin',
	'value': require( '@stdlib/stats/strided/dcumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/strided/dcumax',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumin',
		'@stdlib/stats/strided/scumin'
	]
});

ns.push({
	'alias': 'base.strided.dcuminabs',
	'path': '@stdlib/stats/strided/dcuminabs',
	'value': require( '@stdlib/stats/strided/dcuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/strided/dcumaxabs',
		'@stdlib/stats/strided/dcumin',
		'@stdlib/stats/base/dnancuminabs',
		'@stdlib/stats/strided/scuminabs'
	]
});

ns.push({
	'alias': 'base.strided.dcusum',
	'path': '@stdlib/blas/ext/base/dcusum',
	'value': require( '@stdlib/blas/ext/base/dcusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/dnancusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusum'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn',
	'path': '@stdlib/blas/ext/base/dcusumkbn',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn2',
	'path': '@stdlib/blas/ext/base/dcusumkbn2',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dcusumors',
	'path': '@stdlib/blas/ext/base/dcusumors',
	'value': require( '@stdlib/blas/ext/base/dcusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusumors'
	]
});

ns.push({
	'alias': 'base.strided.dcusumpw',
	'path': '@stdlib/blas/ext/base/dcusumpw',
	'value': require( '@stdlib/blas/ext/base/dcusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusumpw'
	]
});

ns.push({
	'alias': 'base.strided.ddeg2rad',
	'path': '@stdlib/math/strided/special/ddeg2rad',
	'value': require( '@stdlib/math/strided/special/ddeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/deg2rad',
		'@stdlib/math/strided/special/drad2deg',
		'@stdlib/math/strided/special/sdeg2rad'
	]
});

ns.push({
	'alias': 'base.strided.ddot',
	'path': '@stdlib/blas/base/ddot',
	'value': require( '@stdlib/blas/base/ddot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/gdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/ddot'
	]
});

ns.push({
	'alias': 'base.strided.dfill',
	'path': '@stdlib/blas/ext/base/dfill',
	'value': require( '@stdlib/blas/ext/base/dfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/base/sfill',
		'@stdlib/blas/ext/dfill'
	]
});

ns.push({
	'alias': 'base.strided.dfloor',
	'path': '@stdlib/math/strided/special/dfloor',
	'value': require( '@stdlib/math/strided/special/dfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor2',
		'@stdlib/math/strided/special/dfloor10',
		'@stdlib/math/strided/special/dfloorb',
		'@stdlib/math/strided/special/dfloorn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/sfloor'
	]
});

ns.push({
	'alias': 'base.strided.dinv',
	'path': '@stdlib/math/strided/special/dinv',
	'value': require( '@stdlib/math/strided/special/dinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/inv',
		'@stdlib/math/strided/special/sinv'
	]
});

ns.push({
	'alias': 'base.strided.dmap',
	'path': '@stdlib/strided/base/dmap',
	'value': require( '@stdlib/strided/base/dmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.dmap2',
	'path': '@stdlib/strided/base/dmap2',
	'value': require( '@stdlib/strided/base/dmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/smap2',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.dmax',
	'path': '@stdlib/stats/strided/dmax',
	'value': require( '@stdlib/stats/strided/dmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/smax'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabs',
	'path': '@stdlib/stats/strided/dmaxabs',
	'value': require( '@stdlib/stats/strided/dmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dminabs',
		'@stdlib/stats/strided/dnanmaxabs',
		'@stdlib/stats/strided/maxabs',
		'@stdlib/stats/strided/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabssorted',
	'path': '@stdlib/stats/strided/dmaxabssorted',
	'value': require( '@stdlib/stats/strided/dmaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/strided/dmaxsorted',
		'@stdlib/stats/base/dminabssorted',
		'@stdlib/stats/base/dnanmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/strided/smaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.dmaxsorted',
	'path': '@stdlib/stats/strided/dmaxsorted',
	'value': require( '@stdlib/stats/strided/dmaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dminsorted',
		'@stdlib/stats/base/dnanmaxsorted',
		'@stdlib/stats/strided/maxsorted',
		'@stdlib/stats/strided/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmean',
	'path': '@stdlib/stats/strided/dmean',
	'value': require( '@stdlib/stats/strided/dmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/strided/smean'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn',
	'path': '@stdlib/stats/strided/dmeankbn',
	'value': require( '@stdlib/stats/strided/dmeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/base/dnanmeankbn',
		'@stdlib/stats/strided/meankbn',
		'@stdlib/stats/strided/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn2',
	'path': '@stdlib/stats/strided/dmeankbn2',
	'value': require( '@stdlib/stats/strided/dmeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/base/dnanmeankbn2',
		'@stdlib/stats/strided/meankbn2',
		'@stdlib/stats/strided/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.dmeanli',
	'path': '@stdlib/stats/strided/dmeanli',
	'value': require( '@stdlib/stats/strided/dmeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dmeanlipw',
		'@stdlib/stats/base/dnanmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/strided/smeanli'
	]
});

ns.push({
	'alias': 'base.strided.dmeanlipw',
	'path': '@stdlib/stats/strided/dmeanlipw',
	'value': require( '@stdlib/stats/strided/dmeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dmeanli',
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/base/dnanmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/strided/smeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanors',
	'path': '@stdlib/stats/strided/dmeanors',
	'value': require( '@stdlib/stats/strided/dmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dnanmeanors',
		'@stdlib/stats/strided/meanors',
		'@stdlib/stats/strided/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpn',
	'path': '@stdlib/stats/strided/dmeanpn',
	'value': require( '@stdlib/stats/strided/dmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dnanmeanpn',
		'@stdlib/stats/strided/meanpn',
		'@stdlib/stats/strided/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpw',
	'path': '@stdlib/stats/strided/dmeanpw',
	'value': require( '@stdlib/stats/strided/dmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dnanmeanpw',
		'@stdlib/stats/strided/meanpw',
		'@stdlib/stats/strided/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdev',
	'path': '@stdlib/stats/strided/dmeanstdev',
	'value': require( '@stdlib/stats/strided/dmeanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dmeanvar',
		'@stdlib/stats/base/dnanmeanstdev',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/meanstdev',
		'@stdlib/stats/base/smeanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdevpn',
	'path': '@stdlib/stats/strided/dmeanstdevpn',
	'value': require( '@stdlib/stats/strided/dmeanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/strided/dmeanstdev',
		'@stdlib/stats/strided/dmeanvarpn',
		'@stdlib/stats/base/dnanmeanstdevpn',
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/base/meanstdevpn',
		'@stdlib/stats/base/smeanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvar',
	'path': '@stdlib/stats/strided/dmeanvar',
	'value': require( '@stdlib/stats/strided/dmeanvar' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/base/dnanmeanvar',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/base/meanvar',
		'@stdlib/stats/base/smeanvar'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvarpn',
	'path': '@stdlib/stats/strided/dmeanvarpn',
	'value': require( '@stdlib/stats/strided/dmeanvarpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/strided/dmeanstdevpn',
		'@stdlib/stats/strided/dmeanvar',
		'@stdlib/stats/base/dnanmeanvarpn',
		'@stdlib/stats/strided/dvariancepn',
		'@stdlib/stats/base/meanvarpn',
		'@stdlib/stats/base/smeanvarpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanwd',
	'path': '@stdlib/stats/strided/dmeanwd',
	'value': require( '@stdlib/stats/strided/dmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dnanmeanwd',
		'@stdlib/stats/strided/meanwd',
		'@stdlib/stats/strided/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dmediansorted',
	'path': '@stdlib/stats/strided/dmediansorted',
	'value': require( '@stdlib/stats/strided/dmediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/base/dmedian',
		'@stdlib/stats/base/dnanmediansorted',
		'@stdlib/stats/strided/mediansorted',
		'@stdlib/stats/strided/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.dmidrange',
	'path': '@stdlib/stats/strided/dmidrange',
	'value': require( '@stdlib/stats/strided/dmidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/base/dnanmidrange',
		'@stdlib/stats/strided/drange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/strided/smidrange'
	]
});

ns.push({
	'alias': 'base.strided.dmin',
	'path': '@stdlib/stats/strided/dmin',
	'value': require( '@stdlib/stats/strided/dmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/smin'
	]
});

ns.push({
	'alias': 'base.strided.dminabs',
	'path': '@stdlib/stats/strided/dminabs',
	'value': require( '@stdlib/stats/strided/dminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/strided/dnanminabs',
		'@stdlib/stats/strided/minabs',
		'@stdlib/stats/strided/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.dminsorted',
	'path': '@stdlib/stats/strided/dminsorted',
	'value': require( '@stdlib/stats/strided/dminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dmaxsorted',
		'@stdlib/stats/base/dnanminsorted',
		'@stdlib/stats/strided/minsorted',
		'@stdlib/stats/strided/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmskabs',
	'path': '@stdlib/math/strided/special/dmskabs',
	'value': require( '@stdlib/math/strided/special/dmskabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/dmskabs2',
		'@stdlib/math/strided/special/mskabs',
		'@stdlib/math/strided/special/smskabs'
	]
});

ns.push({
	'alias': 'base.strided.dmskabs2',
	'path': '@stdlib/math/strided/special/dmskabs2',
	'value': require( '@stdlib/math/strided/special/dmskabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/dmskabs',
		'@stdlib/math/strided/special/mskabs2',
		'@stdlib/math/strided/special/smskabs2'
	]
});

ns.push({
	'alias': 'base.strided.dmskcbrt',
	'path': '@stdlib/math/strided/special/dmskcbrt',
	'value': require( '@stdlib/math/strided/special/dmskcbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/mskcbrt',
		'@stdlib/math/strided/special/smskcbrt'
	]
});

ns.push({
	'alias': 'base.strided.dmskceil',
	'path': '@stdlib/math/strided/special/dmskceil',
	'value': require( '@stdlib/math/strided/special/dmskceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dmskceil2',
		'@stdlib/math/strided/special/dmskceil10',
		'@stdlib/math/strided/special/dmskceilb',
		'@stdlib/math/strided/special/dmskceiln',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskceil',
		'@stdlib/math/strided/special/smskceil'
	]
});

ns.push({
	'alias': 'base.strided.dmskdeg2rad',
	'path': '@stdlib/math/strided/special/dmskdeg2rad',
	'value': require( '@stdlib/math/strided/special/dmskdeg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/dmskdeg2rad',
		'@stdlib/math/strided/special/mskrad2deg',
		'@stdlib/math/strided/special/smskdeg2rad'
	]
});

ns.push({
	'alias': 'base.strided.dmskfloor',
	'path': '@stdlib/math/strided/special/dmskfloor',
	'value': require( '@stdlib/math/strided/special/dmskfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor2',
		'@stdlib/math/strided/special/dmskfloor10',
		'@stdlib/math/strided/special/dmskfloorb',
		'@stdlib/math/strided/special/dmskfloorn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dmsktrunc',
		'@stdlib/math/strided/special/mskfloor',
		'@stdlib/math/strided/special/smskfloor'
	]
});

ns.push({
	'alias': 'base.strided.dmskinv',
	'path': '@stdlib/math/strided/special/dmskinv',
	'value': require( '@stdlib/math/strided/special/dmskinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/mskinv',
		'@stdlib/math/strided/special/smskinv'
	]
});

ns.push({
	'alias': 'base.strided.dmskmap',
	'path': '@stdlib/strided/base/dmskmap',
	'value': require( '@stdlib/strided/base/dmskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/dmskmap2',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smskmap'
	]
});

ns.push({
	'alias': 'base.strided.dmskmap2',
	'path': '@stdlib/strided/base/dmskmap2',
	'value': require( '@stdlib/strided/base/dmskmap2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap2',
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/smskmap2'
	]
});

ns.push({
	'alias': 'base.strided.dmskmax',
	'path': '@stdlib/stats/strided/dmskmax',
	'value': require( '@stdlib/stats/strided/dmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.dmskmin',
	'path': '@stdlib/stats/strided/dmskmin',
	'value': require( '@stdlib/stats/strided/dmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/strided/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.dmskramp',
	'path': '@stdlib/math/strided/special/dmskramp',
	'value': require( '@stdlib/math/strided/special/dmskramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskheaviside',
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/mskramp',
		'@stdlib/math/strided/special/smskramp'
	]
});

ns.push({
	'alias': 'base.strided.dmskrange',
	'path': '@stdlib/stats/strided/dmskrange',
	'value': require( '@stdlib/stats/strided/dmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/drange',
		'@stdlib/stats/strided/mskrange',
		'@stdlib/stats/strided/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.dmskrsqrt',
	'path': '@stdlib/math/strided/special/dmskrsqrt',
	'value': require( '@stdlib/math/strided/special/dmskrsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmsksqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/mskrsqrt',
		'@stdlib/math/strided/special/smskrsqrt'
	]
});

ns.push({
	'alias': 'base.strided.dmsksqrt',
	'path': '@stdlib/math/strided/special/dmsksqrt',
	'value': require( '@stdlib/math/strided/special/dmsksqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskcbrt',
		'@stdlib/math/strided/special/dmskrsqrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/msksqrt',
		'@stdlib/math/strided/special/smsksqrt'
	]
});

ns.push({
	'alias': 'base.strided.dmsktrunc',
	'path': '@stdlib/math/strided/special/dmsktrunc',
	'value': require( '@stdlib/math/strided/special/dmsktrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dmskceil',
		'@stdlib/math/strided/special/dmskfloor',
		'@stdlib/math/strided/special/dmsktrunc2',
		'@stdlib/math/strided/special/dmsktrunc10',
		'@stdlib/math/strided/special/dmsktruncb',
		'@stdlib/math/strided/special/dmsktruncn',
		'@stdlib/math/strided/special/dmskround',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/msktrunc',
		'@stdlib/math/strided/special/smsktrunc'
	]
});

ns.push({
	'alias': 'base.strided.dnanasum',
	'path': '@stdlib/blas/ext/base/dnanasum',
	'value': require( '@stdlib/blas/ext/base/dnanasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/snanasum',
		'@stdlib/blas/ext/dnanasum'
	]
});

ns.push({
	'alias': 'base.strided.dnanasumors',
	'path': '@stdlib/blas/ext/base/dnanasumors',
	'value': require( '@stdlib/blas/ext/base/dnanasumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dasumors',
		'@stdlib/blas/ext/base/dnanasum',
		'@stdlib/blas/ext/base/snanasumors',
		'@stdlib/blas/ext/dnanasumors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmax',
	'path': '@stdlib/stats/strided/dnanmax',
	'value': require( '@stdlib/stats/strided/dnanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmaxabs',
	'path': '@stdlib/stats/strided/dnanmaxabs',
	'value': require( '@stdlib/stats/strided/dnanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/dnanminabs',
		'@stdlib/stats/strided/nanmaxabs',
		'@stdlib/stats/strided/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmean',
	'path': '@stdlib/stats/strided/dnanmean',
	'value': require( '@stdlib/stats/strided/dnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/nanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanors',
	'path': '@stdlib/stats/strided/dnanmeanors',
	'value': require( '@stdlib/stats/strided/dnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanors',
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/nanmeanors',
		'@stdlib/stats/strided/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpn',
	'path': '@stdlib/stats/strided/dnanmeanpn',
	'value': require( '@stdlib/stats/strided/dnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/nanmeanpn',
		'@stdlib/stats/strided/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpw',
	'path': '@stdlib/stats/strided/dnanmeanpw',
	'value': require( '@stdlib/stats/strided/dnanmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanwd',
	'path': '@stdlib/stats/strided/dnanmeanwd',
	'value': require( '@stdlib/stats/strided/dnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanwd',
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/nanmeanwd',
		'@stdlib/stats/strided/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanmin',
	'path': '@stdlib/stats/strided/dnanmin',
	'value': require( '@stdlib/stats/strided/dnanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanminabs',
	'path': '@stdlib/stats/strided/dnanminabs',
	'value': require( '@stdlib/stats/strided/dnanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminabs',
		'@stdlib/stats/strided/dnanmaxabs',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/nanminabs',
		'@stdlib/stats/strided/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmax',
	'path': '@stdlib/stats/strided/dnanmskmax',
	'value': require( '@stdlib/stats/strided/dnanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/strided/nanmskmax',
		'@stdlib/stats/strided/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmin',
	'path': '@stdlib/stats/strided/dnanmskmin',
	'value': require( '@stdlib/stats/strided/dnanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/strided/nanmskmin',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskrange',
	'path': '@stdlib/stats/strided/dnanmskrange',
	'value': require( '@stdlib/stats/strided/dnanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskrange',
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/strided/nanmskrange',
		'@stdlib/stats/strided/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.dnannsum',
	'path': '@stdlib/blas/ext/base/dnannsum',
	'value': require( '@stdlib/blas/ext/base/dnannsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gnannsum',
		'@stdlib/blas/ext/base/snannsum'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn',
	'path': '@stdlib/blas/ext/base/dnannsumkbn',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnannsumkbn',
		'@stdlib/blas/ext/base/snannsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn2',
	'path': '@stdlib/blas/ext/base/dnannsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnannsumkbn2',
		'@stdlib/blas/ext/base/snannsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumors',
	'path': '@stdlib/blas/ext/base/dnannsumors',
	'value': require( '@stdlib/blas/ext/base/dnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumpw',
	'path': '@stdlib/blas/ext/base/dnannsumpw',
	'value': require( '@stdlib/blas/ext/base/dnannsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnannsumpw',
		'@stdlib/blas/ext/base/snannsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanrange',
	'path': '@stdlib/stats/strided/dnanrange',
	'value': require( '@stdlib/stats/strided/dnanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/drange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/strided/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdev',
	'path': '@stdlib/stats/strided/dnanstdev',
	'value': require( '@stdlib/stats/strided/dnanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevch',
	'path': '@stdlib/stats/strided/dnanstdevch',
	'value': require( '@stdlib/stats/strided/dnanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/strided/dnanvariancech',
		'@stdlib/stats/strided/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdevch'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevpn',
	'path': '@stdlib/stats/strided/dnanstdevpn',
	'value': require( '@stdlib/stats/strided/dnanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/strided/dnanvariancepn',
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevtk',
	'path': '@stdlib/stats/strided/dnanstdevtk',
	'value': require( '@stdlib/stats/strided/dnanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/strided/dnanvariancetk',
		'@stdlib/stats/strided/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevwd',
	'path': '@stdlib/stats/strided/dnanstdevwd',
	'value': require( '@stdlib/stats/strided/dnanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/strided/dnanvariancewd',
		'@stdlib/stats/strided/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevyc',
	'path': '@stdlib/stats/strided/dnanstdevyc',
	'value': require( '@stdlib/stats/strided/dnanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/strided/dnanvarianceyc',
		'@stdlib/stats/strided/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dnansum',
	'path': '@stdlib/blas/ext/base/dnansum',
	'value': require( '@stdlib/blas/ext/base/dnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gnansum'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn',
	'path': '@stdlib/blas/ext/base/dnansumkbn',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn2',
	'path': '@stdlib/blas/ext/base/dnansumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnansumors',
	'path': '@stdlib/blas/ext/base/dnansumors',
	'value': require( '@stdlib/blas/ext/base/dnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dnansumpw',
	'path': '@stdlib/blas/ext/base/dnansumpw',
	'value': require( '@stdlib/blas/ext/base/dnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariance',
	'path': '@stdlib/stats/strided/dnanvariance',
	'value': require( '@stdlib/stats/strided/dnanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariance'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancech',
	'path': '@stdlib/stats/strided/dnanvariancech',
	'value': require( '@stdlib/stats/strided/dnanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancech',
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanvariancech'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancepn',
	'path': '@stdlib/stats/strided/dnanvariancepn',
	'value': require( '@stdlib/stats/strided/dnanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancepn',
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanvariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancetk',
	'path': '@stdlib/stats/strided/dnanvariancetk',
	'value': require( '@stdlib/stats/strided/dnanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancetk',
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanvariancetk'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancewd',
	'path': '@stdlib/stats/strided/dnanvariancewd',
	'value': require( '@stdlib/stats/strided/dnanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancewd',
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanvariancewd'
	]
});

ns.push({
	'alias': 'base.strided.dnanvarianceyc',
	'path': '@stdlib/stats/strided/dnanvarianceyc',
	'value': require( '@stdlib/stats/strided/dnanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvarianceyc',
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanvarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dnrm2',
	'path': '@stdlib/blas/base/dnrm2',
	'value': require( '@stdlib/blas/base/dnrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/base/snrm2',
		'@stdlib/blas/dnrm2'
	]
});

ns.push({
	'alias': 'base.strided.dramp',
	'path': '@stdlib/math/strided/special/dramp',
	'value': require( '@stdlib/math/strided/special/dramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dheaviside',
		'@stdlib/math/strided/special/ramp',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'base.strided.drange',
	'path': '@stdlib/stats/strided/drange',
	'value': require( '@stdlib/stats/strided/drange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/strided/srange'
	]
});

ns.push({
	'alias': 'base.strided.drev',
	'path': '@stdlib/blas/ext/base/drev',
	'value': require( '@stdlib/blas/ext/base/drev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/base/srev',
		'@stdlib/blas/ext/drev'
	]
});

ns.push({
	'alias': 'base.strided.drsqrt',
	'path': '@stdlib/math/strided/special/drsqrt',
	'value': require( '@stdlib/math/strided/special/drsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsum',
	'path': '@stdlib/blas/ext/base/dsapxsum',
	'value': require( '@stdlib/blas/ext/base/dsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsumpw',
	'path': '@stdlib/blas/ext/base/dsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dscal',
	'path': '@stdlib/blas/base/dscal',
	'value': require( '@stdlib/blas/base/dscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/sscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/dscal'
	]
});

ns.push({
	'alias': 'base.strided.dsdot',
	'path': '@stdlib/blas/base/dsdot',
	'value': require( '@stdlib/blas/base/dsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/dsdot'
	]
});

ns.push({
	'alias': 'base.strided.dsem',
	'path': '@stdlib/stats/strided/dsem',
	'value': require( '@stdlib/stats/strided/dsem' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansem',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/sem',
		'@stdlib/stats/base/ssem'
	]
});

ns.push({
	'alias': 'base.strided.dsemch',
	'path': '@stdlib/stats/strided/dsemch',
	'value': require( '@stdlib/stats/strided/dsemch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemch',
		'@stdlib/stats/strided/dsem',
		'@stdlib/stats/strided/dstdevch',
		'@stdlib/stats/base/semch',
		'@stdlib/stats/base/ssemch'
	]
});

ns.push({
	'alias': 'base.strided.dsempn',
	'path': '@stdlib/stats/strided/dsempn',
	'value': require( '@stdlib/stats/strided/dsempn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansempn',
		'@stdlib/stats/strided/dsem',
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/base/sempn',
		'@stdlib/stats/base/ssempn'
	]
});

ns.push({
	'alias': 'base.strided.dsemtk',
	'path': '@stdlib/stats/strided/dsemtk',
	'value': require( '@stdlib/stats/strided/dsemtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemtk',
		'@stdlib/stats/strided/dsem',
		'@stdlib/stats/strided/dstdevtk',
		'@stdlib/stats/base/semtk',
		'@stdlib/stats/base/ssemtk'
	]
});

ns.push({
	'alias': 'base.strided.dsemwd',
	'path': '@stdlib/stats/strided/dsemwd',
	'value': require( '@stdlib/stats/strided/dsemwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemwd',
		'@stdlib/stats/strided/dsem',
		'@stdlib/stats/strided/dstdevwd',
		'@stdlib/stats/base/semwd',
		'@stdlib/stats/base/ssemwd'
	]
});

ns.push({
	'alias': 'base.strided.dsemyc',
	'path': '@stdlib/stats/strided/dsemyc',
	'value': require( '@stdlib/stats/strided/dsemyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemyc',
		'@stdlib/stats/strided/dsem',
		'@stdlib/stats/strided/dstdevyc',
		'@stdlib/stats/base/semyc',
		'@stdlib/stats/base/ssemyc'
	]
});

ns.push({
	'alias': 'base.strided.dsmean',
	'path': '@stdlib/stats/strided/dsmean',
	'value': require( '@stdlib/stats/strided/dsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/strided/sdsmean',
		'@stdlib/stats/strided/smean'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanors',
	'path': '@stdlib/stats/strided/dsmeanors',
	'value': require( '@stdlib/stats/strided/dsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanors',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/dsnanmeanors',
		'@stdlib/stats/strided/meanors',
		'@stdlib/stats/strided/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpn',
	'path': '@stdlib/stats/strided/dsmeanpn',
	'value': require( '@stdlib/stats/strided/dsmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/dsnanmeanpn',
		'@stdlib/stats/strided/meanpn',
		'@stdlib/stats/strided/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpw',
	'path': '@stdlib/stats/strided/dsmeanpw',
	'value': require( '@stdlib/stats/strided/dsmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/stats/strided/meanpw',
		'@stdlib/stats/strided/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanwd',
	'path': '@stdlib/stats/strided/dsmeanwd',
	'value': require( '@stdlib/stats/strided/dsmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanwd',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/dsnanmeanwd',
		'@stdlib/stats/strided/meanwd',
		'@stdlib/stats/strided/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmean',
	'path': '@stdlib/stats/strided/dsnanmean',
	'value': require( '@stdlib/stats/strided/dsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/dsmean',
		'@stdlib/stats/strided/nanmean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanors',
	'path': '@stdlib/stats/strided/dsnanmeanors',
	'value': require( '@stdlib/stats/strided/dsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanors',
		'@stdlib/stats/strided/dsmeanors',
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/stats/strided/nanmeanors',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/strided/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanpn',
	'path': '@stdlib/stats/strided/dsnanmeanpn',
	'value': require( '@stdlib/stats/strided/dsnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanpn',
		'@stdlib/stats/strided/dsmeanpn',
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/stats/strided/nanmeanpn',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/strided/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanwd',
	'path': '@stdlib/stats/strided/dsnanmeanwd',
	'value': require( '@stdlib/stats/strided/dsnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanwd',
		'@stdlib/stats/strided/dsmeanwd',
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/stats/strided/nanmeanwd',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/strided/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnannsumors',
	'path': '@stdlib/blas/ext/base/dsnannsumors',
	'value': require( '@stdlib/blas/ext/base/dsnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsnannsum',
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/sdsnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansum',
	'path': '@stdlib/blas/ext/base/dsnansum',
	'value': require( '@stdlib/blas/ext/base/dsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dsnanmean',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumors',
	'path': '@stdlib/blas/ext/base/dsnansumors',
	'value': require( '@stdlib/blas/ext/base/dsnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dsnanmeanors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumpw',
	'path': '@stdlib/blas/ext/base/dsnansumpw',
	'value': require( '@stdlib/blas/ext/base/dsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsort2hp',
	'path': '@stdlib/blas/ext/base/dsort2hp',
	'value': require( '@stdlib/blas/ext/base/dsort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.dsort2ins',
	'path': '@stdlib/blas/ext/base/dsort2ins',
	'value': require( '@stdlib/blas/ext/base/dsort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.dsort2sh',
	'path': '@stdlib/blas/ext/base/dsort2sh',
	'value': require( '@stdlib/blas/ext/base/dsort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.dsorthp',
	'path': '@stdlib/blas/ext/base/dsorthp',
	'value': require( '@stdlib/blas/ext/base/dsorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.dsortins',
	'path': '@stdlib/blas/ext/base/dsortins',
	'value': require( '@stdlib/blas/ext/base/dsortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.dsortsh',
	'path': '@stdlib/blas/ext/base/dsortsh',
	'value': require( '@stdlib/blas/ext/base/dsortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.dsqrt',
	'path': '@stdlib/math/strided/special/dsqrt',
	'value': require( '@stdlib/math/strided/special/dsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'base.strided.dssum',
	'path': '@stdlib/blas/ext/base/dssum',
	'value': require( '@stdlib/blas/ext/base/dssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/stats/strided/dsmean'
	]
});

ns.push({
	'alias': 'base.strided.dssumors',
	'path': '@stdlib/blas/ext/base/dssumors',
	'value': require( '@stdlib/blas/ext/base/dssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dssumpw',
	'path': '@stdlib/blas/ext/base/dssumpw',
	'value': require( '@stdlib/blas/ext/base/dssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dstdev',
	'path': '@stdlib/stats/strided/dstdev',
	'value': require( '@stdlib/stats/strided/dstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/sstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.dstdevch',
	'path': '@stdlib/stats/strided/dstdevch',
	'value': require( '@stdlib/stats/strided/dstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevch',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/strided/dvariancech',
		'@stdlib/stats/strided/sstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.dstdevpn',
	'path': '@stdlib/stats/strided/dstdevpn',
	'value': require( '@stdlib/stats/strided/dstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevpn',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/strided/dvariancepn',
		'@stdlib/stats/strided/sstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dstdevtk',
	'path': '@stdlib/stats/strided/dstdevtk',
	'value': require( '@stdlib/stats/strided/dstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevtk',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/strided/dvariancetk',
		'@stdlib/stats/strided/sstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dstdevwd',
	'path': '@stdlib/stats/strided/dstdevwd',
	'value': require( '@stdlib/stats/strided/dstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevwd',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/strided/dvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dstdevyc',
	'path': '@stdlib/stats/strided/dstdevyc',
	'value': require( '@stdlib/stats/strided/dstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevyc',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/strided/dvarianceyc',
		'@stdlib/stats/strided/sstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dsum',
	'path': '@stdlib/blas/ext/base/dsum',
	'value': require( '@stdlib/blas/ext/base/dsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/stats/strided/dmean',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn',
	'path': '@stdlib/blas/ext/base/dsumkbn',
	'value': require( '@stdlib/blas/ext/base/dsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn2',
	'path': '@stdlib/blas/ext/base/dsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dsumors',
	'path': '@stdlib/blas/ext/base/dsumors',
	'value': require( '@stdlib/blas/ext/base/dsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dsumpw',
	'path': '@stdlib/blas/ext/base/dsumpw',
	'value': require( '@stdlib/blas/ext/base/dsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsvariance',
	'path': '@stdlib/stats/strided/dsvariance',
	'value': require( '@stdlib/stats/strided/dsvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/base/dsnanvariance',
		'@stdlib/stats/strided/variance',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/strided/svariance'
	]
});

ns.push({
	'alias': 'base.strided.dsvariancepn',
	'path': '@stdlib/stats/strided/dsvariancepn',
	'value': require( '@stdlib/stats/strided/dsvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dvariancepn',
		'@stdlib/stats/base/dsnanvariancepn',
		'@stdlib/stats/strided/dsvariance',
		'@stdlib/stats/strided/variancepn',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/strided/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dswap',
	'path': '@stdlib/blas/base/dswap',
	'value': require( '@stdlib/blas/base/dswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/dswap'
	]
});

ns.push({
	'alias': 'base.strided.dtrunc',
	'path': '@stdlib/math/strided/special/dtrunc',
	'value': require( '@stdlib/math/strided/special/dtrunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/dtrunc2',
		'@stdlib/math/strided/special/dtrunc10',
		'@stdlib/math/strided/special/dtruncb',
		'@stdlib/math/strided/special/dtruncn',
		'@stdlib/math/strided/special/dround',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/strunc'
	]
});

ns.push({
	'alias': 'base.strided.dtypeEnum2Str',
	'path': '@stdlib/strided/base/dtype-enum2str',
	'value': require( '@stdlib/strided/base/dtype-enum2str' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-str2enum'
	]
});

ns.push({
	'alias': 'base.strided.dtypeResolveEnum',
	'path': '@stdlib/strided/base/dtype-resolve-enum',
	'value': require( '@stdlib/strided/base/dtype-resolve-enum' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-resolve-str'
	]
});

ns.push({
	'alias': 'base.strided.dtypeResolveStr',
	'path': '@stdlib/strided/base/dtype-resolve-str',
	'value': require( '@stdlib/strided/base/dtype-resolve-str' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-resolve-enum'
	]
});

ns.push({
	'alias': 'base.strided.dtypeStr2Enum',
	'path': '@stdlib/strided/base/dtype-str2enum',
	'value': require( '@stdlib/strided/base/dtype-str2enum' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dtype-enum2str'
	]
});

ns.push({
	'alias': 'base.strided.dvariance',
	'path': '@stdlib/stats/strided/dvariance',
	'value': require( '@stdlib/stats/strided/dvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/strided/dstdev',
		'@stdlib/stats/strided/dvarm',
		'@stdlib/stats/strided/svariance',
		'@stdlib/stats/strided/variance'
	]
});

ns.push({
	'alias': 'base.strided.dvariancech',
	'path': '@stdlib/stats/strided/dvariancech',
	'value': require( '@stdlib/stats/strided/dvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancech',
		'@stdlib/stats/strided/dstdevch',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/svariancech',
		'@stdlib/stats/strided/variancech'
	]
});

ns.push({
	'alias': 'base.strided.dvariancepn',
	'path': '@stdlib/stats/strided/dvariancepn',
	'value': require( '@stdlib/stats/strided/dvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancepn',
		'@stdlib/stats/strided/dstdevpn',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/svariancepn',
		'@stdlib/stats/strided/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.dvariancetk',
	'path': '@stdlib/stats/strided/dvariancetk',
	'value': require( '@stdlib/stats/strided/dvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancetk',
		'@stdlib/stats/strided/dstdevtk',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/svariancetk',
		'@stdlib/stats/strided/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.dvariancewd',
	'path': '@stdlib/stats/strided/dvariancewd',
	'value': require( '@stdlib/stats/strided/dvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancewd',
		'@stdlib/stats/strided/dstdevwd',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/svariancewd',
		'@stdlib/stats/strided/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.dvarianceyc',
	'path': '@stdlib/stats/strided/dvarianceyc',
	'value': require( '@stdlib/stats/strided/dvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvarianceyc',
		'@stdlib/stats/strided/dstdevyc',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/strided/svarianceyc',
		'@stdlib/stats/strided/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dvarm',
	'path': '@stdlib/stats/strided/dvarm',
	'value': require( '@stdlib/stats/strided/dvarm' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/strided/dvariance',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/varm'
	]
});

ns.push({
	'alias': 'base.strided.dvarmpn',
	'path': '@stdlib/stats/strided/dvarmpn',
	'value': require( '@stdlib/stats/strided/dvarmpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmpn',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/strided/dvarm',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/varmpn'
	]
});

ns.push({
	'alias': 'base.strided.dvarmtk',
	'path': '@stdlib/stats/strided/dvarmtk',
	'value': require( '@stdlib/stats/strided/dvarmtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmtk',
		'@stdlib/stats/base/dstdevmtk',
		'@stdlib/stats/strided/dvarm',
		'@stdlib/stats/base/svarmtk',
		'@stdlib/stats/base/varmtk'
	]
});


// EXPORTS //

module.exports = ns;
