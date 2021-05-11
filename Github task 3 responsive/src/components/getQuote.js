import React, { Fragment } from 'react';
import '../styles/getQuote.css';
import {Container, Row, Col, Button } from 'react-bootstrap';



const Quote = () => {

    return(
      
        // <div className="outerContainerQuote">
        //     <div className="textArea">
        //         Exception Customer Service
        //     </div>
        //     <div className="innerTextArea">
        //     All of our client care team works in our office ands is an experienced web meeting user
        //     ready to help you. Never outsourced.
        //     </div>
        //     <Button className="quoteButton">Get Quote Now</Button>
        //     <div className="imageArea" />
        // </div>

        <Fragment>
        <Container fluid  className="outerContainerQuote">
            <Col lg={3}> 
             <Row className="textArea">
             Exception Customer Service
             </Row>

             <Row className="innerTextArea">
               All of our client care team works in our office ands is an experienced web meeting user
               ready to help you. Never outsourced.
             </Row>

            <Row style={{marginLeft:"58px"}}>
            <Button className="quoteButton">Get Quote Now</Button>
            </Row>

            </Col>
        </Container>
            <div className='imageArea' />
        </Fragment>

    );

} 

export default Quote;