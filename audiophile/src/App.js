import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import SignInForm from "./components/sign-in-form/sign-in-form.component";
import ShopCategory from "./routes/shop-category/shop-category.component";
//import ProductDetailPage from "./components/product-detail-page/product-detail-page.component";

//import PRODUCTS from "./data/products.data";

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
          <Route path="sign-in" element={<SignInForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
