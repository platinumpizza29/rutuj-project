import FeaturesComp from "~/components/features";
import FooterComp from "~/components/footerComp";
import HeroSection from "~/components/heroSection";
import NavbarComp from "~/components/navbarComp";
import PricingComp from "~/components/pricingComp";

export default function HomePage() {
  return (
    <main className="min-h-[100dvh]">
      <NavbarComp />
      <section className="h-screen">
        <HeroSection />
      </section>
      <section>
        <FeaturesComp />
      </section>
      <section className="bg-primary-foreground">
        <PricingComp />
      </section>
      <footer>
        <FooterComp />
      </footer>
    </main>
  );
}
