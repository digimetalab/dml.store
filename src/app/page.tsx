import Hero from "@/components/Hero";
import CategoryHighlights from "@/components/CategoryHighlights";
import FeaturedProducts from "@/components/FeaturedProducts";
import PCBuilderCTA from "@/components/PCBuilderCTA";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <CategoryHighlights />
      <FeaturedProducts />
      <PCBuilderCTA />
      <TrustSignals />
      <Testimonials />
    </div>
  );
}
