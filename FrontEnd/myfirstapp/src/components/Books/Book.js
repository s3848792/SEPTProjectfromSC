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

    shouldLeaveReview() {
        var token = JSON.parse(localStorage.saveData || null) || {};
        try {
            if (token.loginToken.success) {
                return LeaveReviewButton(this.props.book.id);
            }else {
                return (
                    <p>You need to login to review this book</p>
                )
            }
        }catch {
            return (
                <p>You need to login to review this book</p>
            )
        }
    }

    render() {
        // this.props.books will be all the books that the user has entered in the database.
        if (!(this.props.book === undefined )) {
            return (
                <div>

                    <li key={"Title"}>Title: {this.props.book.title}</li>
                    <li key={"Author"}>Author: {this.props.book.author}</li>
                    <li key={"status"}>status: {this.props.book.status}</li>
                    {this.shouldLeaveReview()}
                    <ReviewsForBook valueFromParent={this.state.id}/>
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

