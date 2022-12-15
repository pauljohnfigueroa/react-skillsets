import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import ProductCategories from "./components/product-categories/product-categories.component";
import FeaturedProducts from "./components/featured-products/featured-products.component";
import Marketing from "./components/marketing/marketing.component";
import Footer from "./components/footer/footer.component";

import './assets/css/main.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Marketing />
      <Footer />
    </>
  );
}
export default App;
