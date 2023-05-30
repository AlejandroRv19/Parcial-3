/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/form/formstyle.css":
/*!*******************************************!*\
  !*** ./src/components/form/formstyle.css ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n     .Main_box {\\r\\n        width: 400px;\\r\\n        padding: 40px;\\r\\n        background-color: #f0f0f0;\\r\\n        border: 2px solid #ccc;\\r\\n      }\\r\\n      \\r\\n      input {\\r\\n        width: 100%;\\r\\n        padding: 10px;\\r\\n        margin-bottom: 10px;\\r\\n        margin-right: 200px;\\r\\n        border: 1px solid #ccc;\\r\\n        border-radius: 4px;\\r\\n      }\\r\\n      \\r\\n      button {\\r\\n        width: 100%;\\r\\n        padding: 10px;\\r\\n        background-color: #4caf50;\\r\\n        color: #fff;\\r\\n        border: none;\\r\\n        border-radius: 4px;\\r\\n        cursor: pointer;\\r\\n      }\\r\\n      \\r\\n      button:hover {\\r\\n        background-color: #45a049;\\r\\n      }\\r\\n      \\r\\n      button:active {\\r\\n        background-color: #3e8e41;\\r\\n      }\\r\\n      \\r\\n\\r\\n      .img{\\r\\n\\r\\n        height: 50px;\\r\\n        width: 50px;\\r\\n      }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/formstyle.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* reexport safe */ _form_form__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form */ \"./src/components/form/form.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _utils_Main_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/Main_styles */ \"./src/utils/Main_styles.ts\");\n/* harmony import */ var _formstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formstyle.css */ \"./src/components/form/formstyle.css\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst userinputs = {\n    name: \"\",\n    Ingredients: \"0\"\n};\nclass form extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        (0,_utils_Main_styles__WEBPACK_IMPORTED_MODULE_0__.loadCss)(this, _formstyle_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n        const main_box = this.ownerDocument.createElement('section');\n        main_box.classList.add(\"Main_box\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(main_box);\n        const second_box = this.ownerDocument.createElement('div');\n        second_box.classList.add(\"second_box\");\n        main_box.appendChild(second_box);\n        const h1 = this.ownerDocument.createElement('h1');\n        h1.classList.add(\"h1\");\n        h1.textContent = (\"recipe form\");\n        second_box.appendChild(h1);\n        const label = this.ownerDocument.createElement('label');\n        second_box.classList.add(\"label\");\n        label.textContent = (\"name of recipe\");\n        second_box.appendChild(label);\n        const name = this.ownerDocument.createElement('input');\n        name.classList.add(\"input_1\");\n        name.addEventListener(\"change\", (e) => {\n            userinputs.name = e.target.value;\n        });\n        second_box.appendChild(name);\n        const label_2 = this.ownerDocument.createElement('label');\n        second_box.classList.add(\"label_2\");\n        label_2.textContent = (\"Ingredients\");\n        second_box.appendChild(label_2);\n        const Ingredients = this.ownerDocument.createElement('input');\n        Ingredients.classList.add(\"imput_2\");\n        Ingredients.addEventListener(\"change\", (e) => {\n            userinputs.Ingredients = e.target.value;\n        });\n        second_box.appendChild(Ingredients);\n        const button = this.ownerDocument.createElement('button');\n        button.textContent = (\"Send\");\n        button.addEventListener(\"click\", () => __awaiter(this, void 0, void 0, function* () {\n            console.log(userinputs);\n            dispatch(yield saveRecipe(userinputs));\n        }));\n        second_box.appendChild(button);\n    }\n}\ncustomElements.define('app-form', form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/form/form.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b;\n        const dasboard = this.ownerDocument.createElement('app-dasboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dasboard);\n        const image = this.ownerDocument.createElement('app-image');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(image);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dasboard/dasboard.ts":
/*!******************************************!*\
  !*** ./src/screens/dasboard/dasboard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dasboard)\n/* harmony export */ });\nclass dasboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const main_box = this.ownerDocument.createElement('section');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(main_box);\n        const second_box = this.ownerDocument.createElement('div');\n        main_box.appendChild(second_box);\n        const form = this.ownerDocument.createElement('app-form');\n        main_box.appendChild(form);\n        const img = this.ownerDocument.createElement('app-img');\n        main_box.appendChild(img);\n    }\n}\ncustomElements.define('app-dasboard', dasboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dasboard/dasboard.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dasboard\": () => (/* reexport safe */ _dasboard_dasboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"image\": () => (/* reexport default from dynamic */ _img_image__WEBPACK_IMPORTED_MODULE_1___default.a)\n/* harmony export */ });\n/* harmony import */ var _dasboard_dasboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dasboard/dasboard */ \"./src/screens/dasboard/dasboard.ts\");\n/* harmony import */ var _img_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/image */ \"./src/screens/img/image.ts\");\n/* harmony import */ var _img_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/export.ts?");

/***/ }),

/***/ "./src/screens/img/image.ts":
/*!**********************************!*\
  !*** ./src/screens/img/image.ts ***!
  \**********************************/
/***/ (() => {

eval("\nclass image extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const img = this.ownerDocument.createElement('img');\n        img.src = \"https://www.hogarmania.com/archivos/202211/recetas-diabeticos-portada-1280x720x80xX.jpg\";\n        img.classList.add(\"img\");\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(img);\n    }\n}\ncustomElements.define('app-image', image);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/img/image.ts?");

/***/ }),

/***/ "./src/utils/Main_styles.ts":
/*!**********************************!*\
  !*** ./src/utils/Main_styles.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadCss\": () => (/* binding */ loadCss)\n/* harmony export */ });\nconst loadCss = (elRef, styles) => {\n    var _a;\n    const css = elRef.ownerDocument.createElement(\"style\");\n    css.innerHTML = styles;\n    (_a = elRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/Main_styles.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;