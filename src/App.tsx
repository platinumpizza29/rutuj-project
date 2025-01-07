import FaqComp from "./components/faqComp";
import FeaturesComp from "./components/featuresComp";
import Footer from "./components/footerComp";
import HeaderComp from "./components/header";
import NavbarComp from "./components/navbar";
import PricingComp from "./components/pricingComp";

function App() {
  return (
    <div>
      <NavbarComp />
      <HeaderComp />
      <FeaturesComp />
      <FaqComp />
      <PricingComp />
      <Footer />
    </div>
  );
}

export default App;
