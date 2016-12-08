import React from 'react';
import StatelessComponent from './StatelessComponent';

const ContainerComponent = () => (
    <div className="container">
        <p>
            I'm a container component. I contain another component.
        </p>
        <StatelessComponent someText="Hello stateless World!" />
    </div>
);

export default ContainerComponent;
