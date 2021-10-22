import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Register from "./../Register";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Register></Register>, div);
});

test("renders register correctly", ()=> {
    const {getByTestId} = render(<Register></Register>);
    getByTestId('Register');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })