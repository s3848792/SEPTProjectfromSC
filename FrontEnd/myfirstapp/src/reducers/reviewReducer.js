import {GET_REVIEWS_BY_BOOK, GET_REVIEWS_BY_USER} from "../actions/types";

const initialState = {
    reviews: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS_BY_BOOK:
            return {
                ...state,
                reviews: action.payload
            };

        case GET_REVIEWS_BY_USER:
            return {
                ...state,
                reviews: action.payload
            };

        default:
            return state;
    }
}