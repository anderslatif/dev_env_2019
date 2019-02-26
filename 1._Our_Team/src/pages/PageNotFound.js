import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
const PageNotFound = () => {
    return (
      <div className="pageNotFound">
        <div className="glitch-wrapper">
            <div className="glitch-text">
                ERROR 404: Page Not found
            </div>
        </div>
        <NavLink to="/">
            MotherController
            <span className="border__top"></span>
            <span className="border__bottom"></span>
            <span className="border__left"></span>
            <span className="border__right"></span>
        </NavLink>    
      </div>
    )
  }

export default PageNotFound;