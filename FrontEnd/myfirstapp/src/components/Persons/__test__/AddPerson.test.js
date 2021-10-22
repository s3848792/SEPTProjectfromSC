import React from 'react';
import ReactDOM, {render} from 'react-dom';
import AddPerson from "./../AddPerson";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<AddPerson></AddPerson>, div);
});

test("renders addperson correctly", ()=> {
    const {getByTestId} = render(<AddPerson></AddPerson>);
    getByTestId('AddPerson');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })