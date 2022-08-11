import React from "react"
import { makeStyles } from '@mui/styles';
import { Grid, Divider, Typography, Box} from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme) => ({
     root: {
          backgroundColor: Color.paletteBluedark,
          padding:'50px 20px 50px 40px',
     },
     titles:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
     },
     title:{
          textAlign:'center',
          textTransform:'uppercase',
          fontWeight:'bolder',
          color:Color.paleteTealRadiant,
          position:'relative',
     },
     boxImage:{
          position: 'absolute',
          width:'70%',
          bottom:0,
          right:0,
          background:'white',
          borderRadius:'15px',
          padding: '10px',
          borderWidth: '0px',
          boxShadow: '0 4px 22px 0 rgb(41 44 50 / 4%)'
     }
}));

const Section_5 = () => {
     const settings = {
          autoplay: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
     };
     const slider = React.useRef(null);
     const styles = useStyles()
     return (
          <Box className={styles.root}>
               <Grid container flexwrap="nowrap">
                    <Grid item xs={5}>
                         <Slider {...settings} ref={slider}>
                         {[1,2,3,4,5].map((item)=>
                              <Box key={`${item}`} sx={{position:'relative'}}>
                                   <img src="https://assets.website-files.com/611d114cb3a54a7930597408/611d114cb3a54a2028597455_image-home-v1-testimonials-startup-x-template.jpg" 
                                   style={{ height: "100%", width: "80%",objectFit:'cover', borderRadius:'30px' }} alt="" />  
                                   <Box className={styles.boxImage}>
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
                              </Box>)}
                         </Slider>
                    </Grid>
                    <Grid item xs={7} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                         <Box className={styles.titles}>
                              <Divider  style={{backgroundColor:Color.paleteTealRadiant,width:'5%',height:'3px'}}/>
                              <Typography variant="h2"  className={styles.title}>
                                   QUELQUES CHIFFRES
                              </Typography>
                              <Divider  style={{backgroundColor:Color.paleteTealRadiant,width:'5%',height:'3px'}}/>
                         </Box>
                         <Box sx={{textAlign:'center'}}>
                              <Typography variant="p" color='#fff'>
                                   Nous avons des chiffres qui ont un impact
                              </Typography>
                         </Box>
                         <Grid container >
                              {[1,2,3,4].map((item) =>
                                   <Grid item sm={6} xs={6} margin='30px 0px 30px 0px'>
                                        <Grid container>
                                             <Grid item sm={12} xs={12} sx={{textAlign:'center'}}>
                                                  <Typography variant="h3" color='#fff' fontWeight='bolder'>
                                                       20<span style={{ color:'#c0392b'}}>%</span>
                                                  </Typography>
                                             </Grid>
                                             <Grid item sm={12} xs={12} sx={{textAlign:'center'}}>
                                                  <Typography lineHeight={2} fontSize='18px' color='#6f7278'>
                                                       Satisfaction des clients
                                                  </Typography>
                                             </Grid>
                                        </Grid>
                                   </Grid>)}
                              </Grid> 
                    </Grid>
               </Grid>
          </Box>
     )
}

export default Section_5
/*
<Grid container  padding='200px 50px 24px 50px'> 
               <Grid item sm={6} xs={6} textAlign='start'>
                    <Grid container > 
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
          */