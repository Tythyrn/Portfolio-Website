import type { Theme } from 'theme-ui'

export const theme: Theme = {
  styles: {
    root: {
      bg: 'darkBlue',
      scrollBehavior: 'smooth',
    }
  },
  fonts: {
    body: '"Open Sans",  sans-serif',
    heading: '"Source Sans Pro", sans-serif',
  },
  breakpoints: ['480px', '768px', '1080px', '1400px'],
  colors: {
    main: '#a8b2d1',
    white: '#fff',
    yellow: '#FFFF82',
    darkBlue: '#131B23',
  },
  text: {
    portfolioHeading: {
      fontFamily: 'heading',
      fontSize: '28px',
      color: 'yellow',
    },
    portfolioSubHeading: {
      fontFamily: 'heading',
      fontSize: '16px',
      color: 'white',
    },
    portfolioDescription: {
      fontFamily: 'body',
      fontSize: '14px',
      color: 'main',
    },
    body: {
      fontFamily: 'body',
      color: 'main',
      fontSize: 'clamp(14px, 5vw, 16px)',
      lineHeight: '22px'
    },
    heading: {
      fontFamily: 'heading',
      color: 'main',
      fontSize: ['40px', '50px']
    },
    gridHeading: {
      fontFamily: 'heading',
      color: 'yellow',
      fontSize: '24px',
    },
    gridDescription: {
      fontFamily: 'body',
      color: 'white',
      fontSize: '16px',
      lineHeight: '18px'
    },
    gridTech: {
      fontFamily: 'body',
      color: 'main',
      fontSize: '14px',
    },
    hero1: {
      fontFamily: 'body',
      color: 'yellow',
      fontSize: 'clamp(14px, 6vw, 18px)',
    },
    hero2: {
      fontFamily: 'heading',
      color: 'white',
      fontSize: 'clamp(40px, 8vw, 80px)',
    },
    hero3: {
      fontFamily: 'heading',
      color: 'main',
      fontSize: 'clamp(40px, 8vw, 80px)',
    },
    footer: {
      fontFamily: 'body',
      color: 'main',
      fontSize: '12px'
    }
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      color: 'darkBlue',
      backgroundColor: 'yellow',
      padding: '11px 20px',
    },
    outlinePrimary: {
      fontFamily: 'body',
      color: 'yellow',
      backgroundColor: 'transparent',
      border: '2px solid',
      borderColor: 'yellow',
      padding: '11px 20px',
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        color: 'darkBlue',
        backgroundColor: 'yellow',
      }
    }
  }
}