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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// components/Cube.js\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    const cubeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 7;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        cube.position.set(10, 0, 0);\n        scene.add(cube);\n        // Assign the cube reference to be used inside setInterval\n        cubeRef.current = cube;\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Update cube position every 100 milliseconds\n        const updateCubePosition = ()=>{\n            if (cubeRef.current) {\n                console.log(-(window.screenLeft * 0.03));\n                cubeRef.current.position.set(window.screenLeft * 0.01, 0, 0);\n            }\n        };\n        // Clean up on component unmount\n        return ()=>{\n            // Clear the interval\n            clearInterval(intervalId);\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 79,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"lBnSkOcyFiZzOF9am8AbPaeJIn4=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCOzs7QUFDcUI7QUFDWDtBQUUvQixNQUFNRyxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQyxNQUFNQyxVQUFVTCw2Q0FBTUEsQ0FBQztJQUV2QkQsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTU8sUUFBUSxJQUFJTCx3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU8sU0FBUyxJQUFJUCxvREFBdUIsQ0FBQyxJQUFJUyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzVGSixPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRztRQUVwQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJZCxnREFBbUI7UUFDeENjLFNBQVNFLE9BQU8sQ0FBQ1AsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3RELE1BQU1NLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztRQUMxQ0YsVUFBVUcsV0FBVyxDQUFDTixTQUFTTyxVQUFVO1FBRXpDLGNBQWM7UUFDZCxNQUFNQyxXQUFXLElBQUl0Qiw4Q0FBaUIsQ0FBQ0csTUFBTUEsTUFBTUE7UUFDbkQsTUFBTXFCLFdBQVcsSUFBSXhCLG9EQUF1QixDQUFDO1lBQUVFLE9BQU9BO1lBQU93QixXQUFXO1FBQUs7UUFDN0UsTUFBTUMsT0FBTyxJQUFJM0IsdUNBQVUsQ0FBQ3NCLFVBQVVFO1FBQ3RDRyxLQUFLZixRQUFRLENBQUNpQixHQUFHLENBQUMsSUFBSSxHQUFHO1FBRXpCeEIsTUFBTXlCLEdBQUcsQ0FBQ0g7UUFFViwwREFBMEQ7UUFDMUR2QixRQUFRMkIsT0FBTyxHQUFHSjtRQUVsQixjQUFjO1FBQ2QsTUFBTUssVUFBVTtZQUNkQyxzQkFBc0JEO1lBRXRCTCxLQUFLTyxRQUFRLENBQUNDLENBQUMsSUFBSTtZQUNuQlIsS0FBS08sUUFBUSxDQUFDRSxDQUFDLElBQUk7WUFFbkJ0QixTQUFTdUIsTUFBTSxDQUFDaEMsT0FBT0U7UUFDekI7UUFFQXlCO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1NLGVBQWU7WUFDbkIvQixPQUFPZ0MsTUFBTSxHQUFHOUIsT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXO1lBQ3RESixPQUFPaUMsc0JBQXNCO1lBQzdCMUIsU0FBU0UsT0FBTyxDQUFDUCxPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7UUFDeEQ7UUFFQUYsT0FBT2dDLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLDhDQUE4QztRQUM5QyxNQUFNSSxxQkFBcUI7WUFDekIsSUFBSXRDLFFBQVEyQixPQUFPLEVBQUU7Z0JBQ25CWSxRQUFRQyxHQUFHLENBQUMsQ0FBRW5DLENBQUFBLE9BQU9vQyxVQUFVLEdBQUUsSUFBRztnQkFDcEN6QyxRQUFRMkIsT0FBTyxDQUFDbkIsUUFBUSxDQUFDaUIsR0FBRyxDQUFDcEIsT0FBT29DLFVBQVUsR0FBRyxNQUFNLEdBQUc7WUFDNUQ7UUFDRjtRQUlBLGdDQUFnQztRQUNoQyxPQUFPO1lBQ0wscUJBQXFCO1lBQ3JCQyxjQUFjQztZQUVkLHNEQUFzRDtZQUN0RGpDLFNBQVNrQyxPQUFPO1lBRWhCLHdEQUF3RDtZQUN4RC9CLFVBQVVnQyxXQUFXLENBQUNuQyxTQUFTTyxVQUFVO1lBRXpDWixPQUFPeUMsbUJBQW1CLENBQUMsVUFBVVo7UUFDdkM7SUFDRixHQUFHLEVBQUUsR0FBRyxxREFBcUQ7SUFFN0QscUJBQU8sOERBQUNhO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQTNFTW5EO0tBQUFBO0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3ViZS5qcz8wZTc1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ3ViZS5qc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuY29uc3QgQ3ViZSA9ICh7IGNvbG9yID0gMHgwMGZmMDAsIHNpemUgPSAxIH0pID0+IHtcclxuICBjb25zdCBjdWJlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gU2V0IHVwIHNjZW5lXHJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgIC8vIFNldCB1cCBjYW1lcmFcclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDc7XHJcblxyXG4gICAgLy8gU2V0IHVwIHJlbmRlcmVyXHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1YmUtY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGN1YmVcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHNpemUsIHNpemUsIHNpemUpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIHdpcmVmcmFtZTogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgY3ViZS5wb3NpdGlvbi5zZXQoMTAsIDAsIDApO1xyXG4gICAgXHJcbiAgICBzY2VuZS5hZGQoY3ViZSk7XHJcblxyXG4gICAgLy8gQXNzaWduIHRoZSBjdWJlIHJlZmVyZW5jZSB0byBiZSB1c2VkIGluc2lkZSBzZXRJbnRlcnZhbFxyXG4gICAgY3ViZVJlZi5jdXJyZW50ID0gY3ViZTtcclxuXHJcbiAgICAvLyBSb3RhdGUgY3ViZVxyXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgICAgIGN1YmUucm90YXRpb24ueSArPSAwLjAxO1xyXG5cclxuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgY3ViZSBwb3NpdGlvbiBldmVyeSAxMDAgbWlsbGlzZWNvbmRzXHJcbiAgICBjb25zdCB1cGRhdGVDdWJlUG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIGlmIChjdWJlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygtKHdpbmRvdy5zY3JlZW5MZWZ0ICowLjAzKSk7XHJcbiAgICAgICAgY3ViZVJlZi5jdXJyZW50LnBvc2l0aW9uLnNldCh3aW5kb3cuc2NyZWVuTGVmdCAqIDAuMDEsIDAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbFxyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG5cclxuICAgICAgLy8gRGlzcG9zZSBvZiB0aGUgVGhyZWUuanMgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXHJcbiAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSB0aGUgcmVuZGVyZXIgY2FudmFzIGVsZW1lbnQgZnJvbSB0aGUgY29udGFpbmVyXHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gcnVuIHRoZSBlZmZlY3Qgb25seSBvbmNlXHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwiY3ViZS1jb250YWluZXJcIiAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJUSFJFRSIsIkN1YmUiLCJjb2xvciIsInNpemUiLCJjdWJlUmVmIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJnZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIndpcmVmcmFtZSIsImN1YmUiLCJNZXNoIiwic2V0IiwiYWRkIiwiY3VycmVudCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiaGFuZGxlUmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwic2NyZWVuTGVmdCIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbElkIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});