import React from 'react';
import ReactDOM, {render} from 'react-dom';
import AddBook from "./../AddBook";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<AddBook></AddBook>, div);
});

test("renders addbook correctly", ()=> {
    const {getByTestId} = render(<AddBook></AddBook>);
    getByTestId('AddBook');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })


