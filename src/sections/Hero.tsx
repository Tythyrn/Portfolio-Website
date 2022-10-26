import React from 'react';
import { Box, Button, Link, Text } from 'theme-ui';
import { useTrail, config, a } from 'react-spring';

type TrailProps = {
  children: React.ReactNode[];
}

const Trail = ({children}: TrailProps) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    from: {
      top: '-15%', 
      opacity: 0,
    },
    to: {
      top: '0%',
      opacity: 1
    },
    delay: 300,
    config: config.gentle
  });

  return (
    <Box>
      {trail.map(({...style}, index) => (
        <a.div key={index} style={{...style, position: 'relative'}}>{items[index]}</a.div>
      ))}
    </Box>
  )

}

export const Hero = () => {

  

  return (
    <Box sx={{
      px: ['25px', '50px', '100px', '150px'],
      m: '0 auto',
      maxWidth: '1600px',
    }}>
      <Box sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0 auto',
        maxWidth: '1000px'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}>
          <Trail>
            <Text variant={'hero1'}>Hi! My name is</Text>
            <Text variant={'hero2'}>Kendall Rundquist.</Text>
            <Text variant={'hero3'}>I'm a Front-End Software Engineer.</Text>
            <Box sx={{
              my: '25px',
              maxWidth: '540px',
            }}>
              <Text variant='body'>I'm a software engineer with a passion for the ever-changing landscape that is front-end web development.  Currently, I'm a Software Engineer at General Motors, developing electric vehicle brand sites.</Text>
            </Box>
            <Box>
              <Link href='#projects'><Button variant='outlinePrimary'>View My Work</Button></Link>
            </Box>
          </Trail>
        </Box>
        
      </Box>
    </Box>
  );
}