import axios from "axios";
import {GET_ERRORS, GET_BOOKS, GET_BOOK} from "./types";

export const createBook = (book, history) => async dispatch => {
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

export const getBooks = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/book/all");
  console.log("\nAll books data has been retrieved from database.\n");
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
};

export const getBook = (id) => async dispatch => {
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