"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _main = require("../../main");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: -60px;\n  padding: 0px 10px;\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding-bottom: 15px;\n  .rewards{\n    img{\n        width: 50px !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardWrapper = (0, _styledComponents["default"])(_main.Container)(_templateObject());
exports.CardWrapper = CardWrapper;