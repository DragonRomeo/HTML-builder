const fs = require('fs');
const path = require('node:path');
// const path = './text.txt'

const filePatch = path.join('./01-read-file', 'text.txt') ;

console.log(filePatch);
const rs = fs.createReadStream(filePatch, 'utf8');

rs.on('data', function(chunk){
    console.log(chunk);
})



// fs.readFile('text.txt', 'utf8', function(error, textFile){
//     if(error) throw error;
//     console.log(textFile);
// });
// reading();