let fs = require('fs');
let s = "";
let freq = fs.readFileSync("LetterFreq.txt").toString().split("	");
let letterFreq = new Map();
for(let i = 0; i < freq.length;i++){
    freq[i] = parseFloat(freq[i]); 
    letterFreq.set(String.fromCharCode(i+97), freq[i]);
}
//console.log(letterFreq);
let arr = new Array();
let inStr = fs.readFileSync("output.txt").toString();

for(let i = 0; i < inStr.length; i++){
    if (arr[inStr[i]]){
        arr[inStr[i]] += 1;
    }
    else{
        arr[inStr[i]] = 1;
        s += inStr[i];
    }
}
for(let i = 0; i < s.length;i++){
    arr[s[i]] = arr[s[i]] / inStr.length * 100;
}
console.log(arr,"\n", letterFreq);
