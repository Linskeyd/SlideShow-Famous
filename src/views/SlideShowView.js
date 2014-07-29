/*** SlideShowView.js ***/

// define this module in Require.js
define(function(require, exports, module) {

	// import additional modules to be used in this view
	var View = require('famous/core/View');
	var Surface = require('famous/core/Surface');
	var Transform = require('famous/core/Transform');
	var StateModifier = require('famous/modifiers/StateModifier');
	var Lightbox = require('famous/views/Lightbox');

	// import SlideView
	var SlideView = require('views/SlideView');

	// Constructor function for the SlideShowView class
	function SlideShowView() {

		// Applies View's constructor function to SlideShowView
		View.apply(this, arguments);

		var rootModifier = new StateModifier({
			size: this.options.size,
			origin: [0.5, 0],
			align: [0.5, 0]
		});

		this.mainNode = this.add(rootModifier);

		_createLightbox.call(this);
		_createSlides.call(this);

	}

	// Establishes prototype chain for EmptyView class to inherit from View
	SlideShowView.prototype = Object.create(View.prototype);
	SlideShowView.prototype.constructor = SlideShowView;

	// Default options for the EmptyView class
	SlideShowView.DEFAULT_OPTIONS = {
		size: [450, 500],
		data: undefined,
		lightboxOpts: {}
	};

	// Define your helper functions and prototype methods here
	SlideShowView.prototype.showCurrentSlide = function () {
		var slide = this.slides[this.currentIndex];
		this.lightbox.show(slide);
	}

	function _createLightbox() {
		this.lightbox = new Lightbox(this.options.lightboxOpts);
		this.mainNode.add(this.lightbox);
	}

	function _createSlides() {
		this.slides = [];
		this.currentIndex = 0;

		for(var i=0; i<this.options.data.length; i++) {

			var slide = new SlideView({
				size: this.options.size,
				photoUrl: this.options.data[i]
			});

			this.slides.push(slide);
		}

		this.showCurrentSlide();
	}

	module.exports = SlideShowView;
});