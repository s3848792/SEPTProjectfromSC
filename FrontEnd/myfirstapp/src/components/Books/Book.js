import React, { Component } from "react";

class ViewBook extends Component {
    render() {
        return (
            <div className="Book">
                <div className="container">
                    <div className="row">
                        <section>
                            <nav>
                                <ul>
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">IT</a></li>
                                    <li><a href="#">Animals</a></li>
                                </ul>
                            </nav>

                            <div className="container">
                                <div className="card card-body bg-light mb-3">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="mx-auto">REACT</span>
                                        </div>
                                        <div className="col-lg-6 col-md-4 col-8">
                                            <h3>Spring / React Book</h3>
                                            <p>Create a Book with Spring Boot and React</p>
                                        </div>
                                        <div className="col-md-4 d-none d-lg-block">
                                            <ul className="list-group">
                                                <a href="#">
                                                    <li className="list-group-item board">
                                                        <i className="fa fa-flag-checkered pr-1">Book Profile </i>
                                                    </li>
                                                </a>
                                                <a href="#">
                                                    <li className="list-group-item update">
                                                        <i className="fa fa-edit pr-1">Update Book Info</i>
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li className="list-group-item delete">
                                                        <i className="fa fa-minus-circle pr-1">Delete Book</i>
                                                    </li>
                                                </a>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBook;

