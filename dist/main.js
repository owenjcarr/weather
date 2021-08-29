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

/***/ "./src/gif.js":
/*!********************!*\
  !*** ./src/gif.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getWeatherGif(s) {\n    try {\n        const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=2xjb3mBXPeVO0WkDF9kT7396EcdpUUMq&s=${s}`, {mode: 'cors'})\n        const gifData = await res.json();\n        return gifData;\n    } catch (error) {\n        return error;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherGif);\n\n//# sourceURL=webpack://weather/./src/gif.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gif */ \"./src/gif.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\n\nconst getElement = (selector) => {\n    const element = document.querySelector(selector);\n    return element;\n}\n\nconst createElement = (tag, className) => {\n    const element = document.createElement(tag);\n    if (className) {\n        element.classList.add(className);\n    }\n    return element;\n}\n\nconst createWeatherContainer = (city, temp, high, low) => {\n    const main = getElement(\".main\");\n\n    const weatherContainer = createElement(\"div\", \"weather-container\");\n    const weather = createElement(\"div\", \"weather\");\n\n    // const gifContainer = createElement(\"div\", \"weather-gif\");\n    // const img = createElement(\"img\");\n    // img.src = gif;\n    // img.title = description;\n\n    const cityElement = createElement(\"h1\", \"city\");\n    cityElement.textContent = city;\n\n    const tempContainer = createElement(\"div\", \"temp-container\");\n\n    const currentTempContainer = createElement(\"div\", \"current-temp-container\");\n    const currentTempElement = createElement(\"p\");\n    currentTempElement.textContent = temp + \"\\xB0\" + \"F\";\n\n    const highLowContainer = createElement(\"div\",\"high-low\");\n\n    const highTempElement = createElement(\"p\");\n    highTempElement.textContent = high + \"\\xB0\" + \"F\";\n\n    const lowTempElement = createElement(\"p\");\n    lowTempElement.textContent = low + \"\\xB0\" + \"F\";\n\n    highLowContainer.append(highTempElement, lowTempElement);\n    currentTempContainer.append(currentTempElement);\n    tempContainer.append(currentTempContainer, highLowContainer);\n    weather.append(cityElement, tempContainer);\n    weatherContainer.append(weather);\n    main.append(weatherContainer);\n}\n\nconst displayWeather = async (city) => {\n    try {\n        const weather = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__.default)(city);\n\n        // Removed because gif rarily mataches the weather\n        // const gif = await getWeatherGif(weather.weather[0].description); \n\n        createWeatherContainer(weather.name, Math.round(weather.main.temp), Math.round(weather.main.temp_max), Math.round(weather.main.temp_min));\n    }\n    catch (error) {\n        alert(\"The city you entered doesn't exist\");\n    }\n}\n\nconst clearWeather = () => {\n    const main = getElement(\".main\");\n    while (main.firstChild) {\n        main.removeChild(main.lastChild);\n    }\n}\n\nconst init = (() => {\n    const form = getElement(\"form\");\n    const input = getElement(\"input\");\n    const clear = getElement(\".clear\");\n\n    form.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        displayWeather(input.value);\n        form.reset();\n    });\n\n    clear.addEventListener(\"click\", clearWeather);\n})();\n\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = (city, units = \"imperial\") => (\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=178646b9ecfd2ef70525bec2572a8851`,{mode: \"cors\"})\n    .then(function (response) {\n        return response.json();\n    })\n    .then(function (data) {\n        return data;\n    })\n    .catch(function (error) {\n        return error;\n    })\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weather/./src/weather.js?");

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