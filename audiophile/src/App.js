import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import ProductCategoryPage from "./components/shop-page/shop-page.component";
import ProductDetailPage from "./components/product-detail-page/product-detail-page.component";

//import PRODUCTS from "./data/products.data";

import './assets/css/main.scss';
import './assets/css/categories.scss';
import './assets/css/product.scss';
import './assets/css/cart.scss';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<ProductCategoryPage categoryTitle="Headphones" />} />
          <Route path="product" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
