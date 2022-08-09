import React from "react"
import {Box,Grid,Typography,Divider} from "@mui/material"
import {styled} from "@mui/styles"
import Section_9 from "./Section_9"
import Color from "../../Back_office/components/palette/color"


const StyledBox=styled(Box)({
    backgroundColor:Color.paletteBluedark,
    color:'#fff',
    padding:'200px 20px 200px 20px',
    height:'80vh',
    textAlign:'center'
})


const Section_8 = ()=>{
    return(
        <> 
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
                <Grid container sx={{marginTop:'4%'}}>
                    <Grid xs={3} lg={3} item>

                    </Grid>
                    <Grid xs={6} lg={6}>
                        <Section_9/>
                    </Grid>
                    <Grid xs={3} lg={3} item>

                    </Grid>
                </Grid>
            </StyledBox>
        </>
    )
}

export default Section_8;