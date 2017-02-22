import React from 'react';
import StatelessAnimal from './StatelessAnimal';
import HatchingAnimal from './HatchingAnimal';

const CatBar = () => (
    <div className="catbar">
        <p>
            I am a cat bar. I contain cats.
        </p>
        <StatelessAnimal sound="Meow!" />
        <StatelessAnimal sound="Meoooow!" />
        <StatelessAnimal sound="Meeeeeeeeow!" />
        <HatchingAnimal />
    </div>
);

CatBar.displayName = 'CatBar';

export default CatBar;
