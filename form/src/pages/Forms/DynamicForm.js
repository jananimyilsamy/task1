import React from 'react';
import { Form, Button } from 'react-bootstrap';
import formJSON from './formData.json';
import { useState, useEffect } from 'react';
import Element from './Element';
import FormLayout from './FormLayout';
import { FormContext } from './FormContext';
import {useSelector, useDispatch} from 'react-redux';
import {showLoader, hideLoader} from '../actions';
import FormLayout1 from './FormLayout1';

function DynamicForm() {

  const loading = useSelector(state => state.loading);

  const [elements, setElements] = useState(formJSON[0]);

  const dispatch = useDispatch();

  const handleAPICall = (event)=> {
    dispatch(showLoader());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch(hideLoader());
      console.log(response.json());
    })
  }

  //leftExpression ?? rightExpression. It returns the right operand (rightExpression) if the left operand (leftExpression) is null or undefined.
  const { fields, page_label, page_description,page_title } = elements ?? {}

  const handleSubmit = (event) => {
    event.preventDefault();

    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {

      if(field.field_mandatory === "yes" && field.field_value === ""){
          field.errors = "Should not be empty";
          setElements(newElements);
      }
    })
    });

    console.log(elements)
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(row => {
      row.fields.forEach(field => {
      // const { field_type, field_id } = field;
      if (id === field.field_id) {
        switch (field.field_type) {
          case 'checkbox':
            field.field_value = event.target.checked;
            break;

          case 'multiple_select':
            field.field_value = Array.from(event.target.selectedOptions, option => option.value);
            break;
            
          default:
            field.field_value = event.target.value;
            break;
        }
      }

      if(field.yes_options){
        field.yes_options.forEach(yes_option =>{
          if (id === yes_option.field_id) {
            switch (yes_option.field_type) {
              case 'checkbox':
                yes_option.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                yes_option.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                yes_option.field_value = event.target.value;
                break;
            }
          }
        })
      }

      if(field.legal_owner_fields){
        field.legal_owner_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
      }

      if(field.registered_keeper_fields){
        field.registered_keeper_fields.forEach(sub_field =>{
          if (id === sub_field.field_id) {
            switch (sub_field.field_type) {
              case 'checkbox':
                sub_field.field_value = event.target.checked;
                break;
    
              case 'multiple_select':
                sub_field.field_value = Array.from(event.target.selectedOptions, option => option.value);
                break;
                
              default:
                sub_field.field_value = event.target.value;
                break;
            }
          }
        })
      }

      field.errors = "";

      if(field.field_id === "car_registration_no"){
        if(field.field_value !== ""){
          if(!Number(field.field_value)){
            field.errors = "Must be a number";
          }
          if(Number(field.field_value) && field.field_value.length > 5){
            field.errors = "Should not contain more than 5 digits";
          }
          if(Number(field.field_value) && field.field_value.length < 5){
            field.errors = "Should contain maximum of 5 digits";
          }
        }
      }

      if(field.field_id === "car_engine_no"){
        if(field.field_value !== ""){
          if(!Number(field.field_value)){
              field.errors = "Must be a number";
          }
        }
      }

      if(field.field_id === "chasis_no"){
        if(field.field_value !== ""){
          if(!Number(field.field_value)){
              field.errors = "Must be a number";
          }
        }
      }

      if(field.field_id === "car_model"){
        if(field.field_value !== ""){
          if(!field.field_value.match(/^[a-zA-Z]+$/)){
            field.errors = "Only letters";
          }
        }
      }

      setElements(newElements)
    })
    });
    console.log(elements)
  }

    return (
      <>
      <FormContext.Provider value={{ handleChange }}>
        <Form className="container">
          <h3 style={{color: "#5A2F7D"}}><b>{page_label}</b></h3>
          <p style={{color: "#090909", fontSize: "16px"}}>{page_description}</p> 
<p style={{color: '#090909', fontSize: '16px'}}>{page_title}</p>

          {
          fields.map((field, i) => {
          if (field.layout === "row") {  
              return (
                <FormLayout
                  key={i}
                  field={field}
                />
              );
          }
          
             if (field_type === "title") {  
              return (
                <FormLayout1
                  key={i}
                  field={field}
                />
              );
          }
             
            
            else
            {
              return (
                <Element
                  key={i}
                  field={field.fields[0]}
                />
              );
            }
              })
              }
          <Button variant="secondary" className="button-rounded grey-btn" type="button">
            Cancel
          </Button>
          {' '}
          <Button variant="success" className="button-rounded green-btn" type="submit" onClick={(e) => handleSubmit(e)}>
            Continue
          </Button>
          {' '}
          <Button variant="primary" className="button-rounded" type="button" onClick={(e) => handleAPICall(e)}>
            API Call
          </Button>
      </Form>
      </FormContext.Provider>
      </>
    );
  }
  
  export default DynamicForm;