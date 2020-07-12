sap.ui.require([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "com.myorg.donatedemo.view.DemoView"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});