import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { IoLocationSharp, IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';
import { MdAttachEmail } from 'react-icons/md';

import {  Route, Routes, Link, BrowserRouter } from "react-router-dom";

import './App.css';
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
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Contact"> Contact </Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
        <div class="text-bg-dark p-3 mt-3">
        <div class="row">
          <div class="col align-self-center">
            <p class="fs-6">ALFIL ALFA TEAM</p>
            <p class="fs-6">Paras 850 apt 1409, Col. Centro, CP 64000, Monterrey, N.L.</p>
            <p class="fs-6">Contacto: alfilalfateam@gmail.com</p>
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
          <div class="col align-self-center">col-sm</div>
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
