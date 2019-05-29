/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import axios from "axios";
import IndividualUserComponentElement from "../components/IndividualUserComponentElement";

class HRPage extends Component {
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
    render() {
        return(
            <div className="hr__page">
                <div className="hr__page--wrapper">
                    <SidebarComponent />
                    <div className="display__usersHR">
                        <div className="display__usersHR--wrapper">
                            <h2>HR page</h2>
                            <div className="list__usersHR">
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