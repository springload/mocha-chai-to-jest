import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ContainerComponent from '../things-to-test/ContainerComponent';

const testText = "Test text";

describe('<ContainerComponent />', function () {
  it('it should display the container text', function () {
    const wrapper = shallow(<ContainerComponent />);
    expect(wrapper.text()).to.contain('I\'m a container component. I contain another component.');
    expect(wrapper.text()).to.not.contain('Hello stateless World!');
  });

  it('it should have a section class', function () {
    const wrapper = shallow(<ContainerComponent someText={testText} />);
    expect(wrapper.find('div').first().props().className).to.equal('container');
  });
});
