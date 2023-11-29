const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
const crypto = require('node:crypto');

function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function generateCodeVerifier() {
  return base64URLEncode(crypto.randomBytes(32));
}

function generateCodeChallenge(code_verifier) {
  return code_challenge = base64URL(CryptoJS.SHA256(code_verifier))
}
function base64URL(string) {
  return string.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = generateCodeChallenge(codeVerifier);
  res.render('integrateSquare', {codeVerifier, codeChallenge});
});

module.exports = router;
