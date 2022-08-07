import React from "react"
import { Fragment } from "react"
import Navbar from "./components/navBar"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme();

export default function App(){
    return(
        <Fragment>
            <ThemeProvider theme={theme}>
                <Navbar/>
            </ThemeProvider>
        </Fragment>
    )
}