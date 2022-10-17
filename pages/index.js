import Intro from "../components/SectionsHome/Intro"
import Featured from "../components/SectionsHome/Featured"
import Benefits from "../components/SectionsHome/Benefits"
import Favorites from "../components/SectionsHome/Favorites"
import InteractivePref from "../components/SectionsHome/InteractivePref"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
      <main>
        <Intro/>
        <Featured/>
        <Benefits/>
        <Favorites/> 
        <InteractivePref/>
      </main>
    </>
  )
}

export default Home