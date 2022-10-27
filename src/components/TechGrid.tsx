import React from 'react';
import { Box, Text } from 'theme-ui';
import { SiJavascript, SiTypescript, SiReact, SiStrapi, SiGraphql } from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb';

export const TechGrid = () => {

  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
      gap: '10px',
      mb: '10px',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <SiJavascript />
        <Text variant='gridTech'>JavaScript</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <SiTypescript />
        <Text variant='gridTech'>TypeScript</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <SiReact />
        <Text variant='gridTech'>React</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <TbBrandNextjs />
        <Text variant='gridTech'>NextJS</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <SiStrapi />
        <Text variant='gridTech'>Strapi</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          mr: '8px',
          display: 'block',
          color: 'white'
        }
      }}>
        <SiGraphql />
        <Text variant='gridTech'>GraphQL</Text>
      </Box>
    </Box>
  );
}