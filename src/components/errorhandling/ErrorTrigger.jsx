import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

export default class ErrorTrigger extends Component {

    break_stuff() {

    }
    componentDidMount(){

    }
    render() {
        throw new Error("You just had to click this right?");
        return (
            <div>
                <Button onClick={this.break_stuff}>Break it !</Button>
            </div>
        )
    }
}
