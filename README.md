# tutorial_openui5

Sample code taken from the official [openui5](https://openui5.org/) tutorials and various tests

To create a new app, I used:
* [UI5 Tooling](https://sap.github.io/ui5-tooling/)
* [Easy-UI5](https://developers.sap.com/tutorials/cp-cf-sapui5-local-setup.html)

Steps on Windows to follow for a new app:

* install [Node.js](https://nodejs.org/en/download) to have npm
* npm init --yes
* npm install -g @ui5/cli
* npm install -g yo
* npm install -g generator-easy-ui5
* npm install -g mbt
* choco install make (for Windows, to be installed as administrator!)
* yo easy-ui5 (this creates manifest.json and spares you [this nice bug](https://github.com/SAP/ui5-project/issues/310) that occurs creating the app manually; as options use "static webserver" and "local resource (OpenUI5)", the rest is fine by default)
* cd pathapp
* remove the .git directory (to integrate the whole app into an existing git without making new repo or submodule)
* ui5 --config=uimodule/ui5.yaml add themelib_sap_belize (to be able to follow examples that require it)
* npm install local-web-server --save-dev ([the official sample app](https://github.com/SAP/openui5-sample-app) uses a [dedicated webserver](https://www.npmjs.com/package/local-web-server) to serve the optimized build, while the automatically generated app does not)
* insert an additional target in package.json: `"serve-dist": "ws --compress -d uimodule/dist",`
* npm run start (or) npm run serve-dist

Steps for Debian:
* apt-get install nodejs npm
* npm init --yes
* npm install @ui5/cli --save-dev
* npm install yo
* npm install generator-easy-ui5
* npm install mbt
* npx yo easy-ui5
* cd pathapp
* rm -rf .git (see above).
* npx ui5 --config=uimodule/ui5.yaml add themelib_sap_belize 
* npm install local-web-server --save-dev
* insert an additional target in package.json: `"serve-dist": "ws --compress -d uimodule/dist",`
* npm run start (or) npm run serve-dist

Please note:
* in the tooling examples, the path that easy-ui5 uses to collect the files is not considered: it should be entered as an explicit parameter, exactly as in the targets in package.json
* if the theme is missing, check that the corresponding themelib is installed.
* for VSCode there is [a UI5-specific extension](https://marketplace.visualstudio.com/items?itemName=iljapostnovs.ui5plugin)
