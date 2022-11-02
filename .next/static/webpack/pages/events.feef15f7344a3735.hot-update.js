"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./services/events-services.js":
/*!*************************************!*\
  !*** ./services/events-services.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterAndSortEvents\": function() { return /* binding */ filterAndSortEvents; },\n/* harmony export */   \"getEventsSummary\": function() { return /* binding */ getEventsSummary; },\n/* harmony export */   \"getFilterObject\": function() { return /* binding */ getFilterObject; }\n/* harmony export */ });\n/* harmony import */ var _utils_ui_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ui-schema */ \"./utils/ui-schema.js\");\n\n/**\n * Filter and sort events based on filter selections \n *\n * @param {object} props\n * @param {object[]} props.events\n * @param {object} props.filters\n * @param {string} props.sortKey\n * \n * @returns {object[]} filtered events array\n */ function filterAndSortEvents(param) {\n    var events = param.events, filters = param.filters, sortKey = param.sortKey;\n    var showResolved = filters.showResolved, searchString = filters.searchString, domain = filters.domain, subdomain = filters.subdomain, owner = filters.owner;\n    return events.filter(function(event) {\n        // Filter out resolved events\n        if (!showResolved && event.resolvedAt) {\n            return false;\n        }\n        // Filter by domain\n        if (!domain[event.domain]) {\n            return false;\n        }\n        // Filter by subdomain\n        if (!subdomain[event.subdomain]) {\n            return false;\n        }\n        // Filter by user\n        if (!owner[event.ownerId]) {\n            return false;\n        }\n        // Filter by search string\n        return event.description.includes(searchString);\n    }).sort(function(a, b) {\n        // Resolved should be at the bottom\n        if (a.resolvedAt === null) {\n            return -1;\n        }\n        if (a.createdAt > b.createdAt) {\n            return 1;\n        } else if (a.createdAt < b.createdAt) {\n            return -1;\n        }\n        return a === b;\n    });\n}\n/**\n * Get events summary, based on full events array\n *\n * @param {object[]} events\n * \n * @returns {object} filtered events array\n */ function getEventsSummary() {\n    var events = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];\n    var summary = {};\n    // Initial the summary object for each domain\n    _utils_ui_schema__WEBPACK_IMPORTED_MODULE_0__.availableDomains.forEach(function(domain) {\n        summary[domain.value] = {\n            ongoing: 0,\n            resolved: 0\n        };\n    });\n    // Iterate through events and increment resolved and ongoing counts for each domain\n    events.forEach(function(event) {\n        var domain = event.domain, resolvedAt = event.resolvedAt;\n        if (resolvedAt) {\n            summary[domain].resolved++;\n        } else {\n            summary[domain].ongoing++;\n        }\n    });\n    console.log(\"summary\", summary);\n    return summary;\n}\n/**\n * Get filter object, to use for dropdown models\n * \n * @apram {object[]} filter category\n *\n * @returns {object} filter obj\n */ function getFilterObject(category) {\n    var result = {};\n    category.forEach(function(item) {\n        result[item.value || item.id] = true;\n    });\n    return result;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2QsTUFBTSxDQUFDLENBQUNpQixPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSEUsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFTixPQUFPLENBQUMsQ0FBQztJQUVoQyxPQUFPQSxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEOzs7Ozs7Q0FNQyxHQUNPLFNBQVNPLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFO0lBQ3pDLElBQU1DLE1BQU0sR0FBRyxFQUFFO0lBRWpCRCxRQUFRLENBQUNQLE9BQU8sQ0FBQ1MsU0FBQUEsSUFBSSxFQUFJO1FBQ3ZCRCxNQUFNLENBQUNDLElBQUksQ0FBQ1IsS0FBSyxJQUFJUSxJQUFJLENBQUNDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU9GLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlcnZpY2VzL2V2ZW50cy1zZXJ2aWNlcy5qcz84ODcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF2YWlsYWJsZURvbWFpbnMgfSBmcm9tIFwiLi4vdXRpbHMvdWktc2NoZW1hXCI7XG5cbi8qKlxuICogRmlsdGVyIGFuZCBzb3J0IGV2ZW50cyBiYXNlZCBvbiBmaWx0ZXIgc2VsZWN0aW9ucyBcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0W119IHByb3BzLmV2ZW50c1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmZpbHRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5zb3J0S2V5XG4gKiBcbiAqIEByZXR1cm5zIHtvYmplY3RbXX0gZmlsdGVyZWQgZXZlbnRzIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJBbmRTb3J0RXZlbnRzKHtldmVudHMsIGZpbHRlcnMsIHNvcnRLZXl9KSB7XG4gIGNvbnN0IHsgc2hvd1Jlc29sdmVkLCBzZWFyY2hTdHJpbmcsIGRvbWFpbiwgc3ViZG9tYWluLCBvd25lcn0gPSBmaWx0ZXJzO1xuICByZXR1cm4gZXZlbnRzXG4gICAgLmZpbHRlcihldmVudCA9PiB7XG4gICAgICAvLyBGaWx0ZXIgb3V0IHJlc29sdmVkIGV2ZW50c1xuICAgICAgaWYgKCFzaG93UmVzb2x2ZWQgJiYgZXZlbnQucmVzb2x2ZWRBdCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBGaWx0ZXIgYnkgZG9tYWluXG4gICAgICBpZiAoIWRvbWFpbltldmVudC5kb21haW5dKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEZpbHRlciBieSBzdWJkb21haW5cbiAgICAgIGlmICghc3ViZG9tYWluW2V2ZW50LnN1YmRvbWFpbl0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gRmlsdGVyIGJ5IHVzZXJcbiAgICAgIGlmICghb3duZXJbZXZlbnQub3duZXJJZF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gRmlsdGVyIGJ5IHNlYXJjaCBzdHJpbmdcbiAgICAgIHJldHVybiBldmVudC5kZXNjcmlwdGlvbi5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpO1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkIHNob3VsZCBiZSBhdCB0aGUgYm90dG9tXG4gICAgICBpZiAoYS5yZXNvbHZlZEF0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAgLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEuY3JlYXRlZEF0IDwgYi5jcmVhdGVkQXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2V0IGV2ZW50cyBzdW1tYXJ5LCBiYXNlZCBvbiBmdWxsIGV2ZW50cyBhcnJheVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0W119IGV2ZW50c1xuICogXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBmaWx0ZXJlZCBldmVudHMgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50c1N1bW1hcnkoZXZlbnRzID0gW10pIHtcbiAgY29uc3Qgc3VtbWFyeSA9IHt9O1xuXG4gIC8vIEluaXRpYWwgdGhlIHN1bW1hcnkgb2JqZWN0IGZvciBlYWNoIGRvbWFpblxuICBhdmFpbGFibGVEb21haW5zLmZvckVhY2goZG9tYWluID0+IHsgIFxuICAgIHN1bW1hcnlbZG9tYWluLnZhbHVlXSA9IHsgb25nb2luZzogMCwgcmVzb2x2ZWQ6IDAgfTtcbiAgfSk7XG4gIFxuICAvLyBJdGVyYXRlIHRocm91Z2ggZXZlbnRzIGFuZCBpbmNyZW1lbnQgcmVzb2x2ZWQgYW5kIG9uZ29pbmcgY291bnRzIGZvciBlYWNoIGRvbWFpblxuICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgY29uc3QgeyBkb21haW4sIHJlc29sdmVkQXQgfSA9IGV2ZW50O1xuXG4gICAgaWYgKHJlc29sdmVkQXQpIHtcbiAgICAgIHN1bW1hcnlbZG9tYWluXS5yZXNvbHZlZCsrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN1bW1hcnlbZG9tYWluXS5vbmdvaW5nKys7XG4gICAgfVxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcInN1bW1hcnlcIiwgc3VtbWFyeSk7XG5cbiAgcmV0dXJuIHN1bW1hcnk7IFxufVxuXG4vKipcbiAqIEdldCBmaWx0ZXIgb2JqZWN0LCB0byB1c2UgZm9yIGRyb3Bkb3duIG1vZGVsc1xuICogXG4gKiBAYXByYW0ge29iamVjdFtdfSBmaWx0ZXIgY2F0ZWdvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBmaWx0ZXIgb2JqXG4gKi9cbiBleHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyT2JqZWN0KGNhdGVnb3J5KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgcmVzdWx0W2l0ZW0udmFsdWUgfHwgaXRlbS5pZF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufSJdLCJuYW1lcyI6WyJhdmFpbGFibGVEb21haW5zIiwiZmlsdGVyQW5kU29ydEV2ZW50cyIsImV2ZW50cyIsImZpbHRlcnMiLCJzb3J0S2V5Iiwic2hvd1Jlc29sdmVkIiwic2VhcmNoU3RyaW5nIiwiZG9tYWluIiwic3ViZG9tYWluIiwib3duZXIiLCJmaWx0ZXIiLCJldmVudCIsInJlc29sdmVkQXQiLCJvd25lcklkIiwiZGVzY3JpcHRpb24iLCJpbmNsdWRlcyIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZWRBdCIsImdldEV2ZW50c1N1bW1hcnkiLCJzdW1tYXJ5IiwiZm9yRWFjaCIsInZhbHVlIiwib25nb2luZyIsInJlc29sdmVkIiwiY29uc29sZSIsImxvZyIsImdldEZpbHRlck9iamVjdCIsImNhdGVnb3J5IiwicmVzdWx0IiwiaXRlbSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/events-services.js\n"));

/***/ })

});