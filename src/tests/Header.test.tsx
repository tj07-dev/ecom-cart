import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header renders correctly', () => {
  test('Header renders without crashing', () => {
    render(<MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>);
    expect(screen).toMatchSnapshot();
  });


})