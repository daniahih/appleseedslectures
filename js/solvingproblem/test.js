// * Write a function that receives a string and returns an object with the count of every character in the string. *

//function charCount (STR )
//  varible charCount = {}
// loop through str 
// condition  if charCount  change the value 
//  if its exists ++ increment the count
// else  key value of 1 intalize = 1 
// return charCount 
// log count charcter  , hello 


function charCount(str) {
    str = str.toLowerCase();
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-z]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}


function charCount(str) {
    str = str.toLowerCase();
    const obj = {};
    for (let char of str) {
        if (/[a-z]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}


function charCount(str) {
    str = str.toLowerCase();
    const obj = {};
    for (let char of str) {
        if (/[a-z]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log(charCount('dania hi'));
//===================================================================
//ex2 
yygidpod
//===================================================================
//ex2 