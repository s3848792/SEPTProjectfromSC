import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Footer from "./../Footer";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Footer></Footer>, div);
});

test("renders footer correctly", ()=> {
    const {getByTestId} = render(<Footer></Footer>);
    getByTestId('Footer');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })