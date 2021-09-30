import React, { Component } from "react";
import {connect} from "react-redux";
import {searchBooks} from "../../actions/bookActions";


const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search books"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);


export default connect(
    null,
    { searchBooks },
)(SearchBar);