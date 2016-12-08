import React from 'react';
import StatelessAnimal from './StatelessAnimal';

export default class HatchingAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hatched: false,
        }
    }

    componentDidMount() {
        this.setState({
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
