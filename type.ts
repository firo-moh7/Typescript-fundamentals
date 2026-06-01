interface GroupMatcher{
    id : number;
    subject : string;
    members : number;
    online : boolean;
}

interface user{
    id : number;
    title : string;
    content : string;
    author : string;
    published : boolean;
    catagory? : string; 
}

const user5 : user = {
    id : 1,
    title : "Rading a Book",
    content : "Reading a book is very essential for the well being of oneself",
    author : "By Aamir",
    published : true
}

const user6 : user = {
    id : 2,
    title : "Learning Typescript",
    content : "Typescript is way more better than javascript because it catches error early",
    author : "Aamir",
    published : false,
    catagory : "Programming",

}

const users : user[] = [
    user5,
    user6
];


const group1: GroupMatcher = {
    id : 1,
    subject : 'Typescript',
    members : 10,
    online : true
}


const group2:GroupMatcher = {
    id : 2,
    subject : "React",
    members : 20,
    online : false

}

function PrintGroup(group : GroupMatcher){
    console.log(group)
}

interface User {
    id: number;
    username: string;
    email: string;
    role: string;
}

const user1: User = {
    id : 1,
    username: "firo",
    email: "firo@gmail.com",
    role: "developer"
}

const user2: User = {
    id: 2,
    username: "sabbo",
    email : "sabbp@gmail.com",
    role: "importer",
}

const user3: User = {
    id: 3,
    username: "mubi",
    email: "mubi@gmail.com",
    role: "manager"
}

const Users:User[] = [
    user1,
    user2,
    user3
];

function output(users:User[]) :void {
    users.forEach((user)=>{
        console.log(
           `Id: ${user.id}
            Username: ${user.username}
            email: ${user.email}
            role: ${user.role}`
        );
       

    });
}

PrintGroup(group1)
PrintGroup(group2)
output(Users)