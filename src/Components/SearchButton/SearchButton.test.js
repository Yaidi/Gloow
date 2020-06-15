import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchButton from './SearchButton';

/*  motto: facilitate querying the DOM in the same way the user would.
    What we want to test: 
    -input for search to exist
    -searchicon to exist
    - function for search to be executed */

//test suite
describe('test suite for SearchButton component', () => {
    //test cases
    test('Input for search to be in the document', () => {
        const { container } = render( <SearchButton/> );
        expect( container.querySelector(".input")).toBeInTheDocument();
    });

    test('Search-icon to be in the document', () => {
        const { container } = render( <SearchButton/> );
        expect( container.querySelector(".button")).toBeInTheDocument();
    });

    test('Function for searching product to be called', () => {
        const { container } = render( <SearchButton/> );
        //function fn.jest()
        const searchButton = container.querySelector(".button");
        fireEvent.click(searchButton);
        expect(/*function*/).toHaveBeenCalled();
    });

});