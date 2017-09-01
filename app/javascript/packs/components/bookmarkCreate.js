import React from 'react';
import { connect } from 'react-redux'
import Form, { FORM_NAME } from '../forms/bookmark'
import { startSubmit, stopSubmit, reset } from 'redux-form'
import http from '../utils/http'

// Move this to redux saga
const handleSubmit = (dispatch) => (
  (attributes) => {
    dispatch(startSubmit(FORM_NAME))
    const params = { bookmarks: { ...attributes } }
    http.post('/bookmarks', params)
    .then(dispatch(reset(FORM_NAME)))
    .catch(() => stopSubmit(FORM_NAME, ))
  }
)

const BookmarkCreate = ({ dispatch }) => {
  return (
    <div>
      <Form onSubmit={ handleSubmit(dispatch) } />
    </div>
  )
}

export default connect()(BookmarkCreate);
