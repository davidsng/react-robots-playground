import React, { Component } from 'react'
// import CounterButton from './CounterButton'

export class Header extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
         return false
    }

    render() {
        return (
            <div>
                {/* <CounterButton color={'red'} /> */}
                <h1>Robo Friends</h1>
            </div>
        )
    }
}

export default Header
