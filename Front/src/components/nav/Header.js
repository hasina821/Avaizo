import { List } from '@mui/icons-material'
import { Box, IconButton, MenuList } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import NavBar from "./NavBar"
import "./style.css"


const Header = () => {
    const [state,setState] = useState({
        initial:false,
        clicked: null,
        menuName:"Menu"
    })
    const [disabled,setDisabled] = useState(false)
    

    const handleMenu = () => {
        disableMenu()
        if(state.initial === false){
            setState({
                initial: null,
                clicked:true,
                menuName:'Close'
            })
            console.log(1)
        } else if(state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName:'Menu'
            })
            console.log(2)
        } else if(state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName:'Close'
            })
            console.log(3)
        }
    }

    //Determineif our menu should be disabled
    const disableMenu = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        },1200)
    }
  return (
    <div className='header'>
        <div className='container'>
            <div className='wrapper'>
                <div className='inner-header'>
                    <div className='logo'>
                        <Link to="login">
                            <img src="/crew.png" alt="logo" style={{width:'50px',height:'50px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className='menu'>
                        <IconButton disabled={disabled} onClick={handleMenu}><List/></IconButton>
                    </div>
                </div>
            </div>
        </div>
        <NavBar state={state}/>
    </div>
  )
}

export default Header