import FeaturesComp from "~/components/features";
import FooterComp from "~/components/footerComp";
import HeroSection from "~/components/heroSection";
import MansorySectionComp from "~/components/masoryComp";
import NavbarComp from "~/components/navbarComp";
import PricingComp from "~/components/pricingComp";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh]">
      <NavbarComp />
      <section className="">
        <HeroSection />
      </section>
      <section className="mt-20">
        <FeaturesComp />
      </section>
      <section>
        <MansorySectionComp />
      </section>
      <section className="">
        <PricingComp />
      </section>
      <footer>
        <FooterComp />
      </footer>
    </main>
  );
}
