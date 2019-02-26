import React, { Component } from 'react'
import UsersPanel from '../components/UsersPanel';
import IndividualUsers from '../components/IndividualUsers';
const commandsDemos = {
  handleUsers:"/users",
  handleIndividualUser:""
}
const stylePageController = {
  trnsition:"all 0.45s ease-in-out",
  bottom:"-100vh"
}
class EntryPage extends Component {
  constructor(props) {
    super(props)
    this.submitOnEnter = this.submitOnEnter.bind(this)
    this.handleSelectedUsers = this.handleSelectedUsers.bind(this)
    this.slideConsoleController = this.slideConsoleController.bind(this)
    this.closeUsersPanel = this.closeUsersPanel.bind(this)
    this.closeSelectedUsers = this.closeSelectedUsers.bind(this)
    this.maximizeIndividualUsers = this.maximizeIndividualUsers.bind(this)
    this.registerCommand = this.registerCommand.bind(this)
    // this.handleUsersPanel = this.handleUsersPanel.bind(this)
    this.state = {
      command:undefined,
      usersPanel:false,
      individualUsers:false,
      individualUsersSizes:false,
      selectedUsers:undefined,
      controller:false,
      wrongCommadMessage:false
    }
  }
  registerCommand = (ev) => {
    let command = ev.target.value;
    this.setState({command})
  }
  submitOnEnter = (ev) => {
    if(ev.which === 13){
      ev.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
      ev.preventDefault();
      let command = ev.target.value 
      if(this.state.command === "/users") {
        this.setState((prevState) => {
          return {
            usersPanel: !prevState.usersPanel
          }
        })
      }
    }
  }
  closeUsersPanel = () => {
    this.setState({usersPanel:false})
  }
  handleSelectedUsers = (ev) => {
    console.log(ev.target.getAttribute("data-id"))
    let selectedUsers = Number(ev.target.getAttribute("data-id"))
    this.setState((prevState) => {
      return {
        selectedUsers,
        individualUsers: true
      }
    })
  }
  closeSelectedUsers = () => {
    this.setState({individualUsers:false})
  }
  slideConsoleController = () => {
    this.setState((prevState) => {
      return {
        controller: !prevState.controller
      }
    })
    console.log("clicked")
    // let slideConsoleController = document.querySelector(".page__controller")
    // slideConsoleController.style.marginBottom = "-2000px";
  }
  maximizeIndividualUsers = () => {
    this.setState((prevState) => {
      return {
        individualUsersSizes: !prevState.individualUsersSizes
      }
    })
  }
  render() {
    return (
      <div className="main__pages">
        <div className="main__pages--content">
        {/* page controller start */}
          <div className={this.state.controller ? "page__controller" : "page__controller--hidden"}>
            <div className="page__controller--header">
              <div className="page__controller--header--title">
                <p>Console Controller</p>
              </div>
              <div className="page__controller--header--navigations">
                <svg>
                  <use href="./image/sprite.svg#icon-minus"></use>
                </svg>
                <svg>
                  <use href="./image/sprite.svg#icon-maximize"></use>
                </svg>
                <svg>
                  <use href="./image/sprite.svg#icon-cross"></use>
                </svg>
              </div>
            </div>
            <div className="page__controller--content">
              <form onKeyPress={this.submitOnEnter} className="page__controller--content--fm">
                <textarea onChange={this.registerCommand} className="page__controller--content--fm--console"></textarea>
              </form>
            </div>
          </div>
        {/* page controller finish */}
        {
          this.state.usersPanel && 
          <UsersPanel 
            handleSelectedUsers={this.handleSelectedUsers}
            closeUsersPanel={this.closeUsersPanel}
          >
          </UsersPanel>
        }
        {
          this.state.individualUsers && 
          <IndividualUsers individualUsersSizes={this.state.individualUsersSizes} maximizeIndividualUsers={this.maximizeIndividualUsers} selectedUsers={this.state.selectedUsers} closeSelectedUsers={this.closeSelectedUsers}></IndividualUsers>
        }
        </div>
        <div className="main__pages--bottom">
          <div className="activate__division" onClick={this.slideConsoleController}>
            <svg>
              <use href="./image/sprite.svg#icon-windows"></use>
            </svg>
            <h2>Controller</h2>
          </div>
          {
            this.state.usersPanel &&
            <div className="views__division">
            <div className="views__division--pre"></div>
            <div className="views__division--content">
              <h2>
                All Users Controller
              </h2>
            </div>
          </div>
          }
          {
            this.state.individualUsers &&
            <div className="views__division">
            <div className="views__division--pre"></div>
            <div className="views__division--content">
              <h2>
                User Controller
              </h2>
            </div>
          </div>
          }
        </div>
        {/* EntryPage */}
      </div>
    )
  }
}

export default EntryPage;