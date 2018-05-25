const crypto = require('crypto');

function generateSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function generateHash(salt, pwd){
    let hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}

const salt = generateSalt();
const password1 = 123456;
const password2 = 123458;

const hashed1 = generateHash(salt, password1);
const hashed2 = generateHash(salt, password2);

console.log(hashed1);
console.log(hashed2);
