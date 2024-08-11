import { Button, Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import AboveTop from "./AboveTop";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

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
                <LinkContainer to="/news/মতামত/">
                  <Nav.Link>মতামত</Nav.Link>
                </LinkContainer>
              </Nav>
              <Link to="/admin/">
                <Button className="danger">লগইন</Button>
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="bg-danger">Breaking NEWS</section>
      </div>
      <AboveTop />
    </>
  );
}

export default TopBar;
