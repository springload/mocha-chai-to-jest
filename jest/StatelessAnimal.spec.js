import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import StatelessAnimal from '../things-to-test/StatelessAnimal';

describe('StatelessAnimal component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <StatelessAnimal
                sound={'Meow!'}
            />,
        );
        expect(result).toMatchSnapshot();
    });
});
