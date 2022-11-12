import { stock } from "../data/data"



export const pedirDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const Users = await data.json()
    return new Promise( (resolve, reject) => {
    
            setTimeout(() => {
                resolve(Users)
            }, 1000)
        } )
}
