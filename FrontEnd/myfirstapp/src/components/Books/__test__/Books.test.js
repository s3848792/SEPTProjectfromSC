import React from 'react';
import ReactDOM from 'react-dom';
import Books from "./../Books";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Books></Books>, div);
});

test("renders book correctly", ()=> {
    const {getByTestId} = render(<Books></Books>);
    getByTestId('Books');
})

// test("matches snapshot", ()=> {
//     rederer.create(<Books></Books>).toJSON();
// })