/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import axios from "axios";
import IndividualUserComponentElement from "../components/IndividualUserComponentElement";
import EmployeesFilters from "../components/EmployeesFilters";

class HRPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            active__page: "HR",
            sortBy: "",
            searchInputValue: "" ,
            filteredUsers: []
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
    
    getSearchValue = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;

        this.setState({[name]: value})

        this.setState(() => {
            return {
                filteredUsers: this.state.users.filter((user) => {
                                    return user.name === this.state.searchInputValue
                                })
            }
        })
    }


    render() {  
        return(
            <div className="hr__page">
                <div className="hr__page--wrapper">
                    <SidebarComponent activePageStatus={this.state.active__page}/>
                    <div className="display__usersHR">
                        <div className="display__usersHR--wrapper">
                            <h2>HR page</h2>
                            <EmployeesFilters getSearchValue={this.getSearchValue} />
                            <div className="list__usersHR">
                            <div className="list__usersHR--upper">
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

export default HRPage;