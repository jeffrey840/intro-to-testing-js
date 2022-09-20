// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined) {return "Hello, World!"}
    return "Hello, " + input + "!";
}

function isFive(input) {
    if (input == "5" ) {return true}
    return false
}

function isEven(input) {
    let toNum = parseInt(input)
if (toNum % 2 == 0) {return true}
return false
}

function isVowel(char) {
    if (char === 'a'|| char === 'e'||char === 'i'||char === 'o'||char === 'u'||char === 'A'||char === 'E'||char === 'I'||char === 'O'||char === 'U'){return true;}
    return false;
}

function Add(a,b) {
   return Number(parseInt(a) + parseInt(b));
}
