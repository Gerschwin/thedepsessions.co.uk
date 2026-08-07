import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import App from './App';
import './styles.css';

function Root() {
  const [colorScheme, setColorScheme] = React.useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme }}>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
