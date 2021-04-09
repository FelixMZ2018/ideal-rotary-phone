import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class ErrorTrigger extends Component {
  break_stuff() {}
  componentDidMount() {}
  /// Because errors are not caught inside event handlers the throw error is in the render method
  render() {
    throw new Error("You just had to click the big red button ....");
    return (
      <div>
        <Button onClick={this.break_stuff}>Break it !</Button>
      </div>
    );
  }
}
