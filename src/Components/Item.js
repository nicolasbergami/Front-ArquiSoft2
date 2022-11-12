import Contador from "./Contador"
import '../Components/components.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const Item = ({ producto }) => {

  return (

    <Card className="" style={{ width: '18rem' }}>
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
    
  );
}

export default Item