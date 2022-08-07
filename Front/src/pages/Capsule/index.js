import React,{useEffect,useState} from "react"
import { Fragment } from "react"
import {useTranslation} from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import { makeStyles } from '@mui/styles';
import {Grid, MenuItem, Typography,Box, Select,FormControl, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import {Pagination, PaginationItem} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
 }));

const Capsule = ()=> {

     const theme = useSelector(state=>state.theme);
     const classes = useStyles()
    return(
     <Fragment>
          <div id={theme} >
              <Box  className={classes.root}> 
                    <Grid container >  
                        <Grid item sm={12} xs={12} style={{ 
                              background: "#c0392b",
                              position: 'relative',
                              overflow: 'hidden',
                              paddingTop: '150px',
                              paddingBottom: '150px',
                              paddingLeft:'50px',
                              paddingRight:'50px'
                        }}>
                              <Grid container >
                                  <Grid item sm={7} xs={7} margin='20px 0px 20px 0px'>
                                        <Typography variant="h3" color='#fff' fontWeight='bolder'>
                                            La banque la plus transparente et la plus sûre qui soit
                                        </Typography>
                                  </Grid>  
                                  <Grid item sm={6} xs={6}>
                                        <Typography variant="h6" color='#fff'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                        Consectetur tortor nunc aliquam consectetur semper augue at.
                                        </Typography>
                                  </Grid>         
                              </Grid>  
                        </Grid>
                    </Grid>
              </Box>
              <Box  padding='20px 0px 20px 180px' style={{
                borderBottomLeftRadius:'50px',
                borderBottomRightRadius:'50px',
              }} bgcolor='#E9ECFF'>
                <Grid container > 
                  <Grid item sm={4} xs={4} >
                      <Typography variant="p" fontWeight='bolder'>
                        Recherche
                      </Typography> 
                      <br/>
                      <FormControl sx={{  width: '25ch' }} variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-weight"
                            label={false}
                            size='small'
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
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
                  <Grid item sm={4} xs={4}>
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
                  <Grid item sm={4} xs={4}>
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
                            background:'url(https://cdn.dribbble.com/users/4824889/screenshots/18241550/media/3089c4027c621e2af06e7529fb21fc2e.jpg?compress=1&resize=1200x900&vertical=top)'
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