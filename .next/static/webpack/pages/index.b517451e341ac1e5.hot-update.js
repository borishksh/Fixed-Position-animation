"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Cube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cube */ \"./components/Cube.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const displayCoordinates = ()=>{\n        document.querySelector(\".show\").innerHTML = \"The horizontal coordinate of the window relative to the screen is: \" + window.screenLeft + \"px\";\n    };\n    useEffect(()=>{\n        displayCoordinates(); // Call the function when the component mounts\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ff52d6f8b4bc5871\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    margin: \"40px\"\n                },\n                className: \"jsx-ff52d6f8b4bc5871\" + \" \" + \"show\",\n                children: \"asdasdas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onclick: \"displayCoordinates()\",\n                class: \"btn\",\n                className: \"jsx-ff52d6f8b4bc5871\",\n                children: \"Show screenLeft value\"\n            }, void 0, false, {\n                fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cube__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ff52d6f8b4bc5871\",\n                children: \"body{margin:0px;padding:0px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDSDtBQUVuQyxNQUFNQyxPQUFPOztJQUNYLE1BQU1DLHFCQUFxQjtRQUN6QkMsU0FBU0MsYUFBYSxDQUFDLFNBQVNDLFNBQVMsR0FDdkMsd0VBQ0FDLE9BQU9DLFVBQVUsR0FDakI7SUFDSjtJQUVBQyxVQUFVO1FBQ1JOLHNCQUFzQiw4Q0FBOEM7SUFDdEUsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPOzs7MEJBQ0MsOERBQUNDO2dCQUFvQkMsT0FBTztvQkFBQ0MsUUFBUTtnQkFBTTswREFBN0I7MEJBQWdDOzs7Ozs7MEJBRTlDLDhEQUFDQztnQkFBT0MsU0FBUTtnQkFBdUJDLE9BQU07OzBCQUFNOzs7Ozs7MEJBQ25ELDhEQUFDZix3REFBSUE7Ozs7Ozs7Ozs7Ozs7OztBQVNYO0dBMUJNQztLQUFBQTtBQTRCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDdWJlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3ViZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3cnKS5pbm5lckhUTUwgPVxuICAgICAgJ1RoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2YgdGhlIHdpbmRvdyByZWxhdGl2ZSB0byB0aGUgc2NyZWVuIGlzOiAnICtcbiAgICAgIHdpbmRvdy5zY3JlZW5MZWZ0ICtcbiAgICAgICdweCc7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwbGF5Q29vcmRpbmF0ZXMoKTsgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICB9LCBbXSk7IFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3Nob3cnIHN0eWxlPXt7bWFyZ2luOiAnNDBweCd9fT5hc2Rhc2Rhc1xuICAgICAgPC9oMT5cbiAgICAgIDxidXR0b24gb25jbGljaz1cImRpc3BsYXlDb29yZGluYXRlcygpXCIgY2xhc3M9XCJidG5cIj5TaG93IHNjcmVlbkxlZnQgdmFsdWU8L2J1dHRvbj5cbiAgICAgIDxDdWJlIC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiQ3ViZSIsIkhvbWUiLCJkaXNwbGF5Q29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJzY3JlZW5MZWZ0IiwidXNlRWZmZWN0IiwiZGl2IiwiaDEiLCJzdHlsZSIsIm1hcmdpbiIsImJ1dHRvbiIsIm9uY2xpY2siLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});