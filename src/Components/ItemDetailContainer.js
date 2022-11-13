import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import '../Components/components.css';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        // setear el estado con un único producto

    }, [])

    return (
        <div>
            {
                loading
                    ? <div className="loader-container">
                        <div className="spinner"></div>
                        <h4 className="titulo-cargando">Cargando...</h4>
                    </div>
                    : <ItemDetail item={item} />
            }


        </div>
    )
}

export default ItemDetailContainer