import React from 'react';
import Animal from '../things-to-test/Animal';
import { shallow } from 'enzyme';

describe('Animal component', () => {
    it('renders correctly with min params', () => {
        const component = shallow(
            <Animal />
        );
        expect(component).toMatchSnapshot();
    });

    it('click event works', () => {
        const component = shallow(
            <Animal />
        );
        expect(component).toMatchSnapshot();

        // we simulate a click
        component.find('button').first().simulate('click');

        // and generate a new snapshot of the component
        expect(component).toMatchSnapshot();
    });
});
