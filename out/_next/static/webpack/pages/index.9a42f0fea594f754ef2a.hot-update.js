webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/nicolas/Documents/web/hiverstudios/music/components/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$footer = _ref.footer,\n      footer = _ref$footer === void 0 ? true : _ref$footer,\n      _ref$dark = _ref.dark,\n      dark = _ref$dark === void 0 ? false : _ref$dark,\n      title = _ref.title;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var handleRouteChange = function handleRouteChange(url) {\n      nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();\n    };\n\n    router.events.on('routeChangeStart', handleRouteChange);\n    router.events.on('routeChangeComplete', function () {\n      return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();\n    });\n    return function () {\n      router.events.off('routeChangeStart', handleRouteChange);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({\n      'bg-dark': dark\n    }),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('text-center', {\n          'text-light': dark\n        }),\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 25\n      }, _this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), footer && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"bg-dark text-light text-center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container p-4\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Link, {\n          href: \"mailto:info.hiver.studios@gmail.com\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"info.hiver.studios@gmail.com\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 33\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 29\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"Hiver Studios \", new Date().getFullYear(), \" \\xA9 All rights reserved\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 29\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 25\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ZTU4YSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlciIsImRhcmsiLCJ0aXRsZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJDbGFzc25hbWVzIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXdEO0FBQUE7O0FBQUEsTUFBcERDLFFBQW9ELFFBQXBEQSxRQUFvRDtBQUFBLHlCQUExQ0MsTUFBMEM7QUFBQSxNQUExQ0EsTUFBMEMsNEJBQWpDLElBQWlDO0FBQUEsdUJBQTNCQyxJQUEyQjtBQUFBLE1BQTNCQSxJQUEyQiwwQkFBcEIsS0FBb0I7QUFBQSxNQUFiQyxLQUFhLFFBQWJBLEtBQWE7QUFFbkUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFFLFlBQU07QUFFYixRQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLEdBQUcsRUFBSTtBQUM3QkMsc0RBQVMsQ0FBQ0MsS0FBVjtBQUNILEtBRkQ7O0FBSUFOLFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsaUJBQXJDO0FBRUFILFVBQU0sQ0FBQ08sTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QztBQUFBLGFBQU1ILGdEQUFTLENBQUNJLElBQVYsRUFBTjtBQUFBLEtBQXhDO0FBRUEsV0FBTyxZQUFNO0FBQ1RULFlBQU0sQ0FBQ08sTUFBUCxDQUFjRyxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ1AsaUJBQXRDO0FBQ0gsS0FGRDtBQUlILEdBZFEsRUFjTixFQWRNLENBQVQ7QUFnQkEsc0JBRUk7QUFBSyxhQUFTLEVBQUVRLGlEQUFVLENBQUM7QUFBQyxpQkFBWWI7QUFBYixLQUFELENBQTFCO0FBQUEsNEJBRUkscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUk7QUFBQSxpQkFHUUMsS0FBSyxpQkFDRDtBQUFJLGlCQUFTLEVBQUVZLGlEQUFVLENBQUMsYUFBRCxFQUFnQjtBQUFDLHdCQUFlYjtBQUFoQixTQUFoQixDQUF6QjtBQUFBLGtCQUNLQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKWixFQVVLSCxRQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLEVBb0JRQyxNQUFNLGlCQUVGO0FBQVEsZUFBUyxFQUFDLGdDQUFsQjtBQUFBLDZCQUVJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBRUkscUVBQUMsSUFBRDtBQUFNLGNBQUksRUFBQyxxQ0FBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUtJO0FBQUEsdUNBQWtCLElBQUllLElBQUosR0FBV0MsV0FBWCxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQTZDSCxDQWpFRDs7R0FBTWxCLE07VUFFYU0scUQ7OztLQUZiTixNO0FBbUVTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7IFxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IENsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IExheW91dCA9ICggeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlLCB0aXRsZSB9ICkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcblxuICAgICAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9IHVybCA9PiB7IFxuICAgICAgICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXG5cbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgICAgICB9XG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e0NsYXNzbmFtZXMoeydiZy1kYXJrJyA6IGRhcmt9KX0+IFxuXG4gICAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICAgIDxtYWluPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtDbGFzc25hbWVzKCd0ZXh0LWNlbnRlcicsIHsndGV4dC1saWdodCcgOiBkYXJrfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgZm9vdGVyICYmIChcblxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86aW5mby5oaXZlci5zdHVkaW9zQGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5pbmZvLmhpdmVyLnN0dWRpb3NAZ21haWwuY29tPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGl2ZXIgU3R1ZGlvcyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSAmY29weTsgQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG5cbiAgICAgICAgICAgICAgICApIFxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

})