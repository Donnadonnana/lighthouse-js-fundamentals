const isEven = function (num){
    return num%2 === 0;
}
//make a boolean, to check if it's true or false as a even number. 
const tenIsEven = isEven (10);
const elevenIsEven = isEven (11); 

console.log (tenIsEven); // return true
console.log (elevenIsEven); //return false

// you can also check console.log (isEven(10));