import React from 'react'
import {link, Link} from "react-router-dom";

 const AddBookButton=() => {//button to send reuest to backend to update book
    return (
        <React.Fragment>
        <Link to="/addbook"
        className="btn btn-lg btn-info">
        Add a book
        </Link>
        </React.Fragment>
    )
};
export default AddBookButton;