/**
 * Created by Rain on 2017/3/14.
 */
const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const inp = fs.createReadStream('input.txt');
const out = fs.createWriteStream('input.txt.gz');
