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
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InputAdornment from '@mui/material/InputAdornment';
import ReCAPTCHA from "react-google-recaptcha";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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

const Register = () =>{
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
    username: Yup.string()
      .required('Votre adresse username est obligatoire'),
    email: Yup.string()
      .required('Votre adresse mail est obligatoire')
      .email('Veuilez entrer une adresse mail valide'),
    password: Yup.string()
      .required('Votre mot de passe est obligatoire')
      .min(6, 'Mot de passe tres court,il faut au moins 6 caracteres')
      .max(40, 'Mot de passe tres long,il ne doit pas depasser 40 caracteres'),
    password2: Yup.string()
      .required('Confirmation mot de passe est obligatoire')
      .min(6, 'Mot de passe tres court,il faut au moins 6 caracteres')
      .max(40, 'Mot de passe tres long,il ne doit pas depasser 40 caracteres'),
    nom: Yup.string()
      .required('Votre nom est obligatoire'),
    prenom: Yup.string()
      .required('Votre prènom est obligatoire'),
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
        .then(() => {
          history.push("/admin/dashboard");
          window.location.reload();
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
                            S'inscrire
                  </Typography>
                  <Box>
                    <Typography component='div' style={{fontSize:18,color:'#6f7278',marginTop:'2%',marginBottom:'4%'}}>
                        Saisissez votre adresse électronique et votre mot de passe pour vous connecter.
                    </Typography>
                  </Box>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="username" placeholder="votre username" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('username')}/>
                    {errors.username && <p className='text-red-500 italic' >{errors.username.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="email" placeholder="votre email" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('email')}/>
                    {errors.email && <p className='text-red-500 italic' >{errors.email.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input  type="password" name="password"  placeholder="votre mot de passe" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register('password')}/>
                    {errors.password && <p className='text-red-500 italic'>{errors.password.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input  type="password" name="password2"  placeholder="Confirmation mot de passe" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  {...register('password2')}/>
                    {errors.password2 && <p className='text-red-500 italic'>{errors.password2.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="nom" placeholder="votre nom" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('nom')}/>
                    {errors.nom && <p className='text-red-500 italic' >{errors.nom.message}</p>}
                  </div>
                  <div className="relative flex w-full flex-wrap  items-stretch mb-3">
                    <input type="text"  name="prenom" placeholder="votre prènom" className="appearance-none border rounded-full h-20 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('prenom')}/>
                    {errors.prenom && <p className='text-red-500 italic' >{errors.prenom.message}</p>}
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

export default Register;

