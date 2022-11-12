import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../img/bici banner 1.jpg';
import banner2 from '../img/bici banner 2.jpg';
import banner3 from '../img/bici banner 3.png';
import '../Components/components.css';
import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos"
import ItemList from "./ItemList";
import axios from "axios"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../firebase/config'
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
    await axios.get("https://jsonplaceholder.typicode.com/users")
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
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()
          || elemento.address.city.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        )) {
        return elemento;
      }
      if(productos.length == 0){
        setLoading(true)
      }else{
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
            src={banner1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">Hasta 50% OFF</h3>
            <p className="CAPTION_CARROUSEL">En la mayoria de nuestros productos</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagen_carrousel"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="CAPTION_CARROUSEL">Envios a todo el País</h3>
            <p className="CAPTION_CARROUSEL">
              Vía ANDREANI
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2 className="productos-h2">Nuestros Productos</h2>
        <div>

          <div className="containerInput">
            <input className="form-control inputBuscar" value={busqueda} placeholder="busca tu propiedad" onChange={HandleChange} />
            <button className="btn btn-success btnBusqueda"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> </button>

          </div>
          <div>

            {
              loading
                ?<div> 
                <h2 text-align="center">Cargando...</h2>
                <br/>
                <h2 text-align="center">No se encuentran Inmbuebles con esas caracterisiticas.</h2>
                </div>
                :


                /*<div className="table-responsive">
                <table className="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Teléfono</th>
                      <th>Nombre de Usuario</th>
                      <th>Correo</th>
                      <th>Sitio Web</th>
                      <th>Ciudad</th>
                      <th>Empresa</th>
                    </tr>
                  </thead>
         
                  <tbody>
                    {productos && 
                    productos.map((producto)=>(
                      <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.name}</td>
                        <td>{producto.phone}</td>
                        <td>{producto.username}</td>
                        <td>{producto.email}</td>
                        <td><Link to={`/item/${producto.id}`} className="btn btn-primary " >Ver Más</Link></td>
                        <td>{producto.address.city}</td>
                    
                        <td>{producto.company.name}</td>
                      </tr>
                    ))}
                  </tbody>
         
                </table>
         
              </div>*/
              <div>
                {productos && productos.map ((producto)=>(
              <Card key={producto.id} className="" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={producto.img} className="img-producto"  />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                <p>Precio: ${producto.precio}</p>
                  <p>Categoria: {producto.category}</p>
                </Card.Text>
                <Link to={`/item/${producto.id}`} className="btn btn-primary " >Ver Más</Link>
            
                
              </Card.Body>
            </Card>
            ))}
            </div>
            }
          </div>
        </div>
      </div>
    </div>

  )
}
export default ItemListContainer;









