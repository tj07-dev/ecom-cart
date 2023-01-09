import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Button from '../components/Button/Button'
describe('Button renders correctly', () => {

  test('Button is rendering without crashing', () => {
    render(<Button className={'add2cart'} />);
    expect(screen).toMatchSnapshot();
  });
  test('should render a button', () => {
    render(<Button className="cart-checkout" children="Checkout" />)
    const buttonComponent = screen.getByRole('button')
    expect(buttonComponent).toHaveAttribute('data-testid', "ok-button")
  })
})