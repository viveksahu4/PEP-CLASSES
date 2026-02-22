let student = ["vivek","1160361", 83,"Lovely Professional University"];
console.log(student);
//1 arrays are mutablle 
student[1] = 1160345888886;
console.log(student);

//2 accessing value using index in array 
console.log(student[3]);

//3 accessing the length of array 
console.log(student.length);

//4 if you want to chek present value in an array : 
console.log(student[8]); //indefined result will come 

//5 array type is object 
console.log(typeof student);


//6 Accessing rray item particular element from the student:
console.log(student[0][2]);



// ***********************************************
// Array Methods
// ***********************************************************


let car = ["audi", "BMW", "maruti", "nano"];

//1 push : add in lasr place of array
car.push("volvo");
console.log(car);

//2 pop remove in last place of array 
car.pop();
console.log(car);


//3 unshift: add at start
car.unshift("mercedes");
console.log(car);

//4 shift: remove from start 
car.shift();
console.log(car);

//5 indexof return the index of something 
console.log(car.indexOf("maruti"));
console.log(car.indexOf("nano"));

//6 includes: tells wheather the value is present in array or not : it return in true and false 
console.log(car.includes("XUV"));
console.log(car.includes("maruti"));


//7 concat : merges 2 arrays:
let arr1 = ["apple", "bananas"];
let arr2 = ["graphs", "kiwi"];
console.log(arr2.concat(arr1));

//8 reverse: reverse an array:
let rev = [1,2,3,44,5,6];
console.log(rev.reverse());

//9 slice: copies a portion of an array:
let letter = ["a" , "b" , "c" , "d", "e","f"];
console.log(letter.slice(-2));
console.log(letter.slice(2,5));
console.log(letter.slice(3));
console.log(letter.slice());


//10 splice : it is used to replace / removing and adding a new element in an array
let fruit = ["apple", "bananas","kiwi", "pineapple"];
console.log(fruit);
console.log(fruit.splice(0,2));
console.log(fruit.splice(0,2,"graphss","moyemoye"));
console.log(fruit.splice(3));
console.log(fruit);



//11 sort: sorts an array : it doesn't sort number or letters in ascending order . it sort as per that character or letter associated string value

let letters = ["a", "d","i","c","b"];
console.log(letters.sort());
let num = [1,10,16,21,2,20];
console.log(num.sort());

