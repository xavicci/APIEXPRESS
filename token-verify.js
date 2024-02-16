const jwt = require('jsonwebtoken');
const secret = 'myCat';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}
const payload = verifyToken(token, secret);
