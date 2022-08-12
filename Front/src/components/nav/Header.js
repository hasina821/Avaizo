import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List } from '@mui/icons-material'
import { Box, IconButton, MenuList } from '@mui/material'
import gsap, { Power3 } from 'gsap'
import React,{useEffect, useRef, useState} from 'react'
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

    //Gsap 
    let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    let logo = useRef(null)
    let menu = useRef(null)

    useEffect(()=>{
        tl.from(logo,1,{
            opacity:0,
            y:100
        })
        tl.from(menu,2,{
            opacity:0,
            y:-200,
            stagger:{
                amount:.4
            },
            ease:ease
        })
    })

  return (
    <div className='header'>
        <div className='container'>
            <div className='wrapper'>
                <div className='inner-header'>
                    <div className='logo' ref={el => logo=el}>
                        <Link to="login">
                            <img src="/crew.png" alt="logo" style={{width:'90px',height:'70px',objectFit:'cover'}}/>
                        </Link>
                    </div>
                    <div className='menu' ref={el => menu = el}>
                        <Link to="login">
                            Se connecter
                        </Link>
                        <Link to="register">
                            S'enregistrer
                        </Link>
                        <FontAwesomeIcon disabled={disabled} onClick={handleMenu} icon={faBars}/>
                    </div>
                </div>
            </div>
        </div>
        <NavBar state={state}/>
    </div> 
  )
}

export default Header

