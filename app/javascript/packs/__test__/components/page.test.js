jest.dontMock('../../components/page')

import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'reactstrap'

import { Page, goToLogin, signOut } from '../../components/page'

const wrapper = shallow(<Page />);

describe("when logged in", function() {
  it("displays sign out button", function() {
    wrapper.setProps({isLoggedIn: true})
    expect(wrapper.find(Button).dive().text()).toContain('Sign Out')
  });
});

describe("when not logged in", function() {
  it("displays login button", function() {
    wrapper.setProps({ isLoggedIn: false })
    expect(wrapper.find(Button).dive().text()).toContain('Sign In')
  });
});
