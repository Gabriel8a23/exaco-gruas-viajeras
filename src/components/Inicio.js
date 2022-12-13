import React from 'react';
import { Slider } from './slider-components/Slider';
import { Helmet } from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
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
      <div class="text-bg-primary text-center p-2"><h1>Servicios para Grúas Viajeras y Polipastos</h1></div>
      <Container>
        <div class="row mb-3 mt-3">
          <p>Somos una empresa especializada en diseño, fabricación, montaje, puesta en marcha de Grúas Viajeras Monopuente,  Grúas Viajeras Bipuente, Grúa Pórtico y Grúa Radial con personal altamente capacitado y actualizado en temas de ingeniería, producción, innovación tecnológica y logística. Nuestra planta se ubica en la ciudad de Querétaro, punto estratégico industrial que nos permite  brindar atención y servicio en todo México.</p>
          <p>Lo más importante para nuestra empresa es la satisfacción de nuestros clientes. Es por ello que nuestro compromiso está enfocado en ofrecer productos y servicios que cumplan y superen sus expectativas.</p>
        </div>
        <div class="row mb-3">
          <div class="col text-center">
            <div class="row mb-5">
              <h2 class="text-secondary">Nuestro Compromiso</h2>
              <p> Lo más importante para nuestra empresa es la satisfacción de nuestros clientes. Es por ello que nuestro compromiso está enfocado en ofrecer productos y servicios que cumplan y superen sus expectativas.</p>
            </div>
            <div class="row mb-3">
              <div class="mb-3">
                <Button variant="primary" as={Link} to="/contacto">Cotiza ahora!</Button>
              </div>
            </div>
          </div>
          <div class="col">
            <Image fluid="true" src="https://www.munckcranes.com.mx/imagenes/gruas/landing/gruas-munck-portico-01.jpg" />
          </div>
        </div>
      </Container>
      <div class="text-bg-primary text-center p-2 mb-3"><h2>Cotiza nuestros servicios.</h2></div>
      <Container class="mt-3 mb-4">
        <CardGroup>
          <div class="row">
            <div class="col">
              <Card>
                <Card.Img variant="top" src="https://www.konecranes.com/sites/default/files/styles/5_7_small/public/2018-09/medium_konecranes_waste_to_energy_beinheim_france_scaldis_2012_008.jpg?itok=qmrB0Xho" />
                <Card.Body class="text-bg-info text-center">
                  <div class="mt-3 mb-3">
                    <Card.Title>Grúa Pórtico</Card.Title>
                  </div>
                  <div class="mb-3">
                    <Button variant="secondary" as={Link} to="/contacto">Cotiza ahora!</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card>
                <Card.Img variant="top" src="https://www.konecranes.com/sites/default/files/styles/5_7_small/public/2018-09/medium_konecranes_waste_to_energy_beinheim_france_scaldis_2012_008.jpg?itok=qmrB0Xho" />
                <Card.Body class="text-bg-info text-center">
                  <div class="mt-3 mb-3">
                    <Card.Title>Grúa Monopuente</Card.Title>
                  </div>
                  <div class="mb-3">
                    <Button variant="secondary" as={Link} to="/contacto">Cotiza ahora!</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div class="col">
              <Card>
                <Card.Img variant="top" src="https://www.konecranes.com/sites/default/files/styles/5_7_small/public/2018-09/medium_konecranes_waste_to_energy_beinheim_france_scaldis_2012_008.jpg?itok=qmrB0Xho" />
                <Card.Body class="text-bg-info text-center">
                  <div class="mt-3 mb-3">
                    <Card.Title>Grúa Radial</Card.Title>
                  </div>
                  <div class="mb-3">
                    <Button variant="secondary" as={Link} to="/contacto">Cotiza ahora!</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </CardGroup>
      </Container>
    </div>
  )
}
