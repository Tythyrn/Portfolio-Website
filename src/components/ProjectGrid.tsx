import React, { useState } from 'react';
import { Box, Button, Text } from 'theme-ui';
import {Modal} from './Modal';

interface ProjectGridProps {
  projects: Record<string, any>[];
}

export const ProjectGrid = ({projects}: ProjectGridProps) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <Box 
    sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      py: '30px',
      flexWrap: 'wrap',
      maxWidth: '1300px',
    }}>
      {projects.map((project, index) => {
        return (
          <Box sx={{position: 'relative', margin:  '10px'}} key={index}>
            <Box sx={{
              bg: 'yellow',
              position: 'absolute',
              zIndex: 1,
              opacity: 0.05,
              width: [`calc(100vw - 40px)`, '390px'],
              height: '300px'
            }}/>
            <Box sx={{
              position: 'absolute',
              zIndex: 2,
              width: [`calc(100vw - 40px)`, '390px'],
              height: '300px',
            }}>
              <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                m: '20px',
                height: '260px',
              }}>
                <Text sx={{mb: '15px'}} variant={'gridHeading'}>{project.projectName}</Text>
                <Text variant={'gridDescription'}>{project.shortDescription}</Text>
                <Text variant={'gridTech'} sx={{mt: 'auto'}}>{project.technologies}</Text>
                <Button onClick={() => {setActiveIdx(index); setShowModal(true)}} variant={'outlinePrimary'} sx={{
                  width: '170px',
                  cursor: 'pointer',
                  mt: '15px',
                }}>
                  LEARN MORE
                </Button>
              </Box>       
            </Box>
            <Box sx={{
              transition: 'opacity 0.3s',
              filter: 'grayscale(100%)',
              opacity: 0.1,
              background: `url("${process.env.PUBLIC_URL + project.images[0].src}") center center / cover`,
              width: [`calc(100vw - 40px)`, '390px'],
              height: '300px'
            }}/>
          </Box>
        );
      })}
      <Modal show={showModal} onClose={() => setShowModal(false)} data={projects[activeIdx]}/>
    </Box>
  );
}