import React from 'react';
import ReactDOM from 'react-dom';
import BookSearch from "./../BookSearch";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<BookSearch></BookSearch>, div);
});

test("renders book correctly", ()=> {
    const {getByTestId} = render(<BookSearch></BookSearch>);
    getByTestId('BookSearch');
})

// test("matches snapshot", ()=> {
//     rederer.create(<Books></Books>).toJSON();
// })