import { useState } from "react";
import { stock } from "../data/data";

const Contador = ({max,counter,setCounter,handleAgregar}) => {
   

    const handleSuma = () => {
        
        if (counter<max)
        setCounter(counter + 1)
    }

    const handleResta = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
   
    return (
        <div className="botton-producto">

            
            <button onClick={handleResta} className="btn btn-outline-danger">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSuma} className="btn btn-primary">+</button>
            <div>
                <button onClick={handleAgregar} className="btn btn-warning btnAddCart" >Agregar al carrito</button>
            </div>
        </div>


    );


}
export default Contador;