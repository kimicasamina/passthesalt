"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

// global error handler
app.use('*', function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});