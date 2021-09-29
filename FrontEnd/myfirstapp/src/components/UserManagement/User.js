import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {logout} from "../../actions/securityActions";

class User extends Component {
    constructor() {
        super();
        var token = JSON.parse(localStorage.saveData || null) || {};
        console.log(token);

        this.state={
            isLoggedIn: token.loginToken.success,
            username: token.user
        };
        console.log(this.state.isLoggedIn);
        console.log(this.state.username)
    }

    logout = () => {
        this.props.logout(this.props.history);
    }

    render() {
        return (
           <div>
               <h1>{this.state.username}</h1>
               <button onClick={this.logout} className="submit">Logout</button>
           </div>
        )
    }
}

User.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { logout }
)(User);