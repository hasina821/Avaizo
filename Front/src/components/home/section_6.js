import React from "react"
import { Grid,Box, Typography,Card } from "@mui/material"
import { makeStyles, styled } from "@mui/styles"
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme)=>({
    box2: {
        margin:'4% 4%',
    },
}));

const StyledBox = styled(Box)({
    backgroundColor:Color.paletteBluedark,
    height:'100vh'
})

const StyledCard = styled(Box )({
    textAlign:'center',
    backgroundColor:Color.paletteTeal4,
    margin:'2% 4%',
    borderRadius :'4%',
    boxShadow:'4px 4px 4px #10857C',
})

const Section_6 = () =>{
    const styles=useStyles()
    return(
        <>
        <StyledBox>
            <Grid container>
                <Grid item xs={3} lg={3}>

                </Grid>
                <Grid xs={6} lg={6}>
                        <Typography variant="h1" color='#fff' fontWeight='bolder'>
                                RESERVEZ VOS PLACES ICI ET SAVOUREZ VOS MOMENTS
                        </Typography>
                </Grid>
                <Grid xs={3} lg={3}>

                </Grid>
            </Grid>
            <Box className={styles.box2}>
                <Grid container spacing={2} >
                    <Grid xs={2} lg={2} item>

                    </Grid>
                    <Grid xs={2} lg={2}>
                        <StyledCard>
                            <Typography variant='h5' color='#fff' fontWeight='bolder'>
                                Etape 1
                            </Typography>
                            <Typography color='#fff'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                        </StyledCard>
                    </Grid>
                    <Grid xs={2} lg={2}>
                        <StyledCard>
                            <Typography variant='h5' color='#fff' fontWeight='bolder'>
                                Etape 2
                            </Typography>
                            <Typography color='#fff'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                        </StyledCard>
                    </Grid>
                    <Grid xs={2} lg={2}>
                        <StyledCard>
                            <Typography variant='h5' color='#fff' fontWeight='bolder'>
                                Etape 3
                            </Typography>
                            <Typography color='#fff'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                        </StyledCard>
                    </Grid>
                    <Grid xs={2} lg={2}>
                        <StyledCard>
                            <Typography variant='h5' color='#fff' fontWeight='bolder'>
                                Etape 4
                            </Typography>
                            <Typography color='#fff'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                Consectetur tortor nunc aliquam consectetur semper augue at.
                            </Typography>
                        </StyledCard>
                    </Grid>
                    <Grid xs={2} lg={2} item>

                    </Grid>
                </Grid>
            </Box>
        </StyledBox>
        </>
    )
}

export default Section_6;