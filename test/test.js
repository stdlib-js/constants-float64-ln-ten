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

// MODULES //

var tape = require( 'tape' );
var ln = require( '@stdlib/math-base-special-ln' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var LN10 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof LN10, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to `2.302585092994046`', function test( t ) {
	t.equal( LN10, 2.302585092994046, 'returns expected value' );
	t.end();
});

tape( 'export equals `ln(10)`', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( 10.0 );
	delta = abs( v - LN10 );
	tol = EPS * LN10;

	t.ok( delta <= tol, 'equals ln(10) within tolerance '+tol );
	t.end();
});
