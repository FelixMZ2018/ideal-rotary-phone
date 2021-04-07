import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorScreen from "./ErrorScreen";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true
    })
  }


  render() {
    if (this.state.hasError) {
      this.setState( {
        hasError: false
      })
      // You can render any custom fallback UI
      return (  
        <div>
        <Redirect to="error"/>

        <ErrorScreen error={this.state.error}/>

        </div>
      )
   
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary)
