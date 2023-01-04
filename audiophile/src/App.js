import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from "./store/user/user.action";

import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import Authentication from "./routes/authentication/authentication.component";
import ShopCategory from "./routes/shop-category/shop-category.component";
import ProductDetailPage from "./components/product-detail-page/product-detail-page.component";
import CheckOut from "./components/checkout/checkout.component";

import './assets/css/main.scss';
import './assets/css/categories.scss';
import './assets/css/product.scss';
import './assets/css/cart.scss';
import './assets/css/sign-in-form.scss';
import './assets/css/checkout.scss';

const App = () => {

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log('user.contenxt UserProvider', user);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<ShopCategory />} />
          <Route path="/product" element={<ProductDetailPage />} />
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
