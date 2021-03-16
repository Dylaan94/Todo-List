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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadToday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadToday */ \"./src/modules/loadToday.js\");\n/* harmony import */ var _modules_loadWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadWeek */ \"./src/modules/loadWeek.js\");\n/* harmony import */ var _modules_loadMonth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadMonth */ \"./src/modules/loadMonth.js\");\n/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createTodo */ \"./src/modules/createTodo.js\");\nconsole.log(\"test\")\n\n\n;\n\n\n\n\n\nlet todayTab = document.getElementById('todayTab')\nlet weekTab = document.getElementById('weekTab')\nlet monthTab = document.getElementById('monthTab')\n\nlet addTodoBtn = document.getElementById('addTodoBtn');\n\ntodayTab.addEventListener('click', () => {\n    (0,_modules_loadToday__WEBPACK_IMPORTED_MODULE_0__.loadTodayTest)();\n})\n\nweekTab.addEventListener('click', () => {\n    ;(0,_modules_loadWeek__WEBPACK_IMPORTED_MODULE_1__.loadWeekTest)();\n})\n\nmonthTab.addEventListener('click', () => {\n    ;(0,_modules_loadMonth__WEBPACK_IMPORTED_MODULE_2__.loadMonthTest)();\n})\n\naddTodoBtn.addEventListener('click', () => {\n    ;(0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_3__.toggleForm)();\n})\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleForm\": () => (/* binding */ toggleForm)\n/* harmony export */ });\nlet toDoListArray = [\n]\n\n// create constructor to make todolist items\n\nclass toDoItem {\n    constructor () {\n        this.task;\n        this.dueDate;\n        this.description;\n        this.notes;\n        this.priority;\n\n        // this.checklist; add in later version\n    }\n}\n\n// toggles form on\nlet toggleForm = () => {\n    document.getElementById(\"popupForm\").classList.toggle(\"active\");\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/createTodo.js?");

/***/ }),

/***/ "./src/modules/loadMonth.js":
/*!**********************************!*\
  !*** ./src/modules/loadMonth.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMonthTest\": () => (/* binding */ loadMonthTest)\n/* harmony export */ });\nlet loadMonthTest = () => {\n    console.log(\"loadMonth\")\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/loadMonth.js?");

/***/ }),

/***/ "./src/modules/loadToday.js":
/*!**********************************!*\
  !*** ./src/modules/loadToday.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTodayTest\": () => (/* binding */ loadTodayTest)\n/* harmony export */ });\nlet loadTodayTest = () => {\n    console.log(\"loadToday\")\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/loadToday.js?");

/***/ }),

/***/ "./src/modules/loadWeek.js":
/*!*********************************!*\
  !*** ./src/modules/loadWeek.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadWeekTest\": () => (/* binding */ loadWeekTest)\n/* harmony export */ });\nlet loadWeekTest = () => {\n    console.log(\"loadWeek\")\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/loadWeek.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;