import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import HatchingAnimal from '../things-to-test/HatchingAnimal';

describe('HatchingAnimal component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <HatchingAnimal />,
        );
        expect(result).toMatchSnapshot();
    });

    it('componentDidMount is working', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <HatchingAnimal />,
        );
        const instance = shallowRenderer.getMountedInstance();
        expect(instance.state.styleHeight).toBe('1px');
        instance.componentDidMount();
        expect(instance.state.styleHeight).toBe('150px');
    });
});
