import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import UserLayout from "../pages/Layout"
import AdminLayout from "../Back_office/pages/layout"

const AppRouter=()=>{
     return(
          <BrowserRouter>
                    <Routes>
                         <Route path='admin/*' element={<AdminLayout/>} />
                         <Route path='/*' element={<UserLayout/>} />
                    </Routes>
              
          </BrowserRouter>
     )
}

export default AppRouter;