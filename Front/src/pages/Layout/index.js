import React,{ Fragment } from "react"
import Navbar from "../../components/nav/navBar"
import Scroll from "../../components/smooth/SmoothScroll"
import Footer from '../../components/footer'
const Layout=({children})=>{
     return(
          <Fragment>
               <Navbar/>
               {children}
               <Footer/>
          </Fragment>
     )
}

export default Layout;