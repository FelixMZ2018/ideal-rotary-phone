import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false}
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  
  static getDerivedStateFromError(error) {
    return <div>Oh no! </div>;
}
  render() {
    return <div>{this.props.children}</div>;
  }
}
