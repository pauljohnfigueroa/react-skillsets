// Basic template
// import { createContext, useState } from "react";

// import PRODUCTS from '../shop-data.json';

// export const ProductContext = createContext({});

// export const ProductProvider = ({ children }) => {
//     return (<ProductProvider.Provider value={ }>{children}</ProductProvider.Provider>)
// }

import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// import PRODUCTS from '../shop-data.json';
import SHOP_DATA from "../shop-data.js";

// initialize
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

    // We used this to upload data to firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    // console.log(value);
    // {children} pertains to all the 
    // components inside the ProductsProvider (see index.js)}
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}