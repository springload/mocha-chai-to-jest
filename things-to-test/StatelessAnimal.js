import React from 'react';

const propTypes = {
    sound: React.PropTypes.string.isRequired,
};

const StatelessAnimal = ({ sound }) => (
    <div className="animal">
        <p>
            {sound}
        </p>
    </div>
);

StatelessAnimal.propTypes = propTypes;
StatelessAnimal.displayName = 'StatelessAnimal';

export default StatelessAnimal;
