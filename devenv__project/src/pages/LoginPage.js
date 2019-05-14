import React, { Component } from 'react';
import axios from "axios";
import {
  ADMIN , 
  HR, 
  PURCHASES_SALES, 
  INBOUND_GATE_OFFICER,
  WAREHOUSE_LOADER,
  WAREHOUSE_DISPATCHER,
  EXTERNAL_AUDITORS
} from "../externalDatas";

const userTypes = [
  {
    value: ADMIN,
    name: "Admin"
  },
  {
    value: HR,
    name: "HR"
  },
  {
    value: PURCHASES_SALES,
    name: "Purchases/Sales"
  },
  {
    value: INBOUND_GATE_OFFICER,
    name: "Inbound gate officer"
  },
  {
    value: WAREHOUSE_LOADER,
    name: "Warehouse loader"
  },
  {
    value: WAREHOUSE_DISPATCHER,
    name: "Warehouse dispatcher"
  },
  {
    value: EXTERNAL_AUDITORS,
    name: "External auditor"
  }
];

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userTypes: "admin",
      email: "",
      password: ""
    }
    this.getLoginValue = this.getLoginValue.bind(this);
    this.submitFormLogin = this.submitFormLogin.bind(this);
  }
  getLoginValue = (ev) => {
    let inputType = ev.target.name;
    let inputValue = ev.target.value;

    this.setState({[inputType]: inputValue})
  }
  submitFormLogin = (ev) => {
    ev.preventDefault();
    let { userTypes, email, password } = this.state;
    axios.post("http://localhost:8080/login", {
      userType: userTypes,
      email: email,
      password: password
    })
    .then(response => console.log("login__response: ", response))
    .catch(error => console.log("login__error: ", error));
  }
  render() {
    return (
      <div className="login__page">
        <div className="login__page--wrapper">
          <div className="login__details">
            <div className="login__details--wrapper">
              <h2>Welcome to system</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ex ea commodo consequat.</p>
              <button>Know more</button>
            </div>
            <img src="./image/circle.svg" alt="login__circle" />
          </div>
          <div className="login__forms">
          <img src="./image/square.svg" alt="login__square" />
            <div className="login__forms--wrapper">
              <h2>Login</h2>
              <form onSubmit={this.submitFormLogin}>
                <label htmlFor="userTypes">User types:</label>
                <select 
                  name="userTypes" 
                  id="userTypes"
                  onChange={this.getLoginValue}
                >
                  {
                    userTypes.map((user, index) => {
                      return <option value={user.value} key={index}>{user.name}</option>
                    })
                  }
                </select>
                <input 
                  type="text" 
                  placeholder="email" 
                  name="email"
                  value={this.state.email}
                  onChange={this.getLoginValue}
                />
                <input 
                  type="password" 
                  placeholder="password" 
                  name="password"
                  value={this.state.password}
                  onChange={this.getLoginValue}
                />
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
        {/* login__page */}
      </div>
    )
  }
}

export default LoginPage;