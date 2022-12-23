import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { AvisoDePrivacidad } from './components/Aviso-De-Privacidad';
import { GruasViajeras } from './components/Gruas-Viajeras';
import { Polipastos } from './components/Polipastos';
import { Contacto } from './components/Contacto';
import { Inicio } from './components/Inicio';
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLocationSharp } from 'react-icons/io5';
import { MdAttachEmail } from 'react-icons/md';
import { useState } from 'react';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

import './custom-style.scss';

function App() {
  const [show, setShow] = useState(false)
  let navShow = show ? 'navbar-collapse collapse' : 'navbar-collapse collapse show'

  function toggleShow() {
    setShow(show => !show)
    document.getElementById('responsive-navbar-nav').className = navShow
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="text-bg-info p-1 hide-sm">
          <Container fluid>
            <IoLogoWhatsapp /> 888 888 8888 | <MdAttachEmail /> ventas@exaco.com | <IoLocationSharp /> Monterrey, N.L., México
          </Container>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand variant="dark" as={Link} to="/">EXACO</Navbar.Brand>
            <button onClick={toggleShow} className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={toggleShow} as={Link} to="/"><div className="text-secondary">Inicio</div></Nav.Link>
                <Nav.Link onClick={toggleShow} as={Link} to="/gruas-viajeras"><div className="text-secondary">Grúas Viajeras</div></Nav.Link>
                <Nav.Link onClick={toggleShow} as={Link} to="/polipastos"><div className="text-secondary">Polipastos</div></Nav.Link>
                <Nav.Link onClick={toggleShow} as={Link} to="/contacto"><div className="text-secondary">Contacto</div></Nav.Link>
              </Nav>
              <Nav>
                <Button onClick={toggleShow} variant="secondary" as={Link} to="/contacto">Cotiza ahora!</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/aviso-de-privacidad" element={<AvisoDePrivacidad/>}/>
            <Route path="/polipastos" element={<Polipastos/>}/>
            <Route path="/gruas-viajeras" element={<GruasViajeras/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/" element={<Inicio/>}/>
          </Routes>
        </div>
        <div className="text-bg-dark p-3 mt-3">
          <div className="row">
            <div className="col-sm">
              <p>EXACO GRÚAS VIAJERAS<br />
              Tel: 888 888 8888<br />
              Correo: ventas@exaco.com<br />
              Dirección: Col. Centro, CP 64000, Monterrey, N.L.
              </p>
            </div>
            <div className="col-sm">
              <div className="row text-center">
                <div className="col">
                  <IoLogoFacebook className="footer-icons" />
                </div>
                <div className="col">
                  <IoLogoWhatsapp className="footer-icons" />
                </div>
                <div className="col">
                  <IoLocationSharp className="footer-icons" />
                </div>
                <div className="col">
                  <IoLogoInstagram className="footer-icons" />
                </div>
                <div className="col">
                  <IoLogoTwitter className="footer-icons" />
                </div>
              </div>
            </div>
            <div className="col-sm text-end hide-sm">
              NAVEGACIÓN<br />
              <a className="text-light" href="/">Inicio</a><br />
              <a className="text-light" href="/gruas-viajeras">Grúas Viajeras</a><br />
              <a className="text-light" href="/polipastos">Polipastos</a><br />
              <a className="text-light" href="/contacto">Contacto</a><br />
              <a className="text-light" href="/aviso-de-privacidad">Aviso de privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
