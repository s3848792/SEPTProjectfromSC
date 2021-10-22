import React, { Component } from "react";
import {getBooks, searchBooks} from "../../actions/bookActions";
import {GET_BOOKS} from "../../actions/types";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class BookSearch extends Component {
    constructor(props) {
        super(props);
        const {keyword} = props.match.params
        props.searchBooks(keyword);
        this.state= {
            books: []
        };
    }

    createLink(book) {
        return "/book/" + book.id;
    }

    render() {
        // this.props.books will be all the books that the user has entered in the database.
        return (
            <div data-testid="BookSearch" className="Book">
                <div className="container">
                    <div className="row">
                        <section>
                            <h1>Results</h1>
                            <nav>
                                <ul>
                                    <ol>
                                        {this.props.books.map((book) => (
                                            <li key={book.title}>
                                                {book.title} written by  {book.author} - <a href={this.createLink(book)}>View</a>
                                            </li>
                                        ))}
                                    </ol>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

BookSearch.propTypes = {
    createProject: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    try {
        return {books: Object.values(state.book.searchResult)}
    } catch {
        return {books: []}
    }
}

export default connect(
    mapStateToProps,
    { searchBooks },
)(BookSearch);

