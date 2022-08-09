import React,{useEffect,useState} from "react"
import { makeStyles } from '@mui/styles';
import {Grid, Divider, Typography,Box, Button,Avatar} from '@mui/material';
import {Link} from "react-router-dom"
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

 const data = [
     {
          src:'https://cdn0.sbnation.com/assets/3523211/thor_thedarkworld17_1020.jpg',
          title:'Services 3',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     },
     {
          src:'https://needlessessentialsonline.com/wp-content/uploads/2013/10/1374238_651010204943240_154586123_n-537x766.jpg',
          title:'Services 4',
          subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.',
     },
 ]
const Section_3 = ()=> {
     const classes = useStyles(); 
     return(
               <Box style={{backgroundColor:Color.paletteBluedark,height:'100vh'}}>
                    <Grid container spacing={2}  style={{
                         padding: '100px 100px 100px'
                    }}> 
                         <Grid item sm={12} xs={12}  padding='0px 0px 80px 0px'>
                              <Grid container >
                                   <Grid item sm={2} xs={1} textAlign='end'>
                                        <Divider style={{ 
                                             width: "150px",
                                             height:'3px', 
                                             color:'#fff',
                                             marginTop:'10px',
                                        }}/>
                                   </Grid>
                                   <Grid item sm={8} xs={10} >
                                        <Typography variant="h1" textTransform='uppercase' fontWeight='bolder' color={Color.paleteTealRadiant}>
                                             NOS SERVICES
                                        </Typography>
                                   </Grid>
                                   <Grid item sm={1} xs={1} textAlign='start'>
                                        <Divider style={{ 
                                             width: "150px",
                                             height:'3px', 
                                             color:'#fff',
                                             marginTop:'10px',
                                        }}/>
                                   </Grid>
                              </Grid>
                              
                         </Grid>
                         <Grid item sm={6} xs={6}>
                              <Grid container>
                                   <Grid item sm={4} xs={4}>
                                        <Avatar
                                        alt="thor"
                                        src="https://www.themoviethemesong.com/wp-content/uploads/2015/07/Thor-The-Dark-World-Movie-Theme-Song-3.jpg"
                                        sx={{ width: '90%', height: '250px' }}
                                        />
                                   </Grid>
                                   <Grid item sm={5} xs={5}>
                                        <Grid container>
                                             <Grid item sm={12} xs={12}>
                                                  <Typography variant="h5" fontWeight={700} color={Color.paletteOrange}>
                                                       Services 1
                                                  </Typography>
                                             </Grid>
                                             <Grid  marginTop={2} item sm={12} xs={12}>
                                                  <Typography  lineHeight={2} fontSize='18px' color='#fff'>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.
                                                  </Typography>
                                             </Grid>
                                        </Grid>
                                   </Grid>
                                   <Grid item sm={3} xs={3}>

                                   </Grid>
                              </Grid>
                         </Grid> 
                         <Grid item sm={6} xs={6}>
                              <Grid container>
                                   <Grid item sm={4} xs={4}>
                                   <Avatar
                                        alt="thor"
                                        src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ThunderLightning.jpg"
                                        sx={{ width: '90%', height: '250px' }}
                                        />
                                   </Grid>
                                   <Grid item sm={5} xs={5}>
                                        <Grid container>
                                             <Grid item sm={12} xs={12}>
                                                  <Typography variant="h5" fontWeight={700} color={Color.paletteOrange}>
                                                       Services 2
                                                  </Typography>
                                             </Grid>
                                             <Grid  marginTop={2} item sm={12} xs={12}>
                                                  <Typography  lineHeight={2} fontSize='18px' color='#fff'>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id quis gravida aliquam pu.
                                                  </Typography>
                                             </Grid>
                                        </Grid>
                                   </Grid>
                                   <Grid item sm={3} xs={3}>

                                   </Grid>
                              </Grid>
                         </Grid>
                         {
                              data.map((item) => {
                                   return(
                                        <Grid key={`${item}`}  marginTop={0} item sm={6} xs={6}>
                                             <Grid container>
                                                  <Grid item sm={4} xs={4}>
                                                       <Avatar
                                                            alt="thor"
                                                            src={item.src}
                                                            sx={{ width: '90%', height: '250px' }}
                                                       />
                                                  </Grid>
                                                  <Grid item sm={5} xs={5}>
                                                       <Grid container>
                                                            <Grid item sm={12} xs={12}>
                                                                 <Typography variant="h5" fontWeight={700} color={Color.paletteOrange}>
                                                                     {item.title}
                                                                 </Typography>
                                                            </Grid>
                                                            <Grid marginTop={2} item sm={12} xs={12}>
                                                                 <Typography lineHeight={2} fontSize='18px' color='#fff'>
                                                                      {item.subtitle}
                                                                 </Typography>
                                                            </Grid>
                                                       </Grid>
                                                  </Grid>
                                                  <Grid item sm={3} xs={3}>

                                                  </Grid>
                                             </Grid>
                                        </Grid>
                                   )
                              })
                         }
                    </Grid> 
               </Box>
          )
     }

export default Section_3