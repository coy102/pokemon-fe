import { Global } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import CustomHead from '~/components/CustomHead'
import globalCss from '~/styles/global'
import theme from '~/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <CustomHead />
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      <CssBaseline />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
