"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carbonfootprint_calculation = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var base_url = "http://127.0.0.1:8000/";

var carbonfootprint_calculation = function carbonfootprint_calculation() {
  return _axios["default"].get(base_url + "consumption/carbonfootprint_calculation");
};

exports.carbonfootprint_calculation = carbonfootprint_calculation;