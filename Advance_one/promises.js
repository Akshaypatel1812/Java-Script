let promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('promise one');
       reject();
    },1000)
})

promiseOne.then(function(){
    console.log('promise one resolved');
}).catch(function(){
     console.log('promise one rejected');
})


//another way to erote this
new Promise(function(resolve, reject){
    setTimeout(function(){
             //here we can also pass the parameter in reject and resolve both
        reject('something went wrong')
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
}).catch(function(err){
    console.log(err);
})

let promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(error){
            reject('Error Occured')
        }else{
            resolve({userName:"Akshay",password:"12345"})
        }
    },1000)
})

promiseFour.then(function(data){
     console.log(data);
     return data.password
}).then(function(pass){
    console.log(pass);
}).catch(function(message){
    console.log(message);
}).finally(function(){                            //finally 100%executes
    console.log('neither resolved nor rejected');
})

//lest see async await in js to handle promises
let promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(error){
            reject('Error Occured in promise 5')
        }else{
            resolve({userName:"promiseFive",password:"5"})
        }
    },1000)
})

async function fifthPromise(){
    try {
        console.log(await promiseFive);
    } catch (error) {
        console.log(error);
    }
}

fifthPromise();

//lets fatch the api 
fetch('https://api.github.com/users/Akshaypatel1812').then(function(data){
    return data.json();
}).then((jsondata)=>{
   console.log(jsondata);
}).catch(function(error){
   console.log(error);
})

