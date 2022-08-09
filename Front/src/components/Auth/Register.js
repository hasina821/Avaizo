import React, { useState } from "react";
import {Button,Stack,TextField,InputAdornment,Typography} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
// import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoToneIcon"
// import PersonIcon from "@mui/icons-material/PersonIcon"
import { Link } from "react-router-dom";
import { StyleAuth } from "./Styles"

const Register = () => {
    const [values, setValues] = useState({password: "",email: "",showPassword: false,});
    const styles = StyleAuth();

    const handleChange = (field) => (e) => {setValues({ ...values, [field]: e.target.value });};
    const handleClickShowPassword = () => {setValues({ ...values, showPassword: !values.showPassword });};
    const handleMouseDownPassword = (e) => {e.preventDefault();};
    return (
        <>
            <TextField variant="outlined" size="small" className={styles.textField} label="Nom d'Utilisateur" type="text"
                InputLabelProps={{className: styles.label}}
                InputProps={{
                    className: styles.root,
                    endAdornment: (
                        <InputAdornment position="end">
                            {/* <PersonIcon className={styles.icon} /> */}
                        </InputAdornment>
                    ),
                }}
            />
            <TextField variant="outlined" size="small" className={styles.textField} label="Email" type="email"
                InputLabelProps={{className: styles.label}}
                InputProps={{
                    className: styles.root,
                    endAdornment: (
                        <InputAdornment position="end">
                            {/* <AlternateEmailTwoToneIcon className={styles.icon} /> */}
                        </InputAdornment>
                    ),
                }}
            />
            <TextField variant="outlined" size="small" className={styles.textField} label="Mot de passe" type={values.showPassword ? 'text' : 'password'}
                InputLabelProps={{className: styles.label}}
                InputProps={{
                    className: styles.root,
                    endAdornment: (
                        <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                            {values.showPassword ? <VisibilityOff className={styles.icon} /> : <Visibility className={styles.icon} />}
                        </InputAdornment>
                    ),
                }}
            />
            <Stack sx={{ width: "100%", margin: "10px 0" }} direction="row" spacing={2}>
                <Button className={styles.buttonConnexion} variant="contained">Enregistrer</Button>
                <Button className={styles.buttonCancel} variant="contained">Annuler</Button>
            </Stack>
            <Typography color="gray" fontSize="14px" textAlign="center">
                Avez vous déjà un compte? &nbsp;
                <Link to="/auth/login" style={{ textDecoration: 'underline', color: 'blue' }}>se connecter</Link>
            </Typography>
        </>
    )
}

export default Register