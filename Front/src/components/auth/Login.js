import * as React from 'react';
import { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InputAdornment from '@mui/material/InputAdornment';
import ReCAPTCHA from "react-google-recaptcha";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from "../../redux/users/message";
import { login } from "../../redux/users/auth";

const useStyle=makeStyles({
  root:{
    background:"url('/images/bacc.jpg')",
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: 10,
      height:100,
    },
  },
  err:{
    color:"red",
    textAlign:'center'
  }
})

const Login = () =>{
  const [status, setStatus] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Votre adresse mail est obligatoire')
      .email('Veuilez entrer une adresse mail valide'),
    password: Yup.string()
      .required('Votre mot de passe est obligatoire')
      .min(6, 'Mot de passe tres court,il faut au moins 6 caracteres')
      .max(40, 'Mot de passe tres long,il ne doit pas depasser 40 caracteres')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  function onChange(value) {
    console.log("Captcha value:", value);
    if(value){
      setStatus(true)
    }
  }
  const initialValues = {
    email: "",
    password: "",
  };

  const Classes =useStyle()

  const onHandlesignin = (data)=> {
    console.log(data.email , data.password);
      const { email, password } = data;
      setLoading(true);
      dispatch(login({ email, password }))
        .unwrap()
        .then((response) => {
          if(response){
          history.push("/admin/dashboard");
          window.location.reload();
          }
        })
        .catch(() => {
          setLoading(false);
      });
    /*
    if(status === true){
      console.log(data.email , data.password);
      const { email, password } = data;
      setLoading(true);
      dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          history.push("/admin/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
      });
    }
    else{
      setStatus("Captcha null")
    }
    */
  }

  if (isLoggedIn) {
    history.push("/admin/dashboard");
  }
  return(
    <Fragment>
        <Box  sx={{ ml: 10,mt:5}}>
            <Grid container spacing={3}>
              <form onSubmit={handleSubmit(onHandlesignin)}>
              <Grid item xs={10}>
                  <Typography component='h1' style={{fontWeight:'bolder',fontSize:40}}>
                    Se connecter
                  </Typography>
                  <Box>
                        <Typography component='div' style={{fontSize:18,color:'#6f7278',marginTop:'2%',marginBottom:'4%'}}>
                            Saisissez votre adresse électronique et votre mot de passe pour vous connecter.
                        </Typography>
                  </Box>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="email" placeholder="votre email" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('email')}/>
                    <span className="z-10 h-full ml-6 leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </span>
                    {errors.email && <p className='text-red-500 italic' >{errors.email.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input  type="password" name="password"  placeholder="votre mot de passe" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register('password')}/>
                    <span className="z-10 h-full ml-6 leading-snug font-normal absolute text-center text-slate-300 mr-0 absolute bg-transparent rounded-full text-base items-center justify-center w-12 pl-5 py-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </span>
                    {errors.password && <p className='text-red-500 italic'>{errors.password.message}</p>}
                  </div>
                  {status === "Captcha null" && <p className='text-red-500 italic' >Assurez-vous de cocher le captcha</p>}   
                <Grid xs={12} sx={{marginTop:'10%',textAlign:'center'}}>
              <Grid xs={12} sx={{textAlign:'center', marginLeft:'14%', marginBottom:'5%', marginTop:'-3%'}}>
                <ReCAPTCHA
                sitekey="6Ldw9-sfAAAAAH-ivOczLDNvAuNVvnVrfV67I1Wx"
                onChange={onChange}
                />
              </Grid>
          
              <input
                  type='submit'
                  variant="contained" 
                  color="success"
                  style={{
                      textTransform:'lowercase',
                      background:'#055f5b',
                      borderRadius:'80px',
                      color: '#fff',
                      padding:'20px',
                      width:'100%',
                      '&:hover':{
                            background:'#055f5b',
                      },
                      fontWeight:1000,
                      fontSize:'10px',
                  }}
                  value='Se connecter'
            />
                
              </Grid>
              </Grid>
            <Grid xs={2}>
            </Grid>
            </form>
            </Grid>
          </Box>
    </Fragment>
  )
}

export default Login;

