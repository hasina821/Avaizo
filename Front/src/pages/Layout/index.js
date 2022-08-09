import React,{ Fragment } from "react"
import Navbar from "../../components/nav/navBar"
import Footer from '../../components/footer'
import {Routes,Route} from "react-router-dom"
import Home from "../Home/index"
import Capsule from "../Capsule/index"
import Contact from "../Contact/index"
import Princing from "../Princing/index"

const UserLayout=()=>{
     return(
          <Fragment>
               <Navbar/>
                    <Routes>
                         <Route path='/capsule' element={<Capsule/>} exact={true}/>
                         <Route path='/contact' element={<Contact/>} exact={true}/>
                         <Route path='/pricing' element={<Princing/>} exact={true}/>
                         <Route index path='/' element={<Home/>} exact={true}/>
                    </Routes>
               <Footer/>
          </Fragment>
     )
}

export default UserLayout;