import React, {useEffect, useState} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import { Box } from 'theme-ui';

interface CarouselItemProps {
  image: Record<string, string>;
  width: string;
}

interface CarouselProps {
  images: Record<string, string>[];
  show: boolean;
}

const CarouselItem = ({image, width}: CarouselItemProps) => {
  return (
    <Box
      sx={{
        background: `url("${image.src}") center center / cover`,
        width: width,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px',
        color: '#fff',
        '@media screen and (min-width: 600px)': {
          height: '450px'
        }
      }}
    >
    </Box>
  );
};

export const Carousel = ({images, show}: CarouselProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    setActiveIdx(0);
  }, [show]);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setActiveIdx(newIndex);
  }

  return (
    <Box sx={{overflow: 'hidden', position: 'relative', background: '#222'}}>
      <Box sx={{transform: `translateX(-${activeIdx * 100}%)`, whiteSpace: 'nowrap', transition: 'transform 0.8s'}}>
        {images.map((image, index) => {
          return <CarouselItem key ={index} image={image} width={'100%'} />
        })}
      </Box>
      <Box sx={{
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        color: 'white', 
        cursor: 'pointer', 
        padding: '10px 15px', 
        background: 'rgba(0, 0, 0, 0.5)', 
        '& svg': { 
          display: 'block',
          fontSize: '14px',
          '@media screen and (min-width: 600px)': {
            fontSize: '25px'
          }
        }
      }} 
        onClick={() => updateIndex(activeIdx - 1)}>
          <FiChevronLeft/>
      </Box>
      <Box sx={{
        position: 'absolute', 
        bottom: 0, 
        right: 0, 
        color: 'white', 
        cursor: 'pointer', 
        padding: '10px 15px', 
        background: 'rgba(0, 0, 0, 0.5)', 
        '& svg': { 
          display: 'block',
          fontSize: '14px',
          '@media screen and (min-width: 600px)': {
            fontSize: '25px'
          }
        }
      }} 
        onClick={() => updateIndex(activeIdx + 1)}>
          <FiChevronRight/>
      </Box>
    </Box>
  );
}