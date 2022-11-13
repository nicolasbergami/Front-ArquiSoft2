import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import '../Components/components.css';
import { useEffect, useState } from "react";

import axios from "axios"
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';



const ItemListContainer = () => {


  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("")
  const [loading, setLoading] = useState(false)

  const peticionGet = async () => {
    await axios.get("http://localhost:3010/productos")
      .then(response => {
        setProductos(response.data)
        setTablaProductos(response.data)
      }).catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    peticionGet();
  }, [])
  const HandleChange = e => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }


  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (elemento.titulo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.ciudad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          || elemento.barrio.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ) {
        return elemento;
      }
      if (productos.length == 0) {
        setLoading(true)
      } else {
        setLoading(false)
      }
    });
    setProductos(resultadosBusqueda);
  }



  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  imagen_carrousel"
            src="https://clinmoo.com/wp-content/uploads/2018/10/makreting-inmobiliario-promotora-e1549293538608.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>InmoGroup</h3>
            <p>"Tu Inmobiliaria Preferida"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imagen_carrousel"
            src="https://i0.wp.com/moovemag.com/wp-content/uploads/2020/12/inversion-inmobiliaria.jpg?fit=700%2C459&ssl=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">Busca tu nuevo hogar en nuestra Web</h3>
            <p className="CAPTION_CARROUSEL">Todas nuestras viviendas</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen_carrousel"
            src="https://quispeymamani.com/blog/wp-content/uploads/2021/02/inversio%CC%81n-inmobiliaria-ingresos.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">INVERTI TU DINERO</h3>
            <p className="CAPTION_CARROUSEL">
              En proyectos en pozo
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2 className="productos-h2">Nuestros Clasificados</h2>
        <div>

          <div className="containerInput">
            <input className="form-control inputBuscar" value={busqueda} placeholder="busca tu propiedad" onChange={HandleChange} />
            <button className="btn btn-success btnBusqueda"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </button>

          </div>
          <div>

            {
              loading
                ? <div>
                  <h2 text-align="center">Cargando...</h2>
                  <br />
                  <h2 text-align="center">No se encuentran Inmbuebles con esas caracterisiticas.</h2>
                </div>
                :
                <ol className="container">
                  {productos && productos.map((producto) => (
                    <li key={producto.id} className="fila-producto">
                      <div>
                        <div className="imagen-producto">
                          <img src={producto.img} width="350" height="250px">
                          </img>
                        </div>
                        <div className="titulo-producto">
                        <h2 className="titulo-product" >{producto.titulo}</h2>
                        <h4 className="producto-precio">Precio: $USD{producto.precio}</h4>
                        <Link to={`/item/${producto.id}`} className="btn btn-primary " >Ver Más</Link>
                        </div>
                      </div>


                      
                    </li>

                  ))}
                </ol>
            }
          </div>
        </div>
      </div>
    </div>

  )
}
export default ItemListContainer;









