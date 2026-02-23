// 2 ways to declare objects : 
//A. Constructor way : 


const obj = new Object();
obj.name = "vivek";
console.log(obj);
console.log(typeof obj);

//B . Literals:


// I . CHAGING OBJECT VALUE 
let users = {
    user1:{
        name:"abc",
        age:26,
        user2:{
            name:"hirdesh",
            age:55,
            user3:{
                name:"harry",
                age:21,
            },
        },
    },
};

console.log(users["user1"]);
console.log(users.user1.user2.user3.name);
console.log(users.user1.age);
console.log(users);

//II. OBJECT INSIDE OBJECT;
let data = {
    user1:{
        name: "utkarsh",
        age: 25,
    },
    user2:{
        name:"Amanjothsingh",
        age: 20,
    },
    user3:{
        name: "harrydon",
        age: 190,
    },
};


console.log(data["user3"].age);




//IV object inside an array:
let arr = [
    {
        name: "moye",
    },
    {
        name:"ayra",
        "roll number":1234,

    },
    {
        name:"kanu",
        "roll number":23421,
    },
];

console.log(arr[2].name);


// V . merge object 
let obj1 = {name: "vinyak", age: 98};
let obj2 = {name: "gfvin", age:100};
let obj3 = Object.assign(obj1,obj2);
console.log(obj3);
let obj4 = {...obj1, ...obj2};
console.log(obj4);
