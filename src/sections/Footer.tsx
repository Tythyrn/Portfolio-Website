import React, { useState } from 'react';
import { Box, Link, Text } from 'theme-ui';
import { GrLinkedin, GrGithub, GrMail } from 'react-icons/gr';

export const Footer = () => {
  const [year,] = useState(new Date().getFullYear());

  return (
    <Box sx={{
      py: '50px',
      bg: 'darkBlue'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}>
        <Link href='https://www.linkedin.com/in/kendall-rundquist/' target={'_blank'}>
          <Box sx={{
            bg: '#2b3643',
            cursor: 'pointer',
            height: '55px',
            width: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s',
            '&:hover': {
              bg: 'yellow',
              '& svg':{
                color: 'darkBlue',
              }
            },
            '& svg': {
              color: 'white',
              display: 'block',
              width: '24px',
              height: '24px',
              transition: 'all 0.3s',
            }
          }}>
            <GrLinkedin />
          </Box>
        </Link>
        <Link href='https://github.com/Tythyrn' target={'_blank'}>
          <Box sx={{
            bg: '#2b3643',
            cursor: 'pointer',
            height: '55px',
            width: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s',
            '&:hover': {
              bg: 'yellow',
              '& svg':{
                color: 'darkBlue',
              }
            },
            '& svg': {
              color: 'white',
              display: 'block',
              width: '24px',
              height: '24px',
              transition: 'all 0.3s',
            }
          }}>
            <GrGithub />
          </Box>
        </Link>
        <Link href='mailto:kcrundquist@gmail.com?subject=Mail from Kendall Rundquist website'>
          <Box sx={{
            bg: '#2b3643',
            cursor: 'pointer',
            height: '55px',
            width: '55px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s',
            '&:hover': {
              bg: 'yellow',
              '& svg':{
                color: 'darkBlue',
              }
            },
            '& svg': {
              color: 'white',
              display: 'block',
              width: '24px',
              height: '24px',
              transition: 'all 0.3s',
            }
          }}>
            <GrMail />
          </Box>
        </Link>
      </Box>
      <Box sx={{
        textAlign: 'center',
        mt: '30px',
      }}>
        <Text variant='footer'>KENDALL RUNDQUIST </Text>
        <Text variant='footer' sx={{color: 'yellow'}}>&copy;{`${year}`}</Text>
      </Box>
    </Box>
  );
}