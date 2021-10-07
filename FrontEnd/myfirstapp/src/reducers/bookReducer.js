import {GET_BOOKS, GET_BOOK, SEARCH_BOOKS} from "../actions/types";

const initialState = {
    books: [],
    book: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            };

        case GET_BOOK:
            return {
                ...state,
                book: action.payload
            };
        case SEARCH_BOOKS:
            return {
                ...state,
                searchResult: action.payload
            };
        default:
            return state;
    }
}