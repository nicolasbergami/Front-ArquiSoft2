import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import '../Components/components.css'
const Checkout = () => {




    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        cp: ""
    })

    const orden = {
        comprador: values,
        items: cart,
        total: cartTotal(),
        fecha: new Date().toString()

    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(orden)
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
            .then((doc) => {
                terminarCompra(doc.id)
            })

    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }
    return (
        <div className='body-check'>
            <h2 className='titulo-checkout'>Checkout</h2>
            <h5 className='container'>Llena tus datos para el envio</h5>

            <form className="container" onSubmit={handleSubmit} >
                <div className='div-form'>
                    <input
                        name='nombre'
                        onChange={handleInputChange}
                        type={"text"}
                        value={values.nombre}
                        placeholder="Nombre"></input>
                    <input
                        name='email'
                        onChange={handleInputChange}
                        type={"email"}
                        value={values.email}
                        placeholder="Email"></input>
                </div>
                <div className='div-form'>
                    <input
                        name='telefono'
                        onChange={handleInputChange}
                        type={"text"}
                        value={values.telefono}
                        placeholder="Teléfono"></input>


                    <input
                        name='direccion'
                        onChange={handleInputChange}
                        type={"text"}
                        value={values.direccion}
                        placeholder="Dirección"></input>
                </div>
                    <div className='div-form' >
                        <input
                            name='Ciudad'
                            onChange={handleInputChange}
                            type={"text"}
                            value={values.ciudad}
                            placeholder="Ciudad"></input>
                        <input
                            name='cp'
                            onChange={handleInputChange}
                            type={"text"}
                            value={values.cp}
                            placeholder="Codigo Postal"></input>
                    </div>
                    <button type='submit' className='btn btn-success mx-3'>Enviar</button>

            </form>
        </div>
    )
}

export default Checkout