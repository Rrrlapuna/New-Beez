import React from "react";
import Navbar from "../components/common/navbar";
import ListingsSection from "../main/newlisting";
import FeaturesSection from "../main/page";
import CategoriesCitiesSection from "../main/link";
import CityCarousel from "../components/common/caraousal";
import Footer from "../components/common/footer";
// import FaqSection from "../components/common/faq";
import CardSection from "../main/card";
import InfiniteSlider from "../main/slider";
import FaqSection from "../components/common/faq";
import Footerbar from "../components/common/footerbar";

export default function Demo() {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        <InfiniteSlider />
        <FeaturesSection />
        <CardSection />
        <ListingsSection />
        <FaqSection />
        <CategoriesCitiesSection />
      </div>
      <CityCarousel />
      <Footer />
      <Footerbar/>
    </>
  );
}
