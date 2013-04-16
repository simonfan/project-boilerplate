define([], function() {
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