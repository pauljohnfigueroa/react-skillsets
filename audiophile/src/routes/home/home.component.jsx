import Hero from "../../components/hero/hero.component";
import ProductCategories from "../../components/product-categories/product-categories.component";
import FeaturedProducts from "../../components/featured-products/featured-products.component";
import Marketing from "../../components/marketing/marketing.component";
import Footer from "../../components/footer/footer.component";

import '../../assets/css/main.scss';

const Home = () => {

    return (
        <>
            <Hero />
            <ProductCategories />
            <FeaturedProducts />
            <Marketing />
            <Footer />
        </>
    );
}
export default Home;
