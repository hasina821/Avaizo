import React from "react"
import {Box,Grid,Typography,Divider,Avatar,Stack} from "@mui/material"
import {makeStyles} from "@mui/styles"
import Color from "../../Back_office/components/palette/color"
import Slider from "react-slick";
import {styled} from "@mui/styles"

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:Color.paletteBluedark,
        color:'#fff',
        textAlign:'center',
        padding:'50px 20px 50px 40px',
    },
    slide:{
        display:'flex',
        justifyContent:'center',
        width:'100%'
    }
}))
const StyledBox = styled(Box)({
    backgroundColor:Color.paletteBluedark,
    borderRadius :'50px 15px',
    color:'#fff',
    width:'80%',
    textAlign:'center',
    fontStyle:'italic'
})

const StyledCard = styled(Box)({
    textAlign:'center',
    backgroundColor:Color.paletteTeal4,
    borderRadius :'50px 15px',

})

const StyledPara=styled(Typography)({
    padding:'10px 20px 10px 20px'
})

const Opinion=[
    {
        auteur:'Marihasina',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/80751503?s=400&u=6a0d04a90a1089e5ad180560b65371d56c0a20a8&v=4'
    },
    {
        auteur:'Manohisafidy',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/93115585?v=4'
    },
    {
        auteur:'Aina',
        descri:"Lorem ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at lorem  ipsum dolor sit amet consectetur adipiscing elit Consectetur tortor nunc aliquam consectetur semper augue at met consectetur ",
        pdp:'https://avatars.githubusercontent.com/u/82655694?v=4'
    }
]

const Section4= ()=>{
    const classes = useStyles()
    const settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <Box className={classes.root}>
            <Typography variant='h3' sx={{fontWeight:'bold',padding:'0 15%'}}>
                Nos clients sont toujours satisfaits de nos oeuvres et de nos services 
            </Typography>
            <Box padding="100px">
                <Typography variant='p' color='#95a5a6' sx={{fontWeight:'bold',padding:'100px 15%'}}>
                    Plus de 150 diffusion ces dernieres années Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Consectetur tortor nunc aliquam consectetur semper augue at.
                </Typography>
            </Box>
            <Box className={classes.slide}>
                <StyledBox>
                <Slider {...settings}>
                {Opinion.map(op=>(
                    <StyledCard>
                        <StyledPara>
                            {op.descri}
                        </StyledPara>
                        <Grid container>
                            <Grid xs={9} lg={9}>

                            </Grid>
                            <Grid xs={3} lg={3}>
                            <Stack 
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-end"
                                spacing={2}>
                                <Avatar
                                    alt={op.auteur}
                                    src={op.pdp}
                                    sx={{ width: 56, height: 56 }}
                                    />
                                <Typography variant='h6' sx={{fontWeight:'bold'}}>
                                    {op.auteur}
                                </Typography>
                            </Stack>
                            </Grid>
                        </Grid>
                    </StyledCard>
                ))}
                </Slider>
            </StyledBox>
            </Box>
        </Box>
    )
}

export default Section4;