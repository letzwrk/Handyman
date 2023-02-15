import { Html, Head, Main, NextScript } from 'next/document'
import Footer from './footer'
import Plumbing from './plumbing'

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
