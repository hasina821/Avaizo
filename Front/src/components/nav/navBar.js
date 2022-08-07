import React,{ useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Grid,ListItem,MenuItem,ListItemText, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {toggle} from "../../redux/features/theme"
import {useSpring, animated} from 'react-spring'
import {Link} from "react-router-dom"
import { useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const menu = [
     {
          value: "ACCUEIL",
          path: '/'
     },
     {
          value: "TARIFS",
          path: '/pricing'
     },
     {
          value: "FILMS",
          path: '/capsule'
     },
     {
          value: "NOUS CONTACTER",
          path: '/contact'
     },
]

const useStyles = makeStyles((theme)=>({
     vertical:{
          borderRight:'1px solid white',
          backgroundColor:'#000'
     },
     root: {
          backgroundColor:'#2c3e50',
          '& a':{
               textDecoration:'none',
               color:'#fff',
               fontSize:'20px',
               fontFamily:'Plusjakartasans, sans-serif',
               transition:"color 5s linear",
               fontWeight:'bold',
               '&:hover':{
                    color:'#055f5b',
                    fontWeight:'bold',
                    cursor:'pointer !important',
               }
          },
     },
     AppBar: {
          alignItems:'center',
          paddingTop:'20px',
         color:'#fff',
         lineHeight:'1.125em'
     },
     linkClassName: {
          color:'#fff',
  
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
     const mode=useSelector(state=>state.theme)
     const [styleHoverAnimate, setStyleHoverAnimate] = useState({ rotateZ: 0, borderRadius:'10px'})
     const [loading, setLoading] = useState(false)
     const refContainer = document.getElementById("paypal")
     const dispatch=useDispatch()
     const theme=useSelector(state=>state.theme)
     const loc = localStorage.getItem("user")
     console.log(loc)
     const usePathname = () => {
          const location = useLocation();
          return location.pathname;
     }

     const StyleHover = useSpring({
          from: { rotateZ: 0, borderRadius:'10px', },
          to: { ...styleHoverAnimate },
     })

     const deconnexion = () =>{
          console.log("deconnexion");
     }

     return (
          <Box sx={{ flexGrow: 1 }} className={classes.root}>
               <Grid container>
                    <Grid lg={1/2} xs={1/2} item className={classes.vertical}>
                    </Grid>
                    <Grid lg={23/2} xs={23/2} item>
                         <AppBar elevation={1} position="static" sh  sx={{  background:'#000' }} className={classes.AppBar}>
                              <Grid container sx={{marginTop:'0%'}}
                              justifyContent='center' 
                              textAlign='end'
                              >
                                   <Grid lg={1} xs={1} item textAlign='start'>
                                        <img 
                                             src='/crew.png'
                                             width={100}
                                             height={100}

                                        />
                                   </Grid>
                                   <Grid lg={3} xs={3} item >
                                        
                                   </Grid>
                                   <Grid item lg={5}>
                                        <ListItem  style={{textAlign:'center'}}>
                                             {
                                                  menu.map((item,index) => {
                                                       return(
                                                            <ListItemText ty  key={`key-${index}`} style={{ fontSize:24,fontWeight:'bold',color:'#fff'}}>
                                                                 {LinkCustom(item.path,item.value)} 
                                                            </ListItemText>
                                                       )
                                                  })
                                             }
                                        </ListItem>
                                   </Grid>
                                   <Grid lg={1} textAlign='center' marginLeft={-2} item >
                                        <Box>
                                             <Link to='/login'>
                                                  <Button 
                                                       sx={{background:'#c0392b',}} 
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
                                                       <Box style={{padding:'20px 4px'}}>
                                                            <IconButton sx={{ ml: 1 }} onClick={()=>dispatch(toggle())} color="inherit">
                                                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                                            </IconButton>
                                                       </Box>
                                             </MenuItem>
                                        </ListItem>
                                   </Grid>
                              </Grid>
                         </AppBar>
                    </Grid>
               </Grid>
               {/* 
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
               */}
               <MessengerCustomerChat
                    pageId="114031570517893"
                    appId="1284136828742745"
               />
               {/*<MenuDialog/>*/}
          </Box>

     );
}

export default Navbar