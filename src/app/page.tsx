import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import SocialMedia from "@/components/SocialMedia";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Barbers />
        <Reviews />
        <Gallery />
        <Locations />
        <SocialMedia />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
