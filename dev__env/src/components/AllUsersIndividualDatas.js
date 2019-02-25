import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
// import users from "../usersDatas";
class AllUsersIndividualDatas extends Component {
  render(props) {
      let {image, name,description, skills, id} = this.props.user
    return (
      <div className="individual__usersAllDatas" key={id}>
        <div className="individual__usersAllDatas--wrapper">
                <div className="image__divisionDatas">
                    <img src={image} alt=""/>
                    <h2>{name}</h2>
                </div>
                <div className="description__divisionDatas">
                    <p>{description}</p>
                </div>
                <div className="skills__divisionDatas">
                    {
                        skills.map((skill, index) => {
                            return(
                                <div className="skill__element" style={{color:"white"}} key={index}>
                                    <div className="skill__element--title">
                                        <p>{skill.skillName}</p>
                                    </div>
                                    <div className="skill__element--skillbar">
                                        <Slide left cascade><div className="skill__element--skillbar--filler" style={{width:`${skill.skillPercentage}%`}}></div></Slide>
                                        <p>{skill.skillPercentage}%</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </div>
      </div>
    )
  }
}

export default AllUsersIndividualDatas;