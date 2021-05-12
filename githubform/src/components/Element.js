import React from 'react';
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';

const Element = ({field: {field_type}}) => {
  switch (field_type) {
    case 'text':
      return <Input />;

    case 'select':
      return <Select />;

    case 'checkbox':
      return <Checkbox />;

    default:
      return null;
  }
};

export default Element;
