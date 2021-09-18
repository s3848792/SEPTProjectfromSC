import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
    constructor(){
        super();

        this.state= {
            username: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            create_At: "",
            update_At: ""

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
        const newPerson = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            create_At: date,
            update_At: date
        }

        this.props.createNewUser(newPerson, this.props.history);
    }
    render() {
        return (
            <div className="Person">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Register an Account</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg"
                                           placeholder="Name"
                                           name="fullName"
                                           value= {this.state.fullName}
                                           onChange = {this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg "
                                           placeholder="Email"
                                           name="username"
                                           value= {this.state.username}
                                           onChange = {this.onChange}
                                    />

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Password"
                                           name = "password"
                                           value= {this.state.password}
                                           onChange = {this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Confirm Password"
                                           name = "confirmPassword"
                                           value= {this.state.confirmPassword}
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

Register.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { createNewUser }
)(Register);