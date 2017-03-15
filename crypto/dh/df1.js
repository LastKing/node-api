/**
 * Created by Rain on 2017/3/13.
 */
const crypto = require('crypto');


// Generate Alice's keys...
var alice = crypto.createDiffieHellman(2048);
const alice_key = alice.generateKeys();

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bob_key = bob.generateKeys();

// Exchange and generate the secret...
const alice_secret = alice.computeSecret(bob_key);
const bob_secret = bob.computeSecret(alice_key);

// OK
console.log(alice_secret.toString('hex') === bob_secret.toString('hex'));



