// singleton
// Object.create

// object literals

//This is the simple object

let userdata={
    username:"Akshay",
    userEmail:"akpatel@gmail.com",
    useriteams:4
}

console.log(userdata);
console.log(userdata.userEmail);

userdata.userEmail="akpatel@google.com"
console.log(userdata);

Object.freeze(userdata)
userdata.username="patel"
console.log(userdata);        //here it not gives an error but not change the username because we freeze the data

//second way to create an objects
let tinderUser={}

tinderUser.Email="akshay@google.com"
tinderUser.Name="akshay"

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);

const users=[
    {
        id:1,
        email:"p&google.com"
    },
    {
        id:2,
        email:"p&microsoft.com"
    },
    {
        id:3,
        email:"p&chatgpt.com"
    },
]

console.log(users[1]);

//here we see how to merge objects like array


