import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import UserLayout from "../pages/Layout"
import AdminLayout from "../Back_office/pages/layout"
import AuthLayout from "../pages/Layout/AuthLayout"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"

const AppRouter=()=>{
     return(
          <BrowserRouter>
                    <Routes>
                         <Route path='admin/*' element={<AdminLayout/>} />
                         <Route path='login' element={<AuthLayout><Login/></AuthLayout>}/>
                         <Route path="register" element={<AuthLayout><Register/></AuthLayout>}/>
                         <Route path='/*' element={<UserLayout/>} />
                    </Routes>  
          </BrowserRouter>
     )
}

export default AppRouter;