import { useCartContext } from "../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link, Navigate } from "react-router-dom"
import '../Components/components.css'



const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    // if (cart.length === 0) return <Navigate to="/"/>

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr />
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>

            </div>
        )
    }


    return (
        <div>
            <h2>Tu carrito</h2>

            <div className="container my-5">




                {cart.map((item) => (

                    <div key={item.id} className="cart-products" >
                        <img className="cart-img" src={item.img} />
                        <div className="collection-cart">
                            <h3 className="separar">{item.nombre}</h3>
                            <p className="separar">Precio: {item.precio}</p>
                            <p className="separar">Cantidad: {item.cantidad}</p>
                            <button onClick={() => removeItem(item.id)} className="remove-btn separar btn btn-danger mx-2"><BsFillTrashFill /></button>

                        </div>
                        

                    </div>
                ))}


                <div className="proced-checkout">
                    <h4>Total: ${cartTotal()}</h4>
                    <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                    <Link className="btn btn-success mx-3" to="/checkout">Terminar mi compra</Link>
                </div>
            </div>
        </div>

    )
}

export default Cart