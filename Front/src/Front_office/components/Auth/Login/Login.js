import { TextField, FormControlLabel, Switch, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link } from "react-router-dom";
import { StyleAuth } from "./../Styles";
import { useState } from "react"
import "./login.scss"

const Login = () => {
    const styles = StyleAuth()
    const [values, setValues] = useState({ password: "", email: "", souviens: false, showPassword: false, })
    const handleClickShowPassword = () => { setValues({ ...values, showPassword: !values.showPassword }) }
    const handleMouseDownPassword = (e) => { e.preventDefault() }
    return (
        <div className="login">
            <div className="login-content">
                <div className="title">
                    <img src="/crew.png" alt="logo" />
                    <h4>WifiZara</h4>
                </div>
                <div className="login-form">
                    <TextField variant="outlined" size="small" className={styles.textField} label="Email" type="email" InputLabelProps={{ className: styles.label }}
                        InputProps={{
                            className: styles.root,
                            endAdornment: (<InputAdornment position="end">
                                {/* <AlternateEmailTwoToneIcon className={styles.icon} /> */}
                            </InputAdornment>
                            )
                        }}
                    />
                    <TextField variant="outlined" size="small" className={styles.textField} label="Mot de passe" type={values.showPassword ? 'text' : 'password'}
                        InputLabelProps={{ className: styles.label }}
                        InputProps={{
                            className: styles.root,
                            endAdornment: (
                                <InputAdornment position="end" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                    {true ? <VisibilityOff className={styles.icon} /> : <Visibility className={styles.icon} />}
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel sx={{ color: "gray", fontSize: '12px' }} control={<Switch size="small" />} label="Se souviens de moi ? " />
                </div>
                <div className="group-button">
                    <button className="btn-login">Se connecter</button>
                    <button className="btn-cancel">Annuler</button>
                </div>
                <p>
                    Vous n'avez pas encore un compte ?
                    <Link to="/">S'inscrire</Link>
                </p>
            </div>
        </div>
    )
}

export default Login