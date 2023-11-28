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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 7;\n        // Calculate initial x position for centering\n        const initialX = window.screenLeft;\n        camera.position.x = 0;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(window.screenLeft * 0.01, 0, 0);\n        console.log(window.screenLeft);\n        scene.add(cube);\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Clean up on component unmount\n        return ()=>{\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 66,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDYTtBQUNIO0FBRS9CLE1BQU1FLE9BQU87UUFBQyxFQUFFQyxRQUFRLFFBQVEsRUFBRUMsT0FBTyxDQUFDLEVBQUU7O0lBQzFDSixnREFBU0EsQ0FBQztRQUNSLGVBQWU7UUFDZixNQUFNSyxRQUFRLElBQUlKLHdDQUFXO1FBRTdCLGdCQUFnQjtRQUNoQixNQUFNTSxTQUFTLElBQUlOLG9EQUF1QixDQUFDLElBQUlRLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7UUFDNUZKLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHO1FBRXBCLDZDQUE2QztRQUM3QyxNQUFNQyxXQUFXTCxPQUFPTSxVQUFVO1FBRWxDUixPQUFPSyxRQUFRLENBQUNJLENBQUMsR0FBRztRQUVwQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJaEIsZ0RBQW1CO1FBQ3hDZ0IsU0FBU0UsT0FBTyxDQUFDVixPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7UUFDdEQsTUFBTVMsWUFBWUMsU0FBU0MsY0FBYyxDQUFDO1FBQzFDRixVQUFVRyxXQUFXLENBQUNOLFNBQVNPLFVBQVU7UUFFekMsY0FBYztRQUNkLE1BQU1DLFdBQVcsSUFBSXhCLDhDQUFpQixDQUFDRyxNQUFNQSxNQUFNQTtRQUNuRCxNQUFNdUIsV0FBVyxJQUFJMUIsb0RBQXVCLENBQUM7WUFBRUUsT0FBT0E7WUFBTzBCLFdBQVc7UUFBSztRQUM3RSxNQUFNQyxPQUFPLElBQUk3Qix1Q0FBVSxDQUFDd0IsVUFBVUU7UUFDdENHLEtBQUtsQixRQUFRLENBQUNvQixHQUFHLENBQUN2QixPQUFPTSxVQUFVLEdBQUcsTUFBTSxHQUFHO1FBQy9Da0IsUUFBUUMsR0FBRyxDQUFDekIsT0FBT00sVUFBVTtRQUM3QlYsTUFBTThCLEdBQUcsQ0FBQ0w7UUFFVixjQUFjO1FBQ2QsTUFBTU0sVUFBVTtZQUNkQyxzQkFBc0JEO1lBRXRCTixLQUFLUSxRQUFRLENBQUN0QixDQUFDLElBQUk7WUFDbkJjLEtBQUtRLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJO1lBRW5CdEIsU0FBU3VCLE1BQU0sQ0FBQ25DLE9BQU9FO1FBQ3pCO1FBRUE2QjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNSyxlQUFlO1lBQ25CbEMsT0FBT21DLE1BQU0sR0FBR2pDLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztZQUN0REosT0FBT29DLHNCQUFzQjtZQUM3QjFCLFNBQVNFLE9BQU8sQ0FBQ1YsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3hEO1FBRUFGLE9BQU9tQyxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxnQ0FBZ0M7UUFDaEMsT0FBTztZQUNMLHNEQUFzRDtZQUN0RHhCLFNBQVM0QixPQUFPO1lBRWhCLHdEQUF3RDtZQUN4RHpCLFVBQVUwQixXQUFXLENBQUM3QixTQUFTTyxVQUFVO1lBRXpDZixPQUFPc0MsbUJBQW1CLENBQUMsVUFBVU47UUFDdkM7SUFDRixHQUFHLEVBQUUsR0FBRyxxREFBcUQ7SUFFN0QscUJBQU8sOERBQUNPO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQTlETS9DO0tBQUFBO0FBZ0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3ViZS5qcz8wZTc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3ViZS5qc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmNvbnN0IEN1YmUgPSAoeyBjb2xvciA9IDB4MDBmZjAwLCBzaXplID0gMSB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFNldCB1cCBzY2VuZVxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAvLyBTZXQgdXAgY2FtZXJhXHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA3O1xyXG4gICAgXHJcbiAgICAvLyBDYWxjdWxhdGUgaW5pdGlhbCB4IHBvc2l0aW9uIGZvciBjZW50ZXJpbmdcclxuICAgIGNvbnN0IGluaXRpYWxYID0gd2luZG93LnNjcmVlbkxlZnQgO1xyXG5cclxuICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcclxuXHJcbiAgICAvLyBTZXQgdXAgcmVuZGVyZXJcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ViZS1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3ViZVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgd2lyZWZyYW1lOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBjdWJlLnBvc2l0aW9uLnNldCh3aW5kb3cuc2NyZWVuTGVmdCAqIDAuMDEsIDAsIDApO1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LnNjcmVlbkxlZnQpO1xyXG4gICAgc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuICAgIC8vIFJvdGF0ZSBjdWJlXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICBjdWJlLnJvdGF0aW9uLnggKz0gMC4wMTtcclxuICAgICAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDE7XHJcblxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIC8vIENsZWFuIHVwIG9uIGNvbXBvbmVudCB1bm1vdW50XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBEaXNwb3NlIG9mIHRoZSBUaHJlZS5qcyBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcclxuICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSByZW5kZXJlciBjYW52YXMgZWxlbWVudCBmcm9tIHRoZSBjb250YWluZXJcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBydW4gdGhlIGVmZmVjdCBvbmx5IG9uY2VcclxuXHJcbiAgcmV0dXJuIDxkaXYgaWQ9XCJjdWJlLWNvbnRhaW5lclwiIC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlRIUkVFIiwiQ3ViZSIsImNvbG9yIiwic2l6ZSIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsImluaXRpYWxYIiwic2NyZWVuTGVmdCIsIngiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiY3ViZSIsIk1lc2giLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJvdGF0aW9uIiwieSIsInJlbmRlciIsImhhbmRsZVJlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});