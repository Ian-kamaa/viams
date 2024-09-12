"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-number";
exports.ids = ["vendor-chunks/is-number"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-number/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-number/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-present, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function(num) {\n  if (typeof num === 'number') {\n    return num - num === 0;\n  }\n  if (typeof num === 'string' && num.trim() !== '') {\n    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);\n  }\n  return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXN0dWRpby8uL25vZGVfbW9kdWxlcy9pcy1udW1iZXIvaW5kZXguanM/YTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGlzLW51bWJlciA8aHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvaXMtbnVtYmVyPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obnVtKSB7XG4gIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBudW0gLSBudW0gPT09IDA7XG4gIH1cbiAgaWYgKHR5cGVvZiBudW0gPT09ICdzdHJpbmcnICYmIG51bS50cmltKCkgIT09ICcnKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSA/IE51bWJlci5pc0Zpbml0ZSgrbnVtKSA6IGlzRmluaXRlKCtudW0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-number/index.js\n");

/***/ })

};
;