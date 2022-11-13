import { useState } from "react"
import '../Components/components.css'
import Contador from './Contador'
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)
    const { cart, addToCart, isInCart } = useCartContext()

    const handleAgregar = () => {
        const itemToCart = {
            img:item.img,
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad,
            

        }

        addToCart(itemToCart)
    }
    return (
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h3>{item.nombre}</h3>
                    <h6 class="card-subtitle">Compra Totalmente Segura em InmoGroup</h6>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center"><img src={item.img} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                        <h2 class="mt-5 producto-precio">
                                Precio: ${item.precio}
                            </h2>
                            <h4 class="box-title mt-5">Descripcion</h4>
                            <p>{item.descripcion}</p>
                            <p>Provincia: {item.provincia}</p>
                            <p>Ciudad: {item.ciudad}</p>
                            
                           
                          
                          
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">Detalles de Producto</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                    <tr>
                                            <td>titulo</td>
                                            <td>{item.titulo}</td>
                                        </tr>
                                        <tr>
                                            <td width="390">Provincia</td>
                                            <td>{item.provincia}</td>
                                        </tr>
                                        <tr>
                                            <td>Ciudad</td>
                                            <td>{item.ciudad} </td>
                                        </tr>
                                        <tr>
                                            <td>barrio</td>
                                            <td>Año {item.barrio}</td>
                                        </tr>
                                        <tr>
                                            <td>precio </td>
                                            <td>{item.precio} USD</td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Metros Cuadrados</td>
                                            <td>{item.Color}</td>
                                        </tr>
                                        <tr>
                                            <td>Categoria</td>
                                            <td>{item.category}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>








    )
}
export default ItemDetail