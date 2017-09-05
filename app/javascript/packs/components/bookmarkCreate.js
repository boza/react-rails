import React from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from '../forms/bookmark'
import {actions} from '../sagas/bookmark'

const BookmarkCreate = ({ bookmarksActions }) => {
  return (
    <div>
      <h3>Create a bookmark</h3>
      <Form onSubmit={bookmarksActions.create} />
    </div>
  )
}

BookmarkCreate.propTypes = {
  bookmarksActions: PropTypes.shape({
    create: PropTypes.func.isRequired
  })
}

const mapDispatchToProps = (dispatch) => ({
  bookmarksActions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(BookmarkCreate)
