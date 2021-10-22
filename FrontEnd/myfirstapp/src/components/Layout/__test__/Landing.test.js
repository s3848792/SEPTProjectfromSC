import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Landing from "./../Landing";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Landing></Landing>, div);
});

test("renders landing correctly", ()=> {
    const {getByTestId} = render(<Landing></Landing>);
    getByTestId('Landing');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })