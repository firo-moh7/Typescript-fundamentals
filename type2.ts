type Role = "admin" | "user" | "manager";

interface Employee {
    id: number;
    name: string;
    role: Role;
}

const employee1:Employee = {
    id : 1,
    name: "abdi",
    role: "user"
};

const employee2:Employee = {
    id : 2,
    name: "abdela",
    role: "admin"
};
const employee3:Employee = {
    id : 3,
    name: "aamir",
    role: "manager"
};

const employees:Employee[] = [
    employee1,
    employee2,
    employee3
];

function printEmployee(employees:Employee[]):void {
    employees.forEach((employee) => {
    console.log(
       `
        ID: ${employee.id}
        Name: ${employee.name}
        Role: ${employee.role}
        `
    )
     });
}

function getFirst<T>(employees:T[]){
    return employees[0]
};
printEmployee(employees);
const firstEmployee = getFirst(employees);
console.log(firstEmployee)
console.log(firstEmployee?.name)
