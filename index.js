var _ = {

}

module.exports = _;

_.once = function(fn) {
	var invoked = false;
	var result;
	return function() {
		if(!invoked) {
			invoked = true;
			result = fn();
			return result;
		} else {
			return result;
		}
	}
}

_.memoize = function(fn, resolver) {
	var cache = {};
	var cache_key;
	return function(arg) {
		if(resolver) {
			cache_key = resolver(arg);
		} else {
			cache_key = arg;
		}
		if(cache.hasOwnProperty(cache_key)) {
			return cache[cache_key];
		} else {
			cache[cache_key] = fn(arg);
			return cache[cache_key];
		}
	}
}

_.bind = function(fn, context) {
	return function() {
		return fn.call(context);
	}
}