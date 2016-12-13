import React from 'react';
import CatBar from '../things-to-test/CatBar';
import ReactTestUtils from 'react-addons-test-utils';

describe('CatBar component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <CatBar />
        );
        expect(result).toMatchSnapshot();
    });
});
