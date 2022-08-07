import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid, Typography, Button} from '@mui/material';

const useStyles = makeStyles((theme)=>({
  root: {
    
  },
}));

const Card_2 = ({items}) =>{
  const classes = useStyles();  
  return (
    <Grid item   sm={3} xs={3}>
            <Grid container  padding={4} paddingTop={2} style={{ 
                    background:'#fff',
                }} boxShadow={5} borderRadius={2}>
                <Grid item sm={12} xs={12}>
                    <Typography fontSize='16px' variant="p" color='#5a6473'>
                        {items.title}
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} marginTop={1}>
                    <Typography variant="p" color='#000000' fontSize='18px' fontWeight='bolder'>
                        {items.subTitle}
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}marginTop={1}>
                    <Typography variant="p" >
                    from
                    </Typography> <br/>
                    <Typography 
                        variant="p"
                        color='#5a6473'  
                    >
                        <span style={{
                            fontSize:'40px',
                            color:'#000000',
                            fontWeight:'bolder'
                        }}>{items.price}</span>/ film 
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography variant="p" color='#000'
                    style={{
                        fontSize: "16px",
                        lineHeight: "1.5",
                        fontWeight: "normal",
                        textAlign: "left",
                    }}>
                        {items.discribe}
                    </Typography>
                </Grid>
                <Grid item sm={12} xs={12} marginTop={3}>
                    <Button 
                        variant="contained" 
                        sx={{
                            background:'#c0392b',
                            borderRadius:'25px',
                            color: '#fff',
                            width:'100%',
                            padding:'12px',
                            '&:hover':{
                                background:'#000',
                                color: '#fff',
                            }
                        }}
                    >
                        Acheter Offre
                    </Button>
                </Grid>
            </Grid>
        </Grid>
  );
}

export default Card_2