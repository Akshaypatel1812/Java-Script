// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);        //here we can not iterate objects by using for of loop
// }

//here we use for in loop to iterate objects 
//for in loop always gives key 

for (const key in myObject) {
    // console.log(key);            //here key prints only key1 & key2
    // console.log(`${key} is ${myObject[key]}`);
}

//lets dee the difference between for of & for in loop
let a=["Akshay","Patil","Jay"];

for (const iterator of a) {
    // console.log(iterator); //for of loop always gives an object
}

for (const key in a) {
//    console.log(key);       //for in loop always gives you key if you want to print object then use a[key]
//    console.log(a[key]);
}

//lets see for each loop
a.forEach(function (i){
    console.log(i);
})

//we can also make this using arrow function
a.forEach( (j) => {
    console.log(j);
})

//if we want to print full details
a.forEach((i,index,a)=>{
    console.log(i,index,a);
})

//interesting
let obj=[
    {
        lName:"Java",
        lExtension:"java"
    },
    {
        lName:"python",
        lExtension:"py"
    },
    {
        lName:"Java Script",
        lExtension:"js"
    }
]

obj.forEach((item)=>{
    if(item.lExtension=="js"){
    console.log(item.lName);
    }
})