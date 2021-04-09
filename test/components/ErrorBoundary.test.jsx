import React from "react";
import { render,screen, getByText, act } from "@testing-library/react";

import { MemoryRouter, Router } from "react-router"; // https://reacttraining.com/react-router/web/api/MemoryRouter

import ErrorBoundary from "../../src/components/errorhandling/ErrorBoundary";
import ErrorTrigger from "../../src/components/errorhandling/ErrorTrigger";

describe("ErrorScreen", () => {
  console.error = jest.fn();
  function throw_error() {
    throw new Error("Whoopsie Daisy");
  }
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("renders App component", () => {
    act(() => {
        <MemoryRouter>
        <ErrorBoundary>
          <ErrorTrigger />
        </ErrorBoundary>
      </MemoryRouter>,
      container
    });

    expect(container.getByText('Ooooops !')).toBe("Ooooops !");
  });
});
