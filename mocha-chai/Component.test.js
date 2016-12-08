import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Component from '../things-to-test/Component';

describe('<Component />', function () {
  it('it should display a button', function () {
    const wrapper = shallow(<Component />);
    expect(wrapper.find('button').first().text()).to.equal('Please click me!');
  });

  it('it should display a message after clicking the button', function () {
    const wrapper = shallow(<Component />);
    expect(wrapper.state().clicked).to.be.false;
    wrapper.find('button').simulate('click');
    expect(wrapper.state().clicked).to.be.true;
    expect(wrapper.text()).to.contain('Holy click!');
  });
});
