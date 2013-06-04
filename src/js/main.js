require.config({
	urlArgs: "bust=" + Math.random(),
	baseUrl: 'src',
	paths: {
		// basic external libraries
		'jquery': 'components/jquery',
		'underscore': 'components/underscore',
		'backbone': 'components/backbone',
		
		'main': 'js/main',
		'app': 'js/app',

		// modules
		// basic own modules
		'setup': 'js/modules/setup',
		'mixins': 'js/modules/mixins',
		'buildable': 'js/modules/buildable',

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