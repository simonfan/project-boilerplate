define(['jquery','buildable','backbone','underscore','mixins'], 
function(   $   , Buildable , Backbone , undef      , undef  ) {

	console.log('example module running');

	var Obj = Object.create(Buildable);

	Obj.extend(Backbone.Events, {
		init: function(data) {
			_.interface({
				id: 'Example interface',
				obj: data,
				typeofs: {
					message: 'string'
				}
			});

			this.message = data.message;
		},

		speak: function() {
			console.log(this.message)
		}
	});

	return Obj;
});