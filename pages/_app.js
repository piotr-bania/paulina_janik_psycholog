import '../styles/globals.scss'
import '../styles/sections/header.scss'
import '../styles/sections/animated_background.scss'
import '../styles/sections/hero.scss'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  }

export default MyApp
