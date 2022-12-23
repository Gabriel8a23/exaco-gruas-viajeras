import React from 'react';
import { Helmet } from 'react-helmet-async';
import { gruasViajerasContent } from './content/gruasViajerasContent';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

export const GruasViajeras = () => {
  return (
    <div>
      <Helmet>
        <title>Exaco Grúas Viajeras | Gruas Viajeras</title>
        <meta name="description" content="Soluciones en grúas viajeras: Grúa Pórtico, Monopuente, Bipuente, Grúa Radial. Servicio de calidad en toda la república mexicana. Cotización sin compromiso." />
        <link rel="canonical" href="/gruas-viajeras"/>
      </Helmet>
      <div className="text-bg-primary text-center mt-3 mb-3"><h1>Soluciones en Grúas Viajeras</h1></div>
      <Container>
        <p>
          Las grúas viajeras o también llamadas grúas puente son herramientas móviles diseñadas para transportar carga de un lugar a otro, están suspendidas a gran altura. El desplazamiento de las grúas viajeras puede ser horizontal o vertical. Son de construcción robusta, con un alto nivel de estandarización, lo que las hace muy modulares y adaptables a cualquier necesidad, de alta fiabilidad en sus componentes y disponibles para una amplia gama de aplicaciones.
        </p>
        <p>
          Las grúas viajeras funcionan mediante operaciones manuales o remotas. Se utiliza electricidad o energía pneumática para hacer funcionar la grúa. Las grúas viajeras están fabricadas generalmente para mover cargas pesadas. La capacidad de la grúa para dirigirse en espacios elevados la hace perfecta para diversos entornos.
        </p>
        {gruasViajerasContent.map((content, index) => {
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
