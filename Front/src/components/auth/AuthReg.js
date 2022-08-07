import React,{useEffect,Fragment} from "react"
import { getUsers } from "../../redux/users/user";
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button} from '@mui/material';
import Help from "../help_ukraine/help";
import Register from "./Register";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme)=>({
     root: {
       '&.cardhelp':{
            backgroundColor:'red'
       }
     },
     cardhelp:{
          backgroundColor:'red',
          fontSize:'44px',
          borderRadius:'10px'
     },
     loginfield:{
          padding:'10%'
     },
 }));

const AuthReg = ()=> {
    const classes = useStyles(); 
    useEffect(()=>{

    })
    return(
        <Box sx={{}} className={classes.root}>
        <Grid container >  
             <Grid item sm={6} xs={6} style={{ 
                  background: "#055f5b",
                  position: 'relative',
                  overflow: 'hidden',
                  paddingTop: '150px',
                  paddingBottom: '150px',
                  paddingLeft:'50px',
                  paddingRight:'50px'
             }}>
                  <Grid container >
                       <Grid item sm={6} xs={6}>
                              
                       </Grid>
                       <Grid item sm={12} xs={12} flex flexDirection='row'>
                            
                       </Grid>  
                        
                    
                       <Grid item sm={12} xs={12} margin='20px 0px 20px 0px'>
                            <Grid container >
                                 
                                 
                            </Grid>  
                       </Grid>
                       <Grid item sm={12} xs={12}>
                       </Grid>       
                  </Grid>  
             </Grid>
             <Grid item sm={6} xs={6}>
               <Register/>
             </Grid>
             <Grid>

             </Grid>
        </Grid>
   </Box>
    )
  }

export default AuthReg