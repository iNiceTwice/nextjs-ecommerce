import '../styles/globals.css'
import Nav from "../components/Nav"
import { Provider } from "react-redux"
import { store, persistor } from "../redux/store"
import Footer from '../components/Footer'
import Head from "next/head"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from "framer-motion"
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={ store }>
        <PersistGate persistor={persistor}> 
          <Head>
            <title>Populum</title>
          </Head>
          <Nav/>
          <AnimatePresence>
            <Component {...pageProps} />
            <Footer/>
          </AnimatePresence>  
          <ToastContainer />
        </PersistGate>
      </Provider>
    </>  
  ) 
}

export default MyApp
