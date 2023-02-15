import { Html, Head, Main, NextScript } from 'next/document'

import Plumbing from './plumbing'
import Mounting from './mounting'
import Electrical from './electrical'
import Assembly from './assembly'

import Footer from './footer'

export default function Document() {
  return (
    <Html lang="en">

      <Head />

      <body>
        
        <Main />

        <Plumbing/>

        <Electrical/>

        <Assembly/>

        <Mounting/>
        
        <Footer/>

        <NextScript />

      </body>

    </Html>
  )
}
