import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import Color from "../../Back_office/components/palette/color";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        color:"#9A979F",
        fontSize:'14px'
      },
    textField:{
        width:'100%',
         "& label.Mui-focused": {
            color: '#fff'
          },
          "& .MuiInput:after": {
            border$Color: '#fff'
          },
          margin:'10px 0'
    },
    label:{
        color:"#9A979F",
        fontSize:'14px'
    },
    icon:{
        color:"#9A979F",
        fontSize:'18px'
    },
    buttonConnexion:{
        width: "100%", 
        backgroundColor: Color.paletteBluedark, 
        color: "white",
        fontWeight:'bold',
        fontSize:'14px',
        "&:hover": {
            background: Color.paletteTeal4,
          },
          "&:active": {
            background: Color.paletteTeal4,
        }
    },
    buttonInscri:{
        width: "100%",
        background: Color.paletteTeal1,
        color: "white",
        fontWeight:'bold',
        fontSize:'14px',
        "&:hover": {
            background: Color.paletteTeal2,
          },
          "&:active": {
            background: Color.paletteTeal2,
        }
    }
}));

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
    showPassword: false,
  });
  const styles = useStyles();

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  return (
    <>
        {/*Email*/}
        <TextField
          variant="outlined"
          size="small"
          className={styles.textField}
          label="Email"
          type="email"
          InputLabelProps={{
            className: styles.label
          }}
          InputProps={{
            //className: styles.root,
            endAdornment: (
              <InputAdornment position="end">
                <AlternateEmailTwoToneIcon className={styles.icon}/>
              </InputAdornment>
            ),
          }}
        />
        {/*Password*/}
        <TextField
          variant="outlined"
          size="small"
          className={styles.textField}
          label="Mot de passe"
          type={values.showPassword ? 'text':'password'}
          InputLabelProps={{
            className: styles.label
          }}
          InputProps={{
            className: styles.root,
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                {values.showPassword ? <VisibilityOff className={styles.icon}/>:<Visibility className={styles.icon}/> }
              </InputAdornment>
            ),
          }}
        />

        <Stack
          sx={{ width: "100%", marginTop: "10px" }}
          direction="row"
          spacing={2}
        >
          <Button
            className={styles.buttonConnexion}
            variant="contained"
          >
            Connexion
          </Button>
          <Link to="/auth/register">
            <Button
                className={styles.buttonInscri}
                variant="contained"
            >
                S'inscrire
            </Button>
          </Link>

        </Stack>
    </>
  )
}

export default Login