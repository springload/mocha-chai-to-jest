import React from 'react';
import StatelessComponent from './StatelessComponent';

export default class ReactCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true,
        });
    }

    render() {
        const { mounted } = this.state;
        return (
            <div className="section">
                {mounted ? (
                    <p>
                        This text will be displayed once I'm mounted.
                    </p>
                ) : (
                    <p>
                        Please mount me!
                    </p>
                )}
            </div>
        );
    }
}
