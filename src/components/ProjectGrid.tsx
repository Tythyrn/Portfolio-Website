import React, { useState } from 'react';
import { Box, Button, Text } from 'theme-ui';
import {Modal} from './Modal';

interface ProjectGridProps {
  projects: Record<string, any>[];
}

export const ProjectGrid = ({projects}: ProjectGridProps) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoverIdx, setHoverIdx] = useState<number | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  // const [scrollbarWidth, setScrollbarWidth] = useState(0);

  // useEffect(() => {
  //   setScrollbarWidth(window.innerWidth - document.body.clientWidth);
  // },[]);

  return (
    <Box 
    sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      py: '30px',
      flexWrap: 'wrap',
      gap: '20px',
      maxWidth: '1300px',
    }}>
      {projects.map((project, index) => {
        return (
          <Box sx={{position: 'relative'}} onMouseEnter={() => setHoverIdx(index)} onMouseLeave={() => setHoverIdx(undefined)} key={index}>
            <Box sx={{
              transition: 'opacity 0.3s',
              background: `url("${process.env.PUBLIC_URL + project.images[0].src}") center center / cover`,
              opacity: hoverIdx === index ? 0 : 1,
              width: [`calc(100vw - 40px)`, '390px'],
              height: '300px'
            }}/>
            <Text variant={'gridHeading'} sx={{
              textAlign: 'center',
              position: 'absolute',
              transition: 'all 0.3s ease-in-out',
              top: hoverIdx === index ? '24%' : 0,
              opacity: hoverIdx === index ? 1 : 0,
              left: 0,
              width: '100%'
            }}>
              {project.projectName}
            </Text>
            <Button onClick={() => {setActiveIdx(index); setShowModal(true)}} variant={'outlinePrimary'} sx={{
              position: 'absolute',
              transition: 'all 0.3s ease-in-out',
              bottom: hoverIdx === index ? '24%' : 0,
              left: 0,
              right: 0,
              opacity: hoverIdx === index ? 1 : 0,
              margin: '0 auto',
              width: '170px',
              cursor: 'pointer',
            }}>
              LEARN MORE
            </Button>
          </Box>
        );
      })}
      <Modal show={showModal} onClose={() => setShowModal(false)} data={projects[activeIdx]}/>
    </Box>
  );
}