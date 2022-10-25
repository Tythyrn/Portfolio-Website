import React from 'react';
import { Box, Text } from 'theme-ui';

export const Hero = () => {

  return (
    <Box sx={{
      height: '100vh',
      width: '100%',
      bg: 'gray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Text variant={'hero'}>Hi! I'm Kendall Rundquist.</Text>
        <Text variant={'hero'}>I'm a front-end software developer.</Text>
      </Box>
    </Box>
  );
}