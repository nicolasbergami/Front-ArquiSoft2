import Item from "./Item"
import React, { useEffect, useState } from "react"


//{productos = []}


const ItemList = () => {
    const [equipo, setEquipo] = useState([])
    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const Users = await data.json()
        setEquipo(Users)

    }


     return (
         <div className="container-cards">
 
             {equipo.map((prod) => <Item producto={prod} key={prod.id} />)}
         </div>
     )
    /*return (
        <div>
            <h1>Nuestros productos</h1>
            <ul>
                { equipo.map(item => (
                    <li key="item.id">{item.name}</li>
                ))}
            </ul>

        </div>
    )*/
}

export default ItemList