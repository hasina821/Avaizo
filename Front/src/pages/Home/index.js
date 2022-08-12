import React from "react"
import { Fragment } from "react"
import Section1 from '../../components/home/Section1/Section_1'
import Section2 from '../../components/home/Section2/section_2'
import Section3 from '../../components/home/Section_3'
import Section4 from '../../components/home/section_4'
import Section5 from '../../components/home/Section_5'
import Section6 from '../../components/home/section_6'

const Home = ()=> {
    return(
     <Fragment>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
     </Fragment > 
    )
  }

export default Home