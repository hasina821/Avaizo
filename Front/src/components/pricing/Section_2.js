import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid, Typography,Box } from '@mui/material';


const useStyles = makeStyles((theme)=>({
  root: {
    
  },
}));

const  Section_2 = () =>{
  const classes = useStyles();  
  return (
    <Box>
        <Grid container marginTop={5} >
            <Grid item sm={12} xs={12} textAlign='center'>
                <Typography variant="h4" fontWeight='bolder'>
                    Veuillez faire ici votre estimation
                </Typography>
            </Grid>
            <Grid item sm={12} xs={12} marginTop={2} textAlign='center'>
                <Typography variant="p" fontSize='20px' >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Consectetur tortor nunc aliquam consectetur semper augue at.
                </Typography>
            </Grid>
        </Grid>
    </Box>
  );
}

export default Section_2