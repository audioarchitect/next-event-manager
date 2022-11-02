"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/events";
exports.ids = ["pages/api/events"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    global.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLEVBQUU7QUFFbEQsSUFBSUcsSUFBc0MsRUFBRTtJQUMxQ0QsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQztBQUN6QixDQUFDO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBnbG9iYWwucHJpc21hID0gcHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/events/index.ts":
/*!***********************************!*\
  !*** ./pages/api/events/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    const { method , body  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const events = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.findMany({\n                    include: {\n                        owner: true\n                    }\n                });\n                res.status(200).json(events);\n            } catch (e) {\n                console.error(\"Request error\", e);\n                res.status(500).json({\n                    error: \"Error fetching events\"\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const event = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.create({\n                    data: body\n                });\n                res.status(200).json(event);\n            } catch (e1) {\n                console.error(\"Request error\", e1);\n                res.status(500).json({\n                    error: \"Error creating event\"\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3dDO0FBRXpCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUMvRSxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsSUFBSSxHQUFFLEdBQUdILEdBQUc7SUFFNUIsT0FBUUUsTUFBTTtRQUNaLEtBQUssS0FBSztZQUNSLElBQUk7Z0JBQ0YsTUFBTUUsTUFBTSxHQUFHLE1BQU1OLGtFQUFxQixDQUFDO29CQUN6Q1MsT0FBTyxFQUFFO3dCQUNQQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRixDQUFDO2dCQUNGUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixNQUFNLENBQUM7WUFDOUIsRUFBRSxPQUFPTyxDQUFDLEVBQUU7Z0JBQ1ZDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGVBQWUsRUFBRUYsQ0FBQyxDQUFDO2dCQUNqQ1YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUcsS0FBSyxFQUFFLHVCQUF1QjtpQkFBRSxDQUFDO1lBQzFELENBQUM7WUFDRCxNQUFLO1FBRVAsS0FBSyxNQUFNO1lBQ1QsSUFBSTtnQkFDRixNQUFNUixLQUFLLEdBQUcsTUFBTVAsZ0VBQW1CLENBQUM7b0JBQ3RDaUIsSUFBSSxFQUFFWixJQUFJO2lCQUNYLENBQUM7Z0JBQ0ZGLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLEtBQUssQ0FBQztZQUM3QixFQUFFLE9BQU9NLEVBQUMsRUFBRTtnQkFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUMsZUFBZSxFQUFFRixFQUFDLENBQUM7Z0JBQ2pDVixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFRyxLQUFLLEVBQUUsc0JBQXNCO2lCQUFFLENBQUM7WUFDekQsQ0FBQztZQUNELE1BQUs7UUFFUDtZQUNFWixHQUFHLENBQUNlLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQUMsS0FBSztnQkFBRSxNQUFNO2FBQUMsQ0FBQztZQUN2Q2YsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWYsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELE1BQUs7S0FDUjtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy9hcGkvZXZlbnRzL2luZGV4LnRzP2RiMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCB7IG1ldGhvZCwgYm9keSB9ID0gcmVxXG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgcHJpc21hLmV2ZW50LmZpbmRNYW55KHtcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBvd25lcjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudHMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlcXVlc3QgZXJyb3InLCBlKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgZmV0Y2hpbmcgZXZlbnRzJyB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gYXdhaXQgcHJpc21hLmV2ZW50LmNyZWF0ZSh7XG4gICAgICAgICAgZGF0YTogYm9keSxcbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZXZlbnQpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1JlcXVlc3QgZXJyb3InLCBlKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgY3JlYXRpbmcgZXZlbnQnIH0pXG4gICAgICB9XG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKVxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICBicmVha1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiZXZlbnRzIiwiZXZlbnQiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJvd25lciIsInN0YXR1cyIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlIiwiZGF0YSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/index.ts"));
module.exports = __webpack_exports__;

})();