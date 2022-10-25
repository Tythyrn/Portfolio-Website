import { ThemeProvider } from 'theme-ui';
import React from 'react';
import 'normalize.css';
import { theme } from './theme';
import { Footer, Hero, Portfolio } from './sections'
import projectData from './data/projectData.json'


export const App = () => {
    // const [show, setShow] = useState(false);
    // const [activeIdx, setActiveIdx] = useState(0);

    return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Hero />
        <Portfolio projects={projectData}/>
        <Footer />
      </React.StrictMode>
    </ThemeProvider>
  );
}