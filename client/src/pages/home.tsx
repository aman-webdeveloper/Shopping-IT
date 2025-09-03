import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featured-products";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
