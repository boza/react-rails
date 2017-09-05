import React from 'react'
import PropTypes from 'prop-types';
import { Label, Input, FormFeedback, FormGroup } from 'reactstrap'

const Field = ({ input, label, placeholder, className, type, meta: { touched, error } }) => {
  const errorClass = (touched && error && 'danger') || null
  return (
    <FormGroup color={errorClass}>
      <div className={className}>
        <Label className='form__label'>
          { label }
          <Input {...input} placeholder={placeholder} type={type} state={errorClass} />
          { touched && error && <FormFeedback>{ error }</FormFeedback> }
        </Label>
      </div>
    </FormGroup>
  )
}

Field.propTypes = {
  input: PropTypes.any,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
    submitFailed: PropTypes.bool.isRequired
  }).isRequired
}

export default Field
