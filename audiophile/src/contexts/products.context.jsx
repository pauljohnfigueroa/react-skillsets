// import { createContext, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

// import PRODUCTS from "../data/products.data";

// export const ProductsContext = createContext({
//     products: []
// });

// export const ProductsProvider = ({ children }) => {

//     useEffect(() => {
//         addCollectionAndDocuments('categories', PRODUCTS);
//     }, []);

//     const [products] = useState([]);
//     const value = { products }

//     return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
// }
