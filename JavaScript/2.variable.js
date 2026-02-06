//1 var: re declaration /and updating allowed and also this is global scope 
//2 let : can't declaration but updating this allowed and this is block scope 
//3 const: both re declaration and updating not allowed here and also this is a block scope 


// 1 var 

var a = 20;
console.log(a);

a = 28;
console.log(a);


var globalvar = "i'm a global var";
function checkglobalvariable(){
    console.log(globalvar);
}
console.log(globalvar);
checkglobalvariable();




//2 let

let  c = 18;
console.log(c);

{
    let _blockscopevariable = "im a block scope";
    console.log(_blockscopevariable);
}


//3 const
const d = 18;
console.log(d);
{
    const checkblockscopevariable = "im also block scope";
    console.log(checkblockscopevariable);
}
