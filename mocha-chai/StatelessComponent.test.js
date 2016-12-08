import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import StatelessComponent from '../things-to-test/StatelessComponent';

const testText = "Test text";

describe('<StatelessComponent />', function () {
  it('it should display my text', function () {
    const wrapper = shallow(<StatelessComponent someText={testText} />);
    expect(wrapper.text()).to.contain(testText);
  });

  it('it should have a section class', function () {
    const wrapper = shallow(<StatelessComponent someText={testText} />);
    expect(wrapper.find('div').first().props().className).to.equal('section');
  });
});
