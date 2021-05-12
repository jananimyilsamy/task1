import React from 'react';

import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import formJSON from '../formElement.json';
import Element from './Element';

console.log ('formJSON', formJSON);

const Aboutpolicyform =()=> {
 const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
  const { fields, page_label } = elements ?? {}
  
    
return (
<div className="App container">
          <h3>{page_label}</h3>
       

          <Form>
{
  fields ? fields.map ((field, i) => <Element key={i} field={field} />) : null
}

        
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  );
};

export default Aboutpolicyform;
