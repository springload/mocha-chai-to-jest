import React from 'react';
import StatelessAnimal from '../things-to-test/StatelessAnimal';
import ReactTestUtils from 'react-addons-test-utils';

describe('StatelessAnimal component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <StatelessAnimal
                sound={"Meow!"}
            />
        );
        expect(result).toMatchSnapshot();
    });
});
