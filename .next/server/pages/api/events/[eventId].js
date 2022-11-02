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
exports.id = "pages/api/events/[eventId]";
exports.ids = ["pages/api/events/[eventId]"];
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

/***/ "(api)/./pages/api/events/[eventId].js":
/*!***************************************!*\
  !*** ./pages/api/events/[eventId].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    const { method , body  } = req;\n    const { eventId  } = req.query;\n    switch(method){\n        case \"GET\":\n            try {\n                const event = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.findUnique({\n                    where: {\n                        id: parseInt(eventId, 10)\n                    }\n                });\n                res.status(200).json(event);\n            } catch (e) {\n                console.error(\"Request error\", e);\n                res.status(500).json({\n                    error: \"Error fetching events\"\n                });\n            }\n            break;\n        case \"PUT\":\n            // We don't want the owner JSON in the PUT request\n            delete body.owner;\n            try {\n                const event1 = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].event.update({\n                    where: {\n                        id: parseInt(eventId)\n                    },\n                    data: body\n                });\n                res.status(200).json(event1);\n            } catch (e1) {\n                console.error(\"Request error\", e1);\n                res.status(500).json({\n                    error: \"Error creating event\"\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXZlbnRzL1tldmVudElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUV6QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUUsR0FBR0gsR0FBRztJQUM1QixNQUFNLEVBQUVJLE9BQU8sR0FBRSxHQUFHSixHQUFHLENBQUNLLEtBQUs7SUFFN0IsT0FBUUgsTUFBTTtRQUNaLEtBQUssS0FBSztZQUNSLElBQUk7Z0JBQ0YsTUFBTUksS0FBSyxHQUFHLE1BQU1SLG9FQUF1QixDQUFDO29CQUMxQ1UsS0FBSyxFQUFFO3dCQUNMQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ04sT0FBTyxFQUFFLEVBQUUsQ0FBQztxQkFDMUI7aUJBQ0YsQ0FBQztnQkFDRkgsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ04sS0FBSyxDQUFDO1lBQzdCLEVBQUUsT0FBT08sQ0FBQyxFQUFFO2dCQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxlQUFlLEVBQUVGLENBQUMsQ0FBQztnQkFDakNaLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVHLEtBQUssRUFBRSx1QkFBdUI7aUJBQUUsQ0FBQztZQUMxRCxDQUFDO1lBQ0QsTUFBSztRQUVQLEtBQUssS0FBSztZQUNSLGtEQUFrRDtZQUNsRCxPQUFPWixJQUFJLENBQUNhLEtBQUs7WUFFakIsSUFBSTtnQkFDRixNQUFNVixNQUFLLEdBQUcsTUFBTVIsZ0VBQW1CLENBQUM7b0JBQ3RDVSxLQUFLLEVBQUU7d0JBQ0xDLEVBQUUsRUFBRUMsUUFBUSxDQUFDTixPQUFPLENBQUM7cUJBQ3RCO29CQUNEYyxJQUFJLEVBQUVmLElBQUk7aUJBQ1gsQ0FBQztnQkFDRkYsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ04sTUFBSyxDQUFDO1lBQzdCLEVBQUUsT0FBT08sRUFBQyxFQUFFO2dCQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxlQUFlLEVBQUVGLEVBQUMsQ0FBQztnQkFDakNaLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVHLEtBQUssRUFBRSxzQkFBc0I7aUJBQUUsQ0FBQztZQUN6RCxDQUFDO1lBQ0QsTUFBSztRQUVQO1lBQ0VkLEdBQUcsQ0FBQ2tCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQUMsS0FBSztnQkFBRSxLQUFLO2FBQUMsQ0FBQztZQUN0Q2xCLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDUyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVsQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsTUFBSztLQUNSO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJvamVjdC8uL3BhZ2VzL2FwaS9ldmVudHMvW2V2ZW50SWRdLmpzPzA5OWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICcuLi8uLi8uLi9saWIvcHJpc21hJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kLCBib2R5IH0gPSByZXFcbiAgY29uc3QgeyBldmVudElkIH0gPSByZXEucXVlcnlcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBldmVudCA9IGF3YWl0IHByaXNtYS5ldmVudC5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGV2ZW50SWQsIDEwKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudClcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVxdWVzdCBlcnJvcicsIGUpXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBldmVudHMnIH0pXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIFxuICAgIGNhc2UgJ1BVVCc6XG4gICAgICAvLyBXZSBkb24ndCB3YW50IHRoZSBvd25lciBKU09OIGluIHRoZSBQVVQgcmVxdWVzdFxuICAgICAgZGVsZXRlIGJvZHkub3duZXJcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBhd2FpdCBwcmlzbWEuZXZlbnQudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IHBhcnNlSW50KGV2ZW50SWQpLCBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IGJvZHksXG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGV2ZW50KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXF1ZXN0IGVycm9yJywgZSlcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm9yIGNyZWF0aW5nIGV2ZW50JyB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BVVCddKVxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgICBicmVha1xuICB9XG59Il0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5IiwiZXZlbnRJZCIsInF1ZXJ5IiwiZXZlbnQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInBhcnNlSW50Iiwic3RhdHVzIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJvd25lciIsInVwZGF0ZSIsImRhdGEiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/events/[eventId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/events/[eventId].js"));
module.exports = __webpack_exports__;

})();