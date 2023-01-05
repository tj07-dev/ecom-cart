import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';
import CartItem from '../components/CartItem';


describe('App renders correctly', () => {

  test('renders cartitem', () => {
    render(<CartItem id={1} quantity={1} />);
    expect(screen).toMatchSnapshot();
  });
  
})