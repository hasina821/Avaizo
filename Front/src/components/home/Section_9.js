import React from "react"
import {Box,Grid, Typography,Avatar,Stack} from "@mui/material"
import Slider from "react-slick";
import {styled} from "@mui/styles"
import Color from "../../Back_office/components/palette/color";

const StyledBox = styled(Box)({
    backgroundColor:Color.paletteBluedark,
    borderRadius:'50px 50px',
    color:'#fff',
    width:'100%',
    textAlign:'center',
    fontStyle:'italic'
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



const Section_9 = ()=>{
    const settings = {
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
            <StyledBox>
                <Slider {...settings}>
                {Opinion.map(op=>(
                    <Box>
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
                    </Box>
                ))}
                </Slider>
            </StyledBox>
        </>
    )
}

export default Section_9;