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

function isVowel(i) {
    if (typeof i == 'string' && i == "a" || "e" || "i" || "o" || "u") {return true}
    return false
}

// if (str === "a" || "e" || "i" || "o" || "u")
