import React, { Fragment,useEffect,useRef,useState } from "react"
import { makeStyles } from "@mui/styles"
import { Grid,Box,Typography } from "@mui/material"
import {gsap, Power3} from 'gsap';

const useStyles=makeStyles({
     card:{
          position: 'absolute',
          marginTop: '10%',
          marginRight: '5%',
          marginLeft:'10%',
          backgroundColor: `#fd0`,
          width: '20%',
          borderRadiusBottom:'10px',
          border: '.5px solid white',
          height:'100px'
     },
     headpub1:{
          backgroundColor:'rgb(102, 178, 255)',
          height:'10%',
          width:'100%'
     },
     headpub2:{
          backgroundColor:'#ff0',
          height:'10%',
          width:'100%'
     },
     bodypub:{
          backgroundColor:'rgb(19, 47, 76)',
          textSizeAdjust: '100%',
          padding:'8',
          color:'#fff',
          fontSize:'12px',
          height:'80%',
          width:'100%',
          borderBottom:'10px',
     },
     
})

const Help = () =>{
     const classes = useStyles(); 
     let tl = new gsap.timeline();
     let ease = Power3.easeOut;
     const [pubopen,setPub]=useState(true)
     let boxref=useRef(null)

     const handleClosepub = () =>{
          setPub(false) 
      }

     useEffect(()=>{
          tl.from(boxref, {
               x: -1200,
               ease: ease,
               opacity: 0
           },"-=1")
     })

     return(
          <Fragment>
               <Box className={classes.card} ref= {el=> boxref =el}>
                    <div className={classes.headpub1}>
                         </div>
                         <div className={classes.headpub2}>
                         </div>
                         <div className={classes.bodypub}>
                         <img src='../../../assets/img/mada_ukraine.png' alt='...'/>
                         <img src='' alt='...'/>
                         <Typography component='div'>
                              Soutenons-Ukraine
                         </Typography>
                         <button onClick={handleClosepub} style={{display:'right'}}>
                              fermer
                         </button>
                    </div>
               </Box>
          </Fragment>
     )
}

export default Help;