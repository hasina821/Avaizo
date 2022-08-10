import React from "react"
import { Box, Typography,Grid } from "@mui/material"
import { makeStyles} from "@mui/styles"
import Color from "../../Back_office/components/palette/color";

const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:Color.paletteBluedark,
        height:'100vh',
        padding:'50px 20px 50px 40px'
    },
    title:{
        padding:'0px 15%',
        textAlign:'center'
    },
    boxItem:{
        padding:'10px',
        backgroundColor:Color.paletteTeal3,
        boxShadow:`2px 2px 3px ${Color.paletteTeal2}`,
        borderRadius:'3px'
    }
}));

const Section2 = () =>{
    const styles=useStyles()
    return(
        <Box className={styles.root}>
            <Box className={styles.title}>
                <Typography variant="h1" color='#fff' fontWeight='bolder'>
                        RESERVEZ VOS PLACES ICI ET SAVOUREZ VOS MOMENTS
                </Typography>
            </Box>
            <Grid container flexWrap="nowrap" columnGap={2} sx={{paddingLeft:2,paddingTop:'20px'}}>
                <Grid item xs={3} className={styles.boxItem}>
                    <Typography variant='h5' color='#fff' fontWeight='bolder'>Etape 1</Typography>
                    <Typography color='#fff'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Consectetur tortor nunc aliquam consectetur semper augue at.
                    </Typography>
                </Grid>
                <Grid item xs={3}  className={styles.boxItem}>
                    <Typography variant='h5' color='#fff' fontWeight='bolder'>Etape 1</Typography>
                    <Typography color='#fff'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Consectetur tortor nunc aliquam consectetur semper augue at.
                    </Typography>
                </Grid>
                <Grid item xs={3}  className={styles.boxItem}>
                    <Typography variant='h5' color='#fff' fontWeight='bolder'>Etape 1</Typography>
                    <Typography color='#fff'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Consectetur tortor nunc aliquam consectetur semper augue at.
                    </Typography>
                </Grid>
                <Grid item xs={3}  className={styles.boxItem}>
                    <Typography variant='h5' color='#fff' fontWeight='bolder'>Etape 1</Typography>
                    <Typography color='#fff'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Consectetur tortor nunc aliquam consectetur semper augue at.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Section2