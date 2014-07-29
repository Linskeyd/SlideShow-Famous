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

		this.rootModifier = new StateModifier({
			size: this.options.size
		});

		this.mainNode = this.add(this.rootModifier);

		// use call to make sure method is called in the correct context
		_createBackground.call(this);
		_createFilm.call(this);

	}

	// Establishes prototype chain for SlideView class to inherit from View
	SlideView.prototype = Object.create(View.prototype);
	SlideView.prototype.constructor = SlideView;

	// Default options for the SlideView class
	SlideView.DEFAULT_OPTIONS = {
		size: [400, 450],
		filmBorder: 15
	};

	// Define your helper functions and prototype methods here
	function _createBackground() {

		var background = new Surface({
			// undefined size - will inherit size from parent modifier
			properties: {
				backgroundColor: '#FFFFFF',
				boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
			}
		});

		this.mainNode.add(background);

	}

	function _createFilm() {

		this.options.filmSize = this.options.size[0] - 2 * this.options.filmBorder;

		var film = new Surface({
			size: [this.options.filmSize, this.options.filmSize],
			properties: {
				backgroundColor: '#222',
				zIndex: 1
			}
		});

		var filmModifier = new StateModifier({
			origin: [0.5, 0],
			align: [0.5, 0],
			transform: Transform.translate(0, this.options.filmBorder, 1)
		});

		this.mainNode.add(filmModifier).add(film);
	}

	module.exports = SlideView;
});