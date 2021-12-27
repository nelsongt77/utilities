import * as React from 'react'
import App from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import '@/styles/global.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
}

export default MyApp
