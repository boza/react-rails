import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormSyncErrors, getFormSubmitErrors } from 'redux-form'

import { Button } from 'reactstrap'

import TextField from './helpers/textField'

export const FORM_NAME = 'bookmarkForm'

const validate = (values) => {
  let errors = {}
  if (!values.title) {
    errors.title = 'Please enter a title'
  }
  if (!values.url) {
    errors.url = 'Please enter an url'
  }
  if (values.url && !/^http(s)?:\/\//.test(values.url)) {
    errors.url = 'Make sure the url start with http or https'
  }
  return errors
}

class Formx extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='title'
          component={TextField}
          placeholder='Title'
        />
        <Field
          name='url'
          component={TextField}
          placeholder='http://url.com'
        />
        <Field
          name='shortening'
          component={TextField}
          placeholder='short url'
        />
        <Button className='submit'>Save</Button>
      </form>
    )
  }
}

export const bookmarkForm = reduxForm({
  form: FORM_NAME,
  validate
})(Formx)

export default connect(state => ({
  errors: getFormSyncErrors(FORM_NAME)(state),
  submitErrors: getFormSubmitErrors(FORM_NAME)(state)
}))(bookmarkForm)
