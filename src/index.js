import ReactDOM from 'react-dom'
import React from 'react'
import { stopReportingRuntimeErrors } from "react-error-overlay";

import './styles/index.css'
import './styles/device-spinner.css'

import App from './App'


if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)
