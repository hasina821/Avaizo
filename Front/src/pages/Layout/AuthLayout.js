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
                <Grid container direction="row" alignItems="center" justifyContent="center">
                    <img item="true" src="/crew.png" alt="logo" style={{ width: '80px', height: '70px', objectFit: 'cover' }} />
                    <Grid item>
                        <Grid container>
                            <Typography item="true" variant="h4" fontWeight="bold" color={Color.paletteBluedark}>&nbsp;RUM</Typography>
                            <Typography item="true" variant="h4" fontWeight="bold" color={Color.paletteOrange}>BLE&nbsp;</Typography>
                            <Typography item="true" variant="h4" fontWeight="bold" color={Color.paletteBluedark}>CREW</Typography>
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