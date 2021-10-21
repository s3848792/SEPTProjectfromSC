import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getReviewsByBook} from "../../actions/reviewActions";
import LeaveReviewButton from "./LeaveReviewButton";


class ReviewsForBook extends Component {
    constructor(props) {
        super(props);
        const id = this.props.valueFromParent;
        console.log("Below is the ID");
        console.log(id);
        props.getReviewsByBook(id);
        this.state= {
            reviews: null,
            bookID: id
        };
    }
    shouldLeaveReview() {
        const token = JSON.parse(localStorage.saveData || null) || {};
        console.log("Token");
        console.log(token);
        console.log(token.loginToken.success)
        try {
            if (token.loginToken.success) {
                return LeaveReviewButton(this.state.bookID);
            }else {
                console.log("token else")
                return (
                    <p>You need to login to review this book</p>
                )
            }
        }catch {
            console.log("catch part");
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

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {reviews: state.review.reviews}
}

export default connect(
    mapStateToProps,
    { getReviewsByBook },
)(ReviewsForBook);
