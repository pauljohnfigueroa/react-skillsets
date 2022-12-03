// Basic template
// import { createContext, useState } from "react";

// import PRODUCTS from '../shop-data.json';

// export const ProductContext = createContext({});

// export const ProductProvider = ({ children }) => {
//     return (<ProductProvider.Provider value={ }>{children}</ProductProvider.Provider>)
// }

import { createContext, useState } from "react";

import PRODUCTS from '../shop-data.json';

// initialize
export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    //console.log(value);
    // {children here pertains to all the 
    // components inside the ProductsProvider (see index.js)}
    return (<ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>)
}