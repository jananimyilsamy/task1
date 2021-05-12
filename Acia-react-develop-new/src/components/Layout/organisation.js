import React from 'react';
import '../../scss/styles/organisation.css';
import { Container,  Image, Row, Col} from 'react-bootstrap';


const Organisation = () => {

    return(
    <Container fluid className="container" >
        
                <Row xs={2} md={2} lg={4} style={{marginLeft:"-52px",  paddingTop:"94px"}}>
                  
                  <Col>
                  <Image className="logoIpsum" src={require('../../assets/images/Mask Group 11.png').default} />
                  </Col>
                
                  <Col>
                  <Image className="amara" src={require('../../assets/images/Mask Group 12.png').default} />  
                  </Col>
                           
                  <Col >
                  <Image className="aven"  src={require('../../assets/images/Mask Group 13.png').default} />
                  </Col>
    
                                    
                  <Col>
                  <Image className="treva"  src={require('../../assets/images/Mask Group 14.png').default} />
                  </Col> 

                </Row>

    </Container>


    );
}

export default Organisation;