import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

//test suite
describe('test suite for footer component', () => {
    //test cases
    test('Footer container must appear on the document', () => {
        const { container } = render( <Footer/> );
        expect( container.querySelector(".row")).toBeInTheDocument();
    });

});