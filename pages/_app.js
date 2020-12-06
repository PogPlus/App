import { useSession } from 'next-auth/client'
import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'

export default function MyApp({ Component, pageProps }) {
  const [ session, loading ] = useSession()
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="PogPlus is a meme sharing website." />
        <meta name="keywords" content="meme,website,reddit,ifunny,image" />
        <title>PogPlus</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#FCF7F8" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
