import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem/CartItem';


describe('CartItem renders correctly', () => {

  test('renders cartitem', () => {
    render(<CartItem id={1} quantity={1} />);
    expect(screen).toMatchSnapshot();
  });

})