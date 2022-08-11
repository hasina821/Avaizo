import React, { useEffect, useRef } from "react"
import { makeStyles } from '@mui/styles';
import { Grid,  Typography, Box, Button} from '@mui/material';
import { Link } from "react-router-dom"
import Color from "../../Back_office/components/palette/color";
import gsap, { Power3 } from "gsap";


const useStyles = makeStyles((theme) => ({
     root: {
          height: '90vh',
          backgroundColor: Color.paletteBluedark,
          paddingLeft:'40px'
     },
     vertical: {
          backgroundColor:Color.paletteBluedark,
          width:'40px',
          height:'100vh',
          position: 'fixed',
          left:0,
          top:0,
          borderRight:'1px solid white'
     },
     banner:{
          background: Color.paletteBluedark,
          padding:'25px 50px',
          display:'flex',
          alignItems:'center'
     },
     btnStart:{
          background: Color.paleteTealRadiant,
          borderRadius: '20px',
          padding: '5px',
          width: '30%',
          fontWeight: 'bold',
          color: '#fff',
          transition: 'transform 1s',
          cursor: 'pointer',
          marginTop:'10px',
          '&:hover': {
               background: Color.paletteTeal1,
               transform: 'translateY(-5px) !important',
               boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }
     },
     imageSection:{
          display:'flex',
          alignItems:'center',
          height:'100%',
          padding:'50px'
     }
}));

const Section1 = () => {
     
     const classes = useStyles();
     let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    let h2 = useRef(null)
    let h6 = useRef(null)
    let btn = useRef(null)
    let image = useRef(null)

    useEffect(()=>{
        tl.from([h2,h6,btn],2,{
            opacity:0,
            y:200,
            skewY: 10,
            stagger:{
                amount:.4
            }
        },"-=1")
        tl.from(image, 2 , {
          scale:0.6,
          ease:ease
        },"-=1.2")
    })
     return (
          <Box sx={{}} className={classes.root}>
               <Box className={classes.vertical}></Box>
               <Grid container sx={{height:'100%',position:'relative'}}>
                    <Grid item sm={7} xs={7} className={classes.banner}>
                        <Box>
                              <Typography variant="h2" ref={el => h2 = el} color='#fff' fontWeight='bolder'>
                                   Un site web pour la reservation en ligne au cinema
                              </Typography>
                              <Typography variant="h6" ref={el => h6 = el} color='#fff'>
                                   Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                   Consectetur tortor nunc aliquam consectetur semper augue at.
                              </Typography>
                              <Button ref={el => btn = el} variant="contained" className={classes.btnStart}>Commencer</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={5} className={classes.imageSection}>
                         <img ref={el => image = el} src="/fond.svg" alt="" style={{objectFit:"cover"}}/>
                    </Grid>
               </Grid>
          </Box>
     )
}

export default Section1