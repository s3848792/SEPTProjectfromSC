import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Search from "./../Search";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Search></Search>, div);
});

test("renders search correctly", ()=> {
    const {getByTestId} = render(<Search></Search>);
    getByTestId('Search');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })