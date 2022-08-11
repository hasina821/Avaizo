import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import UserLayout from "../pages/Layout"
import AdminLayout from "../Back_office/pages/layout"
import AuthLayout from "../pages/Layout/AuthLayout"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"
import NoAccessPage from "../pages/Error/NoAccessPage"
import PageNotFound404 from "../pages/Error/PageNotFound404"

const AppRouter=()=>{
     const isConnected = true
     const isAdmin = false
     return(
          <BrowserRouter>
                    <Routes>
                         <Route element={<PrivateRoute redirectPath="/inaccessible" authorization={isConnected && isAdmin}/>}>
                              <Route path='admin/*' element={<AdminLayout/>} />
                         </Route>
                         <Route path='login' element={<AuthLayout><Login/></AuthLayout>}/>
                         <Route path="register" element={<AuthLayout><Register/></AuthLayout>}/>
                         <Route path="/inaccessible" element={<NoAccessPage/>}/>
                         <Route path="/notFound" element={<PageNotFound404/>}/>
                         <Route path='/*' element={<UserLayout/>} />
                    </Routes>
          </BrowserRouter>
     )
}

export default AppRouter;