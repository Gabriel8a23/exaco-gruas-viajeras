import { React, useRef, useState } from 'react';
import Popup from './Popup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export const Contacto = () => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env
  const formRef = useRef()

  const [successPopup, setSuccessPopup] = useState(false)
  
  function onSubmit(e) {
    e.preventDefault()
    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, formRef.current, REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        setSuccessPopup(true)
      }, (error) => {
        console.log(error.text)
      })
  }
  
  return (
    <div>
      <Helmet>
        <title>Exaco Grúas Viajeras | Contacto</title>
        <meta name="description" content="Soluciones en grúas viajeras: Grúa Pórtico, Monopuente, Bipuente, Grúa Radial. Servicio de calidad en toda la república mexicana. Cotización sin compromiso." />
        <link rel="canonical" href="/contacto"/>
      </Helmet>
      <Popup trigger={successPopup} setTrigger={setSuccessPopup}>
        <h3 className="text-secondary">Gracias por contactarnos</h3>
        <p>Uno de nuestros especialistas estará en contacto con usted pronto.</p>
      </Popup>
      <div className="text-bg-primary text-center mt-3"><h1>Solicita tu Cotización</h1></div>
      <Container>
        <Form ref={formRef} onSubmit={onSubmit}>
          <div className="row align-items-stretch mb-3 mt-3">
            <h2>Platícanos de tu proyecto para asesorarte o describe el producto que deseas cotizar.</h2>
          </div>
          <div className="row align-items-stretch mb-3 mt-3">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" type="text" placeholder="Nombre:" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control name="phone" type="tel" placeholder="Teléfono:" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control name="email" type="email" placeholder="Correo electrónico:" required />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control name="message" as="textarea" placeholder="Deja tu mensaje aquí" style={{ height: '100px' }} required />
              </Form.Group>
            </div>
          </div>
          <div className="row align-items-stretch mb-3 mt-3">
            <div className="col-md-6">
              <div classNameName="d-grid gap-2">
                <Button variant="secondary" type="submit">
                  <div className="text-whiet mb-1">Enviar</div>
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Container>
      <Container>
        <p className="text-center">
          <a className="text-info" href="/aviso-de-privacidad">Aviso de Privacidad</a>
        </p>
      </Container>
    </div>
  )
}
