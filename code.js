// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name == 'undefined' || typeof name == 'boolean'){
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}

function isFive(x){
    if (x == 5) {
        return true;
    }
    return false;
}

function isEven(x){
    if (x % 2 === 0 && typeof x !== 'boolean'){
        return true;
    }else {
        return false;
    }
}

function isVowel(letter){
    switch(letter){
        case "a": case "A": case "e": case "E": case "i": case "I": case "o": case "O": case "u": case "U":
            return true;
    }
    return false;
}

function add(a,b){
    if(isNaN(a) || isNaN(b)){
        return "NaN";
    }else {
        return Number(a) + Number(b);
    }
}