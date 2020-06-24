webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/sub-header.js":
/*!**********************************!*\
  !*** ./components/sub-header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _all_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-videos */ "./components/all-videos.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
var _jsxFileName = "D:\\Users\\Max1\\Desktop\\front\\nextjs-blog\\components\\sub-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SubHeader() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      buttonAllVideos = _useState[0],
      setButtonAllVideos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menu = _useState2[0],
      setMenu = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sub-header__start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "sub-header__controls",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "sub-header__logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("img", {
    width: "246px",
    height: "139px",
    src: "/images/sub-header/logo.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "sub-header__login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("img", {
    width: "15px",
    height: "20px",
    src: "/images/sub-header/door.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return setMenu(true);
    },
    className: "sub-header__menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/images/sub-header/menu.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "sub-header__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, buttonAllVideos ? __jsx("div", {
    onClick: function onClick() {
      return setButtonAllVideos(false);
    },
    className: "sub-header__button-outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, "\u0412\u0441\u0435 \u0432\u0438\u0434\u0435\u043E"), __jsx("img", {
    width: "10px",
    height: "6px",
    src: "/images/arrow-down.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  })) : __jsx("div", {
    onClick: function onClick() {
      return setButtonAllVideos(true);
    },
    className: "sub-header__button-outlined sub-header__button-outlined_active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 37
    }
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"), __jsx("img", {
    width: "9px",
    height: "9px",
    src: "/images/x2.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  })), __jsx("div", {
    className: "sub-header__button-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "\u0412\u0435\u0431\u0438\u043D\u0430\u0440\u044B"))), __jsx("div", {
    className: "sub-header__end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "sub-header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "+7 (908) 982-54-52"), __jsx("div", {
    className: "sub-header__button-underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"), __jsx("div", {
    className: "sub-header__button-fill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"))), !buttonAllVideos ? __jsx(_all_videos__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }) : null, menu ? __jsx(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    close: function close() {
      setMenu(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }) : null);
}

/***/ })

})
//# sourceMappingURL=index.js.b45abfb794c90eb383fb.hot-update.js.map