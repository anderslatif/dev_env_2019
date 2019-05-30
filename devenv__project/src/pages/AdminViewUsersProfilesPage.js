/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import EmployeesFilters from "../components/EmployeesFilters";
import IndividualUserComponentElement from "../components/IndividualUserComponentElement";
import axios from "axios";

const employeesDataTests = [
    {
        id:1,
        name:"Name1",
        email:"email1",
        country:"country1",
        birthday:"birthday1",
        phone:"phone1",
        role: "role1"
    },
    {
        id:2,
        name:"Username2",
        email:"email2",
        country:"country2",
        birthday:"birthday2",
        phone:"phone2",
        role: "role2"
    }
];

class AdminViewUsersProfilesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/users")
             .then(response => {
                 console.log("get_usesr_success: ", response)
                 this.setState({users: response.data})
                })
             .catch(error => console.log("get_users_error:", error))
    }
    render(props) {
        return(
            <div className="adminViewUsersProfilePage">
                <div className="adminViewUsersProfilePage--wrapper">
                    <SidebarComponent />
                    <div className="users__display">
                        <div className="users__display--wrapper">
                            <EmployeesFilters />
                            <div className="employees__lists">
                            <div className="employees__lists--upper">
                                <div>Name</div>
                                <div>Email</div>
                                <div>Country</div>
                                <div>Phone</div>
                                <div>Role</div>
                                {/* <div>Birthday</div> */}
                            </div>
                                {
                                    this.state.users.map((user, index) => {
                                        return <IndividualUserComponentElement
                                                    key={index}
                                                    user={user}
                                               />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminViewUsersProfilesPage;