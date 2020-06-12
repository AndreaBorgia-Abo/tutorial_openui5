# tutorial_openui5
Codice di esempio preso dai tutorial ufficiali di [openui5](https://openui5.org/) e prove varie

Per creare una nuova app, ho usato:
* [UI5 Tooling](https://sap.github.io/ui5-tooling/)
* [Easy-UI5](https://developers.sap.com/tutorials/cp-cf-sapui5-local-setup.html)

Step da seguire per una nuova app:
* npm init
* npm install -g yo
* npm install -g yo generator-easy-ui5
* npm install -g mbt
* choco install make (per Windows!)
* yo easy-ui5
* cd percorsoapp
* segare la directory .git (per integrare tutta la app in un git esistente senza fare nuovo repo o submodulo)
* ui5 --config=uimodule/ui5.yaml add themelib_sap_belize (per poter seguire gli esempi che lo richiedono)
* la [app di esempio ufficiale](https://github.com/SAP/openui5-sample-app) usa un [webserver dedicato](https://www.npmjs.com/package/local-web-server) per servire la build ottimizzata, mentre la app generata automaticamente non lo prevede; nel caso si aggiunge:
`npm install local-web-server --save-dev` e lo si richiama con un target aggiungivo: `"serve-dist": "ws --compress -d deployer/resources/uimodule",`
* npm run start (oppure) npm run serve-dist

Attenzione:
* negli esempi di tooling, non viene considerato il percorso che easy-ui5 usa per raccogliere i file: va inserito come parametro esplicito, esattamente come nei target in package.json
* se manca il tema, controllare che sia installato il themelib corrispondente
