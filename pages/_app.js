import '../styles/globals.css'
import '@/configureAmplify'
import Navbar from '@/components/Navbar'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <div className='py-8 px-16 bg-slate-100'>
        <Component {...pageProps} />
      </div>
    </Fragment>
  )
}

export default MyApp
