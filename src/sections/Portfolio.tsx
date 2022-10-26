import React from 'react';
import { Box, Text } from 'theme-ui';
import {FiChevronDown} from 'react-icons/fi';
import { ProjectGrid } from '../components';

interface PortfolioProps {
  projects: Record<string, any>[];
}

export const Portfolio = ({projects}: PortfolioProps) => {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '70px'}} id='projects'>
      <Text variant={'heading'}>PROJECTS</Text>
      <Box sx={{
        '& svg': {
          display: 'block',
          color: 'main',
          size: '45px',
          mb: '25px'
        }
      }}>
        <FiChevronDown />
      </Box>
      <ProjectGrid projects={projects} />
    </Box>
  );
}