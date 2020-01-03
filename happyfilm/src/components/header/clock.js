import React, { Component, Fragment } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            time: new Date().toLocaleTimeString()
        })
    }
    componentDidMount() {
        this.intervalId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.time}
            </Fragment>
        )
    }
}
