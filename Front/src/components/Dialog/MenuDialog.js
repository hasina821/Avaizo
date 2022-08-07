import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    root: {
      
    },
}));

const MenuDialog = ({ onOpen, onClose, width }) => {
    const classes = useStyles(); 
    return (
        <Box style={{backgroundColor:'#000',color:'#fff',height:'900px',paddingTop:'5%',paddingLeft:'5%',paddingRight:'5%'}}>
           <Grid container>
                <Grid xs={4}>
                     
                </Grid>
                <Grid xs={7}>
                     
                </Grid>
                <Grid xs={1}>
                     <CloseIcon style={{fontSize:48,cursor:'pointer'}}/>
                </Grid>
           </Grid>
           <Divider  style={{marginTop:'10%'}} light/>
        </Box>
  );
}

export default MenuDialog
