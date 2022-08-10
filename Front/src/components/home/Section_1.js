import React, { useEffect } from "react"
import { makeStyles } from '@mui/styles';
import { Grid,  Typography, Box, Button} from '@mui/material';
import { Link } from "react-router-dom"
import Color from "../../Back_office/components/palette/color";


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
          padding:'25px',
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
          padding:'20px'
     }
}));

const Section1 = () => {
     const classes = useStyles();
     useEffect(() => {
     })
     return (
          <Box sx={{}} className={classes.root}>
               <Box className={classes.vertical}></Box>
               <Grid container sx={{height:'100%',position:'relative'}}>
                    <Box sx={{position:'absolute',top:'25px',left:'25px'}}>
                         <Link to={`/admin/home`}>
                              <Typography className="text-yellow-500" variant="p">Admin</Typography>
                         </Link>
                    </Box>
                    <Grid item sm={8} xs={8} className={classes.banner}>
                        <Box>
                              <Typography variant="h2" color='#fff' fontWeight='bolder'>
                                   Un site web pour la reservation en ligne au cinema
                              </Typography>
                              <Typography variant="h6" color='#fff'>
                                   Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                   Consectetur tortor nunc aliquam consectetur semper augue at.
                              </Typography>
                              <Button variant="contained" className={classes.btnStart}>Commencer</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={4} className={classes.imageSection}>
                         <img src="/fond.svg" alt="" style={{objectFit:"cover"}}/>
                    </Grid>
               </Grid>
          </Box>
     )
}

export default Section1