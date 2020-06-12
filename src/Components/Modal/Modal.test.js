import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import LoginTemplate from './Templates/Login/LoginTemplate';
import ShoppingTemplate from './Templates/Shopping/ShoppingTemplate';

/*  motto: facilitate querying the DOM in the same way the user would.
    What we want to test: 

    From loginTemplate:
    -Close modal icon to exist
    -Inputs to be validated

    From ShoppingTemplate:
    -Close modal icon to exist
    -Process order function to be called */

//test suite
describe('test suite for modal templates', () => {
    //test cases
    test('Close modal icon to be in the document', () => {
        const { container } = render( <LoginTemplate/> );
        expect( container.querySelector(".close-button")).toBeInTheDocument();
    });

    test('Input email to be validated', () => {
        const { container } = render( <LoginTemplate/> );
        expect( container.querySelector("#email")).toBeValid();
    });

    test('Input password to be validated', () => {
        const { container } = render( <LoginTemplate/> );
        expect( container.querySelector("#password")).toBeValid();
    });

    test('Login validation function to be called', () => {
        const { container } = render( <LoginTemplate/> );
        //function fn.jest()
        const loginButton = container.querySelector(".LoginButton");
        fireEvent.click(loginButton);
        expect(/*function*/).toHaveBeenCalled();
    });

    test('Close modal icon to be visible', () => {
        const { container } = render( <ShoppingTemplate/> );
        expect( container.querySelector(".close-button")).toBeVisible();
    });

    test('Process-order function to be called', () => {
        const { container } = render( <LoginTemplate/> );
        //function fn.jest()
        const processOrder = container.querySelector(".OrderButton");
        fireEvent.click(processOrder);
        expect(/*function*/).toHaveBeenCalled();
    });
});