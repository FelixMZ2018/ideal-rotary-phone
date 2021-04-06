import React, { Component } from 'react'

export default class ErrorTrigger extends Component {
    componentDidMount(){
        throw Error("You just had to click this right?");

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
