import React,{useEffect} from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button,Stack} from '@mui/material';
import {useTranslation } from "react-i18next";
import {Link} from "react-router-dom"
import Color from "../../Back_office/components/palette/color";


const useStyles = makeStyles((theme)=>({
     vertical:{
          borderRight:'1px solid white'
     },
     sec2:{
          backgroundImage:'url(/fond.svg)',
          backgroundRepeat:'no-repeat',
     },
     root: {
        height:'100vh',
        backgroundColor:Color.paletteBluedark, 
       '&.cardhelp':{
            backgroundColor:'red'
       }
     },
     cardhelp:{
          backgroundColor:'red',
          fontSize:'44px',
          borderRadius:'10px'
     }
 }));

const Section_1 = ()=> {
    const classes = useStyles(); 
    useEffect(()=>{
    })
    return(
        <Box sx={{}} className={classes.root}>
        <Grid container >
             <Grid item sm={1/2} xs={1/2} className={classes.vertical} sx={{backgroundColor:Color.paletteBluedark,height:'100vh'}}>
                  
             </Grid>
             <Grid item sm={6} xs={6} style={{ 
                  background: Color.paletteBluedark,
                  position: 'relative',
                  overflow: 'hidden',
                  paddingTop: '10px',
                  paddingBottom: '150px',
                  paddingLeft:'50px',
                  paddingRight:'50px'
             }}>
                  <Grid container >
                       <Grid item sm={12} xs={12} flex flexDirection='row'>
                            <Grid container >
                                 <Grid item sm={1} xs={1}>
                                      <Divider style={{ 
                                           width: "50px",
                                           height:'3px', 
                                           color:'white',
                                           marginTop:'10px',
                                      }}/>
                                 </Grid>
                                 <Grid item sm={9} xs={9} marginLeft={3}>
                                   <Link to={`/admin/home`}>
                                      <Typography className="text-yellow-500" variant="p">
                                            Admin
                                        </Typography>
                                   </Link>
                                 </Grid>
                            </Grid>
                       </Grid>  
                       <Grid item sm={12} xs={12} margin='20px 0px 20px 0px'>
                            <Typography variant="h1" color='#fff' fontWeight='bolder'>
                                 Une site web pour la reservation en ligne au cinema
                            </Typography>
                       </Grid>  
                       <Grid item sm={12} xs={12}>
                         
                            <Typography variant="h6" color='#fff'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                       </Grid>  
                       <Grid item sm={12} xs={12} margin='20px 0px 20px 0px'>
                            <Grid container >
                                 <Grid item sm={6} xs={6}>
                                      <Button
                                      sx={{
                                           background:Color.paleteTealRadiant,
                                           borderRadius:'80px',
                                           padding:'20px',
                                           width:'90%',
                                           fontWeight:'bold',
                                           color:'#fff',
                                           transition:'transform 1s',
                                           cursor:'pointer',
                                           '&:hover':{
                                                background:Color.paletteTeal1,
                                                transform:'translateY(-5px) !important',
                                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                           }
                                      }}
                                      variant="contained" 
                                      >
                                           Commencer
                                      </Button>
                                      
                                 </Grid>
                                 <Grid item sm={6} xs={6}>
                                   {/* 
                                   <Link to={{
                                        pathname: "/",
                                        hash: "#service",
                                   }}>
                                      <Button 
                                           color="success"
                                           sx={{
                                             background:Color.paletteTeal1,
                                                borderRadius:'80px',
                                                color: '#fff',
                                                padding:'20px',
                                                width:'90%',
                                                borderColor:'white',
                                                transition:'background,transform 2s',
                                                cursor:'pointer',
                                                fontWeight:'bold',
                                                '&:hover':{
                                                     background:Color.paleteTealRadiant,
                                                     color:'#fff',
                                                     borderColor:'white',
                                                     transform:'translateY(-5px) !important',
                                                     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                                }
                                           }}
                                      >
                                           En savoir plus
                                      </Button>
                                      
                                   </Link>
                                   */}
                                 </Grid>
                            </Grid>  
                       </Grid>
                       <Grid item sm={12} xs={12}>
                       </Grid>       
                  </Grid>  
             </Grid>
             <Grid item className={classes.sec2} sm={5} xs={5}>  
             </Grid>
        </Grid>
   </Box>
    )
  }

export default Section_1