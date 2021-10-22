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
            rating: 5,
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

    oneIsSelected() {
        this.state.rating=1;
    }
    twoSelected() {
        this.state.rating=2;
    }
    threeSelected() {
        this.state.rating=3;
    }
    fourSelected() {
        this.state.rating=4;
    }
    fiveSelected() {
        this.state.rating=5;
    }
    render() {
        return (
            <div data-testid="LeaveReview" className="Book">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Leave Review</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>

                                <div>
                                    <h4>Star Rating</h4>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={this.oneIsSelected.bind(this)}/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio1">1</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={this.twoSelected.bind(this)}/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio2">2</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onChange={this.threeSelected.bind(this)}/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio3">3</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onChange={this.fourSelected.bind(this)}/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio4">4</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onChange={this.fiveSelected.bind(this)}/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio5">5</label>

                                </div>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                              placeholder="Review"
                                              name="review"
                                              value= {this.state.review}
                                              onChange = {this.onChange}
                                    />
                                </div>
                                <br/>

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
