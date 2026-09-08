import Navbar from "../components/Navbar";
import Noir3DHero from "../components/Noir3DHero";
import Services from "../components/Services";
import WhyNoir from "../components/WhyNoir";
import Barbers from "../components/Barbers";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Noir3DHero />

      <Services />

      <WhyNoir />

      <Barbers />

      <Testimonials />

      <Booking />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;