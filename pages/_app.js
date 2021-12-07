import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head"
// import "../styles/aboutus.css"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Libraerity</title>
        <link rel="icon" type="image/x-icon" href="/Assets/logo/logo.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/13e8c75d0f.js"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
