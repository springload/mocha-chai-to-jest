import React from 'react';
import HatchingAnimal from '../things-to-test/HatchingAnimal';
import ReactTestUtils from 'react-addons-test-utils';

describe('HatchingAnimal component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <HatchingAnimal />
        );
        expect(result).toMatchSnapshot();
    });

    it('componentDidMount is working', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <HatchingAnimal />
        );
        const instance = shallowRenderer.getMountedInstance();
        expect(instance.state.hatched).toBeFalsy();
        instance.componentDidMount();
        expect(instance.state.hatched).toBeTruthy();
    });
});
