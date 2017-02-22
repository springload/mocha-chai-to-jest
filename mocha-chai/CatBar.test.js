import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CatBar from '../things-to-test/CatBar';

describe('<CatBar />', () => {
    it('it should display the container text', () => {
        const wrapper = shallow(<CatBar />);
        expect(wrapper.text()).to.contain('I am a cat bar. I contain cats.');
        expect(wrapper.text()).to.not.contain('Meow!');
    });

    it('it should have a section class', () => {
        const wrapper = shallow(<CatBar />);
        expect(wrapper.find('div').first().props().className).to.equal('catbar');
    });
});
