import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import { getUsers } from "../../redux/users/user";
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button} from '@mui/material';
import Section_1 from '../../components/home/Section_1'
import Section_2 from '../../components/home/Section_2'
import Section_3 from '../../components/home/Section_3'
import Section_4 from '../../components/home/Section_4'
import Section_5 from '../../components/home/Section_5'
import Section_6 from '../../components/home/section_6'
import Section_8 from "../../components/home/section_8";
import Help from "../../components/help_ukraine/help"

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Home = ()=> {

     const theme = useSelector(state=>state.theme);
     const {users} = useSelector((state) => state.user);
     const { t } = useTranslation();
     const [images,setImages] = useState([])
     const dispatch = useDispatch()

     useEffect(() => {

          dispatch(getUsers())
     }, [])
    return(
     <Fragment>
          <div id={theme} >
               <Section_1/>
               <Section_6/>
               <Section_3/>
               <Section_8/>
               <Section_5/>
               <Section_2/>
          </div>
     </Fragment > 
    )
  }

export default Home