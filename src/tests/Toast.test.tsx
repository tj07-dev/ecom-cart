import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';


import App from '../App'
describe('App renders correctly', () => {

  test('renders without crashing', () => {
    
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
  test('renders ', () => {
    render(<App />);
    const element= screen.getByText(/Add2Cart/i);
    expect(element).toBeInTheDocument();
  });
  
})