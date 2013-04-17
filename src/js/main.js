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