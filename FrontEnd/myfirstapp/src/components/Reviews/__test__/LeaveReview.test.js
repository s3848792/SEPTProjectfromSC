import React from 'react';
import ReactDOM, {render} from 'react-dom';
import LeaveReview from "./../LeaveReview";

import { render, cleanup } from '@testing-library/react';
import rederer from 'react-test-renderer'

afterEach(cleanup)
test("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<LeaveReview></LeaveReview>, div);
});

test("renders leave review correctly", ()=> {
    const {getByTestId} = render(<LeaveReview></LeaveReview>);
    getByTestId('LeaveReview');
})

// test("matches snapshot", ()=> {
//     const tree = rederer.create(<AddBook></AddBook>).toJSON();
//     expect(tree).toMatchSnapshot();
// })