import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorScreen from "./ErrorScreen";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error Boundary triggerd via catch")
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true,
    });
    // Any automatic logging (Firebase or Sentry) can be added here
  }

  render() {
    console.log("Error Boundary triggerd via render")
    console.log(this.state.hasError)
    if (this.state.hasError) {
      this.setState({
        hasError: false,
      });
      // Reseting the has error state //
      // Note: Errors in the Error Screen Component might cause an infinite loop ...
      return (
        <div>
          <Redirect
            to={{
              pathname: "error",
              state: {
                error: this.state.error.message,
                stacktrace: this.state.errorInfo.componentStack,
              },
            }}
          />

          <ErrorScreen/>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
