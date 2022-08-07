import React,{useEffect,useState} from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button} from '@mui/material';

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Section_4 = ()=> {
     const classes = useStyles(); 
    return(
     <Box>
          <Grid container alignItems='center' justifyContent='center'  textAlign='center' padding='24px 0px 24px 0px'> 
               <Grid item sm={4} xs={6} textAlign='end'>
                    <Button 
                         variant="contained" 
                         color="success"
                         sx={{
                              background:'#055f5b',
                              borderRadius:'80px',
                              color: '#fff',
                              padding:'20px',
                              width:'50%',
                              transition:'background,transform 2s',
                              cursor:'pointer',
                              '&:hover':{
                                   background:'#ffd584',
                                   transform:'translateY(-5px) !important',
                                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                   }
                         }}
                    >
                         Commencer
                    </Button>
               </Grid>
               <Grid item sm={6} xs={6} marginLeft={5} textAlign='start'>
                    <Button 
                    variant="outlined"
                    sx={{
                         borderRadius:'80px',
                         color: '#292c32',
                         padding:'20px',
                         width:'70%',
                         borderColor:'#292c32',
                         transition:'background,transform 2s',
                         cursor:'pointer',
                         '&:hover':{
                              background:'none',
                              borderColor:'#292c32',
                              background:'#ffd584',
                              transform:'translateY(-5px) !important',
                              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                         }
                    }}
                    >
                         Parcourir toutes les fonctionnalités
                    </Button>
               </Grid> 
          </Grid> 
     </Box>
    )
  }

export default Section_4