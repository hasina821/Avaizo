import React,{useEffect,useState} from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button} from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Section_5 = ()=> {
     const  settings = {
          autoplay:true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
     const slider = React.useRef(null);
    return(
     <Box sx={{backgroundColor:'#000',height:'100vh'}}>
          <Grid container  padding='200px 50px 24px 50px'> 
               <Grid item sm={5} xs={5}>
                    <Slider {...settings} ref={slider} sx={{width:'20%'}}>
                         {
                              [1,2,3,4,5].map((item)=>{
                                   return(
                                        <Box key={`${item}`}>
                                             <img 
                                                  src="https://assets.website-files.com/611d114cb3a54a7930597408/611d114cb3a54a2028597455_image-home-v1-testimonials-startup-x-template.jpg" 
                                                  style={{ height: "90%", width: "80%", borderRadius:'30px' }}
                                             />  
                                             <Box style={{
                                                  position: 'relative',
                                                  background:'white',
                                                  borderRadius:'15px',
                                                  zIndex: 1,
                                                  maxWidth: '439px',
                                                  marginTop: '-199px',
                                                  marginLeft: '20%',
                                                  padding: '53px 42px 47px',
                                                  borderWidth: '0px',
                                                  boxShadow: '0 4px 22px 0 rgb(41 44 50 / 4%)'
                                             }}>
                                                  <Typography variant="p" color='#6f7278'>
                                                       “Lorem ipsum dolor sit amet consectetur adipiscing elit auctor scelerisque quam id magna risus nisi lectus odio interdum.”
                                                       </Typography> <br/><br/>
                                                       <Typography   variant="p" color='#292c32' fontWeight='700'>
                                                       Andy Smith
                                                       </Typography><br/>
                                                       <Typography variant="p" color='#c0392b' fontWeight='700'>
                                                       Un super fan de Marvel series
                                                  </Typography>
                                             </Box> 
                                        </Box>
                                   )
                              })
                         }
                    </Slider>
               </Grid>
               <Grid item sm={1} xs={1}>

               </Grid>
               <Grid item sm={6} xs={6} textAlign='start'>
                    <Grid container > 
                         <Grid item sm={12} xs={12}>
                              <Grid container >
                                   <Grid item sm={1} xs={1}>
                                        <Divider style={{ 
                                             width: "50px",
                                             height:'3px', 
                                             color:'#055f5b',
                                             marginTop:'10px',
                                        }}/>
                                   </Grid>
                                   <Grid item sm={9} xs={9} marginLeft={3}>
                                        <Typography variant="h1" fontWeight='bolder' color='#fff'>
                                        QUELQUES CHIFFRES
                                   </Typography>
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Grid item sm={12} xs={12} marginTop={5}>
                              <Typography variant="h4" color='#fff' fontWeight='bolder'>
                                   Nous avons des chiffres qui ont un impact
                              </Typography>
                         </Grid>
                         <Grid item sm={12} xs={12} marginTop={2}>
                              <Typography lineHeight={2} fontSize='18px' color='#6f7278' >
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.
                              </Typography>
                         </Grid>
                         <Grid item sm={12} xs={12} marginTop={4}>
                              <Grid container >
                                   {
                                        [1,2,3,4].map((item) =>{
                                             return(
                                                  <Grid item sm={6} xs={6} margin='30px 0px 30px 0px'>
                                                       <Grid container >
                                                            <Grid item sm={12} xs={12}>
                                                                 <Typography variant="h3" color='#fff' fontWeight='bolder'>
                                                                      20
                                                                      <span style={{ color:'#c0392b'}}>%</span>
                                                                 </Typography>
                                                            </Grid>
                                                            <Grid item sm={12} xs={12}>
                                                                 <Typography lineHeight={2} fontSize='18px' color='#6f7278'>
                                                                      Satisfaction des clients
                                                                 </Typography>
                                                            </Grid>
                                                       </Grid>
                                                  </Grid>
                                             )
                                        })
                                   }
                              </Grid> 
                         </Grid>
                         <Grid item sm={12} xs={12}>
                              
                         </Grid>
                    </Grid> 
               </Grid> 
          </Grid> 
     </Box>
    )
  }

export default Section_5