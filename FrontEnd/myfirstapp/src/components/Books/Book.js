import React, { Component } from "react";
import {getBook} from "../../actions/bookActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import LeaveReviewButton from "../Reviews/LeaveReviewButton";
import ReviewsForBook from "../Reviews/ReviewsForBook";


class ViewSingleBook extends Component {
    constructor(props) {
        super(props);
        const {id} = props.match.params
        props.getBook(id);
        this.state= {
            book: null,
            id: id
        };
    }

    render() {
        // this.props.books will be all the books that the user has entered in the database.
        if (!(this.props.book === undefined )) {
            return (
                <div data-testid="Book" className="Book">
                    <div className="container">
                        <div className="row">
                            <section>
                                <h1>{this.props.book.title}</h1>
                                <h4>Written by {this.props.book.author}</h4>
                                <br/>
                                <br/>
                                <ReviewsForBook valueFromParent={this.state.id}/>
                            </section>
                        </div>
                    </div>
                </div>
            );

        }
        return (
            <div className="Book">
                <div className="container">
                    <li key="Key">Book Not Found!</li>
                </div>
            </div>
        );
    }
}

ViewSingleBook.propTypes = {
    createProject: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {book: state.book.book}
}

export default connect(
    mapStateToProps,
    { getBook },
)(ViewSingleBook);

