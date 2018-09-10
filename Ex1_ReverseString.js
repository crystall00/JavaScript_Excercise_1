function reverseString (string_input){
    let splitString = string_input.split("");
    let reverseSplitString = splitString.reverse();
    let reverseStr = reverseSplitString.join("");
    return reverseStr;
}

console.log(reverseString("hello") );