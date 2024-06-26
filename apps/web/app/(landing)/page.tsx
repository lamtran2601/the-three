import { About } from "./_components/About";
import { Cta } from "./_components/Cta";
import { FAQ } from "./_components/FAQ";
import { Features } from "./_components/Features";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { HowItWorks } from "./_components/HowItWorks";
import { Navbar } from "./_components/Navbar";
import { Newsletter } from "./_components/Newsletter";
import { Pricing } from "./_components/Pricing";
import { ScrollToTop } from "./_components/ScrollToTop";
import { Services } from "./_components/Services";
import { Sponsors } from "./_components/Sponsors";
import { Team } from "./_components/Team";
import { Testimonials } from "./_components/Testimonials";
import "./styles.css";

function App() {
  return (
    <>
      <>
        <Navbar />
        <Hero />
        <Sponsors />
        <About />
        <HowItWorks />
        <Features />
        <Services />
        <Cta />
        <Testimonials />
        <Team />
        <Pricing />
        <Newsletter />
        <FAQ />
        <Footer />
        <ScrollToTop />
      </>
    </>
  );
}

export default App;
