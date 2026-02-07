// // Primitive Data Types
// 1)Number
// 2)String
// 3)Boolean
// 4)undefined
// 5)null
// 6)BigInt
// 7)Symbol



//1--> number 
let a = 10;
let b = 10.5;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

//2-->string 
let c =  "vivek sahu ";
let d = "venue 502";
console.log(c);
console.log(d);
console.log(typeof c);
console.log(typeof d);

//3--> boolean 
let e = true;
console.log(e);
console.log(typeof e);

//4-->undefined

let f;
console.log(f);
console.log(typeof f);

//5-->null

let g = null;
console.log(g);
console.log(typeof g);

//6-->bigInt
let h = 12345567890544n;
console.log(h);
console.log(typeof h);

//7--> symbol
let id = Symbol("vivek");
console.log(id);
console.log(typeof id);



// // Non-Primitive
// 1)Object
// 2)Array
// 3)function

// 1--> object 
let student = {name: "vivek", age: 20};
console.log(student);
console.log(typeof student);


//2--> array 

let stu1 = ["vivek", "Hello", "Java","Script","Programming"];
console.log(stu1);
console.log(typeof stu1);
console.log(Array.isArray(stu1));
console.log(stu1 instanceof Array);


//3-->function 

function hello(){
    console.log("Hello javascript");
}
hello();
