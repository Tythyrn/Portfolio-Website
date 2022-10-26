import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Box, Image, Text } from 'theme-ui';
import { SiJavascript, SiTypescript, SiReact, SiStrapi, SiGraphql } from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb';

export const About = () => {
  return (
    <Box sx={{
      px: ['25px', '50px', '100px', '150px'],
      m: '0 auto',
      maxWidth: '1600px',
    }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0 auto',
        maxWidth: '900px'
      }}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <Text variant={'heading'}>About Me</Text>
            <Box sx={{
              '& svg': {
                display: 'block',
                color: 'main',
                size: '45px',
                mb: '15px'
              }
            }}>
              <FiChevronDown />
            </Box>
        </Box>
        <Box sx={{
          display: ['block', 'block', 'grid'],
          gridTemplateColumns: '3fr 2fr',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: ['0', '0', '50px', '50px']
          }}>
            <Text variant='body' sx={{mb: '20px'}}>Hello! My name is Kendall Rundquist. I have always had a passion for technology and building things. As a child, I enjoyed building countless LEGO sets and eventually building computers for myself and various friends.</Text>
            <Text variant='body' sx={{mb: '20px'}}>In college, I decided to pursue the business side of Information Technology, graduating with a B.B.A. in Management Information Systems in 2015. It wasn't until 2020 that I decided to pursue a new career as a software engineer.</Text>
            <Text variant='body' sx={{mb: '20px'}}>I started teaching myself programming at night, and applying the skills I was learning to my new position as a software developer during the day. I rediscovered that same enthusiam and passion in developing websites that I would get as a child building LEGO sets and that passion has fueled my career to this day.</Text>
            <Text variant='body' sx={{mb: '20px'}}>Below are some technologies I am currently using:</Text>
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
          </Box>
          <Box sx={{
            position: 'relative',
            width: ['70%', '70%', '100%'],
            maxWidth: '300px',
            m: ['50px auto 0px', '50px auto 0px', '0'],
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                bg: 'yellow',
                mixBlendMode: 'screen',
              }
            }}>
              <Image sx={{
                position: 'relative',
                mixBlendMode: 'multiply',
                width: '100%',
                filter: 'grayscale(100%) contrast(1)',
              }}
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}