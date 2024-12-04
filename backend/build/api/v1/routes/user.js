"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = require("../controllers/user");
var _verifyToken = _interopRequireDefault(require("../../../middleware/verifyToken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get('/', _user.getAllUsers);
router.get('/:uuid', _user.getUserByUuid);
router.post('/', _user.createUser);
router.put('/:uuid', _verifyToken["default"], _user.updateUser);
router["delete"]('/:uuid', _verifyToken["default"], _user.deleteUser);
var _default = exports["default"] = router;