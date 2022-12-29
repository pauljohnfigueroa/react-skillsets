import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import Authentication from "./routes/authentication/authentication.component";
import ShopCategory from "./routes/shop-category/shop-category.component";
import ProductDetailPage from "./components/product-detail-page/product-detail-page.component";

import './assets/css/main.scss';
import './assets/css/categories.scss';
import './assets/css/product.scss';
import './assets/css/cart.scss';
import './assets/css/sign-in-form.scss';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<ShopCategory />} />
          <Route path="product" element={<ProductDetailPage />} />
          <Route path="authenticate" element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
