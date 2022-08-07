import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Grid, MenuItem,TextField, Typography,Box, Divider,Button} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme)=>({
  root: {
    
  },
  link:{
    textDecoration:'underline',
    color:'#055f5b'

  },
  hoverCard:{
    transition:'boxShadow,transform 2s',
    '&:hover':{
      transform: 'scale(1.1)',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
  }
}));
const data = [
  {
    title:'Support',
    subtitle:'Lorem ipsum dolor sit amet consectetur adipiscing.',
    email:'support@amiral.com',
    phone:'+2616668165',
    src:'/phone-call.svg'
  },
  {
    title:'Support',
    subtitle:'Lorem ipsum dolor sit amet consectetur adipiscing.',
    email:'support@amiral.com',
    phone:'+2616668165',
    src:'/suitable.svg'
  },
  {
    title:'Support',
    subtitle:'Lorem ipsum dolor sit amet consectetur adipiscing.',
    email:'support@amiral.com',
    phone:'+2616668165',
    src:'/presse.svg'
  }
]


const  Contact = () =>{

const {t}=useTranslation()

  const validationSchema = Yup.object().shape({
    telephone: Yup.string()
      .required('Ce champ est obligatoire'),
    nom: Yup.string()
      .required('Votre nom  est obligatoire')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  
  const classes = useStyles();  
  return (
    <Box className={classes.root}>
        <Box style={{background:'#c0392b',padding:'150px 100px 350px 100px'}}>
          <Grid container>
            <Grid item sm={12} xs={12} textAlign='center' >
                <Typography variant="h2"  color='#fff' fontWeight='bolder'>
                    Contact
                </Typography>  
            </Grid>
            <Grid item sm={12} xs={12} textAlign='center'>
              <Typography variant="h6"  color='#fff'>
                Lorem ipsum dolor sit amet consectetur adipisc elit 
                viverra dignissim pellentesque in ac.
              </Typography>   
            </Grid>
          </Grid>
        </Box>
        <Box  style={{ position:'relative',marginTop:'-250px'}} margin='30px 70px 30px 70px'>
            <Grid container  spacing={4} justifyContent='center'  alignContent='center'>
                {
                    data.map((item,index) =>{ 
                      return(
                        <Grid item key={`${index}`} className={classes.hoverCard}  style={{ width:'100%'}} marginRight={5} sm={3}  xs={3} boxShadow={2} borderRadius={5} paddingBottom={6}  sx={{ background: '#fff'}}>
                           <Grid container >
                              <Grid item sm={12}  xs={12}  padding='30px 50px 30px 50px'>
                                  <img 
                                  src={item.src}/>
                              </Grid>
                              <Grid item sm={12} xs={12} >
                                <Typography variant="p"  style={{
                                  color: '#292c32',
                                  fontSize: '24px',
                                  fontWeight: 700,
                                }}>
                                  {item.title}
                                </Typography>   
                              </Grid>
                              <Grid item sm={12} xs={12}  marginTop={1}>
                                <Typography variant="p"  color='#0f1b48'>
                                  {item.subtitle}
                                </Typography>   
                              </Grid>
                              <Grid item sm={12} xs={12}   marginTop={3}>
                                <Divider light  variant='middle' style={{
                                  marginRight:'50px'
                                }}/>
                              </Grid>
                              <Grid item sm={12} xs={12} marginTop={3}>
                                <a className={classes.link} href={`mailto:${item.email}`}  target='_blank' >{item.email}</a>
                              </Grid>
                              <Grid item sm={12} xs={12} className={classes.link} marginTop={3}>
                                <a  href={`tel:${item.phone}`} target='_blank' >{item.phone}</a>
                              </Grid>
                            </Grid>
                        </Grid>
                      )
                    })
                }
            </Grid>
        </Box>
        <Box marginTop={10}>
            <Grid container padding='20px 0px 20px 0px'>
              <Grid item sm={6} xs={6}   style={{
                position: 'relative',
                paddingTop: '180px',
                paddingTottom: '180px',
              }} bgcolor='#fbf9f8'>
                <Grid container  paddingLeft={5} paddingRight={20}>
                        <Grid item sm={12} xs={12} flex flexDirection='row'>
                              <Grid container >
                                  <Grid item sm={1} xs={1}>
                                        <Divider light style={{ 
                                            width: "50px",
                                            height:'3px', 
                                            color:'#055f5b',
                                            marginTop:'10px',
                                        }}/>
                                  </Grid>
                                  <Grid item sm={9} xs={9} marginLeft={3}>
                                        <Typography variant="p" fontWeight='bolder' color='#c0392b'>
                                          NOUS CONTACTER
                                          </Typography>
                                  </Grid>
                              </Grid>
                        </Grid>  
                        <Grid item sm={12} xs={12} margin='20px 0px 20px 0px'>
                              <Typography variant="h4" color='#292c32' fontWeight='bolder'>
                                {t("contact-us")}
                              </Typography>
                        </Grid>  
                        <Grid item sm={12} xs={12}>
                              <Typography variant="h6" color='#6f7278'>
                              Lorem ipsum dolor sit amet  adipiscing elit.
                              Consectetur tortor nunc aliquam consectetur semper augue at.
                              </Typography>
                        </Grid>  
                        <Grid item sm={12} xs={12} margin='20px 0px 20px 0px'>
                              
                        </Grid>
                        <Grid item sm={12} xs={12}>
                        </Grid>       
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={6}  style={{background:'#000'}}>
                    <Box style={{
                        position:'relative',
                        marginTop:'100px',
                        marginLeft:'-120px',
                        marginRight:'50px'
                    }}>
                      <Grid boxShadow={4}  container style={{ background:'#fff',borderRadius:'10px', padding:'50px 50px 30px 50px'}}>
                          <Grid item sm={12} xs={12}>
                              <Grid container spacing={3}>
                                  <Grid item sm={6} xs={6}>
                                    <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                          <input type="text"  name="nom" placeholder="Nom"  className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Nom' {...register('nom')}/>
                                          <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                          </span> 
                                    </div>
                                  </Grid>
                                  <Grid item sm={6} xs={6}>
                                    <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                            <input type="text"  name="email" placeholder="email" 
                                            {...register('email')} className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                            <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                              </svg>
                                            </span> 
                                      </div>
                                  </Grid>
                                  <Grid item sm={6} xs={6}>
                                    <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                            <input type="text"  name="entreprise" placeholder="date_disponibilite"  className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='entreprise'{...register} />
                                            <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blueGray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            </span> 
                                      </div>
                                  </Grid>
                                  <Grid item sm={6} xs={6}>
                                    <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                            <input type="text"  name="telephone" {...register('telephone')}placeholder="date_disponibilite"  className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='titre'/>
                                            <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                              </svg>
                                            </span> 
                                      </div>
                                  </Grid>
                                  <Grid item sm={12} xs={12}>
                                    <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                                            <input type="text"  name="datemot_disponibilite" placeholder="date_disponibilite"  className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='titre'/>
                                            <span className="z-10 h-full ml-6  leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                            </span> 
                                      </div>
                                  </Grid>
                                  
                                  <Grid item sm={6} xs={6}>
                                      <Button
                                        sx={{
                                            background:'#c0392b',
                                            borderRadius:'80px',
                                            color: '#fff',
                                            padding:'20px',
                                            '&:hover':{
                                                  background:'#000',
                                            }
                                        }}
                                      variant="contained" 
                                      color="success">
                                           Envoyer un message
                                      </Button>
                                 </Grid>
                              </Grid>
                          </Grid>
                      </Grid>           
                    </Box>
                </Grid>
              </Grid> 
          </Box>
    </Box>
  );
}

export default Contact