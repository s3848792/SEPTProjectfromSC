import React from 'react';
import ReactDOM, {render} from 'react-dom';
import user from "./../User";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'
import User from "./../User";

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<User></User>, div);
});

test("renders user correctly", ()=> {
    const {getByTestId} = render(<User></User>);
    getByTestId('User');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })