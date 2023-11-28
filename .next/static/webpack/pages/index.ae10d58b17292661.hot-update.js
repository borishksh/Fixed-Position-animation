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

/***/ "./components/Cube.js":
/*!****************************!*\
  !*** ./components/Cube.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 10;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        document.getElementById(\"cube-container\").appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry();\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 0x00ff00,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        scene.add(cube);\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Clean up on component unmount\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDYTtBQUNIO0FBRS9CLE1BQU1FLE9BQU87O0lBQ1hGLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZTtRQUNmLE1BQU1HLFFBQVEsSUFBSUYsd0NBQVc7UUFFN0IsZ0JBQWdCO1FBQ2hCLE1BQU1JLFNBQVMsSUFBSUosb0RBQXVCLENBQUMsSUFBSU0sT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXLEVBQUUsS0FBSztRQUM1RkosT0FBT0ssUUFBUSxDQUFDQyxDQUFDLEdBQUc7UUFFcEIsa0JBQWtCO1FBQ2xCLE1BQU1DLFdBQVcsSUFBSVgsZ0RBQW1CO1FBQ3hDVyxTQUFTRSxPQUFPLENBQUNQLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN0RE0sU0FBU0MsY0FBYyxDQUFDLGtCQUFrQkMsV0FBVyxDQUFDTCxTQUFTTSxVQUFVO1FBRXpFLGNBQWM7UUFDZCxNQUFNQyxXQUFXLElBQUlsQiw4Q0FBaUI7UUFDdEMsTUFBTW9CLFdBQVcsSUFBSXBCLG9EQUF1QixDQUFDO1lBQUVzQixPQUFPO1lBQVVDLFdBQVc7UUFBSztRQUNoRixNQUFNQyxPQUFPLElBQUl4Qix1Q0FBVSxDQUFDa0IsVUFBVUU7UUFDdENsQixNQUFNd0IsR0FBRyxDQUFDRjtRQUVWLGNBQWM7UUFDZCxNQUFNRyxVQUFVO1lBQ2RDLHNCQUFzQkQ7WUFFdEJILEtBQUtLLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJO1lBQ25CTixLQUFLSyxRQUFRLENBQUNFLENBQUMsSUFBSTtZQUVuQnBCLFNBQVNxQixNQUFNLENBQUM5QixPQUFPRTtRQUN6QjtRQUVBdUI7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTU0sZUFBZTtZQUNuQjdCLE9BQU84QixNQUFNLEdBQUc1QixPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVc7WUFDdERKLE9BQU8rQixzQkFBc0I7WUFDN0J4QixTQUFTRSxPQUFPLENBQUNQLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN4RDtRQUVBRixPQUFPOEIsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsZ0NBQWdDO1FBQ2hDLE9BQU87WUFDTDNCLE9BQU8rQixtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRSxHQUFHLHFEQUFxRDtJQUU3RCxxQkFBTyw4REFBQ0s7UUFBSUMsSUFBRzs7Ozs7O0FBQ2pCO0dBaERNdEM7S0FBQUE7QUFrRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWJlLmpzPzBlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9DdWJlLmpzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuY29uc3QgQ3ViZSA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gU2V0IHVwIHNjZW5lXHJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIC8vIFNldCB1cCBjYW1lcmFcclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwO1xyXG5cclxuICAgIC8vIFNldCB1cCByZW5kZXJlclxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWJlLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBjdWJlXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuICAgIC8vIFJvdGF0ZSBjdWJlXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICBjdWJlLnJvdGF0aW9uLnggKz0gMC4wMTtcclxuICAgICAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDE7XHJcblxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIC8vIENsZWFuIHVwIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biB0aGUgZWZmZWN0IG9ubHkgb25jZVxyXG5cclxuICByZXR1cm4gPGRpdiBpZD1cImN1YmUtY29udGFpbmVyXCIgLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdWJlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiVEhSRUUiLCJDdWJlIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiY3ViZSIsIk1lc2giLCJhZGQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsImhhbmRsZVJlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});