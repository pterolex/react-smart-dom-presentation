import React from 'react';
import ReactHardware, { Led } from 'react-hardware';

const HIGH = 255;
const LOW = 0;

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this._timer = null;
    }

    componentDidMount() {
        this._timer = setInterval(_ => (
            this.setState(prevState => 
                ({value: prevState.value === HIGH ? LOW : HIGH}))
            ), this.props.interval
        );
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    render() {
        return (
            <Led pin={10} value={this.state.value} />
        );
    }
}

const PORT = '/dev/tty.usbmodem1411';

ReactHardware.render(<Application interval={1000} />, PORT);


