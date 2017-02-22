/* eslint no-unused-expressions: 0 */

import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import HatchingAnimal from '../things-to-test/HatchingAnimal';

describe('<HatchingAnimal />', () => {
    it('it should hatch', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <HatchingAnimal />,
    );
        const instance = shallowRenderer.getMountedInstance();
        expect(instance.state.hatched).to.be.false;
        instance.componentDidMount();
        expect(instance.state.hatched).to.be.true;
    });
});
