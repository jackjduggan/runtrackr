import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

// const theme = createTheme({
//   breakpoints: {
//     xs: '30em',
//     sm: '48em',
//     md: '64em',
//     lg: '74em',
//     xl: '90em',
//   },
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider 
    defaultColorScheme='dark'
    // theme={theme}
    >
      <App />
    </MantineProvider>
  </StrictMode>,
)
