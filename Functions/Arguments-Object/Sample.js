'use strict'

function bar(a=1) {
    arguments[0] = 100;
    return a;
    }
console.log(bar(10)); // 10  

function zoo(a) {
    arguments[0] = 100;
    return a;
    }
console.log(zoo(10)); // 100