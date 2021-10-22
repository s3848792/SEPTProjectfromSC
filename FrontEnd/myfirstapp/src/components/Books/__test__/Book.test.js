import React from 'react';
import ReactDOM from 'react-dom';
import Book from "./../Book";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Book></Book>, div);
});

test("renders book correctly", ()=> {
    const {getByTestId} = render(<Book></Book>);
    getByTestId('Book');
})

// test("matches snapshot", ()=> {
//     rederer.create(<Book></Book>).toJSON();
// })