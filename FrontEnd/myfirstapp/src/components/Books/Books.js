import React, { Component } from "react";
import {getBooks} from "../../actions/bookActions";
import {GET_BOOKS} from "../../actions/types";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class ViewBook extends Component {//view of all books in the database
    constructor(props) {
        super(props);
        props.getBooks();
        this.state= {
            books: null
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

ViewBook.propTypes = {
    createProject: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {books: state.book.books}
}

export default connect(
    mapStateToProps,
    { getBooks },
)(ViewBook);
