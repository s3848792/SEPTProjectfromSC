import React, { Component } from "react";
import {searchBooks} from "../../actions/bookActions";
import {connect} from "react-redux";


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state= {
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const s = event.target.elements.s;
        console.log(s.value);
        //this.props.searchBooks(s.value);
        const val = "/search/" + s.value;
        console.log(val);
        window.location.replace(val);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search books"
                    name="s"
                />
                <input type="submit" />
            </form>
        )
    }
}


export default connect(
    null,
    { searchBooks }
)(SearchBar);

