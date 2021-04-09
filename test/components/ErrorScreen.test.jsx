import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import ErrorScreen from "../../src/components/errorhandling/ErrorScreen";


it('renders the Error Screen', async () => {
    // Render new instance in every test to prevent leaking state
    const { getByText } = render(<ErrorScreen/>);
  
    await waitForElement(() => getByText(/We are sorry this happened but rest assured we are working on fixing it/i));
  });