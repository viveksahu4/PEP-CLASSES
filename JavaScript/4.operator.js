// 1) Arithmetic Operators (+ , - , * , / , % , **)
// 2) Assignment Operators (+= , -=, *=, /=)
// 3) Comparison Operators (== , === , != , !== , > , < , >= , <=)
// 4) Logical Operators ( && , || , !)
// 5) Unary Operators (X++ , ++X)
// 6) Ternary Operator (?:)
// 7) Bitwise Operators (& , | , ^ , ~ , << , >>)


// 1) 
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a %b);
console.log(a ** b);


//2)
let c = 15;
let d = 20;
console.log(c+=d);
console.log(c-=d);
console.log(c*=d);
console.log(c/=d);


//3)
let e = true;
let f = "false";
console.log(e==f);
console.log(e===f);
console.log(e!=f);
console.log(e!==f);
console.log(c > d);
console.log(c<d);
console.log(c >= d);
console.log(c <= d);


// 4)
let p = 1;
let q = 0;
console.log(p && q);
console.log(p || q);
console.log(!p);
console.log(!q);

// 5)
console.log(p++);
console.log(++q);
console.log(p);

// // 6)
// let z = prompt("Enter your age: ");
// let ans = (z >= 18)?"you are adult you can vote ":"you are not adult you can't vote"; 
// console.log(ans);



//7)
let u = 45;
let v = 55;
console.log(u & v);
console.log(u | v);
console.log(u ^ v);
console.log(~u);
console.log(~v);
console.log(u >> v);
console.log(u << v);

