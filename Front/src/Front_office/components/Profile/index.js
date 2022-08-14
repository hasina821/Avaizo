import { faCircleInfo, faGraduationCap, faIdBadge, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {NavLink } from 'react-router-dom'
import "./profile.scss"
import Left from "./Left"
import Right from './Right'

const index = () => {
    return (
        <div className='profile'>
            <div className='header'></div>
            <div className='navBar'>
                <NavLink to="#" className={(nav) => nav.isActive ? "link":""}>
                    <FontAwesomeIcon icon={faCircleInfo}/> A propos
                </NavLink>
                <NavLink to="#">
                    <FontAwesomeIcon icon={faRightFromBracket}/> Se deconnecter
                </NavLink>
            </div>
            <div className='content-profile'>
                <div className='profile-grid'>
                    <Left/>
                    <Right/>
                </div>
            </div>
        </div>
    )
}

export default index