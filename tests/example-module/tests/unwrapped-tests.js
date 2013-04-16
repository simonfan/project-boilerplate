define(['example-module'], function(Example) {
	
	test('This test is not wrapped in a function so it is run as soon as it is loaded by Require JS. You have no control over when I am run.', function() {
		ok(1);
	});
});