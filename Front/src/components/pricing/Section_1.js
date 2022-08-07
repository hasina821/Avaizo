import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid, Typography,Box, Button} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Card_1 from './Card_1'
import Card_2  from './Card_2'

const useStyles = makeStyles((theme)=>({
  root: {
   
  }
}));

const  Section_1 = () =>{
  const classes = useStyles();  
  return (
    <Box style={{backgroundColor:'#000',color:'#fff'}}>
        <Grid container >
            <Grid item sm={8} xs={12}>
                <Typography variant="h2" fontWeight='bolder' color='#fff'>
                    NOS TARIFS
                </Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Typography variant="h5"  color='#fff'>
                    Veuillez voir ci-dessous nos tarifs et categories.
                </Typography>
            </Grid>
            <Grid item sm={9} xs={9} margin='40px 0px 40px 0px'>
                <Grid container>
                    {
                        [1,2,3].map((items,index)=>{
                            return (<Card_1 key={`${index}`} text='Tarifs speciaux' style={{color:"#fff"}}/>)
                        })
                    }
                </Grid>
            </Grid>
            <Grid item sm={12} xs={12}>
                <Grid container spacing={2}>
                    {
                        [1,2,3,4].map((item,index)=>{
                            const items = {
                                title:'VIP',
                                subTitle:'Acces à tous les series',
                                price:'25000Ar',
                                discribe:'Place devant '
                            }
                            return (<Card_2 key={`${index}`} items={items}/>)
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}

export default Section_1