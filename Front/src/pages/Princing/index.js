import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import Section_1 from '../../components/pricing/Section_1'
import Section_2 from '../../components/pricing/Section_2'
import Section_3 from '../../components/pricing/Section_3'

const useStyles = makeStyles((theme)=>({
  root: {
    color:'#fff',
    background:'#000',
    padding:'30px 100px 30px 100px'
  },
}));

const  Princing = () =>{
  const classes = useStyles();  
  return (
    <Box style={{backgroundColor:'#000',padding:'80px 20px 80px 20px'}}>
        <Box className={classes.root}>
            <Section_1/>
            <Section_2/>
        </Box>
        <Section_3/>
    </Box>
  );
}

export default Princing