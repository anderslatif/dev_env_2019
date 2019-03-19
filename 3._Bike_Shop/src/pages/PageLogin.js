import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";

class PageLogin extends Component {
  constructor(props) {
      super(props)
      this.state = {
          username: "",
          password: "",
          loginTypes: "admin"
      }
      this.getFormDatas = this.getFormDatas.bind(this)
      this.submitLoginDatas = this.submitLoginDatas.bind(this)
      this.selectLoginTypes = this.selectLoginTypes.bind(this)
  }
  getFormDatas = (ev) => {
      let inputValue = ev.target.getAttribute("name");
      let inputDatas = ev.target.value;
      if(inputValue === "username") {
        this.setState({username: inputDatas})
    } else if(inputValue === "password") {
        this.setState({password: inputDatas})
    }
  }

  selectLoginTypes = (ev) => {
    this.setState({loginTypes: ev.target.value})
  }

  submitLoginDatas = (ev) => {
    ev.preventDefault();
    console.log(this.state.username, this.state.password)
    axios({
        method: 'post',
        url: 'http://localhost:8080/login',
        data: {
          user: this.state.username,
          password: this.state.password
        }
      });
  }
  render() {
    return (
        <div className="auth__pages--login">
            <div className="main__blured"></div>
            <div className="user__types">
                <select onChange={this.selectLoginTypes}>
                    <option value="admin">Admin</option>
                    <option value="products">Regular</option>
                </select>
            </div>
            <div className="authentification__wrapper">
                <div className="authentification__wrapper--video">
                    <video autoPlay loop>
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
                        <form onSubmit={this.submitLoginDatas}>
                            <div className="form__group">
                                <label for="loginEmail">Email</label>
                                <input 
                                    autoFocus 
                                    type="email" 
                                    id="loginEmail" 
                                    name="username"
                                    onChange={this.getFormDatas}
                                />
                            </div>
                            <div className="form__group">
                                <label for="loginPassword">Password</label>
                                <input 
                                    type="password" 
                                    id="loginPassword" 
                                    name="password"
                                    onChange={this.getFormDatas}
                                />
                            </div>
                            <NavLink to={`/${this.state.loginTypes}`}>Login</NavLink>
                            {/* <button>LogIn</button> */}
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