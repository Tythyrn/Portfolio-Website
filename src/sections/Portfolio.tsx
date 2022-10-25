import React from 'react';
import { Box, Text } from 'theme-ui';
import {FiChevronDown} from 'react-icons/fi';
import { ProjectGrid } from '../components';

interface PortfolioProps {
  projects: Record<string, any>[];
}

export const Portfolio = ({projects}: PortfolioProps) => {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', py: '70px'}}>
      <Text as={'h1'} variant={'heading'}>PROJECTS</Text>
      <Box sx={{
        '& svg': {
          display: 'block',
          color: '#444',
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