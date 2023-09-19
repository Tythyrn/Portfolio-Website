import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Box, Image, Text } from 'theme-ui';
import { TechGrid } from 'src/components';

export const About = () => {
  return (
    <Box id='about' sx={{
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
          display: ['block', 'block', 'block', 'grid'],
          gridTemplateColumns: '3fr 2fr',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mr: ['0', '0', '50px', '50px']
          }}>
            <Text variant='body' sx={{mb: '20px'}}>Technology and craftsmanship have always fascinated me. As a child, I enjoyed building countless LEGO sets and when I was old enough I began building computers for myself and friends. This started me on my journey of bridging my two interests: tech and constructing things with my hands.</Text>
            <Text variant='body' sx={{mb: '20px'}}>In college, I decided to pursue the business side of Information Technology, graduating with a B.B.A. in Management Information Systems in 2015. It wasn't until 2020 that I decided to return to my favorite childhood subjects and pursue a new career as a software engineer.</Text>
            <Text variant='body' sx={{mb: '20px'}}>By teaching myself programming at night and applying the skills I was learning to my new position as a software developer during the day, I rediscovered that same drive and enthusiasm in developing websites that I felt as a child building LEGO sets. That drive has fueled my career to this day. Currently, I am looking for my next opportunity!</Text>
            <Text variant='body' sx={{mb: '20px'}}>I live in Round Rock, TX with my wife and corgi. When I am not developing software, you can usually find me spending time with my family, playing the piano, podcasting with my wife, cooking, or hosting a weekly game night with friends.</Text>
            <Text variant='body' sx={{mb: '20px'}}>Below are some technologies I am currently using:</Text>
            <TechGrid />
          </Box>
          <Box sx={{
            position: 'relative',
            width: ['70%', '70%', '70%', '100%'],
            maxWidth: '300px',
            m: ['50px auto 0px', '50px auto 0px', '50px auto 0px', '0'],
          }}>
            <Box sx={{
              position: 'relative',
              width: '100%',
            }}>
              <Image sx={{
                position: 'relative',
                width: '100%',
                filter: 'grayscale(100%)',
              }}
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt='Kendall Runqduist Profile Picture'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}