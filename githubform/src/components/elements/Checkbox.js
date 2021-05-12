import React from 'react';
import {Form} from 'react-bootstrap';

const Checkbox = () => {
  return (
    <div>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

    </div>
  );
};

export default Checkbox;
