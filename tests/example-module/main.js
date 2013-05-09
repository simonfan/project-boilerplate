require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: '',
	paths: {
		// basic libraries
		'underscore': '../lib/underscore',

		// the module files go here
		'example-module': '../../src/js/modules/example-module',

		// DEMO
		'demo-main': 'demo/demo',	// the main file for the demo

		// UNIT TESTS
		'tests-main': 'tests/tests',	// the main file for tests

		// other tests go here
		'wrapped-tests': 'tests/wrapped-tests',
	},
	shim: {

	}
});
	
if (window.__unit) {

	// load the tests
	require(['tests-main'], function(undef) {

		// tests were already run in the main tests file

		// QUnit was set not to autostart inline in tests.html
		// finally start the QUnit engine.
		QUnit.load();
		QUnit.start();
	});

} else {

	require(['demo-main'], function(demo) {

	});

}