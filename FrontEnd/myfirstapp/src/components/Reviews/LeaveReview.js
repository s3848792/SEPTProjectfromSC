import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addReview} from "../../actions/reviewActions";


class LeaveReview extends Component {

    constructor(props){
        super(props);
        const {book} = props.match.params;
        var token = JSON.parse(localStorage.saveData || null) || {};
        console.log(token);
        this.state= {
            id: 0,
            bookID: book,
            userID: token.user,
            review: "",
            rating: 0,
            create_At: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const date = new Date();
        const reviewID = this.state.bookID + this.state.userID + date;
        const newRevID = sdbm(reviewID);
        const newRev = {
            id: newRevID,
            bookID: this.state.bookID,
            userID: this.state.userID,
            review: this.state.review,
            rating: this.state.rating,
            create_At: date
        }
        this.props.addReview(newRev, this.props.history);
    }
    render() {
        return (
            <div className="Book">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create / Edit Book form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg "
                                           placeholder="Review"
                                           name="review"
                                           value= {this.state.review}
                                           onChange = {this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg "
                                           placeholder="Enter Rating (out of 5)"
                                           name="rating"
                                           value= {this.state.rating}
                                           onChange = {this.onChange}
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const sdbm = str => {
    let arr = str.split('');
    return arr.reduce(
        (hashCode, currentVal) =>
            (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
        0
    );
};

LeaveReview.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { addReview }
)(LeaveReview);
