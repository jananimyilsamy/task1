import React, {useContext, Fragment, useEffect} from 'react';
import {Form, Row, Col} from 'react-bootstrap';

import {FormContext} from '../Forms/FormContext';

import '../../App.scss';

import Element from '../../pages/Forms/Element';
import {Button} from 'react-bootstrap';

function Radio({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
  field_mandatory,
  yes_options,
  registered_keeper_fields,
  legal_owner_fields,
  errors,
}) {
  const {handleChange} = useContext (FormContext);

  const [yesChecked, setyesChecked] = React.useState (false);
  const [registeredKeeperChecked, setRegisteredKeeperChecked] = React.useState (
    false
  );
  const [legalOwnerChecked, setLegalOwnerChecked] = React.useState (false);
  // const [carModification, setCarModification] = React.useState (false);

  const radioButtonCheck = e => {
    // const radio_button_field = document.getElementById('radio-button-field');
    // if(radio_button_field.checked){
    //     radio_button_field.checked = "false";
    // }
    // else radio_button_field.checked;

    [
      ...document.getElementsByClassName ('radio-button-input'),
    ].forEach (node => {
      node.checked === true
        ? node.parentElement.classList.add ('radio-button-checked')
        : node.parentElement.classList.remove ('radio-button-checked');
    });

    if (document.getElementById ('car_modifications_yes').checked) {
      setyesChecked (true);
    } else setyesChecked (false);

    if (document.getElementById ('policy_holder_registered_keeper').checked) {
      setRegisteredKeeperChecked (true);
    } else setRegisteredKeeperChecked (false);

    if (document.getElementById ('policy_holder_legal_owner').checked) {
      setLegalOwnerChecked (true);
    } else setLegalOwnerChecked (false);
  };

  return (
    <Form.Group>
      <Form.Label id="radio-button-label">{field_label}</Form.Label>
      {field_mandatory === 'yes'
        ? <span className="mandatory"><b> * </b></span>
        : ' '}
      <br />
      <Row>
        {field_options.length > 0 &&
          field_options.map ((option, i) => (
            <Fragment key={i}>
              <Col lg={4}>
                <Form.Group
                  id="radio-button-field"
                  className="radio-button"
                  onClick={e => radioButtonCheck (e)}
                >
                  <input
                    id={option.option_id}
                    name={field_id}
                    className="radio-button-input"
                    type="radio"
                    value={option.option_value}
                    checked={field_value === option.option_value}
                    onChange={event => handleChange (field_id, event)}
                  />
                  {' '}{' '}
                  <Form.Label>{option.option_label}</Form.Label>
                </Form.Group>
              </Col>

            </Fragment>
          ))}
      </Row>
      <span style={{color: 'red'}}>{errors ? errors : ''}</span>

      {/* <div style={{display: (yesChecked ? 'block' : 'none')}}>    
                {yes_options.length > 0 && yes_options.map((yes_option, i) => { 
                    return (
                        <Form.Group key={i}>
                            <Form.Label>{yes_option.field_label}</Form.Label>
                            <Form.Control className="form-field" as="select" multiple={true} value={yes_option.field_value || []} onChange={event => handleChange(yes_option.field_id, event)}>
                                {yes_option.field_options.length > 0 && yes_option.field_options.map((option, i) =>
                                    <option value={option.option_label} key={i}>{option.option_label}</option>
                
                                )}
                            </Form.Control>
                            <span style={{color: "red"}}>{yes_option.errors ? yes_option.errors : ""}</span>
                        </Form.Group>
                    );
                })}
        </div> */}

      <div style={{display: yesChecked ? 'block' : 'none'}}>
        {yes_options.length > 0 &&
          yes_options.map ((yes_option, i) => {
            return (
              <Form.Group key={i}>
                <Button
                  id={`#${yes_option.field_id}`}
                  style={{border: '1.5px solid  #6F29B8', color: '#6F29B8'}}
                  variant="light"
                  size="sm"
                >
                  +
                </Button>
                <span style={{paddingLeft: '15px', color: '#6F29B8'}}>
                  {yes_option.field_label}
                </span>
                <Form.Control
                  className="yes-option-group"
                  id={yes_option.field_id}
                  style={{display: 'none'}}
                  className="form-field"
                  as="select"
                  multiple={true}
                  value={yes_option.field_value || []}
                  onChange={event => handleChange (yes_option.field_id, event)}
                >
                  {yes_option.field_options.length > 0 &&
                    yes_option.field_options.map ((option, i) => (
                      <option
                        id={option.option_label}
                        value={option.option_label}
                        key={i}
                      >
                        {option.option_label}
                      </option>
                    ))}
                </Form.Control>
                <span style={{color: 'red'}}>
                  {yes_option.errors ? yes_option.errors : ''}
                </span>
              </Form.Group>
            );
          })}
      </div>

      <div style={{display: registeredKeeperChecked ? 'block' : 'none'}}>
        {registered_keeper_fields.length > 0 &&
          registered_keeper_fields.map ((sub_field, i) => {
            return <Element key={i} field={sub_field} />;
          })}
      </div>

      <div style={{display: legalOwnerChecked ? 'block' : 'none'}}>
        {legal_owner_fields.length > 0 &&
          legal_owner_fields.map ((sub_field, i) => {
            return <Element key={i} field={sub_field} />;
          })}
      </div>

    </Form.Group>
  );
}

export default Radio;
