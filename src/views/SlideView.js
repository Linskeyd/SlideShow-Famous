/*** SlideView.js ***/

// define this module in Require.js
define(function(require, exports, module) {

	// import additional modules to be used in this view
	var View = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');

	// Constructor function for the SlideView class
	function SlideView() {

		// Applies View's constructor function to SlideView
		View.apply(this, arguments);

	}

	// Establishes prototype chain for SlideView class to inherit from View
	SlideView.prototype = Object.create(View.prototype);
	SlideView.prototype.constructor = SlideView;

	// Default options for the SlideView class
	SlideView.DEFAULT_OPTIONS = {};

	// Define your helper functions and prototype methods here

	module.exports = SlideView;
});