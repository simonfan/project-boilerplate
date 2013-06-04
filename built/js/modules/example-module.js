define(['jquery','backbone','underscore'], 
function(   $   , Backbone , undef      ) {

	console.log('example module running');

	var Obj = Backbone.Model.extend({
		initialize: function(attr, options) {

		},
	})

	return Obj;
});