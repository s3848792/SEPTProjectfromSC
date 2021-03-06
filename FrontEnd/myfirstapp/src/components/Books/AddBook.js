import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createBook} from "../../actions/bookActions";
import ReactDOM from "react-dom";


class AddBook extends Component {
    constructor(){
        super();

        this.state= {
        id: "",
        title: "",
        author: "",
        status:false,
        number:0,
        isbn: "",
        create_At: "",
        update_At: ""

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

        }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    statusFalse() {
        this.state.status = false;
    }
    statusTrue() {
        this.state.status = true;
    }

    onSubmit(e){
        e.preventDefault();
        const newBook = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            status:this.state.status,
            number:this.state.number,
            isbn: this.state.isbn,
            create_At: this.state.create_At,
            update_At: this.state.update_At
        }

        this.props.createBook(newBook, this.props.history);
    }
    render() {
        return (
            <div data-testid="AddBook" className="Book">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Book form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                placeholder="Book Title"
                                name="title"
                                value= {this.state.title}
                                onChange = {this.onChange}
                                />

                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                placeholder="Unique Book ID"
                                name="id"
                                value= {this.state.id}
                                onChange = {this.onChange}
                                    />
                            </div>

                            <div className="form-group">
                                 <input type="text" className="form-control form-control-lg "
                                 placeholder="Book Author"
                                 name="author"
                                 value= {this.state.author}
                                 onChange = {this.onChange}
                                 />

                             </div>

                            <h6>Status</h6>
                            <div className="form-group">
                                <label htmlFor="true">For Sale </label>
                                <input type="radio" name="status" id="true" value={this.state.status} onChange={this.statusTrue.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg "
                                       placeholder="If it's ture, enter the number"
                                       name="number"
                                       value= {this.state.number}
                                       onChange = {this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="false">Not For Sale </label>
                                <input type="radio" name="status" id="false" onChange={this.statusFalse.bind(this)} checked="checked"/>
                            </div>


                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg"
                                placeholder="ISBN"
                                name="isbn"
                                value= {this.state.isbn}
                                onChange = {this.onChange}
                                />
                            </div>

                            <h6>Created At</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg"
                                name="create_At"
                                value= {this.state.create_At}
                                onChange = {this.onChange}
                                />
                            </div>
                            <h6>Updated At</h6>
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
        );
    }
}
AddBook.propTypes = {
    createProject: PropTypes.func.isRequired
  };

  export default connect(
    null,
    { createBook }
  )(AddBook);
