import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCategoryTitle from "../../components/shop-page/product-category-title/product-category-title.component";
import ProductCategoryListing from "../../components/shop-page/product-category-listing/product-category-listing.component";
import ProductCategories from "../../components/product-categories/product-categories.component";
import Marketing from "../../components/marketing/marketing.component";
import Footer from "../../components/footer/footer.component";

const CategoryPage = () => {
    const { category } = useParams(); // URL/Route parameter :category, /shop/headphones
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <ProductCategoryTitle category={category} />
            <ProductCategoryListing category={category} products={products} />
            <ProductCategories />
            <Marketing />
            <Footer />
        </>
    );
}
export default CategoryPage;