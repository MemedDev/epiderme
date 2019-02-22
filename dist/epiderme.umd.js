(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
	(global = global || self, global.ReactEpiderme = factory(global.React, global.PropTypes));
}(this, function (React, PropTypes) { 'use strict';

	React = React && React.hasOwnProperty('default') ? React['default'] : React;
	PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var Button = function Button(_ref) {
	  var children = _ref.children,
	      isDanger = _ref.isDanger;
	  var buttonClass = classnames('button', {
	    'button--is-danger': isDanger
	  });
	  return React.createElement("button", {
	    type: "button",
	    className: buttonClass
	  }, children);
	};

	Button.defaultProps = {
	  isDanger: false
	};
	Button.propTypes = {
	  children: PropTypes.node.isRequired,
	  isDanger: PropTypes.bool
	};

	var main = {
	  Button: Button
	};

	return main;

}));
