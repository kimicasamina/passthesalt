"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = exports.decrypt = void 0;
var _crypto = _interopRequireDefault(require("crypto"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var algorithm = 'aes-256-cbc'; //Using AES encryption
var key = _crypto["default"].randomBytes(32);
var iv = _crypto["default"].randomBytes(16);
var encrypt = exports.encrypt = function encrypt(password) {
  console.log('Encryption...');
  var cipher = _crypto["default"].createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  var encrypted = cipher.update(password);
  encrypted = Buffer.concat([encrypted, cipher["final"]()]);
  return {
    iv: iv.toString('hex'),
    password: encrypted.toString('hex')
  };
};
var decrypt = exports.decrypt = function decrypt(encryptedData) {
  console.log('Decryption...', encryptedData);
  var iv = Buffer.from(encryptedData.iv, 'hex');
  var encryptedPassword = Buffer.from(encryptedData.password, 'hex');
  var decipher = _crypto["default"].createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  var decrypted = decipher.update(encryptedPassword);
  decrypted = Buffer.concat([decrypted, decipher["final"]()]);
  return decrypted.toString();
};