import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getReviewsByBook} from "../../actions/reviewActions";
import LeaveReviewButton from "./LeaveReviewButton";


class ReviewsForBook extends Component {
    constructor(props) {
        super(props);
        //Gets the review ID from parent (Book.js) file
        const id = this.props.valueFromParent;
        //Gets all reviews by the book ID
        props.getReviewsByBook(id);
        this.state= {
            reviews: null,
            bookID: id
        };
    }

    //Checks whether the current user is logged in to determine whether they can leave a review or not.
    shouldLeaveReview() {
        const token = JSON.parse(localStorage.saveData || null) || {};
        try {
            if (token.loginToken.success) {
                return LeaveReviewButton(this.state.bookID);
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
        return (
                        <section>
                            <div>
                                {this.shouldLeaveReview()}
                                <br/>
                                <br/>
                                {this.props.reviews.map((review) => (
                                    <div>
                                        <div className="card w-50">
                                            <div className="card-header">
                                                {review.rating} stars
                                            </div>
                                            <div className="card-body">
                                                <blockquote className="blockquote mb-0">
                                                    <p>{review.review}</p>
                                                    <footer className="blockquote-footer"><cite title="Source Title">{review.userID}</cite></footer>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                ))}
                            </div>
                        </section>
        );
    }
}

ReviewsForBook.propTypes = {
    createProject: PropTypes.func.isRequired
};

//Connects the state to the dispatch from getReviewsByBook from bookActions.js
function mapStateToProps(state, ownProps) {
    console.log(state)
    return {reviews: state.review.reviews}
}

export default connect(
    mapStateToProps,
    { getReviewsByBook },
)(ReviewsForBook);
