import { TextField, FormControlLabel, Switch, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link } from "react-router-dom";
import { StyleAuth } from "../Styles";
import { useState } from "react"
import "./register.scss"

const Register = () => {
    const styles = StyleAuth()
    const [verified, setVerified] = useState(false)
    const [values, setValues] = useState({ password: "", email: "", souviens: false, showPassword: false, })
    const handleChange = (field) => (e) => { setValues({ ...values, [field]: e.target.value }) }
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
                    <div className="form-group">
                        <TextField variant="outlined" size="small" className={styles.textField} label="Nom" type="text" InputLabelProps={{ className: styles.label }}
                            InputProps={{
                                className: styles.root,
                                endAdornment: (<InputAdornment position="end">
                                </InputAdornment>
                                )
                            }}
                        />
                        <TextField variant="outlined" size="small" className={styles.textField} label="Prénom(s)" type="text" InputLabelProps={{ className: styles.label }}
                            InputProps={{
                                className: styles.root,
                                endAdornment: (<InputAdornment position="end">
                                </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <TextField variant="outlined" size="small" className={styles.textField} label="N° Matricule" type="text" InputLabelProps={{ className: styles.label }}
                            InputProps={{
                                className: styles.root,
                                endAdornment: (<InputAdornment position="end">
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
                    </div>
                    <TextField variant="outlined" size="small" className={styles.textField} label="E-mail" type="email" InputLabelProps={{ className: styles.label }}
                            InputProps={{
                                className: styles.root,
                                endAdornment: (<InputAdornment position="end">
                                </InputAdornment>
                                )
                            }}
                        />
                        <TextField variant="outlined" size="small" className={styles.textField} label="Téléphone" type="text" InputLabelProps={{ className: styles.label }}
                            InputProps={{
                                className: styles.root,
                                endAdornment: (<InputAdornment position="end">
                                </InputAdornment>
                                )
                            }}
                        />
                    
                </div>
                <div className="group-button">
                    <button className="btn-login">S'enregistrer</button>
                    <button className="btn-cancel">Annuler</button>
                </div>
                <p>
                    Avez vous déjà un compte ?
                    <Link to="/">Se connecter</Link>
                </p>
            </div>
        </div>
    )
}

export default Register