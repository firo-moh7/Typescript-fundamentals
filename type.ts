interface GroupMatcher{
    id : number;
    subject : string;
    members : number;
    online : boolean;
}


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