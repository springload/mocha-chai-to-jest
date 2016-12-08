import React from 'react';
import StatelessAnimal from './StatelessAnimal';

const CatBar = () => (
    <div className="catbar">
        <p>
            I'm a cat bar. I contain cats.
        </p>
        <StatelessAnimal sound="Meow!" />
        <StatelessAnimal sound="Meoooow!" />
        <StatelessAnimal sound="Meeeeeeeeow!" />
    </div>
);

export default CatBar;
