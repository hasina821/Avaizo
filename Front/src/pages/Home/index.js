import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import {useTranslation} from "react-i18next"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button} from '@mui/material';
import Section1 from '../../components/home/Section_1'
import Section2 from '../../components/home/section_2'
import Section3 from '../../components/home/Section_3'
import Section4 from '../../components/home/section_4'
import Section_5 from '../../components/home/Section_5'
import Section_6 from '../../components/home/section_6'
import Help from "../../components/help_ukraine/help"

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Home = ()=> {

     const { t } = useTranslation();
     const [images,setImages] = useState([])
     
    return(
     <Fragment>
          <div>
               <Section1/>
               <Section2/>
               <Section3/>
               <Section4/>
               <Section_5/>
               <Section_6/>
          </div>
     </Fragment > 
    )
  }

export default Home