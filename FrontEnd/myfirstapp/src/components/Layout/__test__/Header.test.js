import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Header from "./../Header";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Header></Header>, div);
});

test("renders header correctly", ()=> {
    const {getByTestId} = render(<Header></Header>);
    getByTestId('Header');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })