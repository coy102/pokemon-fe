import { ApolloProvider } from '@apollo/client'
import { Global } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import CustomHead from '~/components/CustomHead'
import globalCss from '~/styles/global'
import theme from '~/styles/theme'
import { useApollo } from '~/utils/apollo/client'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <CustomHead />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalCss} />
          <CssBaseline />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
