import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry there is an error</h1>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary
