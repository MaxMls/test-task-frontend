(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./styles.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap);"]);
// Module
exports.push([module.i, "@charset \"UTF-8\";\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\r sans-serif;\n  min-width: 375px; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  font-family: 'Ubuntu', sans-serif;\n  /*max-width: 1920px;*/ }\n\n.header__container, .footer__container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1920px;\n  margin: 0 auto; }\n\n.header {\n  width: 100%;\n  background-color: #f4f4f6; }\n  .header__container {\n    height: 50px; }\n    @media (max-width: 1700px) {\n      .header__container {\n        height: 37px; } }\n  .header__navigation-container {\n    margin: 0 0 0 100px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .header__navigation-container {\n        margin: 0; } }\n  .header__media-container {\n    margin: 0 118px 0 0;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .header__media-container {\n        display: none; } }\n  .header__button {\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #27282c;\n    line-height: 50px;\n    padding: 0 25px;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n    @media (max-width: 1700px) {\n      .header__button {\n        padding: 0 23px;\n        font-size: 12px;\n        line-height: 37px; } }\n  .header__button, .header__media-button {\n    box-shadow: -1px 0 0 #fff inset; }\n  .header__button:nth-child(1), .header__media-button:nth-child(1) {\n    box-shadow: 1px 0 0 #fff inset, -1px 0 0 #fff inset; }\n  .header__button_active, .header__button:hover {\n    background: white;\n    box-shadow: 0 4px 0 #b31942 inset;\n    cursor: pointer; }\n  .header__media-button {\n    padding: 0 15px;\n    display: flex;\n    align-items: center; }\n  .header__media-button:hover {\n    background: #fff;\n    cursor: pointer; }\n\n.content {\n  max-width: 1450px;\n  margin: 0 auto;\n  min-width: 327px; }\n  @media (max-width: 1700px) {\n    .content {\n      padding: 0 15px; } }\n\n.sub-header {\n  height: 48px;\n  margin-top: 52px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .sub-header {\n      margin-top: 12px; } }\n  .sub-header__buttons {\n    display: flex; }\n  .sub-header__logo {\n    margin: -25px 0 0 -110px; }\n    @media (max-width: 1700px) {\n      .sub-header__logo {\n        margin: 0; }\n        .sub-header__logo > * {\n          width: 178px;\n          height: 101px; } }\n  .sub-header__login, .sub-header__menu {\n    display: none;\n    width: 53px;\n    height: 53px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    margin-top: 20px;\n    margin-left: 21px; }\n    .sub-header__login:hover, .sub-header__menu:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    .sub-header__login > *, .sub-header__menu > * {\n      margin: auto; }\n    @media (max-width: 1700px) {\n      .sub-header__login, .sub-header__menu {\n        display: flex;\n        align-content: center; } }\n  .sub-header__menu {\n    background: #d10138; }\n  @media (max-width: 1700px) {\n    .sub-header__controls {\n      width: 100%;\n      display: flex;\n      justify-content: space-between; } }\n  .sub-header__start {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__start {\n        width: 100%;\n        flex-direction: column; } }\n  .sub-header__end {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__end {\n        display: none; } }\n  .sub-header__button-outlined {\n    height: 47px;\n    width: 170px;\n    padding: 0 27px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 2.0px solid #d10138;\n    border-radius: 23.5px;\n    margin-right: 57px;\n    margin-left: 33px;\n    z-index: 101; }\n    .sub-header__button-outlined > img {\n      margin-top: 3.5px; }\n    @media (max-width: 1700px) {\n      .sub-header__button-outlined {\n        margin: 12px 0;\n        font-size: 14px;\n        line-height: 43px;\n        font-weight: 700;\n        color: #1c1d21;\n        padding: 0 34px;\n        width: 163px;\n        border: 2.0px solid #d10138;\n        border-radius: 22.0px; } }\n  .sub-header__button-outlined_active {\n    border: 2.0px solid #e2e9ee;\n    border-radius: 23.5px; }\n  .sub-header__button-underline {\n    font-size: 18px;\n    line-height: 47px;\n    font-weight: 700;\n    text-decoration: underline;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .sub-header__button-underline {\n        margin-top: 13px;\n        margin-left: 22px;\n        font-size: 14px;\n        line-height: 44px;\n        font-weight: 700;\n        text-decoration: underline;\n        color: #1c1d21; } }\n  .sub-header__button {\n    line-height: 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    margin-right: 67px; }\n  .sub-header__button-fill {\n    padding: 0 40px;\n    margin-left: 74px;\n    margin-right: 5px;\n    height: 48px;\n    background-color: #d10138;\n    border-radius: 24.0px;\n    font-size: 16px;\n    line-height: 48px;\n    font-weight: 700;\n    color: #ffffff; }\n  .sub-header__button-underline:hover, .sub-header__button-outlined:hover, .sub-header__logo:hover, .sub-header__button-fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.facebook {\n  padding: 21px; }\n\n.video-first {\n  margin-top: 50px;\n  height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .video-first {\n      height: auto;\n      margin-top: 142px;\n      flex-direction: column-reverse; } }\n  .video-first > * {\n    max-width: 50%;\n    height: 100%; }\n    @media (max-width: 1700px) {\n      .video-first > * {\n        height: auto;\n        max-width: 100%;\n        width: 100%; } }\n  .video-first__info-block {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media (max-width: 1700px) {\n      .video-first__info-block {\n        justify-content: center; } }\n  .video-first__text-container {\n    margin-top: 82px; }\n    @media (max-width: 1700px) {\n      .video-first__text-container {\n        margin-top: 19px; } }\n  .video-first__video-block {\n    height: 100%;\n    width: 50%; }\n    @media (max-width: 1700px) {\n      .video-first__video-block {\n        height: auto;\n        width: auto; } }\n  .video-first__title {\n    font-family: 'Roboto', sans-serif;\n    font-size: 38px;\n    line-height: 50px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__title {\n        font-size: 20px;\n        line-height: 30px;\n        font-weight: 700;\n        color: #1c1d21;\n        text-align: center; } }\n  .video-first__description {\n    max-width: 550px;\n    margin-top: 20px;\n    font-size: 18px;\n    line-height: 30px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__description {\n        display: none; } }\n  .video-first__buttons-container {\n    margin-bottom: 90px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .video-first__buttons-container {\n        margin-top: 22px;\n        flex-direction: column;\n        margin-bottom: 0; } }\n  .video-first__button-fill {\n    padding: 0 48px;\n    height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px;\n    font-size: 18px;\n    line-height: 63px;\n    font-weight: 700;\n    color: #ffffff; }\n    .video-first__button-fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    @media (max-width: 1700px) {\n      .video-first__button-fill {\n        height: auto;\n        font-size: 14px;\n        line-height: 53px;\n        width: 100%;\n        text-align: center;\n        border-radius: 27.0px; } }\n  .video-first__button-info {\n    margin: auto;\n    margin-top: 15px; }\n\n.button-link {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #0c65d4; }\n  .button-link__offset {\n    margin-top: 13px;\n    display: inline-block;\n    margin-right: 27px; }\n  .button-link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .button-link {\n      font-size: 12px;\n      line-height: 14px; } }\n\n.button-link > span {\n  margin-right: 3px; }\n\n.advantages {\n  display: flex;\n  margin-top: 56px;\n  justify-content: space-between;\n  padding-right: 54px; }\n  @media (max-width: 1700px) {\n    .advantages {\n      margin-top: 40px;\n      flex-direction: column;\n      padding-right: 0px; } }\n  .advantages__icon {\n    width: 50px;\n    height: 50px;\n    background-color: #f3f6fa;\n    border-radius: 5.0px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .advantages__icon {\n        width: 44px;\n        height: 44px; } }\n  .advantages__icon > * {\n    margin: auto; }\n  .advantages__title {\n    margin-top: 17px;\n    font-size: 20px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__title {\n        font-size: 16px;\n        line-height: 6px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .advantages__description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__description {\n        margin-top: 14px;\n        font-size: 13px;\n        line-height: 22px;\n        font-weight: 400;\n        color: #1c1d21; } }\n  .advantages__block {\n    width: 280px; }\n    @media (max-width: 1700px) {\n      .advantages__block {\n        margin-bottom: 17px;\n        width: 100%;\n        display: flex;\n        align-items: center; } }\n  @media (max-width: 1700px) {\n    .advantages__icon-container {\n      padding-right: 18px; } }\n\n.video-bar__outer, .opinions__outer {\n  margin-top: 135px;\n  background-color: #f7f9fc; }\n  @media (max-width: 1700px) {\n    .video-bar__outer, .opinions__outer {\n      margin-top: 28px; } }\n\n.video-bar__title {\n  padding-top: 126px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-bar__title {\n      padding-top: 34px;\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-bar__menu {\n  margin-top: 43px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 -2px 0 #d7dbea inset; }\n  @media (max-width: 1700px) {\n    .video-bar__menu {\n      width: 100%;\n      overflow-x: scroll;\n      margin-top: 15px; } }\n\n.video-bar__item {\n  margin-right: 45px;\n  padding: 18px 6.7px 22px 0;\n  display: inline-block;\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 500;\n  color: #1c1d21;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content; }\n  .video-bar__item:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__item {\n      margin-right: 22px;\n      font-size: 12px;\n      line-height: 5px;\n      font-weight: 700;\n      color: #1c1d21;\n      padding: 14px 0; } }\n\n.video-bar__item_active {\n  border-bottom: 4px solid #d10138;\n  padding: 18px 6px 18px 0; }\n  @media (max-width: 1700px) {\n    .video-bar__item_active {\n      border-bottom: 2px solid #d10138;\n      padding: 12px 0; } }\n\n.video-bar__link {\n  margin-right: 26px; }\n  @media (max-width: 1700px) {\n    .video-bar__link {\n      display: none; } }\n\n.video-bar__navigation {\n  display: flex;\n  align-items: center; }\n\n.video-bar__cards {\n  margin-top: 37px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.video-bar__button-container {\n  display: flex;\n  margin-top: 51px; }\n  @media (max-width: 1700px) {\n    .video-bar__button-container {\n      margin-top: -1px; } }\n\n.video-bar__button {\n  padding: 10px 40px;\n  margin: auto;\n  border: 2.0px solid #d7dbea;\n  border-radius: 21.0px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #b0b8d3; }\n  @media (max-width: 1700px) {\n    .video-bar__button {\n      padding: 0 37px;\n      font-size: 12px;\n      line-height: 34px;\n      font-weight: 700;\n      color: #b0b8d3;\n      border: 2.0px solid #d7dbea;\n      border-radius: 19.0px;\n      margin-bottom: 44px; } }\n  .video-bar__button:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__button-upload {\n      display: none; } }\n  .video-bar__button-all {\n    display: none; }\n    @media (max-width: 1700px) {\n      .video-bar__button-all {\n        display: block; } }\n\n.card {\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 320px;\n  height: 400px;\n  background-color: #ffffff; }\n  @media (max-width: 1700px) {\n    .card {\n      width: 164px;\n      height: 277px;\n      margin-bottom: 34px; } }\n  .card__top {\n    height: 50%;\n    position: relative; }\n    @media (max-width: 1700px) {\n      .card__top {\n        height: 106px;\n        width: 100%; } }\n  .card__top-image {\n    width: 100%;\n    height: 100%; }\n  .card__top-label {\n    position: absolute;\n    padding: 0 4px;\n    top: 25px;\n    left: 35px;\n    background-color: #d10138;\n    font-size: 10px;\n    line-height: 17px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #f7f9fc; }\n    @media (max-width: 1700px) {\n      .card__top-label {\n        top: 12px;\n        left: 8px; } }\n  .card__info {\n    margin-left: 34px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 50%; }\n    @media (max-width: 1700px) {\n      .card__info {\n        height: 170px;\n        margin-left: 16px; } }\n  .card__date_container {\n    margin-top: 16px;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #657195;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__date_container {\n        line-height: 12px;\n        margin-top: 18px; } }\n  .card__time {\n    margin-left: 30px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__time {\n        margin-left: 5px; } }\n  .card__date {\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n  .card__time > span {\n    margin-left: 7px;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n  @media (max-width: 1700px) {\n    .card__time > img {\n      width: 7px;\n      height: 7px; } }\n  .card__title {\n    margin-top: 4px;\n    font-size: 16px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21;\n    max-width: 250px; }\n    @media (max-width: 1700px) {\n      .card__title {\n        margin-top: 9px;\n        font-size: 14px;\n        line-height: 17px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .card__label {\n    margin-top: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 400;\n    color: #657195; }\n    @media (max-width: 1700px) {\n      .card__label {\n        margin-top: 9px;\n        font-size: 12px;\n        line-height: 11px;\n        font-weight: 400;\n        color: #657195; } }\n  .card__button {\n    margin-left: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    .card__button:hover {\n      opacity: 0.6;\n      cursor: pointer;\n      text-decoration: underline; }\n    .card__button-watch:before {\n      content: 'Просмотр'; }\n    .card__button-sub:before {\n      content: 'Оформить подписку'; }\n      @media (max-width: 1700px) {\n        .card__button-sub:before {\n          content: 'Подписка'; } }\n  .card__button-container {\n    margin-bottom: 33px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__button-container {\n        margin-bottom: 15px; }\n        .card__button-container > img {\n          width: 14px;\n          height: 14px; } }\n\n.video-second__title {\n  margin-top: 94px; }\n  @media (max-width: 1700px) {\n    .video-second__title {\n      margin-top: 25px; } }\n\n.video-second__block {\n  margin-top: 38px;\n  box-shadow: 0px 0px 62px 0px rgba(123, 150, 192, 0.18);\n  width: 100%;\n  background-color: #ffffff;\n  display: flex;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__block {\n      margin-top: 19px;\n      flex-direction: column; } }\n\n.video-second__subtitle {\n  font-size: 10px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #657195; }\n\n.video-second__h-title {\n  margin-top: 23px;\n  max-width: 400px;\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-second__h-title {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 20px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-second__date-container {\n  margin-top: 29px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__date-container {\n      margin-top: 25px;\n      font-size: 12px;\n      line-height: 6px;\n      font-weight: 400; } }\n\n.video-second__date-container > * {\n  margin-bottom: 7px; }\n  @media (max-width: 1700px) {\n    .video-second__date-container > * {\n      margin-bottom: 17px; } }\n\n.video-second__date {\n  display: inline-block;\n  width: 63px; }\n  @media (max-width: 1700px) {\n    .video-second__date {\n      width: 53px; } }\n\n.video-second__value {\n  font-weight: 700;\n  color: #1c1d21; }\n\n.video-second__fill {\n  display: inline-block;\n  margin-top: 37px;\n  padding: 22px 49px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-left: -4px;\n  text-align: center;\n  background-color: #d10138;\n  border-radius: 31.5px; }\n  .video-second__fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .video-second__fill {\n      margin-top: 12px;\n      margin-left: -10px;\n      font-size: 12px;\n      font-weight: 700;\n      color: #ffffff;\n      width: 210px;\n      line-height: 42px;\n      background-color: #d10138;\n      border-radius: 21.0px;\n      padding: 0; } }\n\n.video-second__text {\n  margin: 16px 57px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__text {\n      margin: 9px 30px;\n      font-size: 10px;\n      line-height: 6px; } }\n\n.video-second__link {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .video-second__link:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.video-second__flag {\n  position: absolute;\n  top: 0;\n  right: 60px; }\n  @media (max-width: 1700px) {\n    .video-second__flag {\n      right: 11px; }\n      .video-second__flag > img {\n        width: 73px;\n        height: 71px; } }\n\n.video-second__flag-text {\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #f7f9fc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -103%; }\n  @media (max-width: 1700px) {\n    .video-second__flag-text {\n      margin-top: -94%; } }\n\n.video-second__flag-text > * {\n  margin-bottom: 4px; }\n\n.video-second__flag-label {\n  font-size: 10px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-label {\n      font-size: 8px; } }\n\n.video-second__flag-number {\n  margin-top: 3px;\n  margin-bottom: 9px;\n  font-size: 36px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-number {\n      font-size: 20px;\n      margin-top: -9px;\n      margin-bottom: 0px; } }\n\n.video-second__name-container {\n  margin-top: 245px;\n  margin-left: 42px; }\n  @media (max-width: 1700px) {\n    .video-second__name-container {\n      margin-top: 114px;\n      margin-left: 26px; } }\n\n.video-second__name {\n  font-size: 16px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .video-second__name {\n      font-size: 10px;\n      line-height: 14px; } }\n\n.video-second__role {\n  margin-top: 8px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__role {\n      margin-top: 4px;\n      font-size: 10px;\n      line-height: 5px; } }\n\n.video-second__video-block, .video-second__info {\n  height: 100%;\n  width: 50%;\n  background: white; }\n  @media (max-width: 1700px) {\n    .video-second__video-block, .video-second__info {\n      width: 100%;\n      height: auto; } }\n\n@media (max-width: 1700px) {\n  .video-second__video-block {\n    height: 201px; } }\n\n.video-second__info {\n  padding-top: 75px;\n  padding-left: 147px;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__info {\n      padding-top: 19px;\n      padding-left: 42px; } }\n\n.player {\n  position: relative;\n  height: auto;\n  width: auto; }\n  @media (max-width: 1700px) {\n    .player > * {\n      width: 100%; } }\n  .player__overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center; }\n  .player__play-button {\n    width: 77px;\n    height: 77px;\n    background: #d10138;\n    border-radius: 100%;\n    margin: auto;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .player__play-button {\n        width: 50px;\n        height: 50px; } }\n    .player__play-button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .player__play-button > * {\n    margin: auto; }\n\n.roboto-title {\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .roboto-title {\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n@media (max-width: 1700px) {\n  .records__link-btn {\n    display: none; } }\n\n.records__button-all {\n  padding: 0 27px; }\n\n.records__link > img {\n  margin-left: 6px; }\n\n.records__title {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 83px; }\n  @media (max-width: 1700px) {\n    .records__title {\n      margin-top: 36px; } }\n\n.records__cards {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .records__cards {\n      margin-top: 20px; } }\n\n.opinions__outer {\n  margin-top: 106px;\n  height: auto; }\n  @media (max-width: 1700px) {\n    .opinions__outer {\n      margin-top: 45px; } }\n\n@media (max-width: 1700px) {\n  .xs-hide {\n    display: none !important; } }\n\n.xs-show {\n  display: none !important; }\n  @media (max-width: 1700px) {\n    .xs-show {\n      display: block !important; } }\n\n.opinions__title {\n  padding-top: 103px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .opinions__title {\n      padding-top: 32px; } }\n\n.opinions__container {\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__container {\n      margin-top: 15px; } }\n\n.opinions__button-container {\n  display: none; }\n  @media (max-width: 1700px) {\n    .opinions__button-container {\n      display: flex;\n      margin-top: 44px; } }\n\n.opinions__text {\n  margin-top: 78px;\n  max-width: 1120px +78px;\n  font-size: 20px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__text {\n      margin-top: 25px;\n      font-size: 14px;\n      line-height: 22px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__text::before {\n  position: absolute;\n  content: '“';\n  top: 0;\n  left: -15px; }\n  @media (max-width: 1700px) {\n    .opinions__text::before {\n      top: -3px;\n      left: -7px; } }\n\n.opinions__quote {\n  margin-left: 7px; }\n\n.opinions__text::before, .opinions__quote {\n  font-size: 21px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__text::before, .opinions__quote {\n      font-size: 14.6px;\n      line-height: 24px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__author-block {\n  margin-bottom: 80px;\n  margin-top: 25px; }\n  @media (max-width: 1700px) {\n    .opinions__author-block {\n      margin-bottom: 63px;\n      margin-top: 25px; } }\n\n.opinions__overlay {\n  width: 100%;\n  position: absolute;\n  bottom: 102px;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 1700px) {\n    .opinions__overlay {\n      bottom: 27px; } }\n\n.opinions__from > * {\n  display: inline-block;\n  margin: auto;\n  padding: 0 23px;\n  background-color: #e2e9f4;\n  border-radius: 17.0px;\n  font-size: 14px;\n  line-height: 34px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__from > * {\n      border-radius: 14.0px;\n      font-size: 10px;\n      line-height: 28px;\n      padding: 0 15px; } }\n\n.opinions__from > * > a {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .opinions__from > * > a:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__author-name {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__author-name {\n      font-size: 14px;\n      line-height: 16px; } }\n\n.opinions__author-role {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__author-role {\n      font-size: 12px;\n      line-height: 12px; } }\n\n.opinions__author-avatar {\n  margin-right: 22px; }\n  @media (max-width: 1700px) {\n    .opinions__author-avatar {\n      margin-right: 15px;\n      width: 51px;\n      height: 52px; } }\n\n.opinions__author-container {\n  display: flex;\n  align-items: center;\n  width: 350px; }\n\n.opinions__content {\n  margin-top: 41px;\n  width: 100%;\n  min-height: 400px;\n  border: 2.0px solid #d7dbea;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 147px;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .opinions__content {\n      justify-content: space-between;\n      margin-top: 0px;\n      padding-left: 21px;\n      min-height: 300px; } }\n\n.opinions__nav-button {\n  cursor: pointer;\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 44px;\n  height: 44px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  margin: 0 48px;\n  position: absolute;\n  bottom: 97px;\n  z-index: 10;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: none;\n  top: auto; }\n  .opinions__nav-button:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__nav-button > * {\n  margin: auto; }\n\n.opinions__nav-right > * {\n  transform: rotate(180deg); }\n\n.opinions__item {\n  position: relative; }\n\n.swiper-container {\n  overflow: visible !important; }\n\n.swiper-pagination {\n  margin-bottom: -34px; }\n\n.swiper-pagination-bullet-active {\n  background: #b0b8d3; }\n\n.opinions__outer .content {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  padding-bottom: 40px; }\n\n.footer__outer {\n  margin-top: 94px;\n  height: 445px;\n  background: #27282c;\n  width: 100%; }\n  @media (max-width: 1700px) {\n    .footer__outer {\n      height: auto;\n      margin-top: 8px; } }\n\n.footer__container {\n  flex-direction: column;\n  padding-top: 64px;\n  padding-right: 118px;\n  padding-left: 100px; }\n  @media (max-width: 1700px) {\n    .footer__container {\n      padding-top: 20px;\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.footer__content {\n  height: 188px;\n  width: 100%;\n  margin-right: 248px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .footer__content {\n      height: unset; } }\n\n.footer__logo {\n  margin-top: -33px;\n  flex-basis: 178px; }\n  @media (max-width: 1700px) {\n    .footer__logo {\n      flex-basis: auto;\n      margin-top: 0px;\n      width: 100%;\n      margin-bottom: 19px;\n      margin-left: 13px; }\n      .footer__logo > img {\n        width: 62px;\n        height: 51px; } }\n\n.footer__c2 {\n  flex-basis: 400px;\n  align-self: flex-end;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  flex-direction: column; }\n\n.footer__c3 {\n  flex-basis: 371px;\n  align-self: flex-end;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c3 {\n      padding-left: 13px;\n      flex-basis: 50%;\n      margin-top: 0px;\n      height: 188px; } }\n\n.footer__c4 {\n  margin-right: 249px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c4 {\n      margin-top: 0px;\n      margin-right: 3px;\n      height: 188px; } }\n\n.footer__media-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-self: flex-end; }\n\n.footer__text {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #ffffff; }\n\n.footer__link {\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  .footer__link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link {\n      font-size: 15px; } }\n\n.footer__link-underline {\n  margin-top: 21px;\n  text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link-underline {\n      margin-top: 20px; } }\n\n.footer__media-container {\n  display: flex;\n  padding-right: 20px; }\n  .footer__media-container > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__media-container {\n      margin-top: 19px;\n      padding-right: 14px;\n      padding-left: 2px; } }\n\n.footer__button {\n  margin-bottom: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 48px;\n  background-color: #d10138;\n  border-radius: 24.0px;\n  padding: 0 40px;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n  .footer__button:hover {\n    background: #b31942;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__button {\n      max-width: unset;\n      padding: 0;\n      text-align: center;\n      font-size: 11px;\n      line-height: 38px;\n      width: 150px;\n      border-radius: 20.5px;\n      margin-bottom: 4px;\n      transform: translateX(-5px); } }\n\n.footer__delimiter, .footer__end {\n  margin-left: 140px;\n  max-width: 1560px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter, .footer__end {\n      margin: 0; } }\n\n.footer__delimiter {\n  height: 1px;\n  opacity: 0.07;\n  background-color: #ffffff;\n  margin-top: 75px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter {\n      margin-top: 32px; } }\n\n.footer__copyright {\n  opacity: 0.3;\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 400;\n  font-style: italic;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .footer__copyright {\n      margin-top: 16px;\n      font-size: 10px;\n      line-height: 10px;\n      text-align: center; } }\n\n.footer__bold {\n  opacity: 1;\n  opacity: initial;\n  font-size: 12px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #7e7e80; }\n  @media (max-width: 1700px) {\n    .footer__bold {\n      text-align: center;\n      font-size: 10px;\n      line-height: 4px; } }\n\n.footer__end {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 27px; }\n  @media (max-width: 1700px) {\n    .footer__end {\n      flex-direction: column; } }\n\n.footer__end-right {\n  text-align: end; }\n  @media (max-width: 1700px) {\n    .footer__end-right {\n      margin-bottom: 22px; } }\n\n.spacer {\n  margin: auto; }\n\n.underline {\n  text-decoration: underline; }\n  .underline:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.all-videos {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 971px;\n  background: #f7f9fc;\n  z-index: 100;\n  padding-top: 256px;\n  padding-left: 398px; }\n  @media (max-width: 1700px) {\n    .all-videos {\n      padding-top: 263px;\n      padding-left: 30px; } }\n  .all-videos__title {\n    font-size: 21px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .all-videos__title {\n        font-size: 16px;\n        line-height: 4px; } }\n  .all-videos__items {\n    margin-top: 23px;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .all-videos__items {\n        overflow-x: scroll;\n        margin-top: 25px; } }\n    .all-videos__items > * {\n      margin-right: 198px; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * {\n          min-width: -webkit-fit-content;\n          min-width: -moz-fit-content;\n          min-width: fit-content;\n          margin-right: 42px; } }\n    .all-videos__items > * > * {\n      font-size: 18px;\n      line-height: 48px;\n      font-weight: 400;\n      color: #1c1d21; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * > * {\n          font-size: 14px;\n          line-height: 45px; } }\n      .all-videos__items > * > *:hover {\n        opacity: 0.6;\n        text-decoration: underline;\n        cursor: pointer; }\n  .all-videos__button {\n    margin-top: 90px;\n    margin-left: -30px;\n    padding: 0 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #ffffff;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    line-height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px; }\n    @media (max-width: 1700px) {\n      .all-videos__button {\n        margin-top: 37px;\n        margin-left: -15px;\n        padding: 0 29px;\n        font-size: 14px;\n        line-height: 46px;\n        width: 280px;\n        background-color: #d10138;\n        border-radius: 23.0px; } }\n    .all-videos__button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n\n.menu {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 970px;\n  background: #f7f9fc;\n  z-index: 999;\n  min-width: 375px; }\n  .menu__top {\n    margin: 27px 27px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 31px; }\n  .menu__search {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 180px;\n    height: 36px;\n    border-radius: 17.0px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px; }\n    .menu__search > span {\n      opacity: 0.2;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 700;\n      color: #000000; }\n    .menu__search > img {\n      width: 14px;\n      height: 12px; }\n      .menu__search > img:hover {\n        opacity: 0.6;\n        cursor: pointer; }\n  .menu__exit {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 36px;\n    height: 36px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    text-align: center;\n    display: flex;\n    align-items: center; }\n    .menu__exit > img {\n      margin: auto;\n      width: 14px;\n      height: 14px;\n      border-radius: 1.0px; }\n    .menu__exit:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__bold > span, .menu__bold {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__bold > img {\n    transform: rotate(0deg);\n    transition: transform 0.5s;\n    margin-left: 10px;\n    width: 8px;\n    height: 5px; }\n  .menu__bold_active > img {\n    transform: rotate(180deg); }\n  .menu__list {\n    max-height: 400px;\n    transition: max-height 0.5s;\n    overflow: hidden;\n    width: 100%;\n    background-color: #f0f4f7; }\n    .menu__list_hidden {\n      max-height: 0px; }\n    .menu__list > * {\n      border-bottom: solid white 1.5px;\n      border-top: solid white 1.5px;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 400;\n      color: #1c1d21;\n      padding: 19.5px 0;\n      padding-left: 60px; }\n      .menu__list > *:hover {\n        background: #e2e6ea;\n        cursor: pointer; }\n  .menu__link > span {\n    font-size: 14px;\n    line-height: 19px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__link > img {\n    margin-left: 11px;\n    width: 11px;\n    height: 7px; }\n  .menu__item {\n    padding: 18.8px 0;\n    padding-left: 41px;\n    font-size: 12px;\n    line-height: 10px;\n    font-weight: 400;\n    color: #1c1d21; }\n    .menu__item:hover {\n      opacity: 0.6;\n      text-decoration: underline;\n      cursor: pointer; }\n  .menu__buttons-container {\n    margin-top: 52px;\n    text-align: center;\n    display: flex;\n    padding: 0 30px;\n    justify-content: space-between; }\n  .menu__fill {\n    width: 152px;\n    line-height: 40px;\n    background-color: #d10138;\n    border-radius: 20.0px;\n    font-size: 12px;\n    font-weight: 700;\n    color: #ffffff; }\n    .menu__fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__outline {\n    font-size: 12px;\n    font-weight: 700;\n    color: #1c1d21;\n    width: 152px;\n    line-height: 40px;\n    border: 2.0px solid #d10138;\n    border-radius: 20.0px; }\n    .menu__outline:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__contacts-container {\n    margin-top: 19px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 40px; }\n  .menu__phone {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__media > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  .menu__media-instagram {\n    margin: 0 9px;\n    width: 15px;\n    height: 14px; }\n  .menu__media-youtube {\n    margin: 0 10px;\n    width: 36px;\n    height: 14px; }\n  .menu__media-facebook {\n    margin: 0 13px;\n    width: 8px;\n    height: 15px; }\n", "",{"version":3,"sources":["D:/Users/Max1/Desktop/front/nextjs-blog/styles.scss","styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap\");\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\r sans-serif;\n  min-width: 375px; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  font-family: 'Ubuntu', sans-serif;\n  /*max-width: 1920px;*/ }\n\n.header__container, .footer__container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1920px;\n  margin: 0 auto; }\n\n.header {\n  width: 100%;\n  background-color: #f4f4f6; }\n  .header__container {\n    height: 50px; }\n    @media (max-width: 1700px) {\n      .header__container {\n        height: 37px; } }\n  .header__navigation-container {\n    margin: 0 0 0 100px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .header__navigation-container {\n        margin: 0; } }\n  .header__media-container {\n    margin: 0 118px 0 0;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .header__media-container {\n        display: none; } }\n  .header__button {\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #27282c;\n    line-height: 50px;\n    padding: 0 25px;\n    min-width: fit-content; }\n    @media (max-width: 1700px) {\n      .header__button {\n        padding: 0 23px;\n        font-size: 12px;\n        line-height: 37px; } }\n  .header__button, .header__media-button {\n    box-shadow: -1px 0 0 #fff inset; }\n  .header__button:nth-child(1), .header__media-button:nth-child(1) {\n    box-shadow: 1px 0 0 #fff inset, -1px 0 0 #fff inset; }\n  .header__button_active, .header__button:hover {\n    background: white;\n    box-shadow: 0 4px 0 #b31942 inset;\n    cursor: pointer; }\n  .header__media-button {\n    padding: 0 15px;\n    display: flex;\n    align-items: center; }\n  .header__media-button:hover {\n    background: #fff;\n    cursor: pointer; }\n\n.content {\n  max-width: 1450px;\n  margin: 0 auto;\n  min-width: 327px; }\n  @media (max-width: 1700px) {\n    .content {\n      padding: 0 15px; } }\n\n.sub-header {\n  height: 48px;\n  margin-top: 52px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .sub-header {\n      margin-top: 12px; } }\n  .sub-header__buttons {\n    display: flex; }\n  .sub-header__logo {\n    margin: -25px 0 0 -110px; }\n    @media (max-width: 1700px) {\n      .sub-header__logo {\n        margin: 0; }\n        .sub-header__logo > * {\n          width: 178px;\n          height: 101px; } }\n  .sub-header__login, .sub-header__menu {\n    display: none;\n    width: 53px;\n    height: 53px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    margin-top: 20px;\n    margin-left: 21px; }\n    .sub-header__login:hover, .sub-header__menu:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    .sub-header__login > *, .sub-header__menu > * {\n      margin: auto; }\n    @media (max-width: 1700px) {\n      .sub-header__login, .sub-header__menu {\n        display: flex;\n        align-content: center; } }\n  .sub-header__menu {\n    background: #d10138; }\n  @media (max-width: 1700px) {\n    .sub-header__controls {\n      width: 100%;\n      display: flex;\n      justify-content: space-between; } }\n  .sub-header__start {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__start {\n        width: 100%;\n        flex-direction: column; } }\n  .sub-header__end {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__end {\n        display: none; } }\n  .sub-header__button-outlined {\n    height: 47px;\n    width: 170px;\n    padding: 0 27px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 2.0px solid #d10138;\n    border-radius: 23.5px;\n    margin-right: 57px;\n    margin-left: 33px;\n    z-index: 101; }\n    .sub-header__button-outlined > img {\n      margin-top: 3.5px; }\n    @media (max-width: 1700px) {\n      .sub-header__button-outlined {\n        margin: 12px 0;\n        font-size: 14px;\n        line-height: 43px;\n        font-weight: 700;\n        color: #1c1d21;\n        padding: 0 34px;\n        width: 163px;\n        border: 2.0px solid #d10138;\n        border-radius: 22.0px; } }\n  .sub-header__button-outlined_active {\n    border: 2.0px solid #e2e9ee;\n    border-radius: 23.5px; }\n  .sub-header__button-underline {\n    font-size: 18px;\n    line-height: 47px;\n    font-weight: 700;\n    text-decoration: underline;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .sub-header__button-underline {\n        margin-top: 13px;\n        margin-left: 22px;\n        font-size: 14px;\n        line-height: 44px;\n        font-weight: 700;\n        text-decoration: underline;\n        color: #1c1d21; } }\n  .sub-header__button {\n    line-height: 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    margin-right: 67px; }\n  .sub-header__button-fill {\n    padding: 0 40px;\n    margin-left: 74px;\n    margin-right: 5px;\n    height: 48px;\n    background-color: #d10138;\n    border-radius: 24.0px;\n    font-size: 16px;\n    line-height: 48px;\n    font-weight: 700;\n    color: #ffffff; }\n  .sub-header__button-underline:hover, .sub-header__button-outlined:hover, .sub-header__logo:hover, .sub-header__button-fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.facebook {\n  padding: 21px; }\n\n.video-first {\n  margin-top: 50px;\n  height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .video-first {\n      height: auto;\n      margin-top: 142px;\n      flex-direction: column-reverse; } }\n  .video-first > * {\n    max-width: 50%;\n    height: 100%; }\n    @media (max-width: 1700px) {\n      .video-first > * {\n        height: auto;\n        max-width: 100%;\n        width: 100%; } }\n  .video-first__info-block {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media (max-width: 1700px) {\n      .video-first__info-block {\n        justify-content: center; } }\n  .video-first__text-container {\n    margin-top: 82px; }\n    @media (max-width: 1700px) {\n      .video-first__text-container {\n        margin-top: 19px; } }\n  .video-first__video-block {\n    height: 100%;\n    width: 50%; }\n    @media (max-width: 1700px) {\n      .video-first__video-block {\n        height: auto;\n        width: auto; } }\n  .video-first__title {\n    font-family: 'Roboto', sans-serif;\n    font-size: 38px;\n    line-height: 50px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__title {\n        font-size: 20px;\n        line-height: 30px;\n        font-weight: 700;\n        color: #1c1d21;\n        text-align: center; } }\n  .video-first__description {\n    max-width: 550px;\n    margin-top: 20px;\n    font-size: 18px;\n    line-height: 30px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__description {\n        display: none; } }\n  .video-first__buttons-container {\n    margin-bottom: 90px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .video-first__buttons-container {\n        margin-top: 22px;\n        flex-direction: column;\n        margin-bottom: 0; } }\n  .video-first__button-fill {\n    padding: 0 48px;\n    height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px;\n    font-size: 18px;\n    line-height: 63px;\n    font-weight: 700;\n    color: #ffffff; }\n    .video-first__button-fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    @media (max-width: 1700px) {\n      .video-first__button-fill {\n        height: auto;\n        font-size: 14px;\n        line-height: 53px;\n        width: 100%;\n        text-align: center;\n        border-radius: 27.0px; } }\n  .video-first__button-info {\n    margin: auto;\n    margin-top: 15px; }\n\n.button-link {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #0c65d4; }\n  .button-link__offset {\n    margin-top: 13px;\n    display: inline-block;\n    margin-right: 27px; }\n  .button-link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .button-link {\n      font-size: 12px;\n      line-height: 14px; } }\n\n.button-link > span {\n  margin-right: 3px; }\n\n.advantages {\n  display: flex;\n  margin-top: 56px;\n  justify-content: space-between;\n  padding-right: 54px; }\n  @media (max-width: 1700px) {\n    .advantages {\n      margin-top: 40px;\n      flex-direction: column;\n      padding-right: 0px; } }\n  .advantages__icon {\n    width: 50px;\n    height: 50px;\n    background-color: #f3f6fa;\n    border-radius: 5.0px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .advantages__icon {\n        width: 44px;\n        height: 44px; } }\n  .advantages__icon > * {\n    margin: auto; }\n  .advantages__title {\n    margin-top: 17px;\n    font-size: 20px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__title {\n        font-size: 16px;\n        line-height: 6px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .advantages__description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__description {\n        margin-top: 14px;\n        font-size: 13px;\n        line-height: 22px;\n        font-weight: 400;\n        color: #1c1d21; } }\n  .advantages__block {\n    width: 280px; }\n    @media (max-width: 1700px) {\n      .advantages__block {\n        margin-bottom: 17px;\n        width: 100%;\n        display: flex;\n        align-items: center; } }\n  @media (max-width: 1700px) {\n    .advantages__icon-container {\n      padding-right: 18px; } }\n\n.video-bar__outer, .opinions__outer {\n  margin-top: 135px;\n  background-color: #f7f9fc; }\n  @media (max-width: 1700px) {\n    .video-bar__outer, .opinions__outer {\n      margin-top: 28px; } }\n\n.video-bar__title {\n  padding-top: 126px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-bar__title {\n      padding-top: 34px;\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-bar__menu {\n  margin-top: 43px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 -2px 0 #d7dbea inset; }\n  @media (max-width: 1700px) {\n    .video-bar__menu {\n      width: 100%;\n      overflow-x: scroll;\n      margin-top: 15px; } }\n\n.video-bar__item {\n  margin-right: 45px;\n  padding: 18px 6.7px 22px 0;\n  display: inline-block;\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 500;\n  color: #1c1d21;\n  min-width: fit-content; }\n  .video-bar__item:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__item {\n      margin-right: 22px;\n      font-size: 12px;\n      line-height: 5px;\n      font-weight: 700;\n      color: #1c1d21;\n      padding: 14px 0; } }\n\n.video-bar__item_active {\n  border-bottom: 4px solid #d10138;\n  padding: 18px 6px 18px 0; }\n  @media (max-width: 1700px) {\n    .video-bar__item_active {\n      border-bottom: 2px solid #d10138;\n      padding: 12px 0; } }\n\n.video-bar__link {\n  margin-right: 26px; }\n  @media (max-width: 1700px) {\n    .video-bar__link {\n      display: none; } }\n\n.video-bar__navigation {\n  display: flex;\n  align-items: center; }\n\n.video-bar__cards {\n  margin-top: 37px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.video-bar__button-container {\n  display: flex;\n  margin-top: 51px; }\n  @media (max-width: 1700px) {\n    .video-bar__button-container {\n      margin-top: -1px; } }\n\n.video-bar__button {\n  padding: 10px 40px;\n  margin: auto;\n  border: 2.0px solid #d7dbea;\n  border-radius: 21.0px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #b0b8d3; }\n  @media (max-width: 1700px) {\n    .video-bar__button {\n      padding: 0 37px;\n      font-size: 12px;\n      line-height: 34px;\n      font-weight: 700;\n      color: #b0b8d3;\n      border: 2.0px solid #d7dbea;\n      border-radius: 19.0px;\n      margin-bottom: 44px; } }\n  .video-bar__button:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__button-upload {\n      display: none; } }\n  .video-bar__button-all {\n    display: none; }\n    @media (max-width: 1700px) {\n      .video-bar__button-all {\n        display: block; } }\n\n.card {\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 320px;\n  height: 400px;\n  background-color: #ffffff; }\n  @media (max-width: 1700px) {\n    .card {\n      width: 164px;\n      height: 277px;\n      margin-bottom: 34px; } }\n  .card__top {\n    height: 50%;\n    position: relative; }\n    @media (max-width: 1700px) {\n      .card__top {\n        height: 106px;\n        width: 100%; } }\n  .card__top-image {\n    width: 100%;\n    height: 100%; }\n  .card__top-label {\n    position: absolute;\n    padding: 0 4px;\n    top: 25px;\n    left: 35px;\n    background-color: #d10138;\n    font-size: 10px;\n    line-height: 17px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #f7f9fc; }\n    @media (max-width: 1700px) {\n      .card__top-label {\n        top: 12px;\n        left: 8px; } }\n  .card__info {\n    margin-left: 34px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 50%; }\n    @media (max-width: 1700px) {\n      .card__info {\n        height: 170px;\n        margin-left: 16px; } }\n  .card__date_container {\n    margin-top: 16px;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #657195;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__date_container {\n        line-height: 12px;\n        margin-top: 18px; } }\n  .card__time {\n    margin-left: 30px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__time {\n        margin-left: 5px; } }\n  .card__date {\n    min-width: fit-content; }\n  .card__time > span {\n    margin-left: 7px;\n    min-width: fit-content; }\n  @media (max-width: 1700px) {\n    .card__time > img {\n      width: 7px;\n      height: 7px; } }\n  .card__title {\n    margin-top: 4px;\n    font-size: 16px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21;\n    max-width: 250px; }\n    @media (max-width: 1700px) {\n      .card__title {\n        margin-top: 9px;\n        font-size: 14px;\n        line-height: 17px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .card__label {\n    margin-top: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 400;\n    color: #657195; }\n    @media (max-width: 1700px) {\n      .card__label {\n        margin-top: 9px;\n        font-size: 12px;\n        line-height: 11px;\n        font-weight: 400;\n        color: #657195; } }\n  .card__button {\n    margin-left: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    .card__button:hover {\n      opacity: 0.6;\n      cursor: pointer;\n      text-decoration: underline; }\n    .card__button-watch:before {\n      content: 'Просмотр'; }\n    .card__button-sub:before {\n      content: 'Оформить подписку'; }\n      @media (max-width: 1700px) {\n        .card__button-sub:before {\n          content: 'Подписка'; } }\n  .card__button-container {\n    margin-bottom: 33px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__button-container {\n        margin-bottom: 15px; }\n        .card__button-container > img {\n          width: 14px;\n          height: 14px; } }\n\n.video-second__title {\n  margin-top: 94px; }\n  @media (max-width: 1700px) {\n    .video-second__title {\n      margin-top: 25px; } }\n\n.video-second__block {\n  margin-top: 38px;\n  box-shadow: 0px 0px 62px 0px rgba(123, 150, 192, 0.18);\n  width: 100%;\n  background-color: #ffffff;\n  display: flex;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__block {\n      margin-top: 19px;\n      flex-direction: column; } }\n\n.video-second__subtitle {\n  font-size: 10px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #657195; }\n\n.video-second__h-title {\n  margin-top: 23px;\n  max-width: 400px;\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-second__h-title {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 20px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-second__date-container {\n  margin-top: 29px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__date-container {\n      margin-top: 25px;\n      font-size: 12px;\n      line-height: 6px;\n      font-weight: 400; } }\n\n.video-second__date-container > * {\n  margin-bottom: 7px; }\n  @media (max-width: 1700px) {\n    .video-second__date-container > * {\n      margin-bottom: 17px; } }\n\n.video-second__date {\n  display: inline-block;\n  width: 63px; }\n  @media (max-width: 1700px) {\n    .video-second__date {\n      width: 53px; } }\n\n.video-second__value {\n  font-weight: 700;\n  color: #1c1d21; }\n\n.video-second__fill {\n  display: inline-block;\n  margin-top: 37px;\n  padding: 22px 49px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-left: -4px;\n  text-align: center;\n  background-color: #d10138;\n  border-radius: 31.5px; }\n  .video-second__fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .video-second__fill {\n      margin-top: 12px;\n      margin-left: -10px;\n      font-size: 12px;\n      font-weight: 700;\n      color: #ffffff;\n      width: 210px;\n      line-height: 42px;\n      background-color: #d10138;\n      border-radius: 21.0px;\n      padding: 0; } }\n\n.video-second__text {\n  margin: 16px 57px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__text {\n      margin: 9px 30px;\n      font-size: 10px;\n      line-height: 6px; } }\n\n.video-second__link {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .video-second__link:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.video-second__flag {\n  position: absolute;\n  top: 0;\n  right: 60px; }\n  @media (max-width: 1700px) {\n    .video-second__flag {\n      right: 11px; }\n      .video-second__flag > img {\n        width: 73px;\n        height: 71px; } }\n\n.video-second__flag-text {\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #f7f9fc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -103%; }\n  @media (max-width: 1700px) {\n    .video-second__flag-text {\n      margin-top: -94%; } }\n\n.video-second__flag-text > * {\n  margin-bottom: 4px; }\n\n.video-second__flag-label {\n  font-size: 10px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-label {\n      font-size: 8px; } }\n\n.video-second__flag-number {\n  margin-top: 3px;\n  margin-bottom: 9px;\n  font-size: 36px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-number {\n      font-size: 20px;\n      margin-top: -9px;\n      margin-bottom: 0px; } }\n\n.video-second__name-container {\n  margin-top: 245px;\n  margin-left: 42px; }\n  @media (max-width: 1700px) {\n    .video-second__name-container {\n      margin-top: 114px;\n      margin-left: 26px; } }\n\n.video-second__name {\n  font-size: 16px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .video-second__name {\n      font-size: 10px;\n      line-height: 14px; } }\n\n.video-second__role {\n  margin-top: 8px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__role {\n      margin-top: 4px;\n      font-size: 10px;\n      line-height: 5px; } }\n\n.video-second__video-block, .video-second__info {\n  height: 100%;\n  width: 50%;\n  background: white; }\n  @media (max-width: 1700px) {\n    .video-second__video-block, .video-second__info {\n      width: 100%;\n      height: auto; } }\n\n@media (max-width: 1700px) {\n  .video-second__video-block {\n    height: 201px; } }\n\n.video-second__info {\n  padding-top: 75px;\n  padding-left: 147px;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__info {\n      padding-top: 19px;\n      padding-left: 42px; } }\n\n.player {\n  position: relative;\n  height: auto;\n  width: auto; }\n  @media (max-width: 1700px) {\n    .player > * {\n      width: 100%; } }\n  .player__overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center; }\n  .player__play-button {\n    width: 77px;\n    height: 77px;\n    background: #d10138;\n    border-radius: 100%;\n    margin: auto;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .player__play-button {\n        width: 50px;\n        height: 50px; } }\n    .player__play-button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .player__play-button > * {\n    margin: auto; }\n\n.roboto-title {\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .roboto-title {\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n@media (max-width: 1700px) {\n  .records__link-btn {\n    display: none; } }\n\n.records__button-all {\n  padding: 0 27px; }\n\n.records__link > img {\n  margin-left: 6px; }\n\n.records__title {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 83px; }\n  @media (max-width: 1700px) {\n    .records__title {\n      margin-top: 36px; } }\n\n.records__cards {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .records__cards {\n      margin-top: 20px; } }\n\n.opinions__outer {\n  margin-top: 106px;\n  height: auto; }\n  @media (max-width: 1700px) {\n    .opinions__outer {\n      margin-top: 45px; } }\n\n@media (max-width: 1700px) {\n  .xs-hide {\n    display: none !important; } }\n\n.xs-show {\n  display: none !important; }\n  @media (max-width: 1700px) {\n    .xs-show {\n      display: block !important; } }\n\n.opinions__title {\n  padding-top: 103px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .opinions__title {\n      padding-top: 32px; } }\n\n.opinions__container {\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__container {\n      margin-top: 15px; } }\n\n.opinions__button-container {\n  display: none; }\n  @media (max-width: 1700px) {\n    .opinions__button-container {\n      display: flex;\n      margin-top: 44px; } }\n\n.opinions__text {\n  margin-top: 78px;\n  max-width: 1120px +78px;\n  font-size: 20px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__text {\n      margin-top: 25px;\n      font-size: 14px;\n      line-height: 22px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__text::before {\n  position: absolute;\n  content: '“';\n  top: 0;\n  left: -15px; }\n  @media (max-width: 1700px) {\n    .opinions__text::before {\n      top: -3px;\n      left: -7px; } }\n\n.opinions__quote {\n  margin-left: 7px; }\n\n.opinions__text::before, .opinions__quote {\n  font-size: 21px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__text::before, .opinions__quote {\n      font-size: 14.6px;\n      line-height: 24px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__author-block {\n  margin-bottom: 80px;\n  margin-top: 25px; }\n  @media (max-width: 1700px) {\n    .opinions__author-block {\n      margin-bottom: 63px;\n      margin-top: 25px; } }\n\n.opinions__overlay {\n  width: 100%;\n  position: absolute;\n  bottom: 102px;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 1700px) {\n    .opinions__overlay {\n      bottom: 27px; } }\n\n.opinions__from > * {\n  display: inline-block;\n  margin: auto;\n  padding: 0 23px;\n  background-color: #e2e9f4;\n  border-radius: 17.0px;\n  font-size: 14px;\n  line-height: 34px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__from > * {\n      border-radius: 14.0px;\n      font-size: 10px;\n      line-height: 28px;\n      padding: 0 15px; } }\n\n.opinions__from > * > a {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .opinions__from > * > a:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__author-name {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__author-name {\n      font-size: 14px;\n      line-height: 16px; } }\n\n.opinions__author-role {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__author-role {\n      font-size: 12px;\n      line-height: 12px; } }\n\n.opinions__author-avatar {\n  margin-right: 22px; }\n  @media (max-width: 1700px) {\n    .opinions__author-avatar {\n      margin-right: 15px;\n      width: 51px;\n      height: 52px; } }\n\n.opinions__author-container {\n  display: flex;\n  align-items: center;\n  width: 350px; }\n\n.opinions__content {\n  margin-top: 41px;\n  width: 100%;\n  min-height: 400px;\n  border: 2.0px solid #d7dbea;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 147px;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .opinions__content {\n      justify-content: space-between;\n      margin-top: 0px;\n      padding-left: 21px;\n      min-height: 300px; } }\n\n.opinions__nav-button {\n  cursor: pointer;\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 44px;\n  height: 44px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  margin: 0 48px;\n  position: absolute;\n  bottom: 97px;\n  z-index: 10;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: none;\n  top: auto; }\n  .opinions__nav-button:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__nav-button > * {\n  margin: auto; }\n\n.opinions__nav-right > * {\n  transform: rotate(180deg); }\n\n.opinions__item {\n  position: relative; }\n\n.swiper-container {\n  overflow: visible !important; }\n\n.swiper-pagination {\n  margin-bottom: -34px; }\n\n.swiper-pagination-bullet-active {\n  background: #b0b8d3; }\n\n.opinions__outer .content {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  padding-bottom: 40px; }\n\n.footer__outer {\n  margin-top: 94px;\n  height: 445px;\n  background: #27282c;\n  width: 100%; }\n  @media (max-width: 1700px) {\n    .footer__outer {\n      height: auto;\n      margin-top: 8px; } }\n\n.footer__container {\n  flex-direction: column;\n  padding-top: 64px;\n  padding-right: 118px;\n  padding-left: 100px; }\n  @media (max-width: 1700px) {\n    .footer__container {\n      padding-top: 20px;\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.footer__content {\n  height: 188px;\n  width: 100%;\n  margin-right: 248px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .footer__content {\n      height: unset; } }\n\n.footer__logo {\n  margin-top: -33px;\n  flex-basis: 178px; }\n  @media (max-width: 1700px) {\n    .footer__logo {\n      flex-basis: auto;\n      margin-top: 0px;\n      width: 100%;\n      margin-bottom: 19px;\n      margin-left: 13px; }\n      .footer__logo > img {\n        width: 62px;\n        height: 51px; } }\n\n.footer__c2 {\n  flex-basis: 400px;\n  align-self: flex-end;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  flex-direction: column; }\n\n.footer__c3 {\n  flex-basis: 371px;\n  align-self: flex-end;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c3 {\n      padding-left: 13px;\n      flex-basis: 50%;\n      margin-top: 0px;\n      height: 188px; } }\n\n.footer__c4 {\n  margin-right: 249px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c4 {\n      margin-top: 0px;\n      margin-right: 3px;\n      height: 188px; } }\n\n.footer__media-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-self: flex-end; }\n\n.footer__text {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #ffffff; }\n\n.footer__link {\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  .footer__link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link {\n      font-size: 15px; } }\n\n.footer__link-underline {\n  margin-top: 21px;\n  text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link-underline {\n      margin-top: 20px; } }\n\n.footer__media-container {\n  display: flex;\n  padding-right: 20px; }\n  .footer__media-container > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__media-container {\n      margin-top: 19px;\n      padding-right: 14px;\n      padding-left: 2px; } }\n\n.footer__button {\n  margin-bottom: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 48px;\n  background-color: #d10138;\n  border-radius: 24.0px;\n  padding: 0 40px;\n  max-width: fit-content; }\n  .footer__button:hover {\n    background: #b31942;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__button {\n      max-width: unset;\n      padding: 0;\n      text-align: center;\n      font-size: 11px;\n      line-height: 38px;\n      width: 150px;\n      border-radius: 20.5px;\n      margin-bottom: 4px;\n      transform: translateX(-5px); } }\n\n.footer__delimiter, .footer__end {\n  margin-left: 140px;\n  max-width: 1560px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter, .footer__end {\n      margin: 0; } }\n\n.footer__delimiter {\n  height: 1px;\n  opacity: 0.07;\n  background-color: #ffffff;\n  margin-top: 75px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter {\n      margin-top: 32px; } }\n\n.footer__copyright {\n  opacity: 0.3;\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 400;\n  font-style: italic;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .footer__copyright {\n      margin-top: 16px;\n      font-size: 10px;\n      line-height: 10px;\n      text-align: center; } }\n\n.footer__bold {\n  opacity: initial;\n  font-size: 12px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #7e7e80; }\n  @media (max-width: 1700px) {\n    .footer__bold {\n      text-align: center;\n      font-size: 10px;\n      line-height: 4px; } }\n\n.footer__end {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 27px; }\n  @media (max-width: 1700px) {\n    .footer__end {\n      flex-direction: column; } }\n\n.footer__end-right {\n  text-align: end; }\n  @media (max-width: 1700px) {\n    .footer__end-right {\n      margin-bottom: 22px; } }\n\n.spacer {\n  margin: auto; }\n\n.underline {\n  text-decoration: underline; }\n  .underline:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.all-videos {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 971px;\n  background: #f7f9fc;\n  z-index: 100;\n  padding-top: 256px;\n  padding-left: 398px; }\n  @media (max-width: 1700px) {\n    .all-videos {\n      padding-top: 263px;\n      padding-left: 30px; } }\n  .all-videos__title {\n    font-size: 21px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .all-videos__title {\n        font-size: 16px;\n        line-height: 4px; } }\n  .all-videos__items {\n    margin-top: 23px;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .all-videos__items {\n        overflow-x: scroll;\n        margin-top: 25px; } }\n    .all-videos__items > * {\n      margin-right: 198px; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * {\n          min-width: fit-content;\n          margin-right: 42px; } }\n    .all-videos__items > * > * {\n      font-size: 18px;\n      line-height: 48px;\n      font-weight: 400;\n      color: #1c1d21; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * > * {\n          font-size: 14px;\n          line-height: 45px; } }\n      .all-videos__items > * > *:hover {\n        opacity: 0.6;\n        text-decoration: underline;\n        cursor: pointer; }\n  .all-videos__button {\n    margin-top: 90px;\n    margin-left: -30px;\n    padding: 0 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #ffffff;\n    max-width: fit-content;\n    line-height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px; }\n    @media (max-width: 1700px) {\n      .all-videos__button {\n        margin-top: 37px;\n        margin-left: -15px;\n        padding: 0 29px;\n        font-size: 14px;\n        line-height: 46px;\n        width: 280px;\n        background-color: #d10138;\n        border-radius: 23.0px; } }\n    .all-videos__button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n\n.menu {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 970px;\n  background: #f7f9fc;\n  z-index: 999;\n  min-width: 375px; }\n  .menu__top {\n    margin: 27px 27px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 31px; }\n  .menu__search {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 180px;\n    height: 36px;\n    border-radius: 17.0px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px; }\n    .menu__search > span {\n      opacity: 0.2;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 700;\n      color: #000000; }\n    .menu__search > img {\n      width: 14px;\n      height: 12px; }\n      .menu__search > img:hover {\n        opacity: 0.6;\n        cursor: pointer; }\n  .menu__exit {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 36px;\n    height: 36px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    text-align: center;\n    display: flex;\n    align-items: center; }\n    .menu__exit > img {\n      margin: auto;\n      width: 14px;\n      height: 14px;\n      border-radius: 1.0px; }\n    .menu__exit:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__bold > span, .menu__bold {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__bold > img {\n    transform: rotate(0deg);\n    transition: transform 0.5s;\n    margin-left: 10px;\n    width: 8px;\n    height: 5px; }\n  .menu__bold_active > img {\n    transform: rotate(180deg); }\n  .menu__list {\n    max-height: 400px;\n    transition: max-height 0.5s;\n    overflow: hidden;\n    width: 100%;\n    background-color: #f0f4f7; }\n    .menu__list_hidden {\n      max-height: 0px; }\n    .menu__list > * {\n      border-bottom: solid white 1.5px;\n      border-top: solid white 1.5px;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 400;\n      color: #1c1d21;\n      padding: 19.5px 0;\n      padding-left: 60px; }\n      .menu__list > *:hover {\n        background: #e2e6ea;\n        cursor: pointer; }\n  .menu__link > span {\n    font-size: 14px;\n    line-height: 19px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__link > img {\n    margin-left: 11px;\n    width: 11px;\n    height: 7px; }\n  .menu__item {\n    padding: 18.8px 0;\n    padding-left: 41px;\n    font-size: 12px;\n    line-height: 10px;\n    font-weight: 400;\n    color: #1c1d21; }\n    .menu__item:hover {\n      opacity: 0.6;\n      text-decoration: underline;\n      cursor: pointer; }\n  .menu__buttons-container {\n    margin-top: 52px;\n    text-align: center;\n    display: flex;\n    padding: 0 30px;\n    justify-content: space-between; }\n  .menu__fill {\n    width: 152px;\n    line-height: 40px;\n    background-color: #d10138;\n    border-radius: 20.0px;\n    font-size: 12px;\n    font-weight: 700;\n    color: #ffffff; }\n    .menu__fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__outline {\n    font-size: 12px;\n    font-weight: 700;\n    color: #1c1d21;\n    width: 152px;\n    line-height: 40px;\n    border: 2.0px solid #d10138;\n    border-radius: 20.0px; }\n    .menu__outline:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__contacts-container {\n    margin-top: 19px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 40px; }\n  .menu__phone {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__media > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  .menu__media-instagram {\n    margin: 0 9px;\n    width: 15px;\n    height: 14px; }\n  .menu__media-youtube {\n    margin: 0 10px;\n    width: 36px;\n    height: 14px; }\n  .menu__media-facebook {\n    margin: 0 13px;\n    width: 8px;\n    height: 15px; }\n","@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap\");\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\r Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\r sans-serif;\n  min-width: 375px; }\n\n* {\n  box-sizing: border-box; }\n\n.container {\n  font-family: 'Ubuntu', sans-serif;\n  /*max-width: 1920px;*/ }\n\n.header__container, .footer__container {\n  display: flex;\n  justify-content: space-between;\n  max-width: 1920px;\n  margin: 0 auto; }\n\n.header {\n  width: 100%;\n  background-color: #f4f4f6; }\n  .header__container {\n    height: 50px; }\n    @media (max-width: 1700px) {\n      .header__container {\n        height: 37px; } }\n  .header__navigation-container {\n    margin: 0 0 0 100px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .header__navigation-container {\n        margin: 0; } }\n  .header__media-container {\n    margin: 0 118px 0 0;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .header__media-container {\n        display: none; } }\n  .header__button {\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    color: #27282c;\n    line-height: 50px;\n    padding: 0 25px;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n    @media (max-width: 1700px) {\n      .header__button {\n        padding: 0 23px;\n        font-size: 12px;\n        line-height: 37px; } }\n  .header__button, .header__media-button {\n    box-shadow: -1px 0 0 #fff inset; }\n  .header__button:nth-child(1), .header__media-button:nth-child(1) {\n    box-shadow: 1px 0 0 #fff inset, -1px 0 0 #fff inset; }\n  .header__button_active, .header__button:hover {\n    background: white;\n    box-shadow: 0 4px 0 #b31942 inset;\n    cursor: pointer; }\n  .header__media-button {\n    padding: 0 15px;\n    display: flex;\n    align-items: center; }\n  .header__media-button:hover {\n    background: #fff;\n    cursor: pointer; }\n\n.content {\n  max-width: 1450px;\n  margin: 0 auto;\n  min-width: 327px; }\n  @media (max-width: 1700px) {\n    .content {\n      padding: 0 15px; } }\n\n.sub-header {\n  height: 48px;\n  margin-top: 52px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .sub-header {\n      margin-top: 12px; } }\n  .sub-header__buttons {\n    display: flex; }\n  .sub-header__logo {\n    margin: -25px 0 0 -110px; }\n    @media (max-width: 1700px) {\n      .sub-header__logo {\n        margin: 0; }\n        .sub-header__logo > * {\n          width: 178px;\n          height: 101px; } }\n  .sub-header__login, .sub-header__menu {\n    display: none;\n    width: 53px;\n    height: 53px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    margin-top: 20px;\n    margin-left: 21px; }\n    .sub-header__login:hover, .sub-header__menu:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    .sub-header__login > *, .sub-header__menu > * {\n      margin: auto; }\n    @media (max-width: 1700px) {\n      .sub-header__login, .sub-header__menu {\n        display: flex;\n        align-content: center; } }\n  .sub-header__menu {\n    background: #d10138; }\n  @media (max-width: 1700px) {\n    .sub-header__controls {\n      width: 100%;\n      display: flex;\n      justify-content: space-between; } }\n  .sub-header__start {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__start {\n        width: 100%;\n        flex-direction: column; } }\n  .sub-header__end {\n    display: flex; }\n    @media (max-width: 1700px) {\n      .sub-header__end {\n        display: none; } }\n  .sub-header__button-outlined {\n    height: 47px;\n    width: 170px;\n    padding: 0 27px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 2.0px solid #d10138;\n    border-radius: 23.5px;\n    margin-right: 57px;\n    margin-left: 33px;\n    z-index: 101; }\n    .sub-header__button-outlined > img {\n      margin-top: 3.5px; }\n    @media (max-width: 1700px) {\n      .sub-header__button-outlined {\n        margin: 12px 0;\n        font-size: 14px;\n        line-height: 43px;\n        font-weight: 700;\n        color: #1c1d21;\n        padding: 0 34px;\n        width: 163px;\n        border: 2.0px solid #d10138;\n        border-radius: 22.0px; } }\n  .sub-header__button-outlined_active {\n    border: 2.0px solid #e2e9ee;\n    border-radius: 23.5px; }\n  .sub-header__button-underline {\n    font-size: 18px;\n    line-height: 47px;\n    font-weight: 700;\n    text-decoration: underline;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .sub-header__button-underline {\n        margin-top: 13px;\n        margin-left: 22px;\n        font-size: 14px;\n        line-height: 44px;\n        font-weight: 700;\n        text-decoration: underline;\n        color: #1c1d21; } }\n  .sub-header__button {\n    line-height: 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #1c1d21;\n    margin-right: 67px; }\n  .sub-header__button-fill {\n    padding: 0 40px;\n    margin-left: 74px;\n    margin-right: 5px;\n    height: 48px;\n    background-color: #d10138;\n    border-radius: 24.0px;\n    font-size: 16px;\n    line-height: 48px;\n    font-weight: 700;\n    color: #ffffff; }\n  .sub-header__button-underline:hover, .sub-header__button-outlined:hover, .sub-header__logo:hover, .sub-header__button-fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.facebook {\n  padding: 21px; }\n\n.video-first {\n  margin-top: 50px;\n  height: 500px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .video-first {\n      height: auto;\n      margin-top: 142px;\n      flex-direction: column-reverse; } }\n  .video-first > * {\n    max-width: 50%;\n    height: 100%; }\n    @media (max-width: 1700px) {\n      .video-first > * {\n        height: auto;\n        max-width: 100%;\n        width: 100%; } }\n  .video-first__info-block {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n    @media (max-width: 1700px) {\n      .video-first__info-block {\n        justify-content: center; } }\n  .video-first__text-container {\n    margin-top: 82px; }\n    @media (max-width: 1700px) {\n      .video-first__text-container {\n        margin-top: 19px; } }\n  .video-first__video-block {\n    height: 100%;\n    width: 50%; }\n    @media (max-width: 1700px) {\n      .video-first__video-block {\n        height: auto;\n        width: auto; } }\n  .video-first__title {\n    font-family: 'Roboto', sans-serif;\n    font-size: 38px;\n    line-height: 50px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__title {\n        font-size: 20px;\n        line-height: 30px;\n        font-weight: 700;\n        color: #1c1d21;\n        text-align: center; } }\n  .video-first__description {\n    max-width: 550px;\n    margin-top: 20px;\n    font-size: 18px;\n    line-height: 30px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .video-first__description {\n        display: none; } }\n  .video-first__buttons-container {\n    margin-bottom: 90px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .video-first__buttons-container {\n        margin-top: 22px;\n        flex-direction: column;\n        margin-bottom: 0; } }\n  .video-first__button-fill {\n    padding: 0 48px;\n    height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px;\n    font-size: 18px;\n    line-height: 63px;\n    font-weight: 700;\n    color: #ffffff; }\n    .video-first__button-fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n    @media (max-width: 1700px) {\n      .video-first__button-fill {\n        height: auto;\n        font-size: 14px;\n        line-height: 53px;\n        width: 100%;\n        text-align: center;\n        border-radius: 27.0px; } }\n  .video-first__button-info {\n    margin: auto;\n    margin-top: 15px; }\n\n.button-link {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #0c65d4; }\n  .button-link__offset {\n    margin-top: 13px;\n    display: inline-block;\n    margin-right: 27px; }\n  .button-link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .button-link {\n      font-size: 12px;\n      line-height: 14px; } }\n\n.button-link > span {\n  margin-right: 3px; }\n\n.advantages {\n  display: flex;\n  margin-top: 56px;\n  justify-content: space-between;\n  padding-right: 54px; }\n  @media (max-width: 1700px) {\n    .advantages {\n      margin-top: 40px;\n      flex-direction: column;\n      padding-right: 0px; } }\n  .advantages__icon {\n    width: 50px;\n    height: 50px;\n    background-color: #f3f6fa;\n    border-radius: 5.0px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .advantages__icon {\n        width: 44px;\n        height: 44px; } }\n  .advantages__icon > * {\n    margin: auto; }\n  .advantages__title {\n    margin-top: 17px;\n    font-size: 20px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__title {\n        font-size: 16px;\n        line-height: 6px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .advantages__description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .advantages__description {\n        margin-top: 14px;\n        font-size: 13px;\n        line-height: 22px;\n        font-weight: 400;\n        color: #1c1d21; } }\n  .advantages__block {\n    width: 280px; }\n    @media (max-width: 1700px) {\n      .advantages__block {\n        margin-bottom: 17px;\n        width: 100%;\n        display: flex;\n        align-items: center; } }\n  @media (max-width: 1700px) {\n    .advantages__icon-container {\n      padding-right: 18px; } }\n\n.video-bar__outer, .opinions__outer {\n  margin-top: 135px;\n  background-color: #f7f9fc; }\n  @media (max-width: 1700px) {\n    .video-bar__outer, .opinions__outer {\n      margin-top: 28px; } }\n\n.video-bar__title {\n  padding-top: 126px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-bar__title {\n      padding-top: 34px;\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-bar__menu {\n  margin-top: 43px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 -2px 0 #d7dbea inset; }\n  @media (max-width: 1700px) {\n    .video-bar__menu {\n      width: 100%;\n      overflow-x: scroll;\n      margin-top: 15px; } }\n\n.video-bar__item {\n  margin-right: 45px;\n  padding: 18px 6.7px 22px 0;\n  display: inline-block;\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 500;\n  color: #1c1d21;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content; }\n  .video-bar__item:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__item {\n      margin-right: 22px;\n      font-size: 12px;\n      line-height: 5px;\n      font-weight: 700;\n      color: #1c1d21;\n      padding: 14px 0; } }\n\n.video-bar__item_active {\n  border-bottom: 4px solid #d10138;\n  padding: 18px 6px 18px 0; }\n  @media (max-width: 1700px) {\n    .video-bar__item_active {\n      border-bottom: 2px solid #d10138;\n      padding: 12px 0; } }\n\n.video-bar__link {\n  margin-right: 26px; }\n  @media (max-width: 1700px) {\n    .video-bar__link {\n      display: none; } }\n\n.video-bar__navigation {\n  display: flex;\n  align-items: center; }\n\n.video-bar__cards {\n  margin-top: 37px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n\n.video-bar__button-container {\n  display: flex;\n  margin-top: 51px; }\n  @media (max-width: 1700px) {\n    .video-bar__button-container {\n      margin-top: -1px; } }\n\n.video-bar__button {\n  padding: 10px 40px;\n  margin: auto;\n  border: 2.0px solid #d7dbea;\n  border-radius: 21.0px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #b0b8d3; }\n  @media (max-width: 1700px) {\n    .video-bar__button {\n      padding: 0 37px;\n      font-size: 12px;\n      line-height: 34px;\n      font-weight: 700;\n      color: #b0b8d3;\n      border: 2.0px solid #d7dbea;\n      border-radius: 19.0px;\n      margin-bottom: 44px; } }\n  .video-bar__button:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .video-bar__button-upload {\n      display: none; } }\n  .video-bar__button-all {\n    display: none; }\n    @media (max-width: 1700px) {\n      .video-bar__button-all {\n        display: block; } }\n\n.card {\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 320px;\n  height: 400px;\n  background-color: #ffffff; }\n  @media (max-width: 1700px) {\n    .card {\n      width: 164px;\n      height: 277px;\n      margin-bottom: 34px; } }\n  .card__top {\n    height: 50%;\n    position: relative; }\n    @media (max-width: 1700px) {\n      .card__top {\n        height: 106px;\n        width: 100%; } }\n  .card__top-image {\n    width: 100%;\n    height: 100%; }\n  .card__top-label {\n    position: absolute;\n    padding: 0 4px;\n    top: 25px;\n    left: 35px;\n    background-color: #d10138;\n    font-size: 10px;\n    line-height: 17px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #f7f9fc; }\n    @media (max-width: 1700px) {\n      .card__top-label {\n        top: 12px;\n        left: 8px; } }\n  .card__info {\n    margin-left: 34px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 50%; }\n    @media (max-width: 1700px) {\n      .card__info {\n        height: 170px;\n        margin-left: 16px; } }\n  .card__date_container {\n    margin-top: 16px;\n    font-size: 12px;\n    line-height: 24px;\n    font-weight: 400;\n    color: #657195;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__date_container {\n        line-height: 12px;\n        margin-top: 18px; } }\n  .card__time {\n    margin-left: 30px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__time {\n        margin-left: 5px; } }\n  .card__date {\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n  .card__time > span {\n    margin-left: 7px;\n    min-width: -webkit-fit-content;\n    min-width: -moz-fit-content;\n    min-width: fit-content; }\n  @media (max-width: 1700px) {\n    .card__time > img {\n      width: 7px;\n      height: 7px; } }\n  .card__title {\n    margin-top: 4px;\n    font-size: 16px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21;\n    max-width: 250px; }\n    @media (max-width: 1700px) {\n      .card__title {\n        margin-top: 9px;\n        font-size: 14px;\n        line-height: 17px;\n        font-weight: 700;\n        color: #1c1d21; } }\n  .card__label {\n    margin-top: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 400;\n    color: #657195; }\n    @media (max-width: 1700px) {\n      .card__label {\n        margin-top: 9px;\n        font-size: 12px;\n        line-height: 11px;\n        font-weight: 400;\n        color: #657195; } }\n  .card__button {\n    margin-left: 7px;\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    .card__button:hover {\n      opacity: 0.6;\n      cursor: pointer;\n      text-decoration: underline; }\n    .card__button-watch:before {\n      content: 'Просмотр'; }\n    .card__button-sub:before {\n      content: 'Оформить подписку'; }\n      @media (max-width: 1700px) {\n        .card__button-sub:before {\n          content: 'Подписка'; } }\n  .card__button-container {\n    margin-bottom: 33px;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .card__button-container {\n        margin-bottom: 15px; }\n        .card__button-container > img {\n          width: 14px;\n          height: 14px; } }\n\n.video-second__title {\n  margin-top: 94px; }\n  @media (max-width: 1700px) {\n    .video-second__title {\n      margin-top: 25px; } }\n\n.video-second__block {\n  margin-top: 38px;\n  box-shadow: 0px 0px 62px 0px rgba(123, 150, 192, 0.18);\n  width: 100%;\n  background-color: #ffffff;\n  display: flex;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__block {\n      margin-top: 19px;\n      flex-direction: column; } }\n\n.video-second__subtitle {\n  font-size: 10px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #657195; }\n\n.video-second__h-title {\n  margin-top: 23px;\n  max-width: 400px;\n  font-size: 24px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .video-second__h-title {\n      margin-top: 15px;\n      font-size: 16px;\n      line-height: 20px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n.video-second__date-container {\n  margin-top: 29px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__date-container {\n      margin-top: 25px;\n      font-size: 12px;\n      line-height: 6px;\n      font-weight: 400; } }\n\n.video-second__date-container > * {\n  margin-bottom: 7px; }\n  @media (max-width: 1700px) {\n    .video-second__date-container > * {\n      margin-bottom: 17px; } }\n\n.video-second__date {\n  display: inline-block;\n  width: 63px; }\n  @media (max-width: 1700px) {\n    .video-second__date {\n      width: 53px; } }\n\n.video-second__value {\n  font-weight: 700;\n  color: #1c1d21; }\n\n.video-second__fill {\n  display: inline-block;\n  margin-top: 37px;\n  padding: 22px 49px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #ffffff;\n  margin-left: -4px;\n  text-align: center;\n  background-color: #d10138;\n  border-radius: 31.5px; }\n  .video-second__fill:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .video-second__fill {\n      margin-top: 12px;\n      margin-left: -10px;\n      font-size: 12px;\n      font-weight: 700;\n      color: #ffffff;\n      width: 210px;\n      line-height: 42px;\n      background-color: #d10138;\n      border-radius: 21.0px;\n      padding: 0; } }\n\n.video-second__text {\n  margin: 16px 57px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__text {\n      margin: 9px 30px;\n      font-size: 10px;\n      line-height: 6px; } }\n\n.video-second__link {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .video-second__link:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.video-second__flag {\n  position: absolute;\n  top: 0;\n  right: 60px; }\n  @media (max-width: 1700px) {\n    .video-second__flag {\n      right: 11px; }\n      .video-second__flag > img {\n        width: 73px;\n        height: 71px; } }\n\n.video-second__flag-text {\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #f7f9fc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: -103%; }\n  @media (max-width: 1700px) {\n    .video-second__flag-text {\n      margin-top: -94%; } }\n\n.video-second__flag-text > * {\n  margin-bottom: 4px; }\n\n.video-second__flag-label {\n  font-size: 10px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-label {\n      font-size: 8px; } }\n\n.video-second__flag-number {\n  margin-top: 3px;\n  margin-bottom: 9px;\n  font-size: 36px; }\n  @media (max-width: 1700px) {\n    .video-second__flag-number {\n      font-size: 20px;\n      margin-top: -9px;\n      margin-bottom: 0px; } }\n\n.video-second__name-container {\n  margin-top: 245px;\n  margin-left: 42px; }\n  @media (max-width: 1700px) {\n    .video-second__name-container {\n      margin-top: 114px;\n      margin-left: 26px; } }\n\n.video-second__name {\n  font-size: 16px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .video-second__name {\n      font-size: 10px;\n      line-height: 14px; } }\n\n.video-second__role {\n  margin-top: 8px;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .video-second__role {\n      margin-top: 4px;\n      font-size: 10px;\n      line-height: 5px; } }\n\n.video-second__video-block, .video-second__info {\n  height: 100%;\n  width: 50%;\n  background: white; }\n  @media (max-width: 1700px) {\n    .video-second__video-block, .video-second__info {\n      width: 100%;\n      height: auto; } }\n\n@media (max-width: 1700px) {\n  .video-second__video-block {\n    height: 201px; } }\n\n.video-second__info {\n  padding-top: 75px;\n  padding-left: 147px;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .video-second__info {\n      padding-top: 19px;\n      padding-left: 42px; } }\n\n.player {\n  position: relative;\n  height: auto;\n  width: auto; }\n  @media (max-width: 1700px) {\n    .player > * {\n      width: 100%; } }\n  .player__overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center; }\n  .player__play-button {\n    width: 77px;\n    height: 77px;\n    background: #d10138;\n    border-radius: 100%;\n    margin: auto;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 1700px) {\n      .player__play-button {\n        width: 50px;\n        height: 50px; } }\n    .player__play-button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .player__play-button > * {\n    margin: auto; }\n\n.roboto-title {\n  font-family: 'Roboto', sans-serif;\n  font-size: 38px;\n  line-height: 34px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .roboto-title {\n      font-size: 20px;\n      line-height: 27px;\n      font-weight: 700;\n      color: #1c1d21; } }\n\n@media (max-width: 1700px) {\n  .records__link-btn {\n    display: none; } }\n\n.records__button-all {\n  padding: 0 27px; }\n\n.records__link > img {\n  margin-left: 6px; }\n\n.records__title {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 83px; }\n  @media (max-width: 1700px) {\n    .records__title {\n      margin-top: 36px; } }\n\n.records__cards {\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .records__cards {\n      margin-top: 20px; } }\n\n.opinions__outer {\n  margin-top: 106px;\n  height: auto; }\n  @media (max-width: 1700px) {\n    .opinions__outer {\n      margin-top: 45px; } }\n\n@media (max-width: 1700px) {\n  .xs-hide {\n    display: none !important; } }\n\n.xs-show {\n  display: none !important; }\n  @media (max-width: 1700px) {\n    .xs-show {\n      display: block !important; } }\n\n.opinions__title {\n  padding-top: 103px;\n  display: flex;\n  justify-content: space-between; }\n  @media (max-width: 1700px) {\n    .opinions__title {\n      padding-top: 32px; } }\n\n.opinions__container {\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__container {\n      margin-top: 15px; } }\n\n.opinions__button-container {\n  display: none; }\n  @media (max-width: 1700px) {\n    .opinions__button-container {\n      display: flex;\n      margin-top: 44px; } }\n\n.opinions__text {\n  margin-top: 78px;\n  max-width: 1120px +78px;\n  font-size: 20px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21;\n  position: relative; }\n  @media (max-width: 1700px) {\n    .opinions__text {\n      margin-top: 25px;\n      font-size: 14px;\n      line-height: 22px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__text::before {\n  position: absolute;\n  content: '“';\n  top: 0;\n  left: -15px; }\n  @media (max-width: 1700px) {\n    .opinions__text::before {\n      top: -3px;\n      left: -7px; } }\n\n.opinions__quote {\n  margin-left: 7px; }\n\n.opinions__text::before, .opinions__quote {\n  font-size: 21px;\n  line-height: 36px;\n  font-weight: 400;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__text::before, .opinions__quote {\n      font-size: 14.6px;\n      line-height: 24px;\n      font-weight: 400;\n      color: #1c1d21; } }\n\n.opinions__author-block {\n  margin-bottom: 80px;\n  margin-top: 25px; }\n  @media (max-width: 1700px) {\n    .opinions__author-block {\n      margin-bottom: 63px;\n      margin-top: 25px; } }\n\n.opinions__overlay {\n  width: 100%;\n  position: absolute;\n  bottom: 102px;\n  display: flex;\n  align-items: center; }\n  @media (max-width: 1700px) {\n    .opinions__overlay {\n      bottom: 27px; } }\n\n.opinions__from > * {\n  display: inline-block;\n  margin: auto;\n  padding: 0 23px;\n  background-color: #e2e9f4;\n  border-radius: 17.0px;\n  font-size: 14px;\n  line-height: 34px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__from > * {\n      border-radius: 14.0px;\n      font-size: 10px;\n      line-height: 28px;\n      padding: 0 15px; } }\n\n.opinions__from > * > a {\n  text-decoration: underline;\n  color: #0c65d4; }\n  .opinions__from > * > a:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__author-name {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #1c1d21; }\n  @media (max-width: 1700px) {\n    .opinions__author-name {\n      font-size: 14px;\n      line-height: 16px; } }\n\n.opinions__author-role {\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 400;\n  color: #657195; }\n  @media (max-width: 1700px) {\n    .opinions__author-role {\n      font-size: 12px;\n      line-height: 12px; } }\n\n.opinions__author-avatar {\n  margin-right: 22px; }\n  @media (max-width: 1700px) {\n    .opinions__author-avatar {\n      margin-right: 15px;\n      width: 51px;\n      height: 52px; } }\n\n.opinions__author-container {\n  display: flex;\n  align-items: center;\n  width: 350px; }\n\n.opinions__content {\n  margin-top: 41px;\n  width: 100%;\n  min-height: 400px;\n  border: 2.0px solid #d7dbea;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 147px;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .opinions__content {\n      justify-content: space-between;\n      margin-top: 0px;\n      padding-left: 21px;\n      min-height: 300px; } }\n\n.opinions__nav-button {\n  cursor: pointer;\n  box-shadow: 0px 10px 15px 0px rgba(123, 150, 192, 0.1);\n  width: 44px;\n  height: 44px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  margin: 0 48px;\n  position: absolute;\n  bottom: 97px;\n  z-index: 10;\n  background-size: 27px 44px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: none;\n  top: auto; }\n  .opinions__nav-button:hover {\n    opacity: 0.7;\n    cursor: pointer; }\n\n.opinions__nav-button > * {\n  margin: auto; }\n\n.opinions__nav-right > * {\n  transform: rotate(180deg); }\n\n.opinions__item {\n  position: relative; }\n\n.swiper-container {\n  overflow: visible !important; }\n\n.swiper-pagination {\n  margin-bottom: -34px; }\n\n.swiper-pagination-bullet-active {\n  background: #b0b8d3; }\n\n.opinions__outer .content {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  padding-bottom: 40px; }\n\n.footer__outer {\n  margin-top: 94px;\n  height: 445px;\n  background: #27282c;\n  width: 100%; }\n  @media (max-width: 1700px) {\n    .footer__outer {\n      height: auto;\n      margin-top: 8px; } }\n\n.footer__container {\n  flex-direction: column;\n  padding-top: 64px;\n  padding-right: 118px;\n  padding-left: 100px; }\n  @media (max-width: 1700px) {\n    .footer__container {\n      padding-top: 20px;\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n.footer__content {\n  height: 188px;\n  width: 100%;\n  margin-right: 248px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  @media (max-width: 1700px) {\n    .footer__content {\n      height: unset; } }\n\n.footer__logo {\n  margin-top: -33px;\n  flex-basis: 178px; }\n  @media (max-width: 1700px) {\n    .footer__logo {\n      flex-basis: auto;\n      margin-top: 0px;\n      width: 100%;\n      margin-bottom: 19px;\n      margin-left: 13px; }\n      .footer__logo > img {\n        width: 62px;\n        height: 51px; } }\n\n.footer__c2 {\n  flex-basis: 400px;\n  align-self: flex-end;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  flex-direction: column; }\n\n.footer__c3 {\n  flex-basis: 371px;\n  align-self: flex-end;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c3 {\n      padding-left: 13px;\n      flex-basis: 50%;\n      margin-top: 0px;\n      height: 188px; } }\n\n.footer__c4 {\n  margin-right: 249px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column; }\n  @media (max-width: 1700px) {\n    .footer__c4 {\n      margin-top: 0px;\n      margin-right: 3px;\n      height: 188px; } }\n\n.footer__media-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-self: flex-end; }\n\n.footer__text {\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 400;\n  color: #ffffff; }\n\n.footer__link {\n  font-size: 18px;\n  line-height: 21px;\n  font-weight: 700;\n  color: #ffffff; }\n  .footer__link:hover {\n    opacity: 0.6;\n    cursor: pointer;\n    text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link {\n      font-size: 15px; } }\n\n.footer__link-underline {\n  margin-top: 21px;\n  text-decoration: underline; }\n  @media (max-width: 1700px) {\n    .footer__link-underline {\n      margin-top: 20px; } }\n\n.footer__media-container {\n  display: flex;\n  padding-right: 20px; }\n  .footer__media-container > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__media-container {\n      margin-top: 19px;\n      padding-right: 14px;\n      padding-left: 2px; } }\n\n.footer__button {\n  margin-bottom: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #ffffff;\n  line-height: 48px;\n  background-color: #d10138;\n  border-radius: 24.0px;\n  padding: 0 40px;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n  .footer__button:hover {\n    background: #b31942;\n    cursor: pointer; }\n  @media (max-width: 1700px) {\n    .footer__button {\n      max-width: unset;\n      padding: 0;\n      text-align: center;\n      font-size: 11px;\n      line-height: 38px;\n      width: 150px;\n      border-radius: 20.5px;\n      margin-bottom: 4px;\n      transform: translateX(-5px); } }\n\n.footer__delimiter, .footer__end {\n  margin-left: 140px;\n  max-width: 1560px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter, .footer__end {\n      margin: 0; } }\n\n.footer__delimiter {\n  height: 1px;\n  opacity: 0.07;\n  background-color: #ffffff;\n  margin-top: 75px; }\n  @media (max-width: 1700px) {\n    .footer__delimiter {\n      margin-top: 32px; } }\n\n.footer__copyright {\n  opacity: 0.3;\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 400;\n  font-style: italic;\n  color: #ffffff; }\n  @media (max-width: 1700px) {\n    .footer__copyright {\n      margin-top: 16px;\n      font-size: 10px;\n      line-height: 10px;\n      text-align: center; } }\n\n.footer__bold {\n  opacity: 1;\n  opacity: initial;\n  font-size: 12px;\n  line-height: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #7e7e80; }\n  @media (max-width: 1700px) {\n    .footer__bold {\n      text-align: center;\n      font-size: 10px;\n      line-height: 4px; } }\n\n.footer__end {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 27px; }\n  @media (max-width: 1700px) {\n    .footer__end {\n      flex-direction: column; } }\n\n.footer__end-right {\n  text-align: end; }\n  @media (max-width: 1700px) {\n    .footer__end-right {\n      margin-bottom: 22px; } }\n\n.spacer {\n  margin: auto; }\n\n.underline {\n  text-decoration: underline; }\n  .underline:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n\n.all-videos {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 971px;\n  background: #f7f9fc;\n  z-index: 100;\n  padding-top: 256px;\n  padding-left: 398px; }\n  @media (max-width: 1700px) {\n    .all-videos {\n      padding-top: 263px;\n      padding-left: 30px; } }\n  .all-videos__title {\n    font-size: 21px;\n    line-height: 21px;\n    font-weight: 700;\n    color: #1c1d21; }\n    @media (max-width: 1700px) {\n      .all-videos__title {\n        font-size: 16px;\n        line-height: 4px; } }\n  .all-videos__items {\n    margin-top: 23px;\n    display: flex; }\n    @media (max-width: 1700px) {\n      .all-videos__items {\n        overflow-x: scroll;\n        margin-top: 25px; } }\n    .all-videos__items > * {\n      margin-right: 198px; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * {\n          min-width: -webkit-fit-content;\n          min-width: -moz-fit-content;\n          min-width: fit-content;\n          margin-right: 42px; } }\n    .all-videos__items > * > * {\n      font-size: 18px;\n      line-height: 48px;\n      font-weight: 400;\n      color: #1c1d21; }\n      @media (max-width: 1700px) {\n        .all-videos__items > * > * {\n          font-size: 14px;\n          line-height: 45px; } }\n      .all-videos__items > * > *:hover {\n        opacity: 0.6;\n        text-decoration: underline;\n        cursor: pointer; }\n  .all-videos__button {\n    margin-top: 90px;\n    margin-left: -30px;\n    padding: 0 47px;\n    font-size: 18px;\n    font-weight: 700;\n    color: #ffffff;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n    line-height: 63px;\n    background-color: #d10138;\n    border-radius: 31.5px; }\n    @media (max-width: 1700px) {\n      .all-videos__button {\n        margin-top: 37px;\n        margin-left: -15px;\n        padding: 0 29px;\n        font-size: 14px;\n        line-height: 46px;\n        width: 280px;\n        background-color: #d10138;\n        border-radius: 23.0px; } }\n    .all-videos__button:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n\n.menu {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 970px;\n  background: #f7f9fc;\n  z-index: 999;\n  min-width: 375px; }\n  .menu__top {\n    margin: 27px 27px;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 31px; }\n  .menu__search {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 180px;\n    height: 36px;\n    border-radius: 17.0px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px; }\n    .menu__search > span {\n      opacity: 0.2;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 700;\n      color: #000000; }\n    .menu__search > img {\n      width: 14px;\n      height: 12px; }\n      .menu__search > img:hover {\n        opacity: 0.6;\n        cursor: pointer; }\n  .menu__exit {\n    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);\n    width: 36px;\n    height: 36px;\n    background-color: #f3f6fa;\n    border-radius: 50%;\n    text-align: center;\n    display: flex;\n    align-items: center; }\n    .menu__exit > img {\n      margin: auto;\n      width: 14px;\n      height: 14px;\n      border-radius: 1.0px; }\n    .menu__exit:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__bold > span, .menu__bold {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__bold > img {\n    transform: rotate(0deg);\n    transition: transform 0.5s;\n    margin-left: 10px;\n    width: 8px;\n    height: 5px; }\n  .menu__bold_active > img {\n    transform: rotate(180deg); }\n  .menu__list {\n    max-height: 400px;\n    transition: max-height 0.5s;\n    overflow: hidden;\n    width: 100%;\n    background-color: #f0f4f7; }\n    .menu__list_hidden {\n      max-height: 0px; }\n    .menu__list > * {\n      border-bottom: solid white 1.5px;\n      border-top: solid white 1.5px;\n      font-size: 12px;\n      line-height: 10px;\n      font-weight: 400;\n      color: #1c1d21;\n      padding: 19.5px 0;\n      padding-left: 60px; }\n      .menu__list > *:hover {\n        background: #e2e6ea;\n        cursor: pointer; }\n  .menu__link > span {\n    font-size: 14px;\n    line-height: 19px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__link > img {\n    margin-left: 11px;\n    width: 11px;\n    height: 7px; }\n  .menu__item {\n    padding: 18.8px 0;\n    padding-left: 41px;\n    font-size: 12px;\n    line-height: 10px;\n    font-weight: 400;\n    color: #1c1d21; }\n    .menu__item:hover {\n      opacity: 0.6;\n      text-decoration: underline;\n      cursor: pointer; }\n  .menu__buttons-container {\n    margin-top: 52px;\n    text-align: center;\n    display: flex;\n    padding: 0 30px;\n    justify-content: space-between; }\n  .menu__fill {\n    width: 152px;\n    line-height: 40px;\n    background-color: #d10138;\n    border-radius: 20.0px;\n    font-size: 12px;\n    font-weight: 700;\n    color: #ffffff; }\n    .menu__fill:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__outline {\n    font-size: 12px;\n    font-weight: 700;\n    color: #1c1d21;\n    width: 152px;\n    line-height: 40px;\n    border: 2.0px solid #d10138;\n    border-radius: 20.0px; }\n    .menu__outline:hover {\n      opacity: 0.6;\n      cursor: pointer; }\n  .menu__contacts-container {\n    margin-top: 19px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 40px; }\n  .menu__phone {\n    font-size: 16px;\n    line-height: 10px;\n    font-weight: 700;\n    color: #1c1d21; }\n  .menu__media > *:hover {\n    opacity: 0.6;\n    cursor: pointer; }\n  .menu__media-instagram {\n    margin: 0 9px;\n    width: 15px;\n    height: 14px; }\n  .menu__media-youtube {\n    margin: 0 10px;\n    width: 36px;\n    height: 14px; }\n  .menu__media-facebook {\n    margin: 0 13px;\n    width: 8px;\n    height: 15px; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              route = delBasePath(route);
              _context.next = 5;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 5:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 10;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 10:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Users\\Max1\\Desktop\\front\\nextjs-blog\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }));
}

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/next/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./styles.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! D:\Users\Max1\Desktop\front\nextjs-blog\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map