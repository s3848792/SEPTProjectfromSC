import React from 'react'
import {link, Link} from "react-router-dom";

 const AddBookButton=() => {
    return (
        <React.Fragment>
        <Link to="/addbook" className="btn btn-lg btn-info" data-testid="addBookButton"> Add a book </Link>
        </React.Fragment>
    )
};
export default AddBookButton;