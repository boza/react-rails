import React from 'react';
import { connect } from 'react-redux'
import { Jumbotron, Button } from 'reactstrap';
import BookmarkCreate from './bookmarkCreate';

const goToLogin = () => window.location = '/sign_in'

const Page = ({ props }) => {
  const { isLoggedIn } = props;
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a example application with Rails 5.1, react, redux, bootstrap</p>
        <hr className="my-2" />
        {
          !props.isLoggedIn && <p className="lead">
            <Button onClick={goToLogin} color="primary">Sign In</Button>
          </p>
        }
        { props.isLoggedIn && <BookmarkCreate {...{ props }}/> }
        { props.isLoggedIn && <Button onClick={() => { window.location = '/logout' }}>Sign Out</Button> }
      </Jumbotron>
    </div>
  );
};

export default connect()(Page);
