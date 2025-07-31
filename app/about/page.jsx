import React from 'react'
import Navbar from '../components/common/navbar'
import Footer from '../components/common/footer'
import AboutUsSection from '../components/about/aboutus'
import Aboutcard from '../components/about/aboutcard'
import PostAdSection from '../components/about/ads'
import ChooseUs from '../components/about/choose'
import CounterSection from '../components/about/banner'
import Subscribe from '../components/about/subscribe'
import CityCarousel from '../components/common/caraousal'
import AdSlider from '../components/common/offer'
import Footerbar from '../components/common/footerbar'

export default function 
() {
  return (
    <div>
        <Navbar/>
        <AboutUsSection/>
        <Aboutcard/>
        <PostAdSection/>
        <ChooseUs/>
        <CounterSection/>
        <Subscribe/>
        <CityCarousel/>
        <AdSlider/>
        <Footerbar/>
        <Footer/>
    </div>
  )
}
