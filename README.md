# tutorial_openui5
Codice di esempio preso dai tutorial ufficiali di [openui5](https://openui5.org/) e prove varie

Per creare una nuova app, ho usato:
* [UI5 Tooling](https://sap.github.io/ui5-tooling/)
* [Easy-UI5](https://developers.sap.com/tutorials/cp-cf-sapui5-local-setup.html)

Step su Windows da seguire per una nuova app:
* installare [Node.js](https://www.npmjs.com/get-npm) per avere npm
* npm init --yes
* npm install -g @ui5/cli
* npm install -g yo
* npm install -g generator-easy-ui5
* npm install -g mbt
* choco install make (per Windows, da installare come administrator!)
* yo easy-ui5 (questo crea manifest.json e vi evita [questo simpatico bug](https://github.com/SAP/ui5-project/issues/310) che si verifica creando la app manualmente; come opzioni usare "static webserver" e "local resource (OpenUI5)", il resto va bene default)
* cd percorsoapp
* segare la directory .git (per integrare tutta la app in un git esistente senza fare nuovo repo o submodulo)
* ui5 --config=uimodule/ui5.yaml add themelib_sap_belize (per poter seguire gli esempi che lo richiedono)
* npm install local-web-server --save-dev (la [app di esempio ufficiale](https://github.com/SAP/openui5-sample-app) usa un [webserver dedicato](https://www.npmjs.com/package/local-web-server) per servire la build ottimizzata, mentre la app generata automaticamente non lo prevede)
* inserire un target aggiuntivo in package.json: `"serve-dist": "ws --compress -d deployer/resources/uimodule",`
* npm run start (oppure) npm run serve-dist

Step per Debian:
* apt-get install nodejs npm
* npm init --yes
* npm install @ui5/cli
* npm install yo
* npm install generator-easy-ui5
* npm install mbt
* npx yo easy-ui5
* cd percorsoapp
* rm -rf .git (vedi sopra)
* npx ui5 --config=uimodule/ui5.yaml add themelib_sap_belize 
* npm install local-web-server --save-dev
* inserire un target aggiuntivo in package.json: `"serve-dist": "ws --compress -d deployer/resources/uimodule",`
* npm run start (oppure) npm run serve-dist

Attenzione:
* negli esempi di tooling, non viene considerato il percorso che easy-ui5 usa per raccogliere i file: va inserito come parametro esplicito, esattamente come nei target in package.json
* se manca il tema, controllare che sia installato il themelib corrispondente
* per VSCode esiste [un'estensione specifica per UI5](https://marketplace.visualstudio.com/items?itemName=iljapostnovs.ui5plugin)
