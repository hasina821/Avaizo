import React from "react"
import { BrowserRouter,Switch,Route } from "react-router-dom"
import Home from "../pages/Home"
import Capsule from "../pages/Capsule"
import Contact from "../pages/Contact"
import Layout from "../pages/Layout"
import Princing from "../pages/Princing"
import AdminDashboard from "../Back_office/pages/Admin/Dashboard"
import Maps from "../Back_office/pages/Admin/Addcoffre"
import Settings from "../Back_office/pages/Admin/Settings"
import Tables from "../Back_office/pages/Admin/Tables"
import Login from "../pages/auth/login"
import Register from "../pages/auth/register"

const AppRouter=()=>{
     return(
          <BrowserRouter>
                    <Switch>
                         <Route path='/admin/maps' component={Maps} exact={true}></Route>
                         <Route path='/admin/settings' component={Settings} exact={true}></Route>
                         <Route path='/admin/tables' component={Tables} exact={true}></Route>
                         <Route path='/admin/dashboard' component={AdminDashboard} exact={true}></Route>
                         <Layout>
                              <Route path='/register' component={Register} exact={true}/>
                              <Route path='/login' component={Login} exact={true}/>
                              <Route path='/capsule' component={Capsule} exact={true}/>
                              <Route path='/contact' component={Contact} exact={true}/>
                              <Route path='/pricing' component={Princing} exact={true}/>
                              <Route index path='/' component={Home} exact={true}/>
                         </Layout>
                    </Switch>
              
          </BrowserRouter>
     )
}

export default AppRouter;