import { ThemeProvider } from 'theme-ui'
import { Box, Text } from 'theme-ui';
import { theme } from './theme'
import React from 'react';

export const App = () => {
    return (
    <ThemeProvider theme={theme}>
      <Box>
        <header>
          <Text>
            Edit and save to reload.
          </Text>
        </header>
      </Box>
    </ThemeProvider>
  );
}