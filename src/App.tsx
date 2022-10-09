import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'
import React from 'react';
import { Carousel } from './components/Carousel';

const projectDataTest = {
  projectName: "Test project name",
  subtitleName: "test subtitle name",
  url: "test url",
  images: ["image1", "image2"]
}


export const App = () => {
    return (
    <ThemeProvider theme={theme}>
      <Carousel portFolioData={projectDataTest} />
    </ThemeProvider>
  );
}