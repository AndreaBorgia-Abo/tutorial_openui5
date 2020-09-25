sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			}
        });

		// Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
		
		// Create a resource bundle for language specific texts
		var oResourceModel = new ResourceModel({
			bundleName: "com.myorg.databinding.i18n.i18n"
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");
		
		// Display the XML view called "App"
		new XMLView({
			viewName: "com.myorg.databinding.view.App"
        }).placeAt("content");
	});
});