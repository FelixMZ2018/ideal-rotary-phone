import {
  getByRole,
  findByText,
  getByPlaceholderText,
} from "@testing-library/dom";
import "@testing-library/jest-dom";

import ErrorScreen from "../../src/components/errorhandling/ErrorScreen";

describe('Error Screen',() => {
    let div
    let container
    
    beforeEach(() => {
        div = document.createElement('div')
        container = renderContent(div)
      })
})