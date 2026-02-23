// terations.js / iterator.js
// ismai then hote h first hota h


//1 forEach : calls a function once for each element in an array 
//2 forIn : it used for iteration ocer the iteravles of an object once bt one. it doesn't guranty order, not ideal for array;
//3 forOf: used for iterate over to the iterables object of arrays, stirngs, mao, set etc.


const students = ["vivek", "riya", "pogo", "qram","siyam"];



//1 forEach: calls a function once for each element in an array 
students.forEach((stud)=>{
    console.log(stud);
})



//2 forIn : it used for iteration over the iterables of an object one by one . it doesn't guaranty order, not  ideal for array

for(let index in students){
    console.log(index,students[index]);
}



//3 forOf: used for iterate over to the iterables objects of arrays, string,map,set,etc.
for(let name of students){
    console.log(name);
}