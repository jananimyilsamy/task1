import React from 'react';
import '../styles/footer.css';
import {Container, Row, Col, Image} from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="footerContainer">

      <Row lg={5} md={3} xs={3} style={{marginLeft: '75px'}}>

        <Col style={{paddingTop: '115px'}}>
          <Row className="aciaLogo" />
          <Row className="description">
            ACIA is a complete insurance product solution that is pre packaged
          </Row>

        </Col>

        <Col>

          <p className="columnTitle"><b>Learn More</b></p>
          <ul className="list-unstyled pt-3">
            <li><a className="innerLink" href="/#">How it works?</a></li>
            <li><a className="innerLink" href="/#">Pricing</a></li>
            <li><a className="innerLink" href="/#">Media Release</a></li>
            <li><a className="innerLink" href="/#">Sitemap</a></li>
          </ul>

        </Col>

        <Col>

          <p className="columnTitle"><b>Support</b></p>
          <ul className="list-unstyled pt-3">
            <li><a className="innerLink" href="/#">FAQ</a></li>
            <li><a className="innerLink" href="/#">Contact Us</a></li>
          </ul>

        </Col>

        <Col>
          <p className="columnTitle"><b>About Us</b></p>
          <ul className="list-unstyled pt-3">
            <li><a className="innerLink" href="/#">About</a></li>
            <li><a className="innerLink" href="/#">Careers</a></li>
            <li><a className="innerLink" href="/#">Terms of Service</a></li>
            <li><a className="innerLink" href="/#">Privacy Policy</a></li>
          </ul>
        </Col>

        <Col lg={2}>
          <p className="columnTitle pb-3"><b>We're in Social</b></p>
          <Row xs={1} md={1} lg={2}>
            <Col className="p-0">
              <Image
                className="facebook"
                src={require ('../images/Group 216.png').default}
              />
            </Col>
            <Col className="p-0">
              <Image
                className="linkedIn"
                src={require ('../images/Group 215.png').default}
              />
            </Col>
          </Row>

          <Row xs={1} md={1} lg={2} className="pt-3">
            <Col className="p-0">
              <Image
                className="twitter"
                src={require ('../images/Group 217.png').default}
              />
            </Col>
            <Col className="p-0">
              <Image
                className="youTube"
                src={require ('../images/Group 218.png').default}
              />
            </Col>
          </Row>

        </Col>

      </Row>

      <Row lg={2} md={1} xs={1} style={{marginLeft: '75px'}}>

        <Col className="py-3">
          <Row className="alignText"> US & CAN: 1 - 855 -758-0984 </Row>
          <Row className="alignText"> Worldwide: +1-424-781-3315 </Row>
        </Col>

      </Row>

      <Row lg={1} md={1} xs={1} className="py-2">

        <hr className="horizontalLine" />
        <p className="bottomLine">All rights reserved. ACIA 2021</p>

      </Row>

    </Container>
  );
};

export default Footer;
