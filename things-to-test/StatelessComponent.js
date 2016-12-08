import React from 'react';

const propTypes = {
    someText: React.PropTypes.string.isRequired,
}

const StatelessComponent = ({ someText }) => (
    <div className="section">
        <p>
            {someText}
        </p>
    </div>
);

StatelessComponent.propTypes = propTypes;

export default StatelessComponent;
