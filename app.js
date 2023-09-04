let someString = '10, 90, 23, 2'.split(', ');
let result = 0;

for (let i = 0; i < someString.length; i++) {
    result += +someString[i];
}

console.log(result);
