import React from 'react';
import { Button } from 'react-bootstrap';
import {ArrowRight} from 'react-bootstrap-icons';
import '../../scss/styles/joinWithUs.css';



const Join = () => {
  
    return (
    <div className="outerContainer">
        <div className="inLineHead">
            So what are you waiting for ?
        </div>
         <div className="containerDescription">
         Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
         voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         </div>
         <Button className="joinBtn">Join with Us
         <ArrowRight  className="arrow" />
         </Button>
         
    </div>
    );
}

export default Join;