import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Login from "./../Login";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Login></Login>, div);
});

test("renders login correctly", ()=> {
    const {getByTestId} = render(<Login></Login>);
    getByTestId('Login');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })