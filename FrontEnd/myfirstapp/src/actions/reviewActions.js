import axios from "axios";
import {GET_ERRORS, GET_REVIEWS_BY_BOOK, GET_REVIEWS_BY_USER} from "./types";

//Adds a review to the database
export const addReview = (review, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8082/api/review/addreview", review);
        history.push(`/book/${review.bookID}`);
    } catch (err) {
        console.log("review error");
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

//Gets all reviews for a given book
export const getReviewsByBook = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:8082/api/review/getbybookid/${id}`);
    
    dispatch({
        type: GET_REVIEWS_BY_BOOK,
        payload: res.data
    });
};