import React from 'react';

import '../Styles/AutoCompleteStyle.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Form } from 'react-bootstrap';
import { Typeahead, ClearButton } from 'react-bootstrap-typeahead';
import options from './Planguages';

const BasicExample = () => {
  return (
      <div className='SearchBar'>
      <Form.Group className='Container'>
        <Typeahead
          className='typehead'
          id="basic-typeahead-single"
          options={ options }
          placeholder="Search Programming Language">
          {({ onClear, selected }) => (
                  <div className="rbt-aux">
                      {!!selected.length && <ClearButton onClick={ onClear }  className='clear'/>}
                  </div>
          )}
          </Typeahead>
      </Form.Group>
      </div>
      
    );
  };

export default BasicExample;