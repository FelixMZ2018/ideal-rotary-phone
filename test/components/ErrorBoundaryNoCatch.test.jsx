import React from "react";
import { render, waitForElement } from "@testing-library/react";

import { MemoryRouter, Router } from "react-router"; // https://reacttraining.com/react-router/web/api/MemoryRouter

import ErrorBoundary from "../../src/components/errorhandling/ErrorBoundary";
import ErrorTrigger from "../../src/components/errorhandling/ErrorTrigger";

function Bomb({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error("Something went wrong");
  } else {
    return null
  }
}

it("renders the standard content when there is no error", async () => {
  // Render new instance in every test to prevent leaking state

  const { getByText } = render(
    <MemoryRouter>
      <ErrorBoundary>
        <Bomb shouldThrow={false} />
        <div> Test </div>
      </ErrorBoundary>
    </MemoryRouter>
  );

  await waitForElement(() => getByText(/Test/i));
});