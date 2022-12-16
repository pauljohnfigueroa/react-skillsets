import ProductCategoryTitle from "./product-category-title/product-category-title.component";
import ProductCategories from "../product-categories/product-categories.component";

import Marketing from "../marketing/marketing.component";
import Footer from "../footer/footer.component";

const ProductCategoryPage = ({ categoryTitle }) => {

    return (
        <>
            <ProductCategoryTitle categoryTitle={categoryTitle} />
            <ProductCategories />
            <Marketing />
            <Footer />
        </>
    );
}
export default ProductCategoryPage;
