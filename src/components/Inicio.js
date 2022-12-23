import React from 'react';
import { Slider } from './slider-components/Slider';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div>
      <Helmet>
        <title>Exaco Grúas Viajeras - Provedores de grúas viajeras.</title>
        <meta name="description" content="Soluciones en grúas viajeras: Grúa Pórtico, Monopuente, Bipuente, Grúa Radial. Servicio de calidad en toda la república mexicana. Cotización sin compromiso." />
        <link rel="canonical" href="/"/>
      </Helmet>
      <Slider />
      <div className="text-bg-primary text-center p-2"><h1>Servicios para Grúas Viajeras y Polipastos</h1></div>
      <Container>
        <div className="row mb-5 mt-5">
          <div className="col-sm text-center">
            <h2 className="text-secondary mb-3">¿Quiénes somos?</h2>
            <p>En EXACO ofrecemos soluciones que se ajustan a tu proyecto, nos epsecializamos en el diseño e instalación de equipos de elevación y polipastos. Contamos con personal capacitado para asesorarte y proporcionar una solución óptima a las necesidades de tu proyecto.</p>
            <p>A través de los años, hemos creado un equipo de trabajo experimentado, comprometido y confiable, para entregar siempre nuestros productos y servicios, con un valor agregado que supere las expectativas y los requerimientos de nuestros clientes.</p>
          </div>
          <div className="col-sm text-center">
            <h2 className="text-secondary mb-3">Nuestro Compromiso</h2>
            <p>Lo más importante para nuestra empresa es darle al cliente productos y servicios de calidad y asegurar su satisfacción con soluciones eficientes y a la medida.</p>
            <div className="mb-3">
              <Image src="https://academiahispanadepnl.com/wp-content/uploads/2018/12/Sello-garantia-100x100-satisfaccion.png" fluid="true" />
            </div>
          </div>
        </div>
      </Container>
      <div className="text-bg-primary text-center p-2 mb-3"><h2>Asesórate con uno de nuestros especialistas.</h2></div>
      <Container className="mt-3 mb-4">
        <div className="row">
          <div className="col-sm">
            <Card>
              <Card.Img className="content-image" variant="top" src="https://i0.wp.com/equiposdeelevacion.com.mx/wp-content/uploads/2022/05/1546542895317.jpg?resize=600%2C450&ssl=1" />
              <Card.Body className="text-bg-info text-center">
                <div className="mt-3 mb-3">
                  <Card.Title>Grúas y equipos de elevación</Card.Title>
                </div>
                <Card.Text>
                  Herramientas móviles diseñadas para transportar carga de un lugar a otro, suspendidas a gran altura. Gracias a su gran versatilidad y modularidad ofrecen soluciones de movilidad flexibles.
                </Card.Text>
                <div className="mb-3">
                  <Button className="me-3" variant="secondary" as={Link} to="/contacto">Cotiza ahora</Button>
                  <Button variant="primary" as={Link} to={"/gruas-viajeras"}>Leer más</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm">
            <Card>
              <Card.Img className="content-image" variant="top" src="https://www.grupossamexico.com/wp-content/uploads/2020/06/tipos-de-polipastos.jpg" />
              <Card.Body className="text-bg-info text-center">
                <div className="mt-3 mb-3">
                  <Card.Title>Polipastos</Card.Title>
                </div>
                <Card.Text>
                  El polipasto eléctrico es un equipo para los trabajos de elevación. Puede levantar y bajar los objetos en dirección vertical. Instalado con una grúa pórtico, viajera o un soporte, este equipo es capaz de mover a través de la viga o riel.
                </Card.Text>
                <div className="mb-3">
                  <Button className="me-3" variant="secondary" as={Link} to="/contacto">Cotiza ahora</Button>
                  <Button variant="primary" as={Link} to={"/polipastos"}>Leer más</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
