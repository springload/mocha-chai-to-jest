import React from 'react';

export default class HatchingAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hatched: false,
        };
    }

    componentDidMount() {
        // N.B. Do not reproduce this in your code.
        // You should not setState in componentDidMount.
        // This is done here just for a basic test showcase.
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
            hatched: true,
        });
    }

    render() {
        const { hatched } = this.state;
        return (
            <div className="section">
                {hatched ? (
                    <p>
                        Hello World!
                    </p>
                ) : (
                    <p>
                        Still in my egg!
                    </p>
                )}
            </div>
        );
    }
}
