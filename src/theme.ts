import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: '"Open Sans",  sans-serif',
    heading: '"Source Sans Pro", sans-serif',
  },
  breakpoints: ['600px'],
  colors: {
    main: '#444',
    accent: '#c0c0c0',
    white: '#fff',
    blue: '#1b73e3',
  },
  text: {
    portfolioHeading: {
      fontFamily: 'heading',
      color: 'main',
    },
    portfolioSubHeading: {
      fontFamily: 'heading',
      color: 'accent',
    },
    portfolioDescription: {
      fontFamily: 'body',
      color: 'main',
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
    hero: {
      fontFamily: 'heading',
      color: 'white',
      fontSize: '20px'
    },
    footer: {
      fontFamily: 'body',
      color: 'accent',
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
      color: 'main',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: 'blue',
      padding: '11px 20px',
      '&:hover': {
        color: 'white',
        backgroundColor: 'blue',
      }
    }
  }
}