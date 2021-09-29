import axios from "axios";
import {GET_ERRORS, LOGIN_SUCCESS} from "./types";

export const createNewUser = (newUser, history) => async dispatch => {
    console.log("Creating user in security actions");
    try{
        const res = await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push("/login");
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: {}
        // });
    }
    catch (err){
        console.log("An error occured");
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const login = (LoginRequest, history) => async dispatch => {
    console.log("Initiated login request from frontend security actions.js line 27");
    try {
        //post => login request
        const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest);
        //extract token from res.data
        const loginToken = res.data
        //set our token in the local storage
        console.log("Making the token in local storage");
        var saveData = JSON.parse(localStorage.saveData || null) || {};
        saveData.loginToken = loginToken;
        saveData.user = LoginRequest.username;
        saveData.time = new Date().getTime();
        localStorage.saveData = JSON.stringify(saveData);
        // dispatch to our securityReducer
        history.push("/viewbooks");
        console.log("ViewBooks initiated");
        dispatch ({
            type: LOGIN_SUCCESS,
            payload: loginToken
        })
    }
    catch (err)
    {
        console.log("An error occured");
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

}

export const logout = (history) => async dispatch => {
    console.log("Logout Initiated");
    var saveData = JSON.parse(localStorage.saveData || null) || {};
    var loginToken = saveData.loginToken
    loginToken.success = false;
    saveData.loginToken = loginToken;
    saveData.user = null;
    saveData.time = new Date().getTime();
    localStorage.saveData = JSON.stringify(saveData);
    history.push("/login");
    // dispatch ({
    //     type: GET_ERRORS,
    //     payload: err.response.data
    // });
};
