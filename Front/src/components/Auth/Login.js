import React, { useState } from "react";
import {Typography,Button,Stack,TextField,FormControlLabel,Switch,InputAdornment} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
// import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoToneIcon"
import { Link } from "react-router-dom";
import { ReCAPTCHA } from "react-google-recaptcha";
import { StyleAuth } from "./Styles";

const Login = () => {
    const styles = StyleAuth()
    const [values, setValues] = useState({password: "",email: "",showPassword: false,})
    
    const handleChange = (field) => (e) => {setValues({ ...values, [field]: e.target.value })}
    const handleClickShowPassword = () => {setValues({ ...values, showPassword: !values.showPassword })}
    const handleMouseDownPassword = (e) => {e.preventDefault()}
    return (
        <>
            <TextField variant="outlined" size="small" className={styles.textField} label="Email" type="email" InputLabelProps={{
                className: styles.label
            }} InputProps={{
                className: styles.root, endAdornment: (<InputAdornment position="end">
                    {/* <AlternateEmailTwoToneIcon className={styles.icon} /> */}
                </InputAdornment>
                ),
            }}
            />
            <TextField variant="outlined" size="small" className={styles.textField} label="Mot de passe" type={values.showPassword ? 'text' : 'password'}
                InputLabelProps={{ className: styles.label }}
                InputProps={{
                    className: styles.root,
                    endAdornment: (
                        <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                            {values.showPassword ? <VisibilityOff className={styles.icon} /> : <Visibility className={styles.icon} />}
                        </InputAdornment>
                    ),
                }}
            />

            <FormControlLabel sx={{ color: "gray", fontSize: '12px' }} control={<Switch size="small" />} label="Se souviens de moi ? " />
            <Stack sx={{ width: "100%", margin: "10px 0" }} direction="row" spacing={2}>
                <Button className={styles.buttonConnexion} variant="contained">Connecter</Button>
                <Button className={styles.buttonCancel} variant="contained">Annuler</Button>
            </Stack>
            <ReCAPTCHA sitekey="6Ldw9-sfAAAAAH-ivOczLDNvAuNVvnVrfV67I1Wx"/>
            <Typography color="gray" fontSize="14px" textAlign="center">
                Vous n'avez pas encore un compte? &nbsp;
                <Link to="/auth/register" style={{ textDecoration: 'underline', color: 'blue' }}>s'inscrire</Link>
            </Typography>
        </>
    )
}

export default Login