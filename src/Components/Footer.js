import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Footer = () => {

return(
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Conectate con nuestras redes sociales</span>
      </div>

      <div>
        <a href='facebook.com/coderhouse' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='twitter.com/coderhouse' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='google.com' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='instagram.com/webzone.js' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='linkedin.com/nicolasbergami' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='github.com/nicolasbergami' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Nicolas Bergami
            </h6>
            <p>
              Estudiante de Coderhouse, FullStack Developer Student
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Productos Categorias</h6>
            <p>
            <Link to='/productos/Mountain' >Mountain </Link>
            </p>
            <p>
            <Link to='/productos/Racing' >Racing </Link>
            </p>
            <p>
            <Link to='/productos/Professional' >Professional </Link>
            </p>
           
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Links Rapidos</h6>
            <p>
            <Link to='/' >Home </Link>
            </p>
            <p>
            <Link to='/' >Sobre Nosotros </Link>
            </p>
            <p>
            <Link to='/cart' >Carrito </Link>
            </p>
           
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Cordoba,Argentina
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              nicolasbergami2013@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +54 353 5632678
            </p>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2022 Copyright:
      <a className='text-reset fw-bold' href='https://github.com/nicolasbergami'>
        nicolasbergami
      </a>
    </div>
  </MDBFooter>

)






}
export default Footer 