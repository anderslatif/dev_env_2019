/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";
import EmployeesFilters from "../components/EmployeesFilters";
import IndividualUserComponentElement from "../components/IndividualUserComponentElement";

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
    render() {
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
                                <div>Birthday</div>
                                <div>Email</div>
                                <div>Country</div>
                                <div>Phone</div>
                                <div>Role</div>
                            </div>
                                {
                                    employeesDataTests.map((users) => {
                                        return <IndividualUserComponentElement
                                                    key={users.id}
                                                    users={users}
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