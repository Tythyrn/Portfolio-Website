import { ThemeProvider, Button } from 'theme-ui'
import 'normalize.css';
import { theme } from './theme'
import React, { useState } from 'react';
import { Modal } from './components/Modal';
import projectData from './data/projectData.json'


export const App = () => {
    const [show, setShow] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);

    return (
    <ThemeProvider theme={theme}>
      <Button onClick={() =>{setShow(true); setActiveIdx(1)}}>Open Modal</Button>
      <Modal show={show} onClose={() => setShow(false)} data={projectData[activeIdx]}/>
    </ThemeProvider>
  );
}