import Hero from "./components/sections/Hero";
import {Layout} from "./components/Layout";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CTA } from "./components/sections/CallToAction";

const App = () => {
  return (
    <Layout title="heyQ - Voice-Powered Productivity">
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
};

export default App;
