import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GruasViajeras } from './components/Gruas-Viajeras';
import { Contacto } from './components/Contacto';
import { Inicio } from './components/Inicio';
import { IoLocationSharp, IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { MdAttachEmail } from 'react-icons/md';

import {  Route, Routes, Link, BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="text-end text-bg-secondary p-1">
          <Container fluid> <IoLogoWhatsapp /> 818 366 8574 <MdAttachEmail /> alfilalfateam@gmail.com <IoLocationSharp /> Monterrey, N.L., México</Container>
        </div>
        <Navbar bg="warning" variant="light" expand="lg">
          <Container>
            <Navbar.Brand variant="dark" as={Link} to="/">Alfil Alfa Team</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Contacto"> Contacto </Nav.Link>
                <Nav.Link as={Link} to="/Gruas-Viajeras">Grúas Viajeras</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/Gruas-Viajeras" element={<GruasViajeras/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
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
