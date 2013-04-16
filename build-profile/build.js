({
	appDir: "../",
	baseUrl: "js",
	dir: "../build-res",
	optimize: 'none',
	skipDirOptimize: true,
	modules: [
		{
			name: 'main',
		}
	],
	paths: {
		'underscore': 'empty:',

		'box': 'src/box',
		'segment': 'src/segment',
		'mixins': 'src/mixins',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
	}
})