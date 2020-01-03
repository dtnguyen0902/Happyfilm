import React, { Component } from 'react'

export default class clock extends Component {
    render() {
        return (
            <div>
                <h2 className='happyfilm'>{new Date().toLocaleTimeString()}</h2>
            </div>
        )
    }
}
setInterval(clock,1000);