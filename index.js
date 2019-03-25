(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["project1"] = factory();
	else
		root["project1"] = factory();
})(function(){ if(typeof window["eBAProjects"] === "undefined"){ window.ebaForms={} } return window["eBAProjects"]["project1"] }(), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Forms/MainForm/Client/MainForm.ts":
/*!*******************************************!*\
  !*** ./Forms/MainForm/Client/MainForm.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MainFormComponents_1 = __webpack_require__(/*! ./MainFormComponents */ \"./Forms/MainForm/Client/MainFormComponents.tsx\");\r\nexports.MainForm = MainFormComponents_1.default;\r\nexports.IMainFormProps = MainFormComponents_1.IMainFormProps;\r\ntxtName.text = \"xxx\";\r\n//document.getElementById(txtName.ClientId).value = \"xxx\";\r\n// dispatch({\r\n//     type:\"CHANGE_DATA\",\r\n//     data:{\r\n//         text :\"xxx\"\r\n//     }\r\n// })\r\n\n\n//# sourceURL=webpack://project1/./Forms/MainForm/Client/MainForm.ts?");

/***/ }),

/***/ "./Forms/MainForm/Client/MainFormComponents.tsx":
/*!******************************************************!*\
  !*** ./Forms/MainForm/Client/MainFormComponents.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass MainForm extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.onChange = (event, editor) => {\r\n            if (this.props.onChange) {\r\n                this.props.onChange(event, editor);\r\n            }\r\n        };\r\n        this.onInit = (editor) => {\r\n            if (this.props.onInit) {\r\n                this.props.onInit(editor);\r\n            }\r\n        };\r\n        this.onChange = this.onChange.bind(this);\r\n        this.onInit = this.onInit.bind(this);\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", null, \"main form test component\"));\r\n    }\r\n}\r\nexports.default = MainForm;\r\n\n\n//# sourceURL=webpack://project1/./Forms/MainForm/Client/MainFormComponents.tsx?");

/***/ }),

/***/ "./Forms/SubForm/Client/SubForm.ts":
/*!*****************************************!*\
  !*** ./Forms/SubForm/Client/SubForm.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst SubFormComponents_1 = __webpack_require__(/*! ./SubFormComponents */ \"./Forms/SubForm/Client/SubFormComponents.tsx\");\r\nexports.SubForm = SubFormComponents_1.default;\r\nexports.ISubFormProps = SubFormComponents_1.ISubFormProps;\r\n\n\n//# sourceURL=webpack://project1/./Forms/SubForm/Client/SubForm.ts?");

/***/ }),

/***/ "./Forms/SubForm/Client/SubFormComponents.tsx":
/*!****************************************************!*\
  !*** ./Forms/SubForm/Client/SubFormComponents.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst React = __webpack_require__(/*! react */ \"react\");\r\nclass SubForm extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.onChange = (event, editor) => {\r\n            if (this.props.onChange) {\r\n                this.props.onChange(event, editor);\r\n            }\r\n        };\r\n        this.onInit = (editor) => {\r\n            if (this.props.onInit) {\r\n                this.props.onInit(editor);\r\n            }\r\n        };\r\n        this.onChange = this.onChange.bind(this);\r\n        this.onInit = this.onInit.bind(this);\r\n    }\r\n    render() {\r\n        return (React.createElement(\"div\", null, \"sub form test component\"));\r\n    }\r\n}\r\nexports.default = SubForm;\r\n\n\n//# sourceURL=webpack://project1/./Forms/SubForm/Client/SubFormComponents.tsx?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MainForm_1 = __webpack_require__(/*! ./Forms/MainForm/Client/MainForm */ \"./Forms/MainForm/Client/MainForm.ts\");\r\nexports.MainForm = MainForm_1.MainForm;\r\nexports.IMainFormProps = MainForm_1.IMainFormProps;\r\nvar SubForm_1 = __webpack_require__(/*! ./Forms/SubForm/Client/SubForm */ \"./Forms/SubForm/Client/SubForm.ts\");\r\nexports.SubForm = SubForm_1.SubForm;\r\nexports.ISubFormProps = SubForm_1.ISubFormProps;\r\n\n\n//# sourceURL=webpack://project1/./index.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://project1/external_%22react%22?");

/***/ })

/******/ });
});