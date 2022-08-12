import React,{useEffect,useState} from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button,Avatar} from '@mui/material';
import {Link} from "react-router-dom"
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme)=>({
     root: {
       backgroundColor:Color.paletteBluedark,
       padding:'50px 20px 50px 40px',
     },
     titles:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
     },
     title:{
          textAlign:'center',
          textTransform:'uppercase',
          fontWeight:'bolder',
          color:Color.paleteTealRadiant,
          position:'relative',
     },
     serviceItem: {
          padding:'20px'
     }
 }));


const Section3 = ()=> {
     const classes = useStyles();
     const data = [
     {
          src:'https://www.themoviethemesong.com/wp-content/uploads/2015/07/Thor-The-Dark-World-Movie-Theme-Song-3.jpg',
          title:'Services 1',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     },
     {
          src:'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ThunderLightning.jpg',
          title:'Services 2',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     },
     {
          src:'https://cdn0.sbnation.com/assets/3523211/thor_thedarkworld17_1020.jpg',
          title:'Services 3',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     },
     {
          src:'https://needlessessentialsonline.com/wp-content/uploads/2013/10/1374238_651010204943240_154586123_n-537x766.jpg',
          title:'Services 4',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     }
 ] 
     return(
               <Box className={classes.root} id="fixed">
                    <Box className={classes.titles}>
                         <Divider  style={{backgroundColor:Color.paleteTealRadiant,width:'200px',height:'3px'}}/>
                              <Typography  variant="h1"  className={classes.title}>
                                   NOS SERVICES
                              </Typography>
                         <Divider  style={{backgroundColor:Color.paleteTealRadiant,width:'200px',height:'3px'}}/>
                    </Box>
                    <Grid container flexWrap="wrap" sx={{padding:'40px',color:'white'}} data-scroll data-scroll-sticky data-scroll-target="#fixed">
                         {data.map(d => 
                         <Grid item xs={6} className={classes.serviceItem} justifyContent="center" alignItems="center">
                              <Grid container >
                                   <Grid item xs={4}>
                                        <img src={d.src} alt={d.title} style={{width:'150px', height:'150px',borderRadius:'50%',objectFit:'cover'}}/>
                                   </Grid>
                                   <Grid item xs={8}>
                                        <Typography variant="h5">{d.title}</Typography>
                                        <Typography variant="p">{d.subtitle}</Typography>
                                   </Grid>
                              </Grid>
                         </Grid>)}
                    </Grid>
               </Box>
          )
     }

export default Section3