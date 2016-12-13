import React from 'react';

export default class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.clickEvent = this.pvtClickEvent.bind(this);
    }

    pvtClickEvent(evt) {
        this.setState({
            clicked: true,
        });
    }

    render() {
        const { clicked } = this.state;
        return (
            <div className="section">
                {clicked ? (
                    <p>
                        Woof!
                    </p>
                ) : (
                    <button onClick={this.clickEvent}>
                        Pat me!
                    </button>
                )}
            </div>
        );
    }
}
