import React, { useEffect, useState } from 'react';
import { Box, Link, Text } from 'theme-ui';
import { GiHamburgerMenu } from 'react-icons/gi'

export const Nav = () => {
  const [checked, setChecked] = useState(false);

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
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['flex-end', 'flex-end', 'center'],
      borderBottom: '2px solid',
      borderColor: 'darkBlue',
      zIndex: 15,
      pr: '15px',
      transition: 'all 0.3s',
    }}>
      <Box 
        onClick={() => setChecked(!checked)}
        sx={{
          display: ['block', 'block', 'none'],
          color: 'main',
          '& svg': {
            display: 'block',
            size: '36px',
          }
        }}
      >
        <GiHamburgerMenu />
      </Box>
      <Box sx={{
        height: [checked ? '150px' : '0px', checked ? '150px' : '0px', 'initial'],
        display: 'block',
        bg: ['#2b3643', '#2b3643', 'darkBlue'],
        position: ['absolute', 'absolute', 'initial'],
        overflow: 'hidden',
        top: '50px',
        maxWidth: '1200px',
        left: 0,
        width: '100%',
        transition: 'height 0.3s ease-out',
        '& a': {
          padding: '15px 20px 6px 20px',
          display: ['block', 'block', 'inline']
        }
      }}>
        <Link href='#home' sx={{textDecoration: 'none'}}><Text variant='nav' id='homeNav' sx={{color: 'yellow'}}>Home</Text></Link>
        <Link href='#about' sx={{textDecoration: 'none'}}><Text variant='nav' id='aboutNav'>About Me</Text></Link>
        <Link href='#projects' sx={{textDecoration: 'none'}}><Text variant='nav' id='projectsNav'>Projects</Text></Link>
      </Box>
      {/* <Box sx={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        '& a': {
          mx: '20px'
        }
      }}>
        <Link href='#home' sx={{textDecoration: 'none'}}><Text variant='nav' id='homeNav' sx={{color: 'yellow'}}>Home</Text></Link>
        <Link href='#about' sx={{textDecoration: 'none'}}><Text variant='nav' id='aboutNav'>About Me</Text></Link>
        <Link href='#projects' sx={{textDecoration: 'none'}}><Text variant='nav' id='projectsNav'>Projects</Text></Link>
      </Box> */}
    </Box>
  );
}