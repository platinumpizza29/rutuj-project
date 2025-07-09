import FaqComp from "./components/faqComp";
import FeaturesComp from "./components/featuresComp";
import Footer from "./components/footerComp";
import NavbarComp from "./components/navbar";
import GalleryComp from "./components/GalleryComp";
import BrandsComp from "./components/BrandsComp";
import TestimonialsComp from "./components/TestimonialsComp";
import TeamAboutComp from "./components/TeamAboutComp";
import HeaderComp from "./components/header";
import PricingComp from "./components/pricingComp";

function App() {
  return (
    <div>
      <NavbarComp />
      <HeaderComp />
      <FeaturesComp />
      <PricingComp />
      <GalleryComp />
      <BrandsComp />
      <TestimonialsComp />
      <TeamAboutComp />
      <FaqComp />
      <Footer />
    </div>
  );
}

export default App;
