import AboutUs from '@/components/pages/LandingPage/AboutUs'
import ContactUs from '@/components/pages/LandingPage/ContactUs'
import HeroSectionLP from '@/components/pages/LandingPage/HeroSectionLP'
import Algoritma from '@/components/pages/LandingPage/Algoritma'

export default function Home() {
  return (
   <>
    <HeroSectionLP/>
    <Algoritma/>
    <AboutUs/>
    <ContactUs/>
   </>
  )
}
