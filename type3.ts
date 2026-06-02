interface User{
    id: number;
    username: string;
    email: string;
    role: string;
}

type updateUser = Partial<User>;

const updatedUser:updateUser = {
    username:"Abdela"
}

interface Product{
    id:number;
    name: string;
    price: number;
}

type UpdatePruduct = Pick<Product,"name" | "price">;

const updatedProduct:UpdatePruduct = {
    name:"Aamir",
    price:50

}

type ProductWithoutPrice = Omit<Product , "price">
const productOutofPrice:ProductWithoutPrice = {
    id:2,
    name: "Asli",
}

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

interface User2 {
    id: number;
    name:string;
}

const response:ApiResponse<User2> = {
    success:true,
    data:{
        id:1,
        name: "firo"
    }
}

const data:unknown = "typescript";
const text = data as string;

console.log(updatedProduct)
console.log(productOutofPrice)
console.log(text.toUpperCase())
console.log(response)
console.log(response.data)