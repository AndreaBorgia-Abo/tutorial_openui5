sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.myorg.donatedemo.controller.DemoView", {
    onInit: function () {
      var model = new sap.ui.model.json.JSONModel();
      model.setData({
        number: 0
      });
      this.getView().setModel(model, "view");
// L'esempio[1] del tutorial[2] non crea esplicitamente un ResourceModel per i18n ma si appoggia 
// al manifest.json: se non viene richiamato da un Component, mancano interamente le etichette. 
// Per creare a mano il ResourceModel con "new ResourceModel" abbiamo 2 opzioni:
// * la inseriamo nelle define in cima e nei parametri[3]
// * facciamo riferimento al nome completo
// [1] https://github.com/Michadelic/blogI18nXMLViewDemo/blob/master/webapp/controller/DemoView.controller.js
// [2] https://blogs.sap.com/2016/12/19/using-translatable-texts-with-placeholders-in-xml-views/
// [3] https://openui5.hana.ondemand.com/#/topic/df86bfbeab0645e5b764ffa488ed57dc
// set i18n model on view
      var i18nModel = new sap.ui.model.resource.ResourceModel({
        bundleName: "com.myorg.donatedemo.i18n.i18n"
      });
     this.getView().setModel(i18nModel, "i18n");
    },
    showMessage: function () {
      var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
      var oViewModel = this.getView().getModel("view");
      oViewModel.setProperty("/number", oViewModel.getProperty("/number") + 1);
      var oText = oResourceBundle.getText("donateText", [oViewModel.getProperty("/number")]);
      sap.m.MessageToast.show(oText);
    }
  });
});
