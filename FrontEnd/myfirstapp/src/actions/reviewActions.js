import axios from "axios";
import {GET_ERRORS, GET_REVIEWS_BY_BOOK, GET_REVIEWS_BY_USER} from "./types";

export const addReview = (review, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8082/api/review/addreview", review);
        history.push("/viewbooks");
    } catch (err) {
        console.log("review error");
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const getReviewsByBook = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:8082/api/review/getbybookid/${id}`);
    console.log("\nAll reviews data has been retrieved from database.\n");
    console.log(res);
    console.log(res.data);

    dispatch({
        type: GET_REVIEWS_BY_BOOK,
        payload: res.data
    });
};

// export const getBook = (id) => async dispatch => {
//     try {
//         console.log("About to get a book");
//         const res = await axios.get(`http://localhost:8080/api/book/get/${id}`);
//         console.log("Got the book");
//         dispatch({
//             type: GET_BOOK,
//             payload: res.data
//         });
//     } catch (error) {
//         console.log("Error with getting book");
//     }
// };
//
// export const searchBooks = (keyword) => async dispatch => {
//     try {
//         const res = await axios.get(`http://localhost:8080/api/book/search/${keyword}`);
//         console.log("Here are the books we got");
//         console.log(res.data);
//         dispatch({
//             type: SEARCH_BOOKS,
//             payload: res.data
//         });
//         console.log("Got the books and dispatched");
//     } catch (error) {
//         console.log("Error with searching books");
//     }
// };