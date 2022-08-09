import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Color from '../../Back_office/components/palette/color'
import Login from '../../components/Auth/Login'
import Register from '../../components/Auth/Register'

const AuthLayout = () => {
    return (
        <Grid container width="100vw" height="100vh" alignItems="center" justifyContent="center" sx={{ backgroundColor: Color.paletteBluedark }}>
            <Box width="40vw" sx={{ position: 'relative', padding: '40px',backgroundColor: '#fff',borderRadius:'5px'}}>
                <Grid container direction="row" alignItems="center">
                    <img item src="/crew.png" alt="logo" style={{ width: '80px', height: '70px', objectFit: 'cover' }} />
                    <Grid item direction="row">
                        <Grid container>
                            <Typography item variant="h4">&nbsp;RUMBLE&nbsp;</Typography>
                            <Typography item variant="h4">CREW</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Routes>
                    <Route path="/login" element={<Login />} exact={true} />
                    <Route path="/register" element={<Register />} exact={true} />
                </Routes>
            </Box>
        </Grid>
    )
}

export default AuthLayout