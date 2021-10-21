import axios from "axios";
import {GET_ERRORS, GET_BOOKS, GET_BOOK} from "./types";

export const createBook = (book, history) => async dispatch =>{ //handles view request to create book, requests from backend
  try {
    const res = await axios.post("http://localhost:8080/api/book/addbook", book);
    history.push("/viewbooks");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getBooks = () => async dispatch => {//return list of books from backend when requested by view
  const res = await axios.get("http://localhost:8080/api/book/all");
  console.log("\nAll books data has been retrieved from database.\n");
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
};

export const getBook = (id) => async dispatch => {//returns single book from the backend when requested from the view
  try {
    console.log("About to get a book");
    const res = await axios.get(`http://localhost:8080/api/book/get/${id}`);
    console.log("Got the book");
    dispatch({
      type: GET_BOOK,
      payload: res.data
    });
  } catch (error) {
    console.log("Error with getting book");
  }
};