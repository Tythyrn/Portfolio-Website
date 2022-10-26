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
    main: '#aaa',
    white: '#fff',
    yellow: '#FFFF82',
    darkBlue: '#131B23',
  },
  text: {
    portfolioHeading: {
      fontFamily: 'heading',
      color: 'white',
    },
    portfolioSubHeading: {
      fontFamily: 'heading',
      fontSize: '16px',
      color: 'main',
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
      color: 'main',
      fontSize: '24px',
      fontWeight: 'bold'
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
      color: 'white',
      backgroundColor: 'blue',
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
      '&:hover': {
        color: 'darkBlue',
        backgroundColor: 'yellow',
      }
    }
  }
}