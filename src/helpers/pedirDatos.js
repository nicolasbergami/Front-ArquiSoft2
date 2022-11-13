import { stock } from "../data/data"



export const pedirDatos = async () => {
    const data = await fetch('http://localhost:3010/productos')
    const Users = await data.json()
    return new Promise( (resolve, reject) => {
    
            setTimeout(() => {
                resolve(Users)
            }, 1000)
        } )
}
