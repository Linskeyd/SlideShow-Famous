define(function(require, exports, module) {

	var Engine  = require('famous/core/Engine');
	var Utility = require('famous/utilities/Utility');
	var AppView = require('views/AppView');
	var SlideData = require('data/SlideData');

	var mainContext = Engine.createContext();

	Utility.loadURL(SlideData.getUrl(), initApp);

	function initApp(data) {
		// Parses out response data and retrieves array of urls
		data = SlideData.parse(data);

		// Instantiates AppView with our url data
		var appView = new AppView({data: data});

		mainContext.add(appView);
	}
	
});