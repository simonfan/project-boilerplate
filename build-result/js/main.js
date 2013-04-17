
define('example-module',[], function() {
	console.log('example module running');

	var Constructor = function(options) {
		this.options = options;
	};

	Constructor.prototype.exampleMethod = function() {
		console.log('Hello world! Thank you for calling example method.');

		return 'Hello world!';
	}

	return Constructor;
});
define('app',['example-module'], function(ExMod) {


	window.exmod = new ExMod('Hey!');

	console.log('App running');
});
require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: 'src',
	paths: {
		'jquery': 'js/lib/jquery',
		'underscore': 'js/lib/underscore',
		'backbone': 'js/lib/backbone',
		
		'main': 'js/main',
		'app': 'js/app',

		// modules
		'example-module': 'js/modules/example-module',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
	}
});
	
// load the main app page
require(['app']);
define("main", function(){});
