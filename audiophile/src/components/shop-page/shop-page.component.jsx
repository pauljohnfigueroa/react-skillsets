import ProductCategoryTitle from "./product-category-title/product-category-title.component";
import ProductCategoryListing from "./product-category-listing/product-category-listing.component";
import ProductCategories from "../product-categories/product-categories.component";
import Marketing from "../marketing/marketing.component";
import Footer from "../footer/footer.component";


const ProductCategoryPage = ({ categoryTitle, products }) => {

    return (
        <>
            <ProductCategoryTitle categoryTitle={categoryTitle} />
            <ProductCategoryListing products={products} />
            <ProductCategories />
            <Marketing />
            <Footer />
        </>
    );
}
export default ProductCategoryPage;
