let str1 = "vivek";
let str2 = str1;
console.log(str1 == str2);

let marks = [89, 91, 56, 34];
let newmarks = marks;
console.log(marks == newmarks);
marks = [89,91,222];
console.log(marks == newmarks);




const arr = [1,2,3,4,5,99];
console.log(arr);

//assignment is bbot possible in array
//arr = [1,2,3,4,7];
// console.log(arr);

console.log(arr.push(9));
console.log(arr);

//multi dimensional array or nested array

let marks1 = [
    [98,76],
    [69,45],
    [99,43],
    [88,33],
];

console.log(marks1);
console.log(marks1[3],[1]);