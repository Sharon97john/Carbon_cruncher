"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreesCard = exports.CosumpCard = exports.BarWrapper = exports.GraphWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _main = require("../../main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  background-color: #ccc;\n  border-radius: 5px;\n  height: 70px;\n  font-size: 35px;\n  background-color: #DBFFDA;\n  display: flex;\n  align-item: center;\n  justify-content: center;\n  span{\n    font-size: 20px;\n  }\n  margin-top: 10px;\n  h5{\n    margin-left: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  background-color: #ccc;\n  border-radius: 5px;\n  height: 70px;\n  font-size: 35px;\n  background-color: #ccc;\n  display: flex;\n  align-item: center;\n  justify-content: center;\n  span{\n    font-size: 20px;\n  }\n  margin-top: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  //   height: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  h4 {\n    padding: 15px 19px 0px 19px;\n    font-weight: 600;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GraphWrapper = (0, _styledComponents["default"])(_main.Container)(_templateObject());
exports.GraphWrapper = GraphWrapper;
var BarWrapper = (0, _styledComponents["default"])(_main.Container)(_templateObject2());
exports.BarWrapper = BarWrapper;
var CosumpCard = (0, _styledComponents["default"])(_main.Container)(_templateObject3());
exports.CosumpCard = CosumpCard;
var TreesCard = (0, _styledComponents["default"])(_main.Container)(_templateObject4());
exports.TreesCard = TreesCard;