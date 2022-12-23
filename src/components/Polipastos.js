import React from 'react';
import { Helmet } from 'react-helmet-async';
import { polipastosContent } from './content/polipastosContent';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export const Polipastos = () => {
  return (
    <div>
      <Helmet>
        <title>Exaco Grúas Viajeras | Polipastos</title>
        <meta name="description" content="Soluciones en grúas viajeras: Grúa Pórtico, Monopuente, Bipuente, Grúa Radial. Servicio de calidad en toda la república mexicana. Cotización sin compromiso." />
        <link rel="canonical" href="/Polipastos"/>
      </Helmet>
      <div className="text-bg-primary text-center mt-3"><h1>Soluciones en Polipastos</h1></div>
      <Container>
        <p>
          Se utilizan en talleres o industrias para elevar y colocar elementos y materiales muy pesados en las diferentes máquinas-herramientas o cargarlas y descargarlas de los camiónes que las transportan. Suelen estar sujetos a un brazo giratorio acoplado a una máquina, o pueden ser móviles guiados por rieles colocados en los techos de las naves industriales.
        </p>
        <p>
          El polipasto eléctrico es un equipo para los trabajos de elevación. Puede levantar y bajar los objetos en dirección vertical. Instalado con una grúa pórtico, viajera o un soporte, este equipo es capaz de mover a través de la viga o riel.
        </p>
        <p>
          Los polipastos tienen distintas capacidades de elevación dependiendo de la carga que pueden llegar a levantar. Es posible aumentar la capacidad de elevación aumentando el número de ramales de un polipasto. Por ejemplo, un polipasto de 500 kg con un ramal puede tener una capacidad de sólo 500 kg, pero si se configura con dos ramales y se utilizan los accesorios adecuados el mismo polipasto puede levantar 1000 kg. Para poder alcanzar capacidades muy altas de elevación a veces es necesario el uso de un conjunto de varios polipastos con varios ramales junto a una pasteca especial.
        </p>
        {polipastosContent.map((content, index) => {
          return (
            <div key={index}>
              <hr className="hr-full text-secondary" />
              <div className="row">
                <div className="col-sm text-center">
                  <Image src={content.image} fluid="true" className="content-image" />
                </div>
                <div className="col-sm-8">
                  <h3 className="text-primary">{content.heading}</h3>
                  <p>{content.desc}</p>
                  <Button variant="secondary" as={Link} to="/contacto">Cotiza ahora</Button>
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </div>
  )
}
