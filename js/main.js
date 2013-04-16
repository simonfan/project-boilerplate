require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery',
		'underscore': 'lib/underscore',
		'backbone': 'lib/backbone',
		
		'app': 'app',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
	}
});
	
// load the main app page
require(['app'], function(app) {
	
});

