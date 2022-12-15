import ProductCategoryTitle from "../product-category-title/product-category-title.component";


const ProductCategoryPage = ({ categoryTitle }) => {

    return (
        <>
            <ProductCategoryTitle categoryTitle={categoryTitle} />
        </>
    );
}
export default ProductCategoryPage;
