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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    const cubeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 7;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(-(window.screenLeft / window.innerWidth) * 4 + 1, 0, 0);\n        scene.add(cube);\n        // Assign the cube reference to be used inside setInterval\n        cubeRef.current = cube;\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Update cube position every 100 milliseconds\n        const updateCubePosition = ()=>{\n            if (cubeRef.current) {\n                cubeRef.current.position.set(-(window.screenLeft / window.innerWidth) * 4 + 1, 0, 0);\n            }\n        };\n        const intervalId = setInterval(updateCubePosition, 50);\n        // Clean up on component unmount\n        return ()=>{\n            // Clear the interval\n            clearInterval(intervalId);\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 78,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"lBnSkOcyFiZzOF9am8AbPaeJIn4=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDcUI7QUFDWDtBQUUvQixNQUFNRyxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQyxNQUFNQyxVQUFVTCw2Q0FBTUEsQ0FBQztJQUV2QkQsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTU8sUUFBUSxJQUFJTCx3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU8sU0FBUyxJQUFJUCxvREFBdUIsQ0FBQyxJQUFJUyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzVGSixPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRztRQUVwQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJZCxnREFBbUI7UUFDeENjLFNBQVNFLE9BQU8sQ0FBQ1AsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3RELE1BQU1NLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztRQUMxQ0YsVUFBVUcsV0FBVyxDQUFDTixTQUFTTyxVQUFVO1FBRXpDLGNBQWM7UUFDZCxNQUFNQyxXQUFXLElBQUl0Qiw4Q0FBaUIsQ0FBQ0csTUFBTUEsTUFBTUE7UUFDbkQsTUFBTXFCLFdBQVcsSUFBSXhCLG9EQUF1QixDQUFDO1lBQUVFLE9BQU9BO1lBQU93QixXQUFXO1FBQUs7UUFDN0UsTUFBTUMsT0FBTyxJQUFJM0IsdUNBQVUsQ0FBQ3NCLFVBQVVFO1FBQ3RDRyxLQUFLZixRQUFRLENBQUNpQixHQUFHLENBQUMsQ0FBRXBCLENBQUFBLE9BQU9xQixVQUFVLEdBQUlyQixPQUFPQyxVQUFVLElBQUksSUFBSSxHQUFHLEdBQUc7UUFFeEVMLE1BQU0wQixHQUFHLENBQUNKO1FBRVYsMERBQTBEO1FBQzFEdkIsUUFBUTRCLE9BQU8sR0FBR0w7UUFFbEIsY0FBYztRQUNkLE1BQU1NLFVBQVU7WUFDZEMsc0JBQXNCRDtZQUV0Qk4sS0FBS1EsUUFBUSxDQUFDQyxDQUFDLElBQUk7WUFDbkJULEtBQUtRLFFBQVEsQ0FBQ0UsQ0FBQyxJQUFJO1lBRW5CdkIsU0FBU3dCLE1BQU0sQ0FBQ2pDLE9BQU9FO1FBQ3pCO1FBRUEwQjtRQUVBLHVCQUF1QjtRQUN2QixNQUFNTSxlQUFlO1lBQ25CaEMsT0FBT2lDLE1BQU0sR0FBRy9CLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztZQUN0REosT0FBT2tDLHNCQUFzQjtZQUM3QjNCLFNBQVNFLE9BQU8sQ0FBQ1AsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3hEO1FBRUFGLE9BQU9pQyxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyw4Q0FBOEM7UUFDOUMsTUFBTUkscUJBQXFCO1lBQ3pCLElBQUl2QyxRQUFRNEIsT0FBTyxFQUFFO2dCQUNuQjVCLFFBQVE0QixPQUFPLENBQUNwQixRQUFRLENBQUNpQixHQUFHLENBQUMsQ0FBRXBCLENBQUFBLE9BQU9xQixVQUFVLEdBQUdyQixPQUFPQyxVQUFVLElBQUksSUFBSSxHQUFHLEdBQUc7WUFDcEY7UUFDRjtRQUVBLE1BQU1rQyxhQUFhQyxZQUFZRixvQkFBb0I7UUFFbkQsZ0NBQWdDO1FBQ2hDLE9BQU87WUFDTCxxQkFBcUI7WUFDckJHLGNBQWNGO1lBRWQsc0RBQXNEO1lBQ3REOUIsU0FBU2lDLE9BQU87WUFFaEIsd0RBQXdEO1lBQ3hEOUIsVUFBVStCLFdBQVcsQ0FBQ2xDLFNBQVNPLFVBQVU7WUFFekNaLE9BQU93QyxtQkFBbUIsQ0FBQyxVQUFVVjtRQUN2QztJQUNGLEdBQUcsRUFBRSxHQUFHLHFEQUFxRDtJQUU3RCxxQkFBTyw4REFBQ1c7UUFBSUMsSUFBRzs7Ozs7O0FBQ2pCO0dBMUVNbEQ7S0FBQUE7QUE0RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWJlLmpzPzBlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9DdWJlLmpzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jb25zdCBDdWJlID0gKHsgY29sb3IgPSAweDAwZmYwMCwgc2l6ZSA9IDEgfSkgPT4ge1xyXG4gIGNvbnN0IGN1YmVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBTZXQgdXAgc2NlbmVcclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgLy8gU2V0IHVwIGNhbWVyYVxyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNztcclxuXHJcbiAgICAvLyBTZXQgdXAgcmVuZGVyZXJcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ViZS1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3ViZVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgd2lyZWZyYW1lOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBjdWJlLnBvc2l0aW9uLnNldCgtKHdpbmRvdy5zY3JlZW5MZWZ0ICAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDQgKyAxLCAwLCAwKTtcclxuICAgIFxyXG4gICAgc2NlbmUuYWRkKGN1YmUpO1xyXG5cclxuICAgIC8vIEFzc2lnbiB0aGUgY3ViZSByZWZlcmVuY2UgdG8gYmUgdXNlZCBpbnNpZGUgc2V0SW50ZXJ2YWxcclxuICAgIGN1YmVSZWYuY3VycmVudCA9IGN1YmU7XHJcblxyXG4gICAgLy8gUm90YXRlIGN1YmVcclxuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcbiAgICAgIGN1YmUucm90YXRpb24ueCArPSAwLjAxO1xyXG4gICAgICBjdWJlLnJvdGF0aW9uLnkgKz0gMC4wMTtcclxuXHJcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgIH07XHJcblxyXG4gICAgYW5pbWF0ZSgpO1xyXG5cclxuICAgIC8vIEhhbmRsZSB3aW5kb3cgcmVzaXplXHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIGN1YmUgcG9zaXRpb24gZXZlcnkgMTAwIG1pbGxpc2Vjb25kc1xyXG4gICAgY29uc3QgdXBkYXRlQ3ViZVBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY3ViZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgY3ViZVJlZi5jdXJyZW50LnBvc2l0aW9uLnNldCgtKHdpbmRvdy5zY3JlZW5MZWZ0IC8gd2luZG93LmlubmVyV2lkdGgpICogNCArIDEsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh1cGRhdGVDdWJlUG9zaXRpb24sIDUwKTtcclxuXHJcbiAgICAvLyBDbGVhbiB1cCBvbiBjb21wb25lbnQgdW5tb3VudFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gQ2xlYXIgdGhlIGludGVydmFsXHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcblxyXG4gICAgICAvLyBEaXNwb3NlIG9mIHRoZSBUaHJlZS5qcyBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcclxuICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSByZW5kZXJlciBjYW52YXMgZWxlbWVudCBmcm9tIHRoZSBjb250YWluZXJcclxuICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSB0byBydW4gdGhlIGVmZmVjdCBvbmx5IG9uY2VcclxuXHJcbiAgcmV0dXJuIDxkaXYgaWQ9XCJjdWJlLWNvbnRhaW5lclwiIC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIlRIUkVFIiwiQ3ViZSIsImNvbG9yIiwic2l6ZSIsImN1YmVSZWYiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiY3ViZSIsIk1lc2giLCJzZXQiLCJzY3JlZW5MZWZ0IiwiYWRkIiwiY3VycmVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});