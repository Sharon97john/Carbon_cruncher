"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = exports.Navbar = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0;\n  height: 300px;\n  display: block;\n  max-width: 500px;\n  margin: auto;\n  background-color: #015c62; /* For browsers that do not support gradients */\n  background-image: linear-gradient(to right, #015c62, #178c69);\n  border-radius: 0px 0px 0px 20px;\n  box-shadow: 0 8px 8px -4px #ccc;\n\n  .header {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    justify-content: space-between;\n    align-items: center;\n    // color: #fff;\n    .inner-header{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n    }\n    .logo {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background-color: #fff;\n    }\n    .page-icon{\n        font-size: 20px;\n        color: gold;\n    }\n    .hamburger {\n      font-size: 25px;\n      color: #fff;\n    }\n  }\n  .bulbtree {\n    margin: auto;\n\n    img {\n      width: 280px;\n      height: 280px;\n      border-radius: 50%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Navbar = _styledComponents["default"].div(_templateObject());

exports.Navbar = Navbar;

var Logo = _styledComponents["default"].img(_templateObject2());

exports.Logo = Logo;