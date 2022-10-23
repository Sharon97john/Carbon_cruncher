"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Treeks = exports.ContainerGame = exports.ProgressWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _main = require("../../main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #dbffda;\n  height: 70px;\n  padding: 10px;\n  .treeks-icons {\n    display: flex;\n    gap: 10px;\n    span {\n      font-size: 20px;\n    }\n    img{\n        width: 30px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 65px;\n  padding: 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 10px;\n  max-width: 250px;\n  margin: auto;\n  margin-top: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProgressWrapper = (0, _styledComponents["default"])(_main.Container)(_templateObject());
exports.ProgressWrapper = ProgressWrapper;
var ContainerGame = (0, _styledComponents["default"])(_main.Container)(_templateObject2());
exports.ContainerGame = ContainerGame;
var Treeks = (0, _styledComponents["default"])(_main.Container)(_templateObject3());
exports.Treeks = Treeks;