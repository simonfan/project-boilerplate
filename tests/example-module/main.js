require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: '',
	paths: {
		// the module files go here
		'example-module': '../../src/js/modules/example-module',

		// DEMO
		'demo-main': 'demo/demo',	// the main file for the demo

		// UNIT TESTS
		'tests-main': 'tests/tests',	// the main file for tests

		// other tests go here
		'unwrapped-tests': 'tests/unwrapped-tests',
		'wrapped-tests': 'tests/wrapped-tests',
	},
	shim: {

	}
});
	
if (window.__unit) {

	// load the tests
	require(['example-module','tests-main'], function(Example, undef) {

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