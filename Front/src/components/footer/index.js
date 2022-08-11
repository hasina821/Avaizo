import React, { useEffect, useState } from "react"
import { Fragment } from "react"
import { makeStyles } from '@mui/styles';
import { Grid, MenuItem, Typography, Box, Select, FormControl, Button } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: Color.paletteBluedark,
    color: '#fff',
    borderTop:'1px dashed #fff',
    padding:'30px 0px 20px 180px'
  },
  reseau: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    lineHeight: "2.5",
    lineHeight: "3"
  },
  adresse: {
    fontSize: "16px",
    paddingLeft: "5%",
    lineHeight: "3"
  },
  iconres: {
    width: "100",
    height: "70"
  },
  copy: {
    fontSize: "18px",
    marginTop: "15px"
  }

}));

const Footer = () => {
  const classes = useStyles()
  return (
    <Box  className={classes.root}>
      <Grid container >
        <Grid item sm={4} xs={4} >
          <Typography variant="h5" fontWeight='bolder'>
            Contact
            <p className={classes.adresse}>+33677441829 </p>
            <p className={classes.adresse}>contact@crew.com </p>
            <span className={classes.copy}>Copyright 2022 @ Crew</span>
          </Typography>
        </Grid>
        <Grid item sm={4} xs={4}>
          <Typography variant="h5" fontWeight='bolder'>
            Adresse
            <p className={classes.adresse}>85 bd Raspail, 84190 Tanambao Fianarantsoa </p>
            <Grid lg={10} item textAlign='start'>
              <a href='/'>
                <img
                  src='/crew.png'
                  width={300}
                  height={100}

                />
              </a>
            </Grid>
          </Typography>
        </Grid>
        <Grid item sm={4} xs={4}>
          <Typography variant="h5" fontWeight='bolder' padding="0 20%" >
            Réseaux sociaux
            <div className={classes.reseau}>
              <p><FacebookOutlinedIcon className={classes.iconres} /></p>

              <p><InstagramIcon className={classes.iconres} /></p>
              <p><LinkedInIcon className={classes.iconres} /></p>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer