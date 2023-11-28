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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cube = (param)=>{\n    let { color = 0x00ff00, size = 1 } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set up scene\n        const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Set up camera\n        const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 7;\n        // Set up renderer\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        const container = document.getElementById(\"cube-container\");\n        container.appendChild(renderer.domElement);\n        // Create cube\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: color,\n            wireframe: true\n        });\n        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        updateCubePosition(cube); // Initial positioning\n        scene.add(cube);\n        // Rotate cube\n        const animate = ()=>{\n            requestAnimationFrame(animate);\n            cube.rotation.x += 0.01;\n            cube.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n        // Handle window resize\n        const handleResize = ()=>{\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            // Update cube position on resize\n            updateCubePosition(cube);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        // Clean up on component unmount\n        return ()=>{\n            // Dispose of the Three.js scene, camera, and renderer\n            renderer.dispose();\n            // Remove the renderer canvas element from the container\n            container.removeChild(renderer.domElement);\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []); // Empty dependency array to run the effect only once\n    const updateCubePosition = (cube)=>{\n        // Calculate new position based on screen dimensions\n        const newX = window.screenLeft * 0.01;\n        const newY = 0;\n        const newZ = 0;\n        // Set the new position to the cube\n        cube.position.set(newX, newY, newZ);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"cube-container\"\n    }, void 0, false, {\n        fileName: \"D:\\\\My Project\\\\multiscreentangle\\\\components\\\\Cube.js\",\n        lineNumber: 72,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Cube, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1YmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0M7QUFDSDtBQUUvQixNQUFNRSxPQUFPO1FBQUMsRUFBRUMsUUFBUSxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxFQUFFOztJQUMxQ0osZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTUssUUFBUSxJQUFJSix3Q0FBVztRQUU3QixnQkFBZ0I7UUFDaEIsTUFBTU0sU0FBUyxJQUFJTixvREFBdUIsQ0FBQyxJQUFJUSxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO1FBQzVGSixPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRztRQUVwQixrQkFBa0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJYixnREFBbUI7UUFDeENhLFNBQVNFLE9BQU8sQ0FBQ1AsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO1FBQ3RELE1BQU1NLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQztRQUMxQ0YsVUFBVUcsV0FBVyxDQUFDTixTQUFTTyxVQUFVO1FBRXpDLGNBQWM7UUFDZCxNQUFNQyxXQUFXLElBQUlyQiw4Q0FBaUIsQ0FBQ0csTUFBTUEsTUFBTUE7UUFDbkQsTUFBTW9CLFdBQVcsSUFBSXZCLG9EQUF1QixDQUFDO1lBQUVFLE9BQU9BO1lBQU91QixXQUFXO1FBQUs7UUFDN0UsTUFBTUMsT0FBTyxJQUFJMUIsdUNBQVUsQ0FBQ3FCLFVBQVVFO1FBQ3RDSyxtQkFBbUJGLE9BQU8sc0JBQXNCO1FBQ2hEdEIsTUFBTXlCLEdBQUcsQ0FBQ0g7UUFFVixjQUFjO1FBQ2QsTUFBTUksVUFBVTtZQUNkQyxzQkFBc0JEO1lBRXRCSixLQUFLTSxRQUFRLENBQUNDLENBQUMsSUFBSTtZQUNuQlAsS0FBS00sUUFBUSxDQUFDRSxDQUFDLElBQUk7WUFFbkJyQixTQUFTc0IsTUFBTSxDQUFDL0IsT0FBT0U7UUFDekI7UUFFQXdCO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1NLGVBQWU7WUFDbkI5QixPQUFPK0IsTUFBTSxHQUFHN0IsT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXO1lBQ3RESixPQUFPZ0Msc0JBQXNCO1lBQzdCekIsU0FBU0UsT0FBTyxDQUFDUCxPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7WUFFdEQsaUNBQWlDO1lBQ2pDa0IsbUJBQW1CRjtRQUNyQjtRQUVBbEIsT0FBTytCLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLGdDQUFnQztRQUNoQyxPQUFPO1lBQ0wsc0RBQXNEO1lBQ3REdkIsU0FBUzJCLE9BQU87WUFFaEIsd0RBQXdEO1lBQ3hEeEIsVUFBVXlCLFdBQVcsQ0FBQzVCLFNBQVNPLFVBQVU7WUFFekNaLE9BQU9rQyxtQkFBbUIsQ0FBQyxVQUFVTjtRQUN2QztJQUNGLEdBQUcsRUFBRSxHQUFHLHFEQUFxRDtJQUU3RCxNQUFNUixxQkFBcUIsQ0FBQ0Y7UUFDMUIsb0RBQW9EO1FBQ3BELE1BQU1pQixPQUFPbkMsT0FBT29DLFVBQVUsR0FBRztRQUNqQyxNQUFNQyxPQUFPO1FBQ2IsTUFBTUMsT0FBTztRQUViLG1DQUFtQztRQUNuQ3BCLEtBQUtmLFFBQVEsQ0FBQ29DLEdBQUcsQ0FBQ0osTUFBTUUsTUFBTUM7SUFDaEM7SUFFQSxxQkFBTyw4REFBQ0U7UUFBSUMsSUFBRzs7Ozs7O0FBQ2pCO0dBckVNaEQ7S0FBQUE7QUF1RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWJlLmpzPzBlNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5jb25zdCBDdWJlID0gKHsgY29sb3IgPSAweDAwZmYwMCwgc2l6ZSA9IDEgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBTZXQgdXAgc2NlbmVcclxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblxyXG4gICAgLy8gU2V0IHVwIGNhbWVyYVxyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gNztcclxuXHJcbiAgICAvLyBTZXQgdXAgcmVuZGVyZXJcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ViZS1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3ViZVxyXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiBjb2xvciwgd2lyZWZyYW1lOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICB1cGRhdGVDdWJlUG9zaXRpb24oY3ViZSk7IC8vIEluaXRpYWwgcG9zaXRpb25pbmdcclxuICAgIHNjZW5lLmFkZChjdWJlKTtcclxuXHJcbiAgICAvLyBSb3RhdGUgY3ViZVxyXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgY3ViZS5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgICAgIGN1YmUucm90YXRpb24ueSArPSAwLjAxO1xyXG5cclxuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBhbmltYXRlKCk7XHJcblxyXG4gICAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGN1YmUgcG9zaXRpb24gb24gcmVzaXplXHJcbiAgICAgIHVwZGF0ZUN1YmVQb3NpdGlvbihjdWJlKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgLy8gQ2xlYW4gdXAgb24gY29tcG9uZW50IHVubW91bnRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIERpc3Bvc2Ugb2YgdGhlIFRocmVlLmpzIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxyXG4gICAgICByZW5kZXJlci5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAvLyBSZW1vdmUgdGhlIHJlbmRlcmVyIGNhbnZhcyBlbGVtZW50IGZyb20gdGhlIGNvbnRhaW5lclxyXG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biB0aGUgZWZmZWN0IG9ubHkgb25jZVxyXG5cclxuICBjb25zdCB1cGRhdGVDdWJlUG9zaXRpb24gPSAoY3ViZSkgPT4ge1xyXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBwb3NpdGlvbiBiYXNlZCBvbiBzY3JlZW4gZGltZW5zaW9uc1xyXG4gICAgY29uc3QgbmV3WCA9IHdpbmRvdy5zY3JlZW5MZWZ0ICogMC4wMTtcclxuICAgIGNvbnN0IG5ld1kgPSAwO1xyXG4gICAgY29uc3QgbmV3WiA9IDA7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBuZXcgcG9zaXRpb24gdG8gdGhlIGN1YmVcclxuICAgIGN1YmUucG9zaXRpb24uc2V0KG5ld1gsIG5ld1ksIG5ld1opO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwiY3ViZS1jb250YWluZXJcIiAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YmU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJUSFJFRSIsIkN1YmUiLCJjb2xvciIsInNpemUiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJtYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiY3ViZSIsIk1lc2giLCJ1cGRhdGVDdWJlUG9zaXRpb24iLCJhZGQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsImhhbmRsZVJlc2l6ZSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcG9zZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld1giLCJzY3JlZW5MZWZ0IiwibmV3WSIsIm5ld1oiLCJzZXQiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cube.js\n"));

/***/ })

});