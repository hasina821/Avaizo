import React, { Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "../components/Auth/Login/Login"
import Register from "../components/Auth/Register/Register"
import Home from "./../pages/Home"
import "./index.scss"

const UserLayout = () => {
     return (
          <Fragment>
               <Routes>
                    <Route path="/register" element={<Register/>} exact={true}/>
                    <Route path="/login" element={<Login/>} exact={true}/>
                    <Route index path='/' element={<Home />} exact={true} />
               </Routes>
          </Fragment>
     )
}

export default UserLayout;