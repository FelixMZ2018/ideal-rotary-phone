import React from "react";
import { render, waitForElement } from "@testing-library/react";

import { MemoryRouter, Router } from "react-router"; // https://reacttraining.com/react-router/web/api/MemoryRouter

import ErrorBoundary from "../../src/components/errorhandling/ErrorBoundary";
import ErrorTrigger from "../../src/components/errorhandling/ErrorTrigger";

const renderProviders = (ui: React.ReactElement) => render(ui, {})

const Child = () => {
  throw new Error();
};

describe("Error Boundary", () => {
  it(`should render error boundary component when there is an error`, () => {
    const { getByText } = renderProviders(
      <MemoryRouter>
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      </MemoryRouter>
    );
    const errorMessage = getByText("something went wrong");
    expect(errorMessage).toBeDefined();
  });
});
