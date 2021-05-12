import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'

import HomeBody from './components/Layout/homeBody';
import MotorInsuranceBody from './components/Layout/motorInsuranceBody';

function Router() {
    return (
       
            <Switch>
          <Route path="/home" component={HomeBody} />
          <Route path="/MotorInsurance" component={MotorInsuranceBody} />
         
        </Switch>
            
        
    )
}

export default Router



