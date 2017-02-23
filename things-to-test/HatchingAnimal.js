import React from 'react';

export default class HatchingAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleHeight: '1px',
        };
    }

    componentDidMount() {
        // N.B. This is one of the only case where you can do
        // a setState() inside a componentDidMount
        // Because it's ok for it to rerender
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
            styleHeight: '150px',
        });
    }

    render() {
        const { styleHeight } = this.state;
        return (
            <div className="section" style={{ height: styleHeight }}>
                <p>
                    I am growing when I am mounted.
                </p>
            </div>
        );
    }
}
