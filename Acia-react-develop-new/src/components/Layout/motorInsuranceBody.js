import React from 'react';
import Join from './joinWithUsMotor';
import Motorinsurancetypes from './Motorinsurancetypes';
import MotorContent from './motorContent';

const MotorInsuranceBody = () => {
  return (
    <div>
      <MotorContent />
      <Motorinsurancetypes />
      <Join />
    </div>
  );
};

export default MotorInsuranceBody;
