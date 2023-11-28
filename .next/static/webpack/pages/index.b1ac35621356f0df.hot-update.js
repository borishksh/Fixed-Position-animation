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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    const cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, 800 / 800, 0.1, 1000);\n        camera.position.z = 50;\n        camera.position.x = window.screenLeft * 0.14 - 10;\n        camera.position.y = -(window.screenTop * 0.14) + 1;\n        // Assign the camera reference to be used inside setInterval\n        cameraRef.current = camera;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(800, 800);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(0, 0, 0);\n        scene.add(cube);\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = 800 / 800;\n            camera.updateProjectionMatrix();\n            renderer.setSize(800, 800);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Update cube position every 100 milliseconds\n        const updateCubePosition = ()=>{\n            if (cameraRef.current) {\n                cameraRef.current.position.x = window.screenLeft * 0.14 - 10;\n                cameraRef.current.position.y = -(window.screenTop * 0.14) + 1;\n            }\n        };\n        const intervalId = setInterval(updateCubePosition, 10);\n        // Clean up on component unmount\n        return ()=>{\n            // Clear the interval\n            clearInterval(intervalId);\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 83,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"HXv3wxQbioe7vzfntxg8c7OL2kw=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDcUI7QUFDWDtBQUUvQixNQUFNRyxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQyxNQUFNQyxZQUFZTCw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTU8sUUFBUSxJQUFJTCx3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU8sU0FBUyxJQUFJUCxvREFBdUIsQ0FBQyxJQUFJLE1BQU0sS0FBSyxLQUFLO1FBQy9ETyxPQUFPRSxRQUFRLENBQUNDLENBQUMsR0FBRztRQUNwQkgsT0FBT0UsUUFBUSxDQUFDRSxDQUFDLEdBQUcsT0FBUUUsVUFBVSxHQUFJLE9BQVE7UUFDbEROLE9BQU9FLFFBQVEsQ0FBQ0ssQ0FBQyxHQUFHLENBQUVGLENBQUFBLE9BQU9HLFNBQVMsR0FBSSxJQUFHLElBQUs7UUFFbEQsNERBQTREO1FBQzVEWCxVQUFVWSxPQUFPLEdBQUdUO1FBRXBCLGtCQUFrQjtRQUNsQixNQUFNVSxXQUFXLElBQUlqQixnREFBbUI7UUFDeENpQixTQUFTRSxPQUFPLENBQUMsS0FBSztRQUN0QixNQUFNQyxZQUFZQyxTQUFTQyxjQUFjLENBQUM7UUFDMUNGLFVBQVVHLFdBQVcsQ0FBQ04sU0FBU08sVUFBVTtRQUV6QyxjQUFjO1FBQ2QsTUFBTUMsV0FBVyxJQUFJekIsOENBQWlCLENBQUNHLE1BQU1BLE1BQU1BO1FBQ25ELE1BQU13QixXQUFXLElBQUkzQixvREFBdUIsQ0FBQztZQUFFRSxPQUFPQTtZQUFPMkIsV0FBVztRQUFLO1FBQzdFLE1BQU1DLE9BQU8sSUFBSTlCLHVDQUFVLENBQUN5QixVQUFVRTtRQUN0Q0csS0FBS3JCLFFBQVEsQ0FBQ3VCLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFFeEIzQixNQUFNNEIsR0FBRyxDQUFDSDtRQUlWLGNBQWM7UUFDZCxNQUFNSSxVQUFVO1lBQ2RDLHNCQUFzQkQ7WUFFdEJKLEtBQUtNLFFBQVEsQ0FBQ3pCLENBQUMsSUFBSTtZQUNuQm1CLEtBQUtNLFFBQVEsQ0FBQ3RCLENBQUMsSUFBSTtZQUVuQkcsU0FBU29CLE1BQU0sQ0FBQ2hDLE9BQU9FO1FBQ3pCO1FBRUEyQjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNSSxlQUFlO1lBQ25CL0IsT0FBT2dDLE1BQU0sR0FBRyxNQUFNO1lBQ3RCaEMsT0FBT2lDLHNCQUFzQjtZQUM3QnZCLFNBQVNFLE9BQU8sQ0FBQyxLQUFLO1FBQ3hCO1FBRUFQLE9BQU82QixnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyw4Q0FBOEM7UUFDOUMsTUFBTUkscUJBQXFCO1lBQ3pCLElBQUl0QyxVQUFVWSxPQUFPLEVBQUU7Z0JBQ3JCWixVQUFVWSxPQUFPLENBQUNQLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFJLE9BQVFFLFVBQVUsR0FBSSxPQUFRO2dCQUM5RFQsVUFBVVksT0FBTyxDQUFDUCxRQUFRLENBQUNLLENBQUMsR0FBSSxDQUFFRixDQUFBQSxPQUFPRyxTQUFTLEdBQUksSUFBRyxJQUFLO1lBQ2hFO1FBQ0Y7UUFFQSxNQUFNNEIsYUFBYUMsWUFBWUYsb0JBQW9CO1FBRW5ELGdDQUFnQztRQUNoQyxPQUFPO1lBQ0wscUJBQXFCO1lBQ3JCRyxjQUFjRjtZQUVkLHNEQUFzRDtZQUN0RDFCLFNBQVM2QixPQUFPO1lBRWhCLHdEQUF3RDtZQUN4RDFCLFVBQVUyQixXQUFXLENBQUM5QixTQUFTTyxVQUFVO1lBRXpDWixPQUFPb0MsbUJBQW1CLENBQUMsVUFBVVY7UUFDdkM7SUFDRixHQUFHLEVBQUUsR0FBRyxxREFBcUQ7SUFFN0QscUJBQU8sOERBQUNXO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQS9FTWpEO0tBQUFBO0FBaUZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3ViZS5qcz8wZTc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3ViZS5qc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuY29uc3QgQ3ViZSA9ICh7IGNvbG9yID0gMHgwMGZmMDAsIHNpemUgPSAxIH0pID0+IHtcclxuICBjb25zdCBjYW1lcmFSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBTZXQgdXAgc2NlbmVcclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgLy8gU2V0IHVwIGNhbWVyYVxyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCA4MDAgLyA4MDAsIDAuMSwgMTAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDUwO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnggPSAod2luZG93LnNjcmVlbkxlZnQgICogMC4xNCkgLSAxMDtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gLSh3aW5kb3cuc2NyZWVuVG9wICAqIDAuMTQpICsgMTtcclxuXHJcbiAgICAvLyBBc3NpZ24gdGhlIGNhbWVyYSByZWZlcmVuY2UgdG8gYmUgdXNlZCBpbnNpZGUgc2V0SW50ZXJ2YWxcclxuICAgIGNhbWVyYVJlZi5jdXJyZW50ID0gY2FtZXJhO1xyXG5cclxuICAgIC8vIFNldCB1cCByZW5kZXJlclxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSg4MDAsIDgwMCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ViZS1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3ViZVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgd2lyZWZyYW1lOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBjdWJlLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICAgIFxyXG4gICAgc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIFJvdGF0ZSBjdWJlXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICBjdWJlLnJvdGF0aW9uLnggKz0gMC4wMTtcclxuICAgICAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDE7XHJcblxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gODAwIC8gODAwO1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICByZW5kZXJlci5zZXRTaXplKDgwMCwgODAwKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGN1YmUgcG9zaXRpb24gZXZlcnkgMTAwIG1pbGxpc2Vjb25kc1xyXG4gICAgY29uc3QgdXBkYXRlQ3ViZVBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY2FtZXJhUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjYW1lcmFSZWYuY3VycmVudC5wb3NpdGlvbi54ICA9ICh3aW5kb3cuc2NyZWVuTGVmdCAgKiAwLjE0KSAtIDEwO1xyXG4gICAgICAgIGNhbWVyYVJlZi5jdXJyZW50LnBvc2l0aW9uLnkgID0gLSh3aW5kb3cuc2NyZWVuVG9wICAqIDAuMTQpICsgMTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlQ3ViZVBvc2l0aW9uLCAxMCk7XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbFxyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cclxuICAgICAgLy8gRGlzcG9zZSBvZiB0aGUgVGhyZWUuanMgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXHJcbiAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVuZGVyZXIgY2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgY29udGFpbmVyXHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gcnVuIHRoZSBlZmZlY3Qgb25seSBvbmNlXHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwiY3ViZS1jb250YWluZXJcIiAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJUSFJFRSIsIkN1YmUiLCJjb2xvciIsInNpemUiLCJjYW1lcmFSZWYiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJ4Iiwid2luZG93Iiwic2NyZWVuTGVmdCIsInkiLCJzY3JlZW5Ub3AiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIndpcmVmcmFtZSIsImN1YmUiLCJNZXNoIiwic2V0IiwiYWRkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});