/* eslint no-unused-expressions: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Animal from '../things-to-test/Animal';

describe('<Animal />', () => {
    it('it should display a button', () => {
        const wrapper = shallow(<Animal />);
        expect(wrapper.find('button').first().text()).to.equal('Pat me!');
    });

    it('it should display a message after clicking the button', () => {
        const wrapper = shallow(<Animal />);
        expect(wrapper.state().clicked).to.be.false;
        wrapper.find('button').simulate('click');
        expect(wrapper.state().clicked).to.be.true;
        expect(wrapper.text()).to.contain('Woof!');
    });
});
