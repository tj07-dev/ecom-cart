import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header renders correctly', () => {
  test('renders without crashing', () => {
    render(<MemoryRouter initialEntries={["/"]}>
    <Header />
  </MemoryRouter>);
    expect(screen).toMatchSnapshot();
  });
  
  
})