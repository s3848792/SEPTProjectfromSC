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

                            <article>
                                <img src = "Book%201.png" alt="Acute Stress Disorder : What It Is and How to Treat It" width="200" height="200" />
                                <p>Acute Stress Disorder : What It Is and How to Treat It</p>

                                <img src = "Book%202.png" alt="Run IT" width="200" height="200"/>
                                <p>Run IT</p>

                                <img src = "Book%203.png" alt="IT Convergence and Security 2017" width="200" height="200"/>
                                <p>IT Convergence and Security 2017</p>

                                <img src = "Book%204.png" alt="LabVIEW Graphical Programming Cookbook" width="200" height="200"/>
                                <p>LabVIEW Graphical Programming Cookbook</p>

                                <img src = "Book%205.png" alt="Puppet 2.7 Cookbook" width="200" height="200"/>
                                <p>Puppet 2.7 Cookbook</p>

                                <img src = "Book%206.png" alt="Green IT : Managing Your Carbon Footprint" width="200" height="200"/>
                                <p>Green IT : Managing Your Carbon Footprint</p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBook;