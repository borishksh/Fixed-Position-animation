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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    const cubeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 7;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(-(window.screenLeft / window.innerWidth) * 10.5, 0, 0);\n        scene.add(cube);\n        // Assign the cube reference to be used inside setInterval\n        cubeRef.current = cube;\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0;\n            cube.rotation.y += 0;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Update cube position every 100 milliseconds\n        const updateCubePosition = ()=>{\n            if (cubeRef.current) {\n                cubeRef.current.position.set(-(window.screenLeft / window.innerWidth) * 10.5, 0, 0);\n            }\n        };\n        const intervalId = setInterval(updateCubePosition, 50);\n        // Clean up on component unmount\n        return ()=>{\n            // Clear the interval\n            clearInterval(intervalId);\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 78,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"lBnSkOcyFiZzOF9am8AbPaeJIn4=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDcUI7QUFDWDtBQUUvQixNQUFNRyxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQyxNQUFNQyxVQUFVTCw2Q0FBTUEsQ0FBQztJQUV2QkQsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTU8sUUFBUSxJQUFJTCx3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU8sU0FBUyxJQUFJUCxvREFBdUIsQ0FBQyxJQUFJUyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzVGSixPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRztRQUVwQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJZCxnREFBbUI7UUFDeENjLFNBQVNFLE9BQU8sQ0FBQ1AsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3RELE1BQU1NLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztRQUMxQ0YsVUFBVUcsV0FBVyxDQUFDTixTQUFTTyxVQUFVO1FBRXpDLGNBQWM7UUFDZCxNQUFNQyxXQUFXLElBQUl0Qiw4Q0FBaUIsQ0FBQ0csTUFBTUEsTUFBTUE7UUFDbkQsTUFBTXFCLFdBQVcsSUFBSXhCLG9EQUF1QixDQUFDO1lBQUVFLE9BQU9BO1lBQU93QixXQUFXO1FBQUs7UUFDN0UsTUFBTUMsT0FBTyxJQUFJM0IsdUNBQVUsQ0FBQ3NCLFVBQVVFO1FBQ3RDRyxLQUFLZixRQUFRLENBQUNpQixHQUFHLENBQUMsQ0FBRXBCLENBQUFBLE9BQU9xQixVQUFVLEdBQUlyQixPQUFPQyxVQUFVLElBQUksTUFBTSxHQUFHO1FBRXZFTCxNQUFNMEIsR0FBRyxDQUFDSjtRQUVWLDBEQUEwRDtRQUMxRHZCLFFBQVE0QixPQUFPLEdBQUdMO1FBRWxCLGNBQWM7UUFDZCxNQUFNTSxVQUFVO1lBQ2RDLHNCQUFzQkQ7WUFFdEJOLEtBQUtRLFFBQVEsQ0FBQ0MsQ0FBQyxJQUFJO1lBQ25CVCxLQUFLUSxRQUFRLENBQUNFLENBQUMsSUFBSTtZQUVuQnZCLFNBQVN3QixNQUFNLENBQUNqQyxPQUFPRTtRQUN6QjtRQUVBMEI7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTU0sZUFBZTtZQUNuQmhDLE9BQU9pQyxNQUFNLEdBQUcvQixPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVc7WUFDdERKLE9BQU9rQyxzQkFBc0I7WUFDN0IzQixTQUFTRSxPQUFPLENBQUNQLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN4RDtRQUVBRixPQUFPaUMsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsOENBQThDO1FBQzlDLE1BQU1JLHFCQUFxQjtZQUN6QixJQUFJdkMsUUFBUTRCLE9BQU8sRUFBRTtnQkFDbkI1QixRQUFRNEIsT0FBTyxDQUFDcEIsUUFBUSxDQUFDaUIsR0FBRyxDQUFDLENBQUVwQixDQUFBQSxPQUFPcUIsVUFBVSxHQUFHckIsT0FBT0MsVUFBVSxJQUFJLE1BQU0sR0FBRztZQUNuRjtRQUNGO1FBRUEsTUFBTWtDLGFBQWFDLFlBQVlGLG9CQUFvQjtRQUVuRCxnQ0FBZ0M7UUFDaEMsT0FBTztZQUNMLHFCQUFxQjtZQUNyQkcsY0FBY0Y7WUFFZCxzREFBc0Q7WUFDdEQ5QixTQUFTaUMsT0FBTztZQUVoQix3REFBd0Q7WUFDeEQ5QixVQUFVK0IsV0FBVyxDQUFDbEMsU0FBU08sVUFBVTtZQUV6Q1osT0FBT3dDLG1CQUFtQixDQUFDLFVBQVVWO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFLEdBQUcscURBQXFEO0lBRTdELHFCQUFPLDhEQUFDVztRQUFJQyxJQUFHOzs7Ozs7QUFDakI7R0ExRU1sRDtLQUFBQTtBQTRFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1YmUuanM/MGU3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0N1YmUuanNcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmNvbnN0IEN1YmUgPSAoeyBjb2xvciA9IDB4MDBmZjAwLCBzaXplID0gMSB9KSA9PiB7XHJcbiAgY29uc3QgY3ViZVJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFNldCB1cCBzY2VuZVxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAvLyBTZXQgdXAgY2FtZXJhXHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xyXG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA3O1xyXG5cclxuICAgIC8vIFNldCB1cCByZW5kZXJlclxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWJlLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBjdWJlXHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShzaXplLCBzaXplLCBzaXplKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IGNvbG9yLCB3aXJlZnJhbWU6IHRydWUgfSk7XHJcbiAgICBjb25zdCBjdWJlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgIGN1YmUucG9zaXRpb24uc2V0KC0od2luZG93LnNjcmVlbkxlZnQgIC8gd2luZG93LmlubmVyV2lkdGgpICogMTAuNSwgMCwgMCk7XHJcbiAgICBcclxuICAgIHNjZW5lLmFkZChjdWJlKTtcclxuXHJcbiAgICAvLyBBc3NpZ24gdGhlIGN1YmUgcmVmZXJlbmNlIHRvIGJlIHVzZWQgaW5zaWRlIHNldEludGVydmFsXHJcbiAgICBjdWJlUmVmLmN1cnJlbnQgPSBjdWJlO1xyXG5cclxuICAgIC8vIFJvdGF0ZSBjdWJlXHJcbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICBjdWJlLnJvdGF0aW9uLnggKz0gMDtcclxuICAgICAgY3ViZS5yb3RhdGlvbi55ICs9IDA7XHJcblxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgd2luZG93IHJlc2l6ZVxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBjdWJlIHBvc2l0aW9uIGV2ZXJ5IDEwMCBtaWxsaXNlY29uZHNcclxuICAgIGNvbnN0IHVwZGF0ZUN1YmVQb3NpdGlvbiA9ICgpID0+IHtcclxuICAgICAgaWYgKGN1YmVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGN1YmVSZWYuY3VycmVudC5wb3NpdGlvbi5zZXQoLSh3aW5kb3cuc2NyZWVuTGVmdCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDEwLjUsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVDdWJlUG9zaXRpb24sIDUwKTtcclxuXHJcbiAgICAvLyBDbGVhbiB1cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgdGhlIGludGVydmFsXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAvLyBEaXNwb3NlIG9mIHRoZSBUaHJlZS5qcyBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcclxuICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSByZW5kZXJlciBjYW52YXMgZWxlbWVudCBmcm9tIHRoZSBjb250YWluZXJcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBydW4gdGhlIGVmZmVjdCBvbmx5IG9uY2VcclxuXHJcbiAgcmV0dXJuIDxkaXYgaWQ9XCJjdWJlLWNvbnRhaW5lclwiIC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlRIUkVFIiwiQ3ViZSIsImNvbG9yIiwic2l6ZSIsImN1YmVSZWYiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiY3ViZSIsIk1lc2giLCJzZXQiLCJzY3JlZW5MZWZ0IiwiYWRkIiwiY3VycmVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});