define(['underscore','setup'], function(undef, undef) {
	var Buildable = {
		init: function() {},	// no-op to be overriden by objects
		build: function(data) {
			var obj = Object.create(this);
			obj.init(data);
			return obj;
		},
		extend: function() {

			var args = Array.prototype.slice.call(arguments, 0);

			args.unshift(this);

			return _.extend.apply(null, args);
		}
	}

	return Buildable;
});