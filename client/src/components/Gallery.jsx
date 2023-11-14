import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/2c8/f4b/851/2c8f4b851fecbe4f37db9aaa83c1987f.jpeg'
        },
        {
            alt: 'image2',
            url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/c28/98e/2a4/c2898e2a4d22bb1b0a7af52a7b14cdbf.jpeg'
        },
        {
            alt: "image3",
            url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/5ae/1c8/043/5ae1c8043cdbca5ab64bfd57cddef162.jpeg'
        },
        {
            alt: "image4",
            url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/0ec/56e/cfe/0ec56ecfe6a6871eaf013ff1f1d24d3d.jpeg'
        },
        {
            alt: "image5",
            url: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/312/3e0/fc2/3123e0fc2cb4305add197a45e5eae643.jpeg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'Plans and dimension'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Rooms Gallery
                </Typography>
                <Paragraph text={
                    'We have more 5000 reviews and our\
                    customers trust on our quality product\
                    and trust own our product. If you interested,\
                    contact us.'
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery