import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutpolicyform from './components/Aboutpolicyform';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeBody from './components/homeBody';
//import Footer from './components/footer';
import MotorInsuranceBody from './components/motorInsuranceBody';

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" component={HomeBody} />
          <Route path="/Aboutpolicy" component={Aboutpolicyform} />;

          <Route path="/MotorInsurance" component={MotorInsuranceBody} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;

/*
<Footer />;

import './App.css';
import Motorinsurancetypes from './Components/Motorinsurancetypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdditionalCoverage from './Components/AdditionalCoverage';

function App () {
  return (
    <div className="App">
      <AdditionalCoverage />
      <Motorinsurancetypes />

    </div>
  );
}

export default App;*/
