function greeding(username='default'){
    return `${username} is logged in`
}

console.log(greeding("akshay"));

function reverseArray(arr){
    let start=0
    let end=arr.length-1;
    while(start<end){
        let temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }

    return arr
}
let array=[1,2,3,4,5]
console.log(array);
console.log(reverseArray(array))

function reverseString(str){
    let arr=str.split('')
    let start=0
    let end=arr.length-1;
    while(start<end){
        let temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }

    let ans=arr.join('')

    return ans

}

let s="Akshay"
console.log(reverseString(s));