let fs = require('fs');

// input -- Original string, shift of the cipher
let inData = fs.readFileSync("input.txt").toString().split(" ");
let oldStr = inData[0];
let shift = parseInt(inData[1]);

let oldAlph = new Map();
let newAlph = new Map();
for(let i = 97; i < 123;i++){
    oldAlph.set(i-97, String.fromCharCode(i));
}


for(let i = 0; i < 26; i++){
    newAlph.set(oldAlph.get(i), oldAlph.get((i+shift)%26));
}

let newStr = "";
for(let i = 0; i < oldStr.length; i++){
    newStr += newAlph.get(oldStr[i]);
}
fs.writeFileSync('output.txt', newStr);
console.log(newStr);