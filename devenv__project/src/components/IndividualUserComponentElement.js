/*eslint-disable*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class IndividualUserComponentElement extends Component {
    render(props) {
        let {
            id,
            name,
            email,
            country,
            birthday,
            phone,
            role
        } = this.props.users;
        let nameValue = name.charAt(0)
        return(
            <div className="individualUserComponentElement">
                <div className="individualUserComponentElement--wrapper">
                    <div className="userblock adminUserName">
                        <div className="adminUserName--initials">{nameValue}</div>
                        <div className="adminUserName--value">
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className="userblock adminBirthDay">
                        <p>{birthday}</p>
                    </div>
                    <div className="userblock adminEmail">
                        <p>{email}</p>
                    </div>
                    <div className="userblock adminCountry">
                        <p>{country}</p>
                    </div>
                    <div className="userblock adminPhone">
                        <p>{phone}</p>
                    </div>
                    <div className="userblock adminRole">
                        <p>{role}</p>
                    </div>
                    <div className="updateUserButton">
                        <NavLink to={`/admin/update-user/${id}`}>Update</NavLink>
                    </div>
                    {/* {name} */}
                </div>
            </div>
        );
    }
}

export default IndividualUserComponentElement;