import '../styles/globals.css'
import Nav from "../components/Nav"
import { Provider } from "react-redux"
import store from "../redux/store"
import Footer from '../components/Footer'
import Head from "next/head"


const fa = {
  cdn:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
  integrity:"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
} 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={ store }>
        <Head>
          <link rel="stylesheet" href={fa.cdn} integrity={fa.integrity} crossorigin="anonymous" referrerpolicy="no-referrer"/>
        </Head>
        <Nav/>  
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </>  
  ) 
}

export default MyApp
