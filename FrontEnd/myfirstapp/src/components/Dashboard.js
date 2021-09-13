import React, { Component } from 'react'
import Person from './Persons/Person'

import CreatePersonButton from './Persons/CreatePersonButton';
import AddBookButton from './Books/AddBookButton';

class Dashboard extends Component {
    render() {
        return (
        <div>
            <div className="Persons">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Persons</h1>
                        <br />
                       <CreatePersonButton />
                        <br />
                        <hr />
                        <Person/>
                    </div>
                </div>
            </div>
        </div>

        <div className="Books">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4 text-center">Books</h1>
                                <br />
                               <AddBookButton />
                                <br />
                                <hr />

                            </div>
                        </div>
                    </div>
         </div>
         </div>
        )
    }
}
export default Dashboard;
