let nums=[1,2,3,4,5,6,7,8,9];

nums.forEach((item)=>{
    console.log(item+10);
})

//we can do this by using map

let myNums=nums.map((nums)=>{
    return nums*10
})

console.log(myNums);

const newNums = nums
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);