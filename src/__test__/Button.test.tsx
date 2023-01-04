import Button from "../components/Button";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('testing button component', () => {
    test('button renders correctly', () => {
        render(<Button children="Test" className="add2cart" />)
        const buttonComponent = screen.queryByRole('button');
        expect(buttonComponent).toBeInTheDocument();
    });
    test('should render a button with the class of cart-checkout', () => {
        render(<Button className="cart-checkout" children="Checkout" />)
        const buttonComponent = screen.getByRole('button')
        // expect(buttonComponent).toHaveAttribute('children', 'Checkout')
    })
})