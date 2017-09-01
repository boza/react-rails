import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const goToLogin = () => window.location = '/sign_in'

const Page = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a example application with Rails 5.1, react, redux, bootstrap</p>
        <hr className="my-2" />
        <p className="lead">
          <Button onClick={goToLogin} color="primary">Sign In</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Page;
