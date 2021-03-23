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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loadTimespan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loadTimespan */ \"./src/modules/loadTimespan.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createTodo */ \"./src/modules/createTodo.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\n\n\n\n\n\n// tabbing variables\nlet todayTab = document.getElementById('todayTab')\nlet weekTab = document.getElementById('weekTab')\nlet monthTab = document.getElementById('monthTab')\n\n// button variables\nlet addTodoBtn = document.getElementById('addTodoBtn');\nlet submitBtn = document.getElementById('submit');\nlet closeBtn = document.getElementById('close-btn')\n\ntodayTab.addEventListener('click', () => {\n    ;(0,_modules_loadTimespan__WEBPACK_IMPORTED_MODULE_0__.loadTimespanTest)();\n})\n\nweekTab.addEventListener('click', () => {\n    ;(0,_modules_loadTimespan__WEBPACK_IMPORTED_MODULE_0__.loadTimespanTest)();\n})\n\nmonthTab.addEventListener('click', () => {\n    ;(0,_modules_loadTimespan__WEBPACK_IMPORTED_MODULE_0__.loadTimespanTest)();\n})\n\naddTodoBtn.addEventListener('click', () => {\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.toggleForm)();\n})\n\nsubmitBtn.addEventListener('click', () => {\n    ;(0,_modules_createTodo__WEBPACK_IMPORTED_MODULE_2__.newTodoItem)();\n   // toggleForm();\n})\n\ncloseBtn.addEventListener('click', () => {\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.toggleForm)();\n})\n\n\n// checks if there are todoitems already in storage, if so it will create divs\nif (window.localStorage.getItem('toDoItems') !== null) {\n    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_3__.fromStorage)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/createTodo.js":
/*!***********************************!*\
  !*** ./src/modules/createTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodoItem\": () => (/* binding */ newTodoItem),\n/* harmony export */   \"toDoitem\": () => (/* binding */ toDoitem)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n// factory function\nlet toDoitem = (task, dueDate, description, notes, priority) => {\n    // push new todo item to array\n    _storage__WEBPACK_IMPORTED_MODULE_1__.toDoListArray.push({task, dueDate, description, notes, priority}) \n    console.log(_storage__WEBPACK_IMPORTED_MODULE_1__.toDoListArray)\n    ;(0,_storage__WEBPACK_IMPORTED_MODULE_1__.toStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.toDoListArray);\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderToDoItem)(_storage__WEBPACK_IMPORTED_MODULE_1__.toDoListArray);\n};\n\n// call factory function\nlet newTodoItem = () => {\n    let task = document.getElementById('task').value;\n    let dueDate = document.getElementById('datepicker').value; \n    let description = document.getElementById('description').value;\n    let notes = document.getElementById('notes').value;\n    let priority = document.getElementById('priority').value;\n    toDoitem(task, dueDate, description, notes, priority)\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/createTodo.js?");

/***/ }),

/***/ "./src/modules/loadTimespan.js":
/*!*************************************!*\
  !*** ./src/modules/loadTimespan.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadTimespanTest\": () => (/* binding */ loadTimespanTest)\n/* harmony export */ });\nlet loadTimespanTest = () => {\n    console.log(\"test\")\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/loadTimespan.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleForm\": () => (/* binding */ toggleForm),\n/* harmony export */   \"renderToDoItem\": () => (/* binding */ renderToDoItem)\n/* harmony export */ });\nlet toDoListContainer = document.getElementById('toDoListContainer')\n\n// toggles form on and off\nlet toggleForm = () => {\n    document.getElementById(\"popupForm\").classList.toggle(\"active\");\n}\n\n// render ToDo list items\n\nlet renderToDoItem = (toDoListArray) => {\n    console.log(toDoListArray)\n    // for loop to render each object and create div\n    for (let i = 0; i < toDoListArray.length; i ++) {\n        // check if the div has already been generated\n        if (!document.getElementById('toDoItem' + i)){\n            let div = document.createElement('div')\n            div.id = 'toDoItem' + i;\n            div.className = 'toDoItem';\n            toDoListContainer.appendChild(div);\n\n            // add variable to new div\n            let toDoItem = document.getElementById('toDoItem' + i)\n\n            // dynamically create new divs for styling\n            let taskDiv = document.createElement('div');\n            taskDiv.id = 'taskDiv' + i;\n            taskDiv.className = 'taskDiv'\n            taskDiv.innerHTML = toDoListArray[i].task\n            toDoItem.appendChild(taskDiv)\n        \n            let descriptionDiv = document.createElement('div');\n            descriptionDiv.id = 'descriptionDiv' + i;\n            descriptionDiv.className = 'descriptionDiv';\n            descriptionDiv.innerHTML = toDoListArray[i].description;\n            toDoItem.appendChild(descriptionDiv)\n        \n            let dueDateDiv = document.createElement('div');\n            dueDateDiv.id = 'dueDateDiv' + i;\n            dueDateDiv.className = 'dueDateDiv';\n            dueDateDiv.innerHTML = toDoListArray[i].dueDate;\n            toDoItem.appendChild(dueDateDiv)\n        \n            let notesDiv = document.createElement('div');\n            notesDiv.id = 'notesDiv' + i;\n            notesDiv.className = 'notesDiv';\n            notesDiv.innerHTML = toDoListArray[i].notes;\n            toDoItem.appendChild(notesDiv)\n        \n            let priorityDiv = document.createElement('div');\n            priorityDiv.id = 'priorityDiv' + i;\n            priorityDiv.className = 'priorityDiv'\n            priorityDiv.innerHTML = toDoListArray[i].priority;\n            toDoItem.appendChild(priorityDiv) \n        }\n    }\n    console.log(toDoListContainer)\n    console.log(toDoListArray)\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toStorage\": () => (/* binding */ toStorage),\n/* harmony export */   \"fromStorage\": () => (/* binding */ fromStorage),\n/* harmony export */   \"toDoListArray\": () => (/* binding */ toDoListArray)\n/* harmony export */ });\n/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo */ \"./src/modules/createTodo.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\n\nlet toDoListArray = [];\n\n// stores the array as a string, updated each time toDoItem is called\nlet toStorage = (toDoListArray) => {\n    // uses JSON to store the array as a string\n    let toDoArray_serialised = JSON.stringify(toDoListArray)\n    window.localStorage.setItem('toDoItems', toDoArray_serialised)\n    console.log(localStorage)\n}\n\n// render the array that has been stored on refresh\nlet fromStorage = () => {\n    // uses JSON to bring array back to life (turn into objects)\n    let toDoArray_deserialised = JSON.parse(window.localStorage.getItem('toDoItems'))\n\n    console.log(localStorage)\n    console.log(toDoArray_deserialised);\n    \n    toDoListArray = toDoArray_deserialised\n    console.log(toDoListArray)\n    ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderToDoItem)(toDoListArray)\n}\n\n\n\n// window.localStorage.removeItem('toDoItems');\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

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