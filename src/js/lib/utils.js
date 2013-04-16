define(['jquery'], function($) {
	
	// validates any object by verifying properties and respective typeofs
	function validateObj(obj, props) {
		/*
			props:
				prop: typeof prop (str)
		*/
		
		_.each(props, function(expected_type, prop_name) {
			
			if (!obj[prop_name] && typeof obj[prop_name] !== 'number') {
				throw new Error("There is no '" + prop_name + "' in " + obj);
			}
			
			var actual_type = typeof obj[prop_name];
			
			if (actual_type != expected_type) {
				throw new TypeError("The property '" + prop_name + "' from " + obj + " is not a '" + expected_type + "' but a '" + actual_type + "'");
			}
		});
		
		return true;
	}
	
	
	// function checks if is array or string
	function arrStr(i) {
		
		/*
			i:
				- obj,*
				- funcs:*
					- str,	*
					- arrItem,	*
					- arr,	*
					- objItem,
					- obj
				- context
		*/
		
		var type = typeof i.obj;
		
		if (type === 'string') {
			
			i.funcs.str.call(i.context, i.obj);
			
		} else if ( _.isArray(i.obj) ) {
			
			// the obj is an array
			
			if (i.funcs.arrItem) {
				
				// iterate over the object,
				// the i.funcs.arrItem requires the value inside the array
				_.each(i.obj, function(val, index) {
					i.funcs.arrItem.call(i.context, val, index);
				});
				
			} else {
				
				// return the array to the function
				// the i.funcs.arr requires the 'array' itself
				i.funcs.arr.call(i.context, i.obj);
				
			}
			
			
		} else {
			// it is an object
			
			if (i.funcs.obj) {
				// if there is a special function to objects, run it
				i.funcs.obj.call(i.context, i.obj);
				
			} else {
				// else run the function dedicated to arrays
				i.funcs.arr.call(i.context, i.obj);
			}
		}
	}	
	
	// Utils area!
	var Utils = {
		validateObj: validateObj,
		arrStr: arrStr
	}
	
	return Utils;	
});
