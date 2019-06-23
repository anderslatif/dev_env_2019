/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import axios from "axios";

const userDatasTests = {
    id:1,
    name: "user1",
    country: "country1",
    birthdate: "1.1.1.1",
    phone: "123456789",
    email: "email@email.com"
};


class AdminUpdateUsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // name: "",
            // email: "",
            // country: "",
            // phone: "",
            users: [],
            filteredUsers: {}
        }
    }

    // get update users inputs datas
    getUpdateDatas = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;

        this.setState({[name]: {...this.state.filteredUsers, value}});
    }

    componentDidMount() {
        axios.get("https://localhost:8000/users")
        .then(response => {
            console.log("get_usesr_success: ", response)
            this.setState({users: response.data})
            const filtered = response.data.filter((user) => {
                return user.id == this.props.match.params.id
            })
            this.setState({filteredUsers: {...filtered[0]}})
        })
        .catch(error => console.log("get_users_error:", error))
        console.log("has__users")
    }

    render(props) {
        return(
            <div className="adminUpdateUsersPage">
                <div className="adminUpdateUsersPage--wrapper">
                    <SidebarComponent />
                    <div className="userupdater__display">
                        <div className="userupdater__display--wrapper">
                            <h2>Update User #{this.props.match.params.id}</h2>
                            <div className="updater__content">
                                <form>
                                  <input type="text" placeholder={this.state.filteredUsers.name} name="name" onChange={this.getUpdateDatas} />  
                                  <input type="text" placeholder={this.state.filteredUsers.email}  name="email" onChange={this.getUpdateDatas} />  
                                  <input type="text" placeholder={this.state.filteredUsers.country} name="country" onChange={this.getUpdateDatas} />  
                                  <input type="text" placeholder={this.state.filteredUsers.phone}  name="phone" onChange={this.getUpdateDatas} />  
                                </form>
                                <button>Update User</button>  
                            </div>
                        </div>
                    </div>
                </div>
                {/* AdminUpdateUsersPage */}
                {/* {
                    this.props.match.params.id
                } */}
            </div>
        );
    }
}

export default AdminUpdateUsersPage;