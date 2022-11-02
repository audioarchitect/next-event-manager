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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterAndSortEvents\": function() { return /* binding */ filterAndSortEvents; },\n/* harmony export */   \"getEventsSummary\": function() { return /* binding */ getEventsSummary; },\n/* harmony export */   \"getFilterObject\": function() { return /* binding */ getFilterObject; }\n/* harmony export */ });\n/**\n * Filter and sort events based on filter selections \n *\n * @param {object} props\n * @param {object[]} props.events\n * @param {object} props.filters\n * @param {string} props.sortKey\n * \n * @returns {object[]} filtered events array\n */ function filterAndSortEvents(param) {\n    var events = param.events, filters = param.filters, sortKey = param.sortKey;\n    var showResolved = filters.showResolved, searchString = filters.searchString, domain = filters.domain, subdomain = filters.subdomain, owner = filters.owner;\n    return events.filter(function(event) {\n        // Filter out resolved events\n        if (!showResolved && event.resolvedAt) {\n            return false;\n        }\n        // Filter by domain\n        if (!domain[event.domain]) {\n            return false;\n        }\n        // Filter by subdomain\n        if (!subdomain[event.subdomain]) {\n            return false;\n        }\n        // Filter by user\n        if (!owner[event.ownerId]) {\n            return false;\n        }\n        // Filter by search string\n        return event.description.includes(searchString);\n    }).sort(function(a, b) {\n        // Resolved should be at the bottom\n        if (a.resolvedAt === null) {\n            return -1;\n        }\n        if (a.createdAt > b.createdAt) {\n            return 1;\n        } else if (a.createdAt < b.createdAt) {\n            return -1;\n        }\n        return a === b;\n    });\n}\n/**\n * Get events summary, based on full events array\n *\n * @param {object[]} events\n * \n * @returns {object} filtered events array\n */ function getEventsSummary() {\n    var events = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];\n    var summary = {};\n    // Iterate through events and increment resolved and ongoing counts for each domain\n    events.forEach(function(event) {\n        var domain = event.domain, resolvedAt = event.resolvedAt;\n        // Initialize counter the first time\n        summary[domain] = summary[domain] || {\n            ongoing: 0,\n            resolved: 0\n        };\n        if (resolvedAt) {\n            summary[domain].resolved++;\n        } else {\n            summary[domain].ongoing++;\n        }\n    });\n    return summary;\n}\n/**\n * Get filter object, to use for dropdown models\n * \n * @apram {object[]} filter category\n *\n * @returns {object} filter obj\n */ function getFilterObject(category) {\n    var result = {};\n    category.forEach(function(item) {\n        result[item.value || item.id] = true;\n    });\n    return result;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9ldmVudHMtc2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7OztDQVNDLEdBQ00sU0FBU0EsbUJBQW1CLENBQUMsS0FBMEIsRUFBRTtRQUEzQkMsTUFBTSxHQUFQLEtBQTBCLENBQXpCQSxNQUFNLEVBQUVDLE9BQU8sR0FBaEIsS0FBMEIsQ0FBakJBLE9BQU8sRUFBRUMsT0FBTyxHQUF6QixLQUEwQixDQUFSQSxPQUFPO0lBQzNELElBQVFDLFlBQVksR0FBNENGLE9BQU8sQ0FBL0RFLFlBQVksRUFBRUMsWUFBWSxHQUE4QkgsT0FBTyxDQUFqREcsWUFBWSxFQUFFQyxNQUFNLEdBQXNCSixPQUFPLENBQW5DSSxNQUFNLEVBQUVDLFNBQVMsR0FBV0wsT0FBTyxDQUEzQkssU0FBUyxFQUFFQyxLQUFLLEdBQUlOLE9BQU8sQ0FBaEJNLEtBQUs7SUFDNUQsT0FBT1AsTUFBTSxDQUNWUSxNQUFNLENBQUNDLFNBQUFBLEtBQUssRUFBSTtRQUNmLDZCQUE2QjtRQUM3QixJQUFJLENBQUNOLFlBQVksSUFBSU0sS0FBSyxDQUFDQyxVQUFVLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsbUJBQW1CO1FBQ25CLElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxLQUFLLENBQUNKLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELHNCQUFzQjtRQUN0QixJQUFJLENBQUNDLFNBQVMsQ0FBQ0csS0FBSyxDQUFDSCxTQUFTLENBQUMsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDQyxLQUFLLENBQUNFLEtBQUssQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsMEJBQTBCO1FBQzFCLE9BQU9GLEtBQUssQ0FBQ0csV0FBVyxDQUFDQyxRQUFRLENBQUNULFlBQVksQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUNEVSxJQUFJLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7UUFDZCxtQ0FBbUM7UUFDbkMsSUFBSUQsQ0FBQyxDQUFDTCxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE9BQVEsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0QsSUFBSUssQ0FBQyxDQUFDRSxTQUFTLEdBQUdELENBQUMsQ0FBQ0MsU0FBUyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxDQUFDO1FBQ1gsT0FDSyxJQUFJRixDQUFDLENBQUNFLFNBQVMsR0FBR0QsQ0FBQyxDQUFDQyxTQUFTLEVBQUU7WUFDbEMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFDRCxPQUFPRixDQUFDLEtBQUtDLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRDs7Ozs7O0NBTUMsR0FDTSxTQUFTRSxnQkFBZ0IsR0FBYztRQUFibEIsTUFBTSxHQUFOQSwrQ0FBVyxrQkFBRixFQUFFO0lBQzFDLElBQU1tQixPQUFPLEdBQUcsRUFBRTtJQUVsQixtRkFBbUY7SUFDbkZuQixNQUFNLENBQUNvQixPQUFPLENBQUNYLFNBQUFBLEtBQUssRUFBSTtRQUN0QixJQUFRSixNQUFNLEdBQWlCSSxLQUFLLENBQTVCSixNQUFNLEVBQUVLLFVBQVUsR0FBS0QsS0FBSyxDQUFwQkMsVUFBVTtRQUUxQixvQ0FBb0M7UUFDcENTLE9BQU8sQ0FBQ2QsTUFBTSxDQUFDLEdBQUdjLE9BQU8sQ0FBQ2QsTUFBTSxDQUFDLElBQUk7WUFBRWdCLE9BQU8sRUFBRSxDQUFDO1lBQUVDLFFBQVEsRUFBRSxDQUFDO1NBQUUsQ0FBQztRQUVqRSxJQUFJWixVQUFVLEVBQUU7WUFDZFMsT0FBTyxDQUFDZCxNQUFNLENBQUMsQ0FBQ2lCLFFBQVEsRUFBRSxDQUFDO1FBQzdCLE9BQ0s7WUFDSEgsT0FBTyxDQUFDZCxNQUFNLENBQUMsQ0FBQ2dCLE9BQU8sRUFBRSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU9GLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQ7Ozs7OztDQU1DLEdBQ08sU0FBU0ksZUFBZSxDQUFDQyxRQUFRLEVBQUU7SUFDekMsSUFBTUMsTUFBTSxHQUFHLEVBQUU7SUFFakJELFFBQVEsQ0FBQ0osT0FBTyxDQUFDTSxTQUFBQSxJQUFJLEVBQUk7UUFDdkJELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLElBQUlELElBQUksQ0FBQ0UsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBT0gsTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvZXZlbnRzLXNlcnZpY2VzLmpzPzg4NzEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWx0ZXIgYW5kIHNvcnQgZXZlbnRzIGJhc2VkIG9uIGZpbHRlciBzZWxlY3Rpb25zIFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3RbXX0gcHJvcHMuZXZlbnRzXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMuZmlsdGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnNvcnRLZXlcbiAqIFxuICogQHJldHVybnMge29iamVjdFtdfSBmaWx0ZXJlZCBldmVudHMgYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckFuZFNvcnRFdmVudHMoe2V2ZW50cywgZmlsdGVycywgc29ydEtleX0pIHtcbiAgY29uc3QgeyBzaG93UmVzb2x2ZWQsIHNlYXJjaFN0cmluZywgZG9tYWluLCBzdWJkb21haW4sIG93bmVyfSA9IGZpbHRlcnM7XG4gIHJldHVybiBldmVudHNcbiAgICAuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgIC8vIEZpbHRlciBvdXQgcmVzb2x2ZWQgZXZlbnRzXG4gICAgICBpZiAoIXNob3dSZXNvbHZlZCAmJiBldmVudC5yZXNvbHZlZEF0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEZpbHRlciBieSBkb21haW5cbiAgICAgIGlmICghZG9tYWluW2V2ZW50LmRvbWFpbl0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gRmlsdGVyIGJ5IHN1YmRvbWFpblxuICAgICAgaWYgKCFzdWJkb21haW5bZXZlbnQuc3ViZG9tYWluXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBGaWx0ZXIgYnkgdXNlclxuICAgICAgaWYgKCFvd25lcltldmVudC5vd25lcklkXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBGaWx0ZXIgYnkgc2VhcmNoIHN0cmluZ1xuICAgICAgcmV0dXJuIGV2ZW50LmRlc2NyaXB0aW9uLmluY2x1ZGVzKHNlYXJjaFN0cmluZyk7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQgc2hvdWxkIGJlIGF0IHRoZSBib3R0b21cbiAgICAgIGlmIChhLnJlc29sdmVkQXQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhLmNyZWF0ZWRBdCA+IGIuY3JlYXRlZEF0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgZXZlbnRzIHN1bW1hcnksIGJhc2VkIG9uIGZ1bGwgZXZlbnRzIGFycmF5XG4gKlxuICogQHBhcmFtIHtvYmplY3RbXX0gZXZlbnRzXG4gKiBcbiAqIEByZXR1cm5zIHtvYmplY3R9IGZpbHRlcmVkIGV2ZW50cyBhcnJheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRzU3VtbWFyeShldmVudHMgPSBbXSkge1xuICBjb25zdCBzdW1tYXJ5ID0ge307XG4gIFxuICAvLyBJdGVyYXRlIHRocm91Z2ggZXZlbnRzIGFuZCBpbmNyZW1lbnQgcmVzb2x2ZWQgYW5kIG9uZ29pbmcgY291bnRzIGZvciBlYWNoIGRvbWFpblxuICBldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgY29uc3QgeyBkb21haW4sIHJlc29sdmVkQXQgfSA9IGV2ZW50O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBjb3VudGVyIHRoZSBmaXJzdCB0aW1lXG4gICAgc3VtbWFyeVtkb21haW5dID0gc3VtbWFyeVtkb21haW5dIHx8IHsgb25nb2luZzogMCwgcmVzb2x2ZWQ6IDAgfTtcblxuICAgIGlmIChyZXNvbHZlZEF0KSB7XG4gICAgICBzdW1tYXJ5W2RvbWFpbl0ucmVzb2x2ZWQrKztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzdW1tYXJ5W2RvbWFpbl0ub25nb2luZysrO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHN1bW1hcnk7IFxufVxuXG4vKipcbiAqIEdldCBmaWx0ZXIgb2JqZWN0LCB0byB1c2UgZm9yIGRyb3Bkb3duIG1vZGVsc1xuICogXG4gKiBAYXByYW0ge29iamVjdFtdfSBmaWx0ZXIgY2F0ZWdvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBmaWx0ZXIgb2JqXG4gKi9cbiBleHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyT2JqZWN0KGNhdGVnb3J5KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgcmVzdWx0W2l0ZW0udmFsdWUgfHwgaXRlbS5pZF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufSJdLCJuYW1lcyI6WyJmaWx0ZXJBbmRTb3J0RXZlbnRzIiwiZXZlbnRzIiwiZmlsdGVycyIsInNvcnRLZXkiLCJzaG93UmVzb2x2ZWQiLCJzZWFyY2hTdHJpbmciLCJkb21haW4iLCJzdWJkb21haW4iLCJvd25lciIsImZpbHRlciIsImV2ZW50IiwicmVzb2x2ZWRBdCIsIm93bmVySWQiLCJkZXNjcmlwdGlvbiIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiY3JlYXRlZEF0IiwiZ2V0RXZlbnRzU3VtbWFyeSIsInN1bW1hcnkiLCJmb3JFYWNoIiwib25nb2luZyIsInJlc29sdmVkIiwiZ2V0RmlsdGVyT2JqZWN0IiwiY2F0ZWdvcnkiLCJyZXN1bHQiLCJpdGVtIiwidmFsdWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/events-services.js\n"));

/***/ })

});