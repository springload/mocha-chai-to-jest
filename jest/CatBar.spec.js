import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import CatBar from '../things-to-test/CatBar';

describe('CatBar component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <CatBar />,
        );
        expect(result).toMatchSnapshot();
    });
});
