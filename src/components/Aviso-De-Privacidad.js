import React from 'react'
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';

export const AvisoDePrivacidad = () => {
  return (
    <div>
      <Helmet>
        <title>Exaco Grúas Viajeras | Polipastos</title>
        <meta name="description" content="Soluciones en grúas viajeras: Grúa Pórtico, Monopuente, Bipuente, Grúa Radial. Servicio de calidad en toda la república mexicana. Cotización sin compromiso." />
        <link rel="canonical" href="/Polipastos"/>
      </Helmet>
      <div className="text-bg-primary text-center mt-3"><h1>Aviso de privacidad</h1></div>
      <Container>
        <p>
          De acuerdo a lo Previsto en la “Ley Federal de Protección de Datos Personales”, declara EXACO grúas y polipastos,
          ser una empresa legalmente constituida de conformidad con las leyes mexicanas, con domicilio en Col. Centro, CP 64000, Monterrey,
          N.L., México; y como responsable del tratamiento de sus datos personales, hace de su conocimiento
          que la información de nuestros clientes es tratada de forma estrictamente confidencial por lo que al proporcionar sus
          datos personales, tales como:
        </p>
        <p>
          <ol>
            <li>
              Nombre Completo.
            </li>
            <li>
              Dirección.
            </li>
            <li>
              Teléfonos de Hogar, Oficina y móviles.
            </li>
            <li>
              Correo electrónico.
            </li>
          </ol>
        </p>
        <p>Estos serán utilizados única y exclusivamente para los siguientes fines:</p>
        <p>
          <ol>
            <li>
              Información y Prestación de Servicios
            </li>
            <li>
              Actualización de la Base de Datos.
            </li>
            <li>
              Cualquier finalidad análoga o compatible con las anteriores.
            </li>
          </ol>
        </p>
        <p>
          Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para
          los fines establecidos en este aviso de privacidad, hemos establecido diversos procedimientos con la finalidad de evitar el
          uso o divulgación no autorizados de sus datos, permitiéndonos tratarlos debidamente.
        </p>
        <p>Así mismo, le informamos que sus datos personales pueden ser Transmitidos para ser tratados por personas distintas a esta empresa.</p>
        <p>
          Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente en el país, por ello le informamos
          que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar u oponerse al tratamiento que le
          damos a sus datos personales; derecho que podrá hacer valer a través del Área de Privacidad encargada de la seguridad
          de datos personales en el Teléfono 818-366-8574, o por medio de su correo electrónico:
          admin@exaco.com
        </p>
        <p>
          A través de estos canales usted podrá actualizar sus datos y especificar el medio por el cual desea recibir información, ya
          que en caso de no contar con esta especificación de su parte, EXACO grúas y polipastos establecerá libremente el
          canal que considere pertinente para enviarle información.
        </p>
        <p>
          Este aviso de privacidad podrá ser modificado por EXACO grúas y polipastos, dichas modificaciones serán
          oportunamente informadas a través de correo electrónico, teléfono, o cualquier otro medio de comunicación que
          EXACO grúas y polipastos determine para tal efecto.
        </p>
      </Container>
    </div>
  )
}
