import React, { Component } from "react";
import {searchBooks} from "../../actions/bookActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            books: props
        };
    }

    createLink(book) {
        return "/book/" + book.id;
    }

    render() {
        // this.props.books will be all the books that the user has entered in the database.
        return (
            <div className="Book">
                <div className="container">
                    <div className="row">
                        <section>
                            <nav>
                                <ul>
                                    <h2>Hello World</h2>
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
    return {books: state.book.books}
}
export default connect(
    mapStateToProps,
    { searchBooks },
)(BookSearch);

