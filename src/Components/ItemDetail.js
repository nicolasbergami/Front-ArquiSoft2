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
                    <h3>{item.name}</h3>
                    <h6 class="card-subtitle">Compra Totalmente Segura con SSL</h6>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-6">
                            <div class="white-box text-center"><img src={item.img} class="img-responsive" /></div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-6">
                            <h4 class="box-title mt-5">Descripcion</h4>
                            <p>{item.desc}</p>
                            
                            <h2 class="mt-5">
                                Precio: ${item.precio}
                            </h2>
                            {
                                isInCart(item.id)
                                    ? <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                                    : <Contador
                                        max={item.stock}
                                        counter={cantidad}
                                        setCounter={setCantidad}
                                        handleAgregar={handleAgregar}
                                    />
                            }
                          
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3 class="box-title mt-5">Detalles de Producto</h3>
                            <div class="table-responsive">
                                <table class="table table-striped table-product">
                                    <tbody>
                                        <tr>
                                            <td width="390">Marca</td>
                                            <td>{item.Marca}</td>
                                        </tr>
                                        <tr>
                                            <td>Llantas</td>
                                            <td>{item.Llantas} Pulgadas</td>
                                        </tr>
                                        <tr>
                                            <td>Modelo</td>
                                            <td>Año {item.Modelo}</td>
                                        </tr>
                                        <tr>
                                            <td>Peso Soporte Maximo</td>
                                            <td>{item.Peso} Kg</td>
                                        </tr>
                                        <tr>
                                            <td>Frenos</td>
                                            <td>{item.Frenos}</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
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