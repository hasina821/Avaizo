import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid , Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const useStyles = makeStyles((theme)=>({
  root: {
    color:'#292c32',
    background:'#f4f5f8',
    padding:'30px 100px 30px 100px'
  },
  TextField:{
    borderWidth:'1px',
    borderColor:'#000',
    background:'none !important',
  }
}));

const  Card_1 = ({text}) =>{
  const classes = useStyles();  
  return (
    <Grid  item sm={4} xs={4}>
        <Typography style={{
            alignItems: 'center',
            color: '#fff',
            lineHeight: '28px',
            fontSize: '22px',
            fontWeight: 'bold',
        }} variant="h1">
            <span style={{color:'#feb600'}}><DoneIcon /></span> {text}
        </Typography>
    </Grid>
  );
}

export default Card_1