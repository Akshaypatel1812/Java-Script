let arr=[0,1,2,3,4,5]

console.log(arr);

arr.push(9);
arr.push(18);
arr.pop()

arr.unshift(50);   //add 50 at index 0
arr.shift();       //remove 50 from index 0
console.log(arr);

let newArr=arr.join();
console.log(newArr);

//difference between slice and splice
let myArr=[0,1,2,3,4,5];

let sp=myArr.slice(1,3);
console.log(sp);           //that gives elements 1,2
console.log(myArr);        //it gives hole Array

let sl=myArr.splice(1,3);
console.log(sl);           //that gives elements 1,2,3 & and cut this given array element
console.log(myArr);        //it gives o,4,5
