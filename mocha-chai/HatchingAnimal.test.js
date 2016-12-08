import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-addons-test-utils';

import HatchingAnimal from '../things-to-test/HatchingAnimal';

describe('<HatchingAnimal />', function () {
  it('it should hatch', function () {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(
        <HatchingAnimal />
    );
    const instance = shallowRenderer.getMountedInstance();
    expect(instance.state.hatched).to.be.false;
    instance.componentDidMount();
    expect(instance.state.hatched).to.be.true;
  });
});
