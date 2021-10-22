import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import AddBook from "./components/Books/AddBook";
import BookView from "./components/Books/Books"
import ViewSingleBook from "./components/Books/Book";
import User from "./components/UserManagement/User";
import BookSearch from "./components/Books/BookSearch";
import LeaveReview from "./components/Reviews/LeaveReview";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }
           
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addbook" component={AddBook} />
            <Route exact path="/viewbooks" component={BookView} />
            <Route exact path="/book/:id" component={ViewSingleBook} />
            <Route exact path="/profile" component={User} />
            <Route exact path="/search/:keyword" component={BookSearch} />
            <Route exact path="/leaveReview/:book" component={LeaveReview} />
            {
              //Private Routes
            }
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addPerson" component={AddPerson} />
            <br/>
            <br/>
            <br/>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;