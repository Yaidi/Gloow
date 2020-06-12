import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from './Header';

/*  motto: facilitate querying the DOM in the same way the user would.
    What we want to test: 
    - open modalLogin
    -open modalCart when clicked 
    - logo onclick redirects or contains an a href */

//test suite
describe('test suite for header component', () => {
    //test cases
    test('Logo icon must be in the document', () => {
        const { container } = render(<Header/>);
        expect(container.querySelector('.Logo')).toBeInTheDocument();
    });

    test('renders go back to home link at the logo', () => {
        render(<Header/>)
        const aboutAnchorNode = screen.getByText(/about/i);
        expect(aboutAnchorNode).toBeInTheDocument();
    });

    test('admin-icon button executes a function', () => {
        render(<Header/>)
        //imports function and simulates the execution  jest.fn()
        const loginButton = container.querySelector("#admin-icon");
        fireEvent.click(loginButton);
        expect(/*function*/).toHaveBeenCalled();
    });

    test('shopping-cart-icon button executes a function', () => {
        render(<Header/>)
        //imports function and simulates the execution  jest.fn()
        const shoppingButton = container.querySelector("#shopping-icon");
        fireEvent.click(shoppingButton);
        expect(/*function*/).toHaveBeenCalled();
    });

});