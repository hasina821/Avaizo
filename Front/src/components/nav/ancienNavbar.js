import React,{ useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid,ListItem,MenuItem,ListItemText, Button} from '@mui/material';
import MenuDialog from '../Dialog/MenuDialog'
import ChooseLangue from '../ChooseLangue/ChooseLangue'
import { makeStyles } from '@mui/styles';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../redux/users/auth';
import { NavLink } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {toggle} from "../../redux/features/theme"
import {useSpring, animated} from 'react-spring'
import {Link} from "react-router-dom"
import { useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const menu = [
     {
          value: "Accueil",
          path: '/'
     },
     {
          value: "Capsule débloquer",
          path: '/capsule'
     },
     {
          value: "Tarifs",
          path: '/pricing'
     },
     {
          value: "Nous contacter",
          path: '/contact'
     },
]

const useStyles = makeStyles((theme)=>({
     root: {
          '& a':{
               textDecoration:'none',
               color:'#292c32',
               fontSize:'20px',
               fontFamily:'Plusjakartasans, sans-serif',
               transition:"color 5s linear",
               '&:hover':{
                    color:'#055f5b',
                    fontWeight:'bold',
                    cursor:'pointer !important',
               }
          },
     },
     AppBar: {
         color:'#292c32',
         lineHeight:'1.125em'
     },
     linkClassName: {
          color:'#292c32',
  
     },
     btnConnexion:{
          borderRadius:'80px !important',
          color: '#fff',
          padding:'12px !important',
          transition:'transform 3s',
          '&:hover':{
               background:'#055f5b !important',
               transform:'translateY(-2px) !important',
               
          }
     },
     roundanimated:{
          position: 'absolute',
          backgroundColor:'#000',
          width:'70px',
          height:'70px',
          right:'12px',
          borderRadius:'10px',
     }
 }));

const LinkCustom = (path, label, className) =>{
     return (
          <NavLink
               to={path}
               activeStyle={{
                    fontWeight: "bold",
                    color: "red"
               }}
               >
               {label}
          </NavLink>
     )
}
const Navbar = () => {
     const classes = useStyles(); 
     const theme = useSelector(state=>state.theme);
     const mode=useSelector(state=>state.theme)
     const dispatch= useDispatch()
     const [styleHoverAnimate, setStyleHoverAnimate] = useState({ rotateZ: 0, borderRadius:'10px'})
     const [loading, setLoading] = useState(false)
     const refContainer = document.getElementById("paypal")

     const StyleHover = useSpring({
          from: { rotateZ: 0, borderRadius:'10px', },
          to: { ...styleHoverAnimate },
     })

     const deconnexion = () =>{
          console.log("deconnexion");
     }

     return (
          <Box sx={{ flexGrow: 1 }} className={classes.root}>
                              
               
               <AppBar elevation={1} position="static" sh  sx={{  background:'white' }} className={classes.AppBar} id={theme}>
                    <Grid container sx={{marginTop:'2%'}}
                     justifyContent='center' 
                     textAlign='end'
                     >

                          
                         <Grid lg={2} item textAlign='start'>
                              <img 
                                   src='/Logo-test.png'
                                   width={70}
                                   height={70}

                              />
                         </Grid>
                         
                         <Grid item lg={6}>
                              <ListItem  style={{textAlign:'center'}}>
                                   {
                                        menu.map((item,index) => {
                                             return(
                                                  <ListItemText ty  key={`key-${index}`} style={{ fontSize:24,fontWeight:'bold'}}>
                                                       {LinkCustom(item.path,item.value)} 
                                                  </ListItemText>
                                             )
                                        })
                                   }
                              </ListItem>
                         </Grid>
                         <Grid lg={2} textAlign='center' marginLeft={-2} item >
                              <Box>
                                   <Link to='/login'>
                                        <Button 
                                             sx={{background:'#055f5b',}} 
                                             variant="contained"  
                                             className={classes.btnConnexion}
                                             //onClick={/*deconnexion*/}
                                             >
                                             Se connecter
                                        </Button>
                                   </Link>
                              </Box>
                         </Grid>
                         
                         <Grid item lg={1} textAlign='center' marginTop={-2.5}  justifyContent='center'>
                              <ListItem  sx={{ cursor: 'pointer' }}>
                                   <MenuItem sx={{ '&:hover':{background:'none'}}}
                                    onMouseOver={()=>setStyleHoverAnimate({ rotateZ: 180, borderRadius:'100%'})}
                                    onMouseLeave={()=>setStyleHoverAnimate({ rotateZ: -180, borderRadius:'10px'})}
                                   >
                                       <animated.div 
                                             className={classes.roundanimated}
                                             style={{
                                                  ...StyleHover
                                             }}
                                       >
                                        </animated.div> 
                                        <IconButton
                                             style={{borderRadius:'0px',cursor: 'pointer'}}
                                             edge="start"
                                             color="inherit"
                                             aria-label="menu"
                                             variant="outlined"
                                        >
                                             <MenuIcon style={{fontSize:48}}/>
                                        </IconButton>
                                   </MenuItem>
                              </ListItem>
                         </Grid>
                    </Grid>
               </AppBar>
               <PayPalScriptProvider options={{ "client-id": "ATCd1RnkXx_Xrqu8ek7ChR5qdbDhmuLb31dY7VNOYYxiGaOBV_j8WqYXmEyMMX5Av8YYRMFgn7tPHevX" }}>
                    <PayPalButtons
                         createOrder={(data, actions) => {
                              return actions.order.create({
                              purchase_units: [
                                   {
                                        amount: {
                                             value: "1.99",
                                        },
                                   },
                              ],
                              });
                         }}
                         onApprove={(data, actions) => {
                              return actions.order.capture().then((details) => {
                              const name = details.payer.name.given_name;
                              alert(`Transaction completed by ${name}`);
                              });
                         }}
                    />
               </PayPalScriptProvider>


               {/*<MenuDialog/>*/}
          </Box>
          
     );
}

export default Navbar