import React, { useEffect, useState } from 'react';
import { Box, Button, Link, Text } from 'theme-ui';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSpring, animated } from 'react-spring';
import Pdf from '../resume/kendall_rundquist_resume.pdf';

const AnimatedBox = animated(Box);

export const Nav = () => {
  const [checked, setChecked] = useState(false);
  const fadeIn = useSpring({from: {opacity: 0}, to: {opacity: 1}, delay: 1000});

  useEffect(() => {
    const nav = document.getElementById('nav') as HTMLElement;
    const homeNav = document.getElementById('homeNav') as HTMLElement;
    const about = document.getElementById('about') as HTMLElement;
    const aboutNav = document.getElementById('aboutNav') as HTMLElement;
    const projects = document.getElementById('projects') as HTMLElement;
    const projectsNav = document.getElementById('projectsNav') as HTMLElement;
   

    window.addEventListener('scroll', (e) => {
      if(window.scrollY >= 100) nav.style.borderColor = '#FFFF82';
      else nav.style.borderColor = '#131B23';

      if(about.getBoundingClientRect().top > 0) homeNav.style.color = '#FFFF82'
      else homeNav.style.color = 'white';

      if(about.getBoundingClientRect().top <= 0 && projects.getBoundingClientRect().top > 1) aboutNav.style.color = '#FFFF82'
      else aboutNav.style.color = 'white';
      
      if(projects.getBoundingClientRect().top <= 1) projectsNav.style.color = '#FFFF82'
      else projectsNav.style.color = 'white';
    })
  }, []);

  return (
    <Box id='nav' sx={{
      position: 'fixed',
      bg: 'darkBlue',
      width: '100%',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-end', 'flex-end', 'center'],
      borderBottom: '2px solid',
      borderColor: 'darkBlue',
      zIndex: 15,
      pr: '15px',
      transition: 'all 0.3s',
    }}>
      <AnimatedBox 
        onClick={() => setChecked(!checked)}
        style={fadeIn}
        sx={{
          opacity: 0,
          cursor: 'pointer',
          display: ['block', 'block', 'none'],
          color: 'main',
          '& svg': {
            display: 'block',
            size: '36px',
          }
        }}
      >
        <GiHamburgerMenu />
      </AnimatedBox>
      <Box sx={{
        height: [checked ? '210px' : '0px', checked ? '210px' : '0px', 'initial'],
        display: ['block', 'block', 'flex'],
        bg: ['#2b3643', '#2b3643', 'darkBlue'],
        position: ['absolute', 'absolute', 'initial'],
        overflow: 'hidden',
        top: '70px',
        maxWidth: '1200px',
        left: 0,
        width: '100%',
        transition: 'height 0.3s ease-out',
        '& a': {
          padding: ['15px 20px 6px 20px', '15px 20px 6px 20px', '0 20px 0 20px'],
          display: ['block', 'block', 'inline'],
          alignSelf: 'center'
        }
      }}>
        <Link href='#home' sx={{textDecoration: 'none'}} onClick={() => setChecked(false)}><Text variant='nav' id='homeNav' sx={{color: 'yellow'}}>Home</Text></Link>
        <Link href='#about' sx={{textDecoration: 'none'}} onClick={() => setChecked(false)}><Text variant='nav' id='aboutNav'>About Me</Text></Link>
        <Link href='#projects' sx={{textDecoration: 'none'}} onClick={() => setChecked(false)}><Text variant='nav' id='projectsNav'>Projects</Text></Link>
        <Link sx={{ml: 'auto'}} href={Pdf} target='_blank' onClick={() => setChecked(false)}><Button variant='outlinePrimary'>Resume</Button></Link>
      </Box>
    </Box>
  );
}