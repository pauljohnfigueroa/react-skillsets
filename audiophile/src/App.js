import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import ProductCategoryPage from "./components/product-category-page/product-category-page.component";

import './assets/css/main.scss';
// import '../../assets/css/categories.scss';

const App = () => {

  const products = {
    headphones: [
      {
        id: 1,
        name: 'XX99 Mark 2 Headphones',
        price: 1214
      },
      {
        id: 2,
        name: 'XX99 Mark 1 Headphones',
        price: 1021
      },
      {
        id: 3,
        name: 'XX59 Headphones',
        price: 1987
      }
    ],

    speakers: [
      {
        id: 1,
        name: 'ZX7 Speaker',
        price: 2267
      }
    ],
    earphones: [
      {
        id: 1,
        name: 'X23 Earphones',
        price: 345
      }
    ]
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="headphones" element={<ProductCategoryPage categoryTitle="Headphones" products={products.headphones} />} />
          <Route path="speakers" element={<ProductCategoryPage categoryTitle="Speakers" products={products.speakers} />} />
          <Route path="earphones" element={<ProductCategoryPage categoryTitle="Earphones" products={products.earphones} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
