/*eslint-disable*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class IndividualUserComponentElement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.user.name
        }
    }
    render(props) {
        let {
            id,
            country,
            email,
            name,
            phone,
            user_role_id
        } = this.props.user;
        // let nameValues = this.state.name.charAt(0)
        return(
            <div className="individualUserComponentElement">
                <div className="individualUserComponentElement--wrapper">
                    <div className="userblock adminUserName">
                        <div className="adminUserName--initials"></div>
                        <div className="adminUserName--value">
                            <p>{name}</p>
                        </div>
                    </div>
                    {/* <div className="userblock adminBirthDay">
                        <p>{birthday}</p>
                    </div> */}
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
                        <p>{user_role_id}</p>
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