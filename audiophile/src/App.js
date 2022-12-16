import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import ProductCategoryPage from "./components/product-category-page/product-category-page.component";
import ProductDetailPage from "./components/product-detail-page/product-detail-page.component";

import products from "./data/products.data";

import './assets/css/main.scss';
import './assets/css/categories.scss';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="headphones" element={<ProductCategoryPage categoryTitle="Headphones" products={products.headphones} />} />
          <Route path="speakers" element={<ProductCategoryPage categoryTitle="Speakers" products={products.speakers} />} />
          <Route path="earphones" element={<ProductCategoryPage categoryTitle="Earphones" products={products.earphones} />} />
          <Route path="product" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
