import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav, Row, Col, NavDropdown, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Navigation = () => (
  <Navbar className="py-0">
    <Container>

      <Nav className="justify-content-start" style={{ marginLeft: 95 }}>
        <Navbar.Brand href="#">
          <Image src="https://adblockplus.org/img/adblockplus-logo-color.svg?3288789184" width="250.91" height="63" alt=""/>
        </Navbar.Brand>
      </Nav>

      <Nav className="justify-content-end" style={{ marginLeft: 87 }}>
        <Nav.Link className="p-4" href = "#" style={{ color: "black" }}>Download</Nav.Link>
        <Nav.Link className="p-4" href = "#" style={{ color: "black" }}>About</Nav.Link>
        <Nav.Link className="p-4" href = "#" style={{ color: "black" }}>Premium</Nav.Link>
        <Nav.Link className="p-4" href = "#" style={{ color: "black" }}>Help</Nav.Link>


        <NavDropdown title="English (US)" className={"p-3"} style={{ color: "black" }} id="drop">
          <NavDropdown.ItemText><Nav.Link href="#">Deutsch (DE)</Nav.Link></NavDropdown.ItemText>
          <NavDropdown.ItemText><Nav.Link href="#">English (US)</Nav.Link></NavDropdown.ItemText>
          <NavDropdown.ItemText><Nav.Link href="#">Espanol (Espana) (ES)</Nav.Link></NavDropdown.ItemText>
        </NavDropdown>

      </Nav>

    </Container>
  </Navbar>
);

const Middle = () => (
  <>
  <div style={{ height: 75 }}></div>

  <Container>
    <Row className="justify-content-center pt-4" style={{ marginLeft: 95 }}>

      <Col className="my-auto">
        <h1 style={{ fontSize: "300%" }}><strong>Surf the web with no</strong></h1>
        <h1 style={{ marginBottom: 20, fontSize: "300%" }}><strong>annoying ads</strong></h1>
        <div style={{ fontSize: "110%" }}><CheckCircleFill className="mx-2" style={{ color: "#087cd4" }}></CheckCircleFill>Experience a cleaner, faster web and block annoying ads</div>
        <div style={{ fontSize: "110%" }}><CheckCircleFill className="mx-2" style={{ color: "#087cd4" }}></CheckCircleFill>Acceptable Ads are allowed by default to support websites</div>
        <div style={{ fontSize: "110%" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<a href="#">learn more</a>)</div>
        <div style={{ marginBottom: 20, fontSize: "110%" }}><CheckCircleFill className="mx-2" style={{ color: "#087cd4" }}></CheckCircleFill>Adblock Plus is free and open source (<a href="#">GPLv3+</a>)</div>
        <p style={{ marginBottom: 5, fontSize: "90%" }}>By clicking the button below, you agree to our <a href="#">Terms of Use.</a></p>
        <Button variant="success" id={"buttons"}>
          <Image src="https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-logo-png-0.png" alt="" height="40px" width="40px"/>
            <strong>&nbsp;&nbsp;GET ADBLOCK PLUS FOR CHROME</strong>
        </Button>
        <p style={{ marginTop: 20, fontWeight: 400 }}><a href="#">Download Adblock Plus for another browser</a></p>
      </Col>

      <Col style={{ marginLeft: -30 }}>
        <Image src="https://adblockplus.org/img/hero-ui-illustration.svg" alt="" height="547.34" width="534px"/>
      </Col>

    </Row>
  </Container>

  <div style={{ height: 75 }}></div>
  </>
);

const FooterMenu = () => (

  <Container fluid style={{ backgroundColor: "rgb(90, 90, 90)", color: "white" }}>
    <Container>
      <Row className="pt-5 pb-5">

        <Col className="my-auto" style={{ marginTop: 10, marginLeft: 95, marginRight: -70 }}>
          <p style={{ fontWeight: 400 }}>
            AS MENTIONED ON:
          </p>
        </Col>

        <Col className="my-auto" style={{ marginRight: -70 }}>
          <Image src="https://adblockplus.org/img/media/business-insider.png?3288789184" alt="" height="54" width="118.5"/>
        </Col>

        <Col className="my-auto">
          <Image src="https://adblockplus.org/img/media/techcrunch.png?3288789184" alt="" height="30.53" width="180"/>
        </Col>

        <Col className="my-auto" style={{ marginRight: -60 }}>
          <Image src="https://adblockplus.org/img/media/wsj.png?3288789184" alt="" height="54" width="110.48"/>
        </Col>

        <Col className="my-auto" style={{ marginRight: -100 }}>
          <Image src="https://adblockplus.org/img/media/nyt.png?3288789184" alt="" height="54" width="75.34"/>
        </Col>

        <Col className="my-auto">
          <Image src="https://adblockplus.org/img/media/mediapost.png?3288789184" alt="" height="54" width="48.1"/>
        </Col>

      </Row>
    </Container>
  </Container>
);

const Adblocker = () => (
  <Container fluid className="p-0">
    <Navigation/>
    <Middle/>
    <FooterMenu/>
  </Container>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Adblocker />);