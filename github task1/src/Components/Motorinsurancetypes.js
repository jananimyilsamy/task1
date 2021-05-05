import React from 'react';
import '../Styles/Motorinsurancetypes.css';

import {Container, Row, Col, Image, Media} from 'react-bootstrap';

const Motorinsurancetypes = () => {
  return (
    <div className="types">
      <Container>
        <Row>
          <Col className="name">Types of Motor insurance we offer</Col>
        </Row>

        <Media>
          <Image
            width={90}
            height={90}
            className="align-self-center mr-3"
            src={require ('../Images/Group 219.png').default}
          />

          <Media.Body>
            <p className="point">Personal Accident Cover</p>
            <p className="bulletpoints">
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            width={90}
            height={90}
            className="align-self-center mr-3"
            src={require ('../Images/Group 219.png').default}
          />

          <Media.Body>
            <p className="point">Electrical Accessories</p>
            <p className="bulletpoints">
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            width={90}
            height={90}
            className="align-self-center mr-3"
            src={require ('../Images/Group 219.png').default}
          />

          <Media.Body>
            <p className="point">CNG Fitments</p>
            <p className="bulletpoints">
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            width={90}
            height={90}
            className="align-self-center mr-3"
            src={require ('../Images/Group 219.png').default}
          />

          <Media.Body>
            <p className="point">Non-Electrical Accessories</p>
            <p className="bulletpoints">
              All of our client care team works in our office ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>

      </Container>
    </div>
  );
};

export default Motorinsurancetypes;
