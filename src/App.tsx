import Hero from "./components/sections/Hero";
import {Layout} from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";

const App = () => {
  return (
    <Layout title="Landing Page PJ">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
};

export default App;
