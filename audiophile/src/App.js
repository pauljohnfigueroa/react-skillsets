import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";

import ProductCategoryPage from "./components/product-category-page/product-category-page.component";

import './assets/css/main.scss';
// import '../../assets/css/categories.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
          <Route path="headphones" element={<ProductCategoryPage categoryTitle="Headphones" />} />
          <Route path="speakers" element={<ProductCategoryPage categoryTitle="Speakers" />} />
          <Route path="earphones" element={<ProductCategoryPage categoryTitle="Earphones" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
