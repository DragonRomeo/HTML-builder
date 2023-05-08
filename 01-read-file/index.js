const fs = require('fs');
const path = require('node:path');

const filePatch = path.join(__dirname, 'text.txt') ;

console.log(filePatch);
const rs = fs.createReadStream(filePatch, 'utf8');

rs.on('data', function(chunk){
    console.log(chunk);
})
