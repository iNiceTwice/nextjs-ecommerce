import Intro from "../components/Intro"
import Featured from "../components/SectionsHome/Featured"
import Benefits from "../components/Benefits"
import Favorites from "../components/SectionsHome/Favorites"
import InteractivePref from "../components/SectionsHome/InteractivePref"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

const Home = () => {

  const pageTransition = {
    in:{
      opacity:1
    },
    out:{
      opacity:0
    }
  }

  return (
    <>  
      <main>
        <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
          <Intro 
            title="Clean & Premium CBD" 
            img="https://cdn.shopify.com/s/files/1/1737/2201/files/populum-orange_1400x.webp?v=1662465868"
            buttonText="SHOP CBD"
            buttonColor="primary"
            buttonUrl="/shop/all"
            bgColor="bg-sky-50"
            text="We're on a mission to create high-quality, ethical, and honest CBD. Try us risk-free today."
          />
          <Featured/>
          <Benefits 
            title="Our CBD is award-winning and triple-tested for quality. Try for 30 days & love it or send it back—no questions asked." benefits={ benefitsItems } 
          />
          <div className="flex gap-4 mt-10 flex-col lg:flex-row w-11/12 md:max-w-xl mx-auto">
            <button 
              className="transition-colors w-full py-4 font-medium bg-slate-800 hover:bg-orange-500 text-white/90"
            >
              SHOP CBD BESTSELLERS
            </button>
            <button 
              className="transition-colors w-full py-4 hover:bg-slate-800 border border-black text-black/90 hover:text-white"
            >
              READ  REVIEWS
            </button>
          </div>
          <Favorites/> 
          <InteractivePref/>
        </motion.div>
      </main>
    </>
  )
}

const benefitsItems = [
    {
        text:"Made in the USA",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/flag_small.png?v=1613531243"
    },
    {
        text:"Full-Spectrum Extracts",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/lightning_small.png?v=1613531242"
    },
    {
        text:"30-Day Risk-Free Trial",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/thirty_small.png?v=1613531242"
    },
    {
        text:"Science Driven",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/medal_small.png?v=1613531242"
    },
    {
        text:"Triple-Tested",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/beaker_small.png?v=1613531242"
    },
    {
        text:"Vegan & Non-GMO",
        img:"https://cdn.shopify.com/s/files/1/1737/2201/files/leaf_small.png?v=1613531242"
    },
]

export default Home