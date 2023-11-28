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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    const cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, 800 / 800, 0.1, 1000);\n        camera.position.z = 7;\n        camera.position.x = window.screenLeft * 0.02 - 10;\n        camera.position.y = window.screenLeft * 0.05 - 20;\n        // Assign the camera reference to be used inside setInterval\n        cameraRef.current = camera;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(800, 800);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(0, 0, 0);\n        scene.add(cube);\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = 800 / 800;\n            camera.updateProjectionMatrix();\n            renderer.setSize(800, 800);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Update cube position every 100 milliseconds\n        const updateCubePosition = ()=>{\n            if (cameraRef.current) {\n                cameraRef.current.position.x = window.screenLeft * 0.02 - 10;\n                cameraRef.current.position.y = window.screenLeft * 0.05 - 20;\n            }\n        };\n        const intervalId = setInterval(updateCubePosition, 10);\n        // Clean up on component unmount\n        return ()=>{\n            // Clear the interval\n            clearInterval(intervalId);\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 83,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"HXv3wxQbioe7vzfntxg8c7OL2kw=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDcUI7QUFDWDtBQUUvQixNQUFNRyxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQyxNQUFNQyxZQUFZTCw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTU8sUUFBUSxJQUFJTCx3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU8sU0FBUyxJQUFJUCxvREFBdUIsQ0FBQyxJQUFJLE1BQU0sS0FBSyxLQUFLO1FBQy9ETyxPQUFPRSxRQUFRLENBQUNDLENBQUMsR0FBRztRQUNwQkgsT0FBT0UsUUFBUSxDQUFDRSxDQUFDLEdBQUcsT0FBUUUsVUFBVSxHQUFJLE9BQVE7UUFDbEROLE9BQU9FLFFBQVEsQ0FBQ0ssQ0FBQyxHQUFHLE9BQVFELFVBQVUsR0FBSSxPQUFRO1FBRWxELDREQUE0RDtRQUM1RFQsVUFBVVcsT0FBTyxHQUFHUjtRQUVwQixrQkFBa0I7UUFDbEIsTUFBTVMsV0FBVyxJQUFJaEIsZ0RBQW1CO1FBQ3hDZ0IsU0FBU0UsT0FBTyxDQUFDLEtBQUs7UUFDdEIsTUFBTUMsWUFBWUMsU0FBU0MsY0FBYyxDQUFDO1FBQzFDRixVQUFVRyxXQUFXLENBQUNOLFNBQVNPLFVBQVU7UUFFekMsY0FBYztRQUNkLE1BQU1DLFdBQVcsSUFBSXhCLDhDQUFpQixDQUFDRyxNQUFNQSxNQUFNQTtRQUNuRCxNQUFNdUIsV0FBVyxJQUFJMUIsb0RBQXVCLENBQUM7WUFBRUUsT0FBT0E7WUFBTzBCLFdBQVc7UUFBSztRQUM3RSxNQUFNQyxPQUFPLElBQUk3Qix1Q0FBVSxDQUFDd0IsVUFBVUU7UUFDdENHLEtBQUtwQixRQUFRLENBQUNzQixHQUFHLENBQUMsR0FBRyxHQUFHO1FBRXhCMUIsTUFBTTJCLEdBQUcsQ0FBQ0g7UUFJVixjQUFjO1FBQ2QsTUFBTUksVUFBVTtZQUNkQyxzQkFBc0JEO1lBRXRCSixLQUFLTSxRQUFRLENBQUN4QixDQUFDLElBQUk7WUFDbkJrQixLQUFLTSxRQUFRLENBQUNyQixDQUFDLElBQUk7WUFFbkJFLFNBQVNvQixNQUFNLENBQUMvQixPQUFPRTtRQUN6QjtRQUVBMEI7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTUksZUFBZTtZQUNuQjlCLE9BQU8rQixNQUFNLEdBQUcsTUFBTTtZQUN0Qi9CLE9BQU9nQyxzQkFBc0I7WUFDN0J2QixTQUFTRSxPQUFPLENBQUMsS0FBSztRQUN4QjtRQUVBTixPQUFPNEIsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsOENBQThDO1FBQzlDLE1BQU1JLHFCQUFxQjtZQUN6QixJQUFJckMsVUFBVVcsT0FBTyxFQUFFO2dCQUNyQlgsVUFBVVcsT0FBTyxDQUFDTixRQUFRLENBQUNFLENBQUMsR0FBSSxPQUFRRSxVQUFVLEdBQUksT0FBUTtnQkFDOURULFVBQVVXLE9BQU8sQ0FBQ04sUUFBUSxDQUFDSyxDQUFDLEdBQUksT0FBUUQsVUFBVSxHQUFJLE9BQVE7WUFDaEU7UUFDRjtRQUVBLE1BQU02QixhQUFhQyxZQUFZRixvQkFBb0I7UUFFbkQsZ0NBQWdDO1FBQ2hDLE9BQU87WUFDTCxxQkFBcUI7WUFDckJHLGNBQWNGO1lBRWQsc0RBQXNEO1lBQ3REMUIsU0FBUzZCLE9BQU87WUFFaEIsd0RBQXdEO1lBQ3hEMUIsVUFBVTJCLFdBQVcsQ0FBQzlCLFNBQVNPLFVBQVU7WUFFekNYLE9BQU9tQyxtQkFBbUIsQ0FBQyxVQUFVVjtRQUN2QztJQUNGLEdBQUcsRUFBRSxHQUFHLHFEQUFxRDtJQUU3RCxxQkFBTyw4REFBQ1c7UUFBSUMsSUFBRzs7Ozs7O0FBQ2pCO0dBL0VNaEQ7S0FBQUE7QUFpRk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWJlLmpzPzBlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9DdWJlLmpzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jb25zdCBDdWJlID0gKHsgY29sb3IgPSAweDAwZmYwMCwgc2l6ZSA9IDEgfSkgPT4ge1xyXG4gIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFNldCB1cCBzY2VuZVxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAvLyBTZXQgdXAgY2FtZXJhXHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIDgwMCAvIDgwMCwgMC4xLCAxMDAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNztcclxuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gKHdpbmRvdy5zY3JlZW5MZWZ0ICAqIDAuMDIpIC0gMTA7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueSA9ICh3aW5kb3cuc2NyZWVuTGVmdCAgKiAwLjA1KSAtIDIwO1xyXG5cclxuICAgIC8vIEFzc2lnbiB0aGUgY2FtZXJhIHJlZmVyZW5jZSB0byBiZSB1c2VkIGluc2lkZSBzZXRJbnRlcnZhbFxyXG4gICAgY2FtZXJhUmVmLmN1cnJlbnQgPSBjYW1lcmE7XHJcblxyXG4gICAgLy8gU2V0IHVwIHJlbmRlcmVyXHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKDgwMCwgODAwKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWJlLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBjdWJlXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IGNvbG9yLCB3aXJlZnJhbWU6IHRydWUgfSk7XHJcbiAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIGN1YmUucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG4gICAgXHJcbiAgICBzY2VuZS5hZGQoY3ViZSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gUm90YXRlIGN1YmVcclxuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgIGN1YmUucm90YXRpb24ueCArPSAwLjAxO1xyXG4gICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcclxuXHJcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgIH07XHJcblxyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSA4MDAgLyA4MDA7XHJcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoODAwLCA4MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgY3ViZSBwb3NpdGlvbiBldmVyeSAxMDAgbWlsbGlzZWNvbmRzXHJcbiAgICBjb25zdCB1cGRhdGVDdWJlUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIGlmIChjYW1lcmFSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGNhbWVyYVJlZi5jdXJyZW50LnBvc2l0aW9uLnggID0gKHdpbmRvdy5zY3JlZW5MZWZ0ICAqIDAuMDIpIC0gMTA7XHJcbiAgICAgICAgY2FtZXJhUmVmLmN1cnJlbnQucG9zaXRpb24ueSAgPSAod2luZG93LnNjcmVlbkxlZnQgICogMC4wNSkgLSAyMDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlQ3ViZVBvc2l0aW9uLCAxMCk7XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbFxyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cclxuICAgICAgLy8gRGlzcG9zZSBvZiB0aGUgVGhyZWUuanMgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXHJcbiAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVuZGVyZXIgY2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgY29udGFpbmVyXHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gcnVuIHRoZSBlZmZlY3Qgb25seSBvbmNlXHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwiY3ViZS1jb250YWluZXJcIiAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJUSFJFRSIsIkN1YmUiLCJjb2xvciIsInNpemUiLCJjYW1lcmFSZWYiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJ4Iiwid2luZG93Iiwic2NyZWVuTGVmdCIsInkiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIndpcmVmcmFtZSIsImN1YmUiLCJNZXNoIiwic2V0IiwiYWRkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});