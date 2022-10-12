import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: '"Open Sans",  sans-serif',
    heading: '"Source Sans Pro", sans-serif',
  },
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
    }
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      color: 'white',
      backgroundColor: 'blue',
      padding: '11px 20px',
    }
  },
}