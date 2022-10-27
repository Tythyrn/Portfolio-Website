import { ThemeProvider } from 'theme-ui';
import React from 'react';
import 'normalize.css';
import { theme } from './theme';
import { Footer, Hero, Portfolio, About, Nav } from './sections'
import projectData from './data/projectData.json'


export const App = () => {
    return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Nav />
        <Hero />
        <About />
        <Portfolio projects={projectData}/>
        <Footer />
      </React.StrictMode>
    </ThemeProvider>
  );
}