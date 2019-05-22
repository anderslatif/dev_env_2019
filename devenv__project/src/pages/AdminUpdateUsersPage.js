/*eslint-disable*/
import React, { Component } from "react";
import SidebarComponent from "../components/SidebarComponent";

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
            name: userDatasTests.name,
            email: userDatasTests.email,
            country: userDatasTests.country,
            phone: userDatasTests.phone,
            birthdate: userDatasTests.birthdate
        }
    }

    // get update users inputs datas
    getUpdateDatas = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;

        this.setState({[name]: value});
    }
    render(props) {
        let {
            name,
            email,
            country,
            phone,
            birthdate
        } = this.state;
        return(
            <div className="adminUpdateUsersPage">
                <div className="adminUpdateUsersPage--wrapper">
                    <SidebarComponent />
                    <div className="userupdater__display">
                        <div className="userupdater__display--wrapper">
                            <h2>Update User #{this.props.match.params.id}</h2>
                            <div className="updater__content">
                                <form>
                                  <input type="text" value={name} name="name" onChange={this.getUpdateDatas} />  
                                  <input type="text" value={email} name="email" onChange={this.getUpdateDatas} />  
                                  <input type="text" value={country} name="country" onChange={this.getUpdateDatas} />  
                                  <input type="text" value={phone} name="phone" onChange={this.getUpdateDatas} />  
                                  <input type="text" value={birthdate} name="birthdate" onChange={this.getUpdateDatas} />
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