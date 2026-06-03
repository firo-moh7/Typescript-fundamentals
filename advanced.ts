function printItem<T extends {length:number}> (item:T) : void {
    console.log(item.length)
}

enum Status {
    approved=1,
    pending,
    rejected
}

type Employee = {
    readonly id: number;
    name:string;
    role: string 
} 



type Customer = {
    birthday : Date;
}
function getCustomer(id:number) : Customer | null |undefined  {
    return id === 0? null : {birthday : new Date()}

}
const customer = getCustomer(1);


function getProperty<T,K extends keyof T>(
    obj:T,
    key:K
){
    return obj[key]
}

const employee:Employee = {
    id : 1,
    name: "firo",
    role: "developer"
}

const roles: Record<string, number> = {
    admin: 1,
    user: 2,
    manager: 3
};

console.log(getProperty(employee , "name"))
console.log(getProperty(employee , "role"))
console.log(roles.admin)

console.log(customer?.birthday);

const myStatus:Status = Status.pending;
console.log(myStatus);

printItem("hello world")
