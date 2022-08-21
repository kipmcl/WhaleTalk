let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];


for (let i = 0; i < input.length; i++) {
     //console.log('i is ' +i); 
    for (let j = 0; j < vowels.length; j++) {
        //console.log('j is ' +j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i])
        } 
    }
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
    if (input[i] === 'u') {
        resultArray.push(input[i])
}
}
let final = resultArray.join('').toLocaleUpperCase();
console.log(final);
