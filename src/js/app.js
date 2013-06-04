define(['example-module'], function(ExMod) {


	window.exmod = ExMod.build({
		message: 'Hey!'
	});

	console.log('App running');
});