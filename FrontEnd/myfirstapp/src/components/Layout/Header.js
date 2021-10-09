import React, { Component } from 'react'
import Search from './search';


 class Header extends Component {

     constructor() {
         super();
         var token = JSON.parse(localStorage.saveData || null) || {};
         console.log(token);

         //saveData.loginToken = loginToken;
         //saveData.time = new Date().getTime();
         //localStorage.saveData = JSON.stringify(saveData);
         try {
             this.state={
                 isLoggedIn: token.loginToken.success,
             };
         }catch {
             this.state={
                 isLoggedIn: false,
             };
         }

        console.log(this.state.isLoggedIn);
     }

     createUserHTML() {
         if (this.state.isLoggedIn) {
            return (
                <a className="nav-link" href="/profile">
                    Profile
                </a>
            );
         }else {
             return (
                 <a className="nav-link" href="/login">
                     Login
                 </a>
             );
         }
     }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Book Website
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
    
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                    </ul>
    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link " href="/register">
                                Sign Up
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="/viewbooks">
                                Bookview
                            </a>
                        </li>

                        <li className="nav-item">
                            {this.createUserHTML()}
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
            </div>
        )
    }
}
export default Header;
