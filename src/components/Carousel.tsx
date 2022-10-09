import React, {useState} from 'react';
import { Box, Button } from 'theme-ui';

type portFolioDataType = {
  projectName: string;
  subtitleName: string;
  url: string;
  images: string[];
}

interface CarouselItemProps {
  image: string;
  width: string;
}

interface CarouselProps {
  portFolioData: portFolioDataType;
}

const CarouselItem = ({image, width}: CarouselItemProps) => {
  return (
    <Box
      sx={{
        width: width,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: 'green',
        color: '#fff'
      }}
    >
      {image}
    </Box>
  );
};

export const Carousel = ({portFolioData}: CarouselProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = portFolioData.images.length - 1;
    } else if (newIndex >= portFolioData.images.length) {
      newIndex = 0;
    }

    setActiveIdx(newIndex);
  }

  return (
    <Box sx={{overflow: 'hidden'}}>
      <Box sx={{transform: `translateX(-${activeIdx * 100}%)`, whiteSpace: 'nowrap', transition: 'transform 0.3s'}}>
        {portFolioData.images.map((image, index) => {
          return <CarouselItem key ={index} image={image} width={'100%'} />
        })}
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Button sx={{margin: '5px'}} onClick={() => updateIndex(activeIdx - 1)}> Prev</Button>
        <Button sx={{margin: '5px'}} onClick={() => updateIndex(activeIdx + 1)}>Next</Button>
      </Box>
    </Box>
  );
}