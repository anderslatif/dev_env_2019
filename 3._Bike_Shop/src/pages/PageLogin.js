import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class PageLogin extends Component {
  render() {
    return (
        <div className="auth__pages--login">
            <div className="main__blured"></div>
            <div className="authentification__wrapper">
                <div className="authentification__wrapper--video">
                    <video autoPlay>
                        <source src="./image/authentification__video.mp4" type="video/mp4"/>>
                    </video>
                    <div className="auth__textcontent">
                        <h2>Revolution <span>in Sales</span></h2>
                    </div>
                </div>
                <div className="authentification__wrapper--forms">
                    <div className="auth__form--wrapper">
                        <h2>Welcome to <span>Bikers</span></h2>
                        <p>Please fill in the form in order to go further</p>
                        <form>
                            <div className="form__group">
                                <label for="loginEmail">Email</label>
                                <input autoFocus type="email" id="loginEmail"/>
                            </div>
                            <div className="form__group">
                                <label for="loginPassword">Password</label>
                                <input type="password" id="loginPassword"/>
                            </div>
                            <button>LogIn</button>
                        </form>
                        <div className="form__dividor"></div>
                        <div className="redirect__signup">
                            <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default PageLogin;