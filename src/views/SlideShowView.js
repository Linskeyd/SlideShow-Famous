/*** SlideShowView.js ***/

// define this module in Require.js
define(function(require, exports, module) {

	// import additional modules to be used in this view
	var View = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	// Constructor function for the SlideShowView class
	function SlideShowView() {

		// Applies View's constructor function to SlideShowView
		View.apply(this, arguments);

	}

	// Establishes prototype chain for EmptyView class to inherit from View
	SlideShowView.prototype = Object.create(View.prototype);
	SlideShowView.prototype.constructor = SlideShowView;

	// Default options for the EmptyView class
	SlideShowView.DEFAULT_OPTIONS = {};

	// Define your helper functions and prototype methods here

	module.exports = SlideShowView;
});