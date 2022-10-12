import Head from "next/head"
import Intro from "../components/SectionsHome/Intro"
import Featured from "../components/SectionsHome/Featured"
import Benefits from "../components/SectionsHome/Benefits"
import Favorites from "../components/SectionsHome/Favorites"

const fa = {
  cdn:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
  integrity:"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
} 

const Home = () => {
  return (
    <>
      <div>
        <Head>
          <link rel="stylesheet" href={fa.cdn} integrity={fa.integrity} crossorigin="anonymous" referrerpolicy="no-referrer"/>
        </Head>
        <Intro/>
        <Featured/>
        <Benefits/>
        <Favorites/> 
      </div>
    </>
  )
}

export default Home