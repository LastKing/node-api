/**
 * Created by Rain on 2017/3/13.
 */
const crypto = require('crypto');

var alice = crypto.createDiffieHellman(2048);

const alice_key = alice.generateKeys();
console.log(alice_key.toString('hex'));

