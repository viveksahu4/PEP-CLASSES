// **********************************************************************
// // string are Immutable( it cannot be changed by index assignment):
// **************************************************************************





//1.trim : removed extra whitespace from both ends 
let vivekmesg = " meet me after your class ";
console.log(vivekmesg);
let newmesg = vivekmesg.trim();
console.log(newmesg);


//2. uppercase : convert string to uppercase
let uppercase = vivekmesg.toUpperCase();
console.log(uppercase);


//3. lowercase : convert string to lowercase:
let lowercase = "HELLO BHAU KAISE HO";
console.log(lowercase.toLowerCase());


//4 indexOf: return index of 1st occurence of substring
let textmsg = "Riya bewafa hai";
console.log(textmsg.indexOf("bewafa"));


//5 method chaining combining multiple methods;
let fruit = "    kiwi";
let fruittrim = fruit.trim();
console.log(fruittrim);


let fruitafterchaining = fruit.trim().toUpperCase();
console.log(fruitafterchaining);

//6 slice : extracts part part of the string(start,end-1)

let msg1 = "Is this a pep classes";
console.log(msg1.slice(-3));
console.log(msg1.slice(3));
console.log(msg1.slice(3,9));


//7 replace : replace 1st occurance of substring:
let txt = "i love moon";
console.log(txt);
let newtxt = txt.replace("moon","Don");
console.log(newtxt);

//8 repeat : repats the string for n times:
let message = "hello harsh bhai";
console.log(message.repeat(15));

