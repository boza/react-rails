import React from 'react'
import { Label, Input, FormFeedback, FormGroup } from 'reactstrap';

const Field = ({ input, label, placeholder, className, type, meta: { touched, error } }) => {
  const errorClass = (touched && error && "danger") || null
  return (
    <FormGroup color={ errorClass }>
      <div className={className}>
        <Label className='form__label'>
          { label }
          <Input {...input} placeholder={placeholder} type={type} state={ errorClass } />
          { touched && error && <FormFeedback>{ error }</FormFeedback> }
        </Label>
      </div>
    </FormGroup>
  )
}

Field.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  meta: React.PropTypes.shape({
    error: React.PropTypes.string,
    touched: React.PropTypes.bool.isRequired,
    submitFailed: React.PropTypes.bool.isRequired
  }).isRequired
}

export default Field
