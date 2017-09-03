import React from 'react'
import { connect } from 'react-redux'
import { Jumbotron, Button } from 'reactstrap'
import Bookmarks from './bookmarks'

const goToLogin = (event) => {
  event.preventDefault
  window.location = '/sign_in'
}

const signOut = (event) => {
  event.preventDefault
  window.location = '/logout'
}

const Page = ({ props }) => {
  const { isLoggedIn } = props
  return (
    <div>
      <Jumbotron>
        <h1 className='display-3'>Hello, world!</h1>
        <p className='lead'>This is a example application with Rails 5.1, react, redux, bootstrap</p>
        { isLoggedIn && <Button onClick={signOut}>Sign Out</Button> }
        <hr className='my-2' />
        {
          !isLoggedIn && <p className='lead'>
            <Button onClick={goToLogin} color='primary'>Sign In</Button>
          </p>
        }
        { isLoggedIn && <Bookmarks {...{ props }} /> }
      </Jumbotron>
    </div>
  )
}

export default connect()(Page)
