import React from 'react';
import { Container,Button, Row } from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import '../styles/joinWithUs.css';



const Join = () => {
  
    return (
    // <div className="outerContainer">
    //     <div className="inLineHead">
    //          Choose, Get Quote & Buy Simply
    //     </div>
    //      <div className="containerDescription">
    //      Lorem ipsum dolor sit amet, 
    //      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    //      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    //      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    //      </div>
    //      <Button className="joinBtn">Join with Us
    //      <ArrowRight  className="arrow" />
    //      </Button>
         
    // </div>

    <Container fluid className="outerContainer">

     <Row  className="inLineHead">
     Choose, Get Quote & Buy Simply
     </Row>

     <Row className="containerDescription">
         Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </Row>

            <Button className="joinBtn">Join with Us
            <ArrowRight  className="arrow" />
            </Button>

    </Container>
    );
}

export default Join;