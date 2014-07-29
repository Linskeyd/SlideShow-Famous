/*** EmptyView.js ***/

// define this module in Require.js
define(function(require, exports, module) {

	// import additional modules to be used in this view
	var View = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	// Constructor function for the AppView class
	function AppView() {

		// Applies View's constructor function to EmptyView
		View.apply(this, arguments);

	}

	// Establishes prototype chain for AppView class to inherit from View
	AppView.prototype = Object.create(View.prototype);
	AppView.prototype.constructor = AppView;

	// Default options for the EmptyView class
	AppView.DEFAULT_OPTIONS = {};

	// Define your helper functions and prototype methods here

	module.exports = AppView;
});