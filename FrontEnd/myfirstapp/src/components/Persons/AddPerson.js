import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createPerson} from "../../actions/personActions";


class AddPerson extends Component {
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
        const newPerson = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            create_At: this.state.create_At,
            update_At: this.state.update_At
        }

        this.props.createPerson(newPerson, this.props.history);
    }
    render() {
        return (
            <div data-testid="AddPerson" className="Person">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Person form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="username"
                                name="username"
                                value= {this.state.username}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Full Name"
                                name="fullName"
                                value= {this.state.fullName}
                                onChange = {this.onChange}
                                    />
                            </div>
                          
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Password"
                                name = "password"
                                value= {this.state.password}
                                onChange = {this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                 <textarea className="form-control form-control-lg"
                                 placeholder="Confirm Password"
                                 name = "confirmPassword"
                                 value= {this.state.confirmPassword}
                                 onChange = {this.onChange}
                             />

                            </div>

                            <h6>Created</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="create_At"
                                value= {this.state.create_At}
                                onChange = {this.onChange}
                                />
                            </div>
                            <h6>Updated</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="update_At"
                                value= {this.state.update_At}
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
AddPerson.propTypes = {
    createProject: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { createPerson }
  )(AddPerson);
