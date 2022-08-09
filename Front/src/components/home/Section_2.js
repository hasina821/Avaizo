import React from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Typography,Box, Button} from '@mui/material';
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Section_2 = ()=> {
     const classes = useStyles(); 
    return(
          <Box style={{backgroundColor:Color.paletteBluedark}}>
               <Grid container style={{
                    padding: '50px 100px 100px 100px' ,
               }}>  
                    <Grid item sm={12} xs={12}>
                              <Typography textAlign='center' variant="h6" color='#292c32' fontWeight='bolder'>
                                  
                              </Typography>
                    </Grid>
                    <Grid item sm={12} xs={12} paddingTop={6}>
                         <Grid container textAlign='center' spacing={2}> 
                              <Grid item sm={2} xs={2}>
                                   <img src="https://www.hairun-technology.com/static/selectively-e944e6e8ba96a64064b99cfec0ec6b44.png" />
                              </Grid> 
                              <Grid item sm={2} xs={2}>
                                   <img src="https://www.hairun-technology.com/static/egapt-00bd444760121914931143b0fc22de28.png" /> 
                              </Grid>
                              <Grid item sm={2} xs={2}>
                                   <img src="https://assets.website-files.com/611d114cb3a54a7930597408/611d114cb3a54a51d9597434_logo-1-companies-startup-x-template.svg" />
                              </Grid>
                              <Grid item sm={2} xs={2}>
                                   <img src="https://www.hairun-technology.com/static/ewattch-30437e7e498e0e43d5164a6c7bebbf5c.png" />
                              </Grid>
                              <Grid item sm={2} xs={2}>
                                   <img src="https://www.hairun-technology.com/static/Abacus-02ae8b61c9056ac6b8faf81a23374d30.png" />
                              </Grid>
                              <Grid item sm={2} xs={2}>
                                   <img src="https://www.hairun-technology.com/static/Apitipi-c654311bf16cf46e8ce6628528f7e804.png" />    
                              </Grid>    
                         </Grid> 
                    </Grid>
               </Grid> 
          </Box> 
    )
  }

export default Section_2