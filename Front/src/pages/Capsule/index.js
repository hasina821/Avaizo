import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import {useTranslation} from "react-i18next"
import { makeStyles,styled } from '@mui/styles';
import {Grid, MenuItem, Typography,Box, Select,FormControl, Button,Divider} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import {Pagination, PaginationItem} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Color from "../../Back_office/components/palette/color";

const StyledBox=styled(Box)({
  backgroundColor:Color.paletteBluedark,
  color:'#fff',
  padding:'200px 20px 200px 20px',
  height:'80vh',
  textAlign:'center'
})


const Capsule = ()=> {
    return(
     <Fragment>
          <div >
          <StyledBox>
                <Grid container>
                    <Grid xs={4} lg={4} item>
                        
                    </Grid>
                    <Grid xs={4} lg={4} item>
                        <Typography variant='h3' sx={{fontWeight:'bold'}}>
                            Nos clients sont toujours satisfaits de nos oeuvres et de nos services 
                        </Typography>
                        <Divider></Divider>
                    </Grid>
                    <Grid xs={4} lg={4} item>

                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={3} lg={3} item>

                    </Grid>
                    <Grid xs={6} lg={6}>
                        <Box sx={{marginTop:'8%'}}>
                            <Typography variant='p' color='#95a5a6'>
                            Plus de 150 diffusion ces dernieres années Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={3} lg={3} item>

                    </Grid>
                </Grid>
            </StyledBox>
              <Box  padding='20px 0px 20px 180px' style={{
                borderBottomLeftRadius:'50px',
                borderBottomRightRadius:'50px',
                color:'#fff'
              }} bgcolor={Color.paletteBluedark}>
                <Grid container> 
                <Grid item sm={3} xs={3}>

                </Grid>
                  <Grid item sm={2} xs={2} >
                      <Typography variant="p" fontWeight='bolder'>
                        Recherche
                      </Typography> 
                      <br/>
                      <FormControl sx={{  width: '25ch' }} variant="fulled">
                          <OutlinedInput
                            sx={{borderColor:"white"}}
                            id="outlined-adornment-weight"
                            label={false}
                            size='small'
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton type="submit" sx={{ p: '10px',color:'#fff' }} aria-label="search">
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                          />
                      </FormControl>
                  </Grid>
                  <Grid item sm={2} xs={2}>
                      <Typography variant="p" fontWeight='bolder'>
                        Popularité
                      </Typography> 
                      <br/>
                      <FormControl sx={{  width: '25ch' }} variant="outlined">
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label={false}
                          size='small'
                          

                        > 
                          <MenuItem value={10}>Populaire</MenuItem>
                          <MenuItem value={20}>Récent</MenuItem>
                          <MenuItem value={30}>Ancien</MenuItem>
                        </Select>
                      </FormControl>
                  </Grid>
                  <Grid item sm={2} xs={2}>
                      <Typography variant="p" fontWeight='bolder'>
                        Date
                      </Typography> 
                      <br/>
                      <FormControl sx={{  width: '25ch' }} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            label={false}
                            type='date'
                            size='small'
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                          />
                      </FormControl>
                  </Grid>
                  <Grid item sm={3} xs={3}>

                </Grid>
                </Grid>

              </Box>
              <Box padding='80px 50px 0px 50px'>
                <Grid container spacing={3}>
                  {
                    [1,2,3,66,5,65].map((items) => {
                      return(
                        <Grid item sm={4} xs={4}  sx={{}}>
                          <Box boxShadow={1} sx={{
                            width:'380px',
                            height:'300px',
                            borderRadius:'7px',
                            backgroundColor:'#f000',
                            background:'url(/fond.svg)',
                            backgroundSize:'cover'
                          }}>
                            ataoaoaoaoaaoao
                          </Box>
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Box>
          </div>
     </Fragment > 
    )
  }

export default Capsule