import { Routes, Route } from "react-router-dom";
import ShopPage from "../../components/shop-page/shop-page.component";
import CategoryPage from "../category-page/category-page.component";

const ShopCategory = () => {
    return (
        <Routes>
            <Route index element={<ShopPage />} />
            <Route path=":category" element={<CategoryPage />} />
        </Routes>
    );
}
export default ShopCategory;