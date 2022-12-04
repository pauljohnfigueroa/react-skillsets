// Basic template
// import { createContext, useState } from "react";

// import PRODUCTS from '../shop-data.json';

// export const ProductContext = createContext({});

// export const ProductProvider = ({ children }) => {
//     return (<ProductProvider.Provider value={ }>{children}</ProductProvider.Provider>)
// }

import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

// import PRODUCTS from '../shop-data.json';
import SHOP_DATA from "../shop-data.js";

// initialize
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {

    // We used this to upload data to firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const [products, setProducts] = useState([]);
    const value = { products };
    // console.log(value);
    // {children} pertains to all the 
    // components inside the ProductsProvider (see index.js)}
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}