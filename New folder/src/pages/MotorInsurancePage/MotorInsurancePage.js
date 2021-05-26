import React, { Fragment } from 'react'
import '../../scss/styles/HomePage.scss';
import '../../scss/styles/MotorInsurancePage.scss';
import { Container, Card, CardColumns, Image, Row, Col, Button, Media} from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';





 const  MotorInsurancePage = () => {


return (

<Fragment>


{/* ------------------------------------------- Find the right motor insurance -------------------------*/}

<Container fluid={'true'} className="car-description-container">

<Row fluid={'true'} >
    <Col lg={6}>
    <Image className='car-image' src={ require('../../assets/images/Group 224.png').default } alt="" />
    </Col>

<Col lg={6} xs={true} md={true}  className='mt-5 pr-5 pt-5'>
    
<div className="car-firstRow-firstPart  pt-5  pb-2">Find the
<span className="car-firstRow-secondPart">{' '} Right Motor insurance for your family</span>
</div>

<div className='car-secondRow py-2'>ACIA insures your vehicles against losses caused by events outside of your control.
This includes vehicle damages caused due to an accident while driving or to your stationary vehicle caused by a fire or theft.So do we.
However if something goes wrong,having Motor insurance can help protect your financial future.
That's where ACIA can help. We focus on what matters. 
</div>

<div className='car-thirdRow pt-3'>
Free Quote and Instant Online Cover  
</div>

<div className='car-fourthRow pt-2'>
<ul className='list-unstyled'>
<li> - High-quality motor cover at an affordable price;</li>
<li> - Fast, fair and efficitent handling of all your claims;</li>
<li>- A global team of experts that puts your safety and wel l-being first;</li>
<li>- 24 hour emergency assistance from our team of experienced vehicle assistance providers.</li></ul>
</div>
</Col>
</Row>
 
</Container>











 {/* ------------------------------------------------ Key Benefits --------------------------------------- */}


<Container fluid={'true'} >
<Row className="key-benefits-container mx-5 my-5">
<div className="key-benefits-cardheading pb-2">Key benefits of our Additional Coverages</div>
<div className="key-benefits-cardcontent">
  se our extensive choice of additional coverages to enjoy roadside assistance during breakdown, protection for your accessories, and our extended network of partners to arrange for accommodation, medical aid and financial assistance.
</div>
</Row>

<Row className='m-3'>
<CardColumns className='key-benefits m-5'>
  <Card>
    <Card.Img className='key-benefits-card-img mx-5 m-2'
     src={require ('../../assets/images/Group 221.svg').default} alt=""
    />
    <Card.Body>
      <Card.Title className="cardtitle">
        Fire and Theft Protection
      </Card.Title>
      <Card.Text className='key-benefits-card-text'>
        All of our client care team works in our office ands is 
        an experienced web meeting user ready to help you. Never outsourced.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card >
    <Card.Img className='key-benefits-card-img mx-5'
      src={require ('../../assets/images/Group 221.svg').default} alt=""
    />
    <Card.Body>
      <Card.Title>Roadside Assistance Protection</Card.Title>
      <Card.Text  className='key-benefits-card-text'>
        All of our client care team works in our office ands is 
        an experienced web meeting user ready to help you. Never outsourced.
      </Card.Text>
    </Card.Body>
  </Card>

</CardColumns>

<CardColumns className='key-benefits m-5'>

  <Card  >
    <Card.Img  className='key-benefits-card-img mx-5'
      src={require ('../../assets/images/Group 223.svg').default} alt=""
    />
    <Card.Body>
      <Card.Title>Accessories Protection</Card.Title>
      <Card.Text  className='key-benefits-card-text'>
        All of our client care team works in our office ands is 
        an experienced web meeting user ready to help you. Never outsourced.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card  >
    <Card.Img className='key-benefits-card-img mx-5'

      src={require ('../../assets/images/Group 222.svg').default} alt=""
    />
    <Card.Body>
      <Card.Title>Fire and Theft Protection</Card.Title>
      <Card.Text  className='key-benefits-card-text'>
        All of our client care team works in our office ands is an 
        experienced web meeting user ready to help you. Never outsourced.
      </Card.Text>
    </Card.Body>
  </Card>

</CardColumns>
</Row>
</Container>





{/* ------------------------------------------- Types of Insurance ----------------------------------------------- */}

<Card className='insurance-types-card mt-5'>
<Container className='insurance-types-container my-5 py-5'>
        <Row>
          <Col className="insurance-types-name">Types of Motor insurance we offer</Col>
        </Row>
        <Row className="insurance-types-pointsbody">
        <Media>
          <Image
            className="insurance-types-img"
            src={require ('../../assets/images/Group 219.png').default} alt=""
          />

          <Media.Body>
            <p className="insurance-types-point">Personal Accident Cover</p>
            <p className="insurance-types-bulletpoints">
              All of our client care team works in our office
              and is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            className="insurance-types-img"
            src={require ('../../assets/images/Group 219.png').default} alt=""
          />

          <Media.Body>
            <p className="insurance-types-point">Electrical Accessories</p>
            <p className="insurance-types-bulletpoints">
              All of our client care team works in our office 
              ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            className="insurance-types-img"
            src={require ('../../assets/images/Group 219.png').default} alt=""
          />

          <Media.Body>
            <p className="insurance-types-point">CNG Fitments</p>
            <p className="insurance-types-bulletpoints">
              All of our client care team works in our office 
              ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
        <Media>
          <Image
            className="insurance-types-img"
            src={require ('../../assets/images/Group 219.png').default} alt=""
          />

          <Media.Body>
            <p className="insurance-types-point">Non-Electrical Accessories</p>
            <p className="insurance-types-bulletpoints">
              All of our client care team works in our office 
              ands is an experienced web meeting user ready to help you. Never outsourced.
              {' '}
            </p>
          </Media.Body>
        </Media>
</Row>
</Container>
</Card>











 {/* ----------------------------------------------- join with us ----------------------------------------- */}


<Container fluid={'true'} className="join-container" >
<Row fluid={'true'}>
    <Col lg={12} className='m-5 p-5 '>
         
    <div  className="join-inLineHead px-5 py-3">
    So what are you waiting for ?
    </div>

    <div className="join-container-description px-5 py-3">
    Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
     voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
     </div>
     
     <div className='px-5 py-3' style={{textAlign:"center"}}> 

     <Button className="join-Btn px-3 py-2">Join with Us
        <ArrowRight  className="arrow" />
     </Button>

     </div>

    </Col>
</Row>
</Container>
</Fragment>
   )
}


export default MotorInsurancePage;