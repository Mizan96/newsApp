import {Container, Modal, Navbar, NavDropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import AboveTop from './AboveTop';
import ModalContainer from './ModalContainer';
import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';

function TopBar() {
  return (
    <>
    <AboveTop />
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> সর্বশেষ </Nav.Link>
            <Nav.Link href="#home">বাংলাদেশ</Nav.Link>
            <Nav.Link href="#home">অর্থনীতি</Nav.Link>
            <Nav.Link href="#home">মতামত</Nav.Link>
            <NavDropdown title="বিশ্ব" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">বিশ্ব</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              বিশ্ব
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              বিশ্ব
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">মতামত</Nav.Link>
          </Nav>
        <ModalContainer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
)
}

export default TopBar