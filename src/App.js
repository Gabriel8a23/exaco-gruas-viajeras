import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { AvisoDePrivacidad } from './components/Aviso-De-Privacidad';
import { GruasViajeras } from './components/Gruas-Viajeras';
import { Polipastos } from './components/Polipastos';
import { Contacto } from './components/Contacto';
import { Inicio } from './components/Inicio';
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

import {  Route, Routes, Link, BrowserRouter } from "react-router-dom";

import './custom-style.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand variant="dark" as={Link} to="/">EXACO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/"><div class="text-secondary">Inicio</div></Nav.Link>
                <Nav.Link as={Link} to="/gruas-viajeras"><div class="text-secondary">Grúas Viajeras</div></Nav.Link>
                <Nav.Link as={Link} to="/polipastos"><div class="text-secondary">Polipastos</div></Nav.Link>
                <Nav.Link as={Link} to="/contacto"><div class="text-secondary">Contacto</div></Nav.Link>
              </Nav>
              <Nav>
                <Button variant="secondary" as={Link} to="/contacto">Cotiza ahora!</Button>
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
        <div class="text-bg-dark p-3 mt-3">
        <div class="row">
          <div class="col align-self-center">
            <p class="mt-3">EXACO GRÚAS VIAJERAS<br />
            Paras 850 apt 1409, Col. Centro, CP 64000, Monterrey, N.L.<br />
            Contacto: alfilalfateam@gmail.com</p>
          </div>
          <div class="col align-self-center">
            <div class="row">
              <div class="col-sm align-self-center">
                <IoLogoFacebook />
              </div>
              <div class="col-sm align-self-center">
                <IoLogoWhatsapp />
              </div>
              <div class="col-sm align-self-center">
                <IoLogoInstagram />
              </div>
              <div class="col-sm align-self-center">
                <IoLogoTwitter />
              </div>
            </div>
          </div>
          <div class="col align-self-center text-end">col-sm</div>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
