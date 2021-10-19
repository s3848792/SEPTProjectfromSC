import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getReviewsByBook} from "../../actions/reviewActions";


class ReviewsForBook extends Component {
    constructor(props) {
        super(props);
        const id = this.props.valueFromParent;
        console.log("Below is the ID");
        console.log(id);
        props.getReviewsByBook(id);
        this.state= {
            reviews: null
        };
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
                                        {this.props.reviews.map((review) => (
                                            <div>
                                                <h3>{review.rating} stars given</h3>
                                                {review.review}
                                            </div>
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
