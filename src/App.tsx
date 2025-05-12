import Hero from "./components/sections/Hero";
import {Layout} from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";

const App = () => {
  return (
    <Layout title="Landing Page PJ">
      <Hero />
      <Brands />
      <Services />
    </Layout>
  );
};

export default App;
