import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'reactstrap'

import Page, { goToLogin, signOut } from 'components/page'

jest.dontMock('components/page')

const wrapper = (isLoggedIn) =>
  shallow(<Page isLoggedIn={ isLoggedIn } />);

describe("when logged in", function() {
  it("displays sign out button", function() {
    expect(wrapper(true)).contains(<Button onClick={signOut}>Sign Out</Button>).toBe(true);
  });
});

describe("when not logged in", function() {
  it("displays login button", function() {
    expect(wrapper(false)).contains(<Button onClick={goToLogin}>Sign In</Button>).toBe(true);
  });
});
