import { Container, Modal, Navbar, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import AboveTop from "./AboveTop";
import ModalContainer from "./ModalContainer";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
// import Navbar from 'react-bootstrap/Navbar';

function TopBar() {
  return (
    <>
      <div className="fixed-top">
        <Navbar expand="lg" className="bg-body-tertiary  shadow ">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/">
                  <Nav.Link> সর্বশেষ </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/news/বাংলাদেশ/">
                  <Nav.Link>বাংলাদেশ</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/news/অর্থনীতি/">
                  <Nav.Link>অর্থনীতি</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/news/বিশ্ব/">
                  <Nav.Link>বিশ্ব</Nav.Link>
                </LinkContainer>
                {/* <NavDropdown title="বিশ্ব" id="basic-nav-dropdown">
                  <LinkContainer to="/news">
                    <NavDropdown.Item>বিশ্ব</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/news">
                    <NavDropdown.Item>বিশ্ব</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <LinkContainer to="/news">
                    <NavDropdown.Item href="#action/3.4">
                      বিশ্ব
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown> */}
                <LinkContainer to="/news/মতামত/">
                  <Nav.Link>মতামত</Nav.Link>
                </LinkContainer>
              </Nav>
              <ModalContainer />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="bg-primary">Breaking NEWS</section>
      </div>
      <AboveTop />
    </>
  );
}

export default TopBar;
